export interface PdfConversionResult {
    imageUrl: string;
    file: File | null;
    error?: string;
}

let pdfjsLib: any = null;
let isLoading = false;
let loadPromise: Promise<any> | null = null;

async function loadPdfJs(): Promise<any> {
    if (pdfjsLib) return pdfjsLib;
    if (loadPromise) return loadPromise;

    isLoading = true;
    // @ts-expect-error - pdfjs-dist/build/pdf.mjs is not a module
    loadPromise = import("pdfjs-dist/build/pdf.mjs").then((lib) => {
     lib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.149/pdf.worker.mjs'; // use the latest worker.mjs
        pdfjsLib = lib;
        isLoading = false;
        return lib;
    });

    return loadPromise;
}



export async function convertPdfToImage(
    file: File
): Promise<PdfConversionResult> {
    try {

        console.log('Loading PDF.js library...');
        const lib = await loadPdfJs();
        

        console.log('Reading file as ArrayBuffer...');
        const arrayBuffer = await file.arrayBuffer();
    

        console.log('Loading PDF document...');
        const pdf = await lib.getDocument({ data: arrayBuffer }).promise;


        console.log('PDF document loaded, getting first page...');
        const page = await pdf.getPage(1);
        console.log('First page loaded, rendering at high resolution...');

        const viewport = page.getViewport({ scale: 4 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        if (context) {
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";
        }

        await page.render({ canvasContext: context!, viewport }).promise;

        return new Promise((resolve) => {
            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        // Create a File from the blob with the same name as the pdf
                        const originalName = file.name.replace(/\.pdf$/i, "");
                        const imageFile = new File([blob], `${originalName}.png`, {
                            type: "image/png",
                        });

                        resolve({
                            imageUrl: URL.createObjectURL(blob),
                            file: imageFile,
                        });
                    } else {
                        resolve({
                            imageUrl: "",
                            file: null,
                            error: "Failed to create image blob",
                        });
                    }
                },
                "image/png",
                1.0
            ); // Set quality to maximum (1.0)
        });
    } catch (err) {

        // More specific error messages
        let errorMessage = `Failed to convert PDF: ${err}`;

        if (err instanceof Error) {
            if (err.message.includes('Invalid PDF')) {
                errorMessage = 'The file is not a valid PDF or may be corrupted';
            } else if (err.message.includes('password')) {
                errorMessage = 'PDF is password-protected';
            } else if (err.message.includes('Worker')) {
                errorMessage = 'PDF.js worker failed to load';
            }
        }



        return {
            imageUrl: "",
            file: null,
            error: `Failed to convert PDF: ${err}`,
        };
    }
}


//     try {
//         console.log('Testing PDF.js functionality...');
        
//         const lib = await loadPdfJs();
//         console.log('✅ PDF.js loaded');

//         // Try alternative PDF URLs
//         const pdfUrls = [
//             'https://assets.foleon.com/eq/artifacts/samples/sample.pdf',
//             'https://www.africau.edu/images/default/sample.pdf',
//             'https://www.clickdimensions.com/links/TestPDFfile.pdf'
//         ];

//         let success = false;
        
//         for (const url of pdfUrls) {
            
//                 console.log(`Trying PDF from: ${url}`);
//                 const response = await fetch(url);
//                 if (!response.ok) continue;
                
//                 const pdfBlob = await response.blob();
//                 const testFile = new File([pdfBlob], 'test.pdf', { type: 'application/pdf' });
//                 const arrayBuffer = await testFile.arrayBuffer();
                
//                 console.log('Testing getDocument...');
//                 const pdf = await lib.getDocument({ data: arrayBuffer }).promise;
//                 console.log('✅ getDocument works! Pages:', pdf.numPages);
//                 success = true;
//                 break;
                
           
//         }
        
//         return success;
//     } catch (error) {
//         console.error('❌ Overall test failed:', error);
//         return false;
//     }
// }

// testPdfJsFunctionality();



// async function quickDiagnostic() {
//     console.log('=== Starting Diagnostic ===');
    
//     try {
//         console.log('1. Importing PDF.js...');
//         const lib = await loadPdfJs();
//         // const arrayBuffer = await file.arrayBuffer();
//         console.log('✅ Import successful');
        
//         console.log('2. Setting worker...');
//         lib.GlobalWorkerOptions.workerSrc = 
//         'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.4.149/pdf.worker.mjs';
//         console.log('✅ Worker set');
        
//         console.log('3. Testing empty getDocument...');
//         // This should at least create a loading task, even if it fails
//         const loadingTask = lib.getDocument({ data: new ArrayBuffer(0) });
//         console.log('✅ Loading task created');
        
//         return true;
//     } catch (error) {
//         console.error('❌ Diagnostic failed at step:', error);
//         return false;
//     }
// }

// quickDiagnostic();