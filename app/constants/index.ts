export const resumes: Resume[] = [
    {
      id: "1",
      companyName: "Google",
      jobTitle: "Frontend Developer",
      imagePath: "/images/resume-1.png",
      resumePath: "/resumes/resume-1.pdf",
      feedback: {
        overallScore: 85,
        ATS: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Excellent customer service skills - always friendly and attentive"
            }
          ],
        },
        toneAndStyle: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Always greet customers with a smile",
              explanation: "A friendly greeting creates a positive first impression and makes customers feel welcome."
            }
          ],
        },
        content: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Always greet customers with a smile",
              explanation: "A friendly greeting creates a positive first impression and makes customers feel welcome."
            }
          ],
        },
        structure: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Always greet customers with a smile",
              explanation: "A friendly greeting creates a positive first impression and makes customers feel welcome."
            }
          ],
        },
        skills: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Always greet customers with a smile",
              explanation: "A friendly greeting creates a positive first impression and makes customers feel welcome."
            }
          ],
        },
      },
    },
    {
      id: "2",
      companyName: "Microsoft",
      jobTitle: "Cloud Engineer",
      imagePath: "/images/resume-2.png",
      resumePath: "/resumes/resume-2.pdf",
      feedback: {
        overallScore: 55,
        ATS: {
          score: 90,
          tips: [],
        },
        toneAndStyle: {
          score: 90,
          tips: [],
        },
        content: {
          score: 90,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "3",
      companyName: "Apple",
      jobTitle: "iOS Developer",
      imagePath: "/images/resume-3.png",
      resumePath: "/resumes/resume-3.pdf",
      feedback: {
        overallScore: 75,
        ATS: {
          score: 90,
          tips: [],
        },
        toneAndStyle: {
          score: 90,
          tips: [],
        },
        content: {
          score: 90,
          tips: [],
        },
        structure: {
          score: 90,
          tips: [],
        },
        skills: {
          score: 90,
          tips: [],
        },
      },
    },
    {
      id: "4",
      companyName: "Microsoft",
      jobTitle: "Software Engineer",
      imagePath: "/images/resume-2.png",
      resumePath: "/resumes/resume-2.pdf",
      feedback: {
        overallScore: 78,
        ATS: {
          score: 82,
          tips: [
            {
              type: "improve",
              tip: "Consider using more industry-standard keywords",
            }
          ],
        },
        toneAndStyle: {
          score: 85,
          tips: [
            {
              type: "good",
              tip: "Professional tone maintained throughout",
              explanation: "The resume demonstrates appropriate formality and clarity in communication."
            }
          ],
        },
        content: {
          score: 75,
          tips: [
            {
              type: "improve",
              tip: "Add more quantifiable achievements",
              explanation: "Include specific metrics and numbers to demonstrate the impact of your work and contributions."
            }
          ],
        },
        structure: {
          score: 88,
          tips: [
            {
              type: "good",
              tip: "Clear section organization and hierarchy",
              explanation: "Well-structured layout makes it easy for recruiters to quickly find relevant information."
            }
          ],
        },
        skills: {
          score: 70,
          tips: [
            {
              type: "improve",
              tip: "Expand technical skills section with relevant frameworks",
              explanation: "Include more specific technologies and tools commonly used in software engineering roles."
            }
          ],
        },
      },
    },
    {
      id: "5",
      companyName: "Amazon",
      jobTitle: "Product Manager",
      imagePath: "/images/resume-2.png",
      resumePath: "/resumes/resume-2.pdf",
      feedback: {
        overallScore: 92,
        ATS: {
          score: 95,
          tips: [
            {
              type: "good",
              tip: "Excellent keyword optimization for product management roles",
            }
          ],
        },
        toneAndStyle: {
          score: 88,
          tips: [
            {
              type: "good",
              tip: "Strong leadership voice and strategic thinking demonstrated",
              explanation: "Language effectively conveys product management competencies and executive presence."
            }
          ],
        },
        content: {
          score: 94,
          tips: [
            {
              type: "good",
              tip: "Outstanding use of metrics and business impact statements",
              explanation: "Each role clearly demonstrates quantifiable results and business value delivered."
            }
          ],
        },
        structure: {
          score: 90,
          tips: [
            {
              type: "good",
              tip: "Logical flow from experience to skills to education",
              explanation: "Resume structure prioritizes most relevant information and guides reader attention effectively."
            }
          ],
        },
        skills: {
          score: 92,
          tips: [
            {
              type: "good",
              tip: "Comprehensive blend of technical and soft skills",
              explanation: "Skills section effectively balances product management tools, analytics, and leadership capabilities."
            }
          ],
        },
      },
    },
    {
      id: "6",
      companyName: "Netflix",
      jobTitle: "Data Scientist",
      imagePath: "/images/resume-2.png",
      resumePath: "/resumes/resume-2.pdf",
      feedback: {
        overallScore: 73,
        ATS: {
          score: 80,
          tips: [
            {
              type: "good",
              tip: "Include more data science and machine learning keywords"
            }
          ],
        },
        toneAndStyle: {
          score: 82,
          tips: [
            {
              type: "good",
              tip: "Analytical and detail-oriented tone appropriate for data roles",
              explanation: "Writing style effectively communicates precision and technical competency expected in data science."
            }
          ],
        },
        content: {
          score: 68,
          tips: [
            {
              type: "improve",
              tip: "Add more specific project outcomes and model performance metrics",
              explanation: "Include accuracy scores, performance improvements, and business impact of your data science projects."
            }
          ],
        },
        structure: {
          score: 75,
          tips: [
            {
              type: "improve",
              tip: "Consider adding a dedicated 'Projects' section",
              explanation: "Data science roles benefit from showcasing specific projects with methodologies and results."
            }
          ],
        },
        skills: {
          score: 85,
          tips: [
            {
              type: "good",
              tip: "Strong technical skills coverage including Python, R, and SQL",
              explanation: "Core data science programming languages and tools are well represented in the skills section."
            }
          ],
        },
      },
    }
  ];
  
  export const AIResponseFormat = `
        interface Feedback {
        overallScore: number; //max 100
        ATS: {
          score: number; //rate based on ATS suitability
          tips: {
            type: "good" | "improve";
            tip: string; //give 3-4 tips
          }[];
        };
        toneAndStyle: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        content: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        structure: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
        skills: {
          score: number; //max 100
          tips: {
            type: "good" | "improve";
            tip: string; //make it a short "title" for the actual explanation
            explanation: string; //explain in detail here
          }[]; //give 3-4 tips
        };
      }`;
  
  export const prepareInstructions = ({
    jobTitle,
    jobDescription,
    AIResponseFormat,
  }: {
    jobTitle: string;
    jobDescription: string;
    AIResponseFormat:string ;
  }) =>
    `You are an expert in ATS (Applicant Tracking System) and resume analysis.
    Please analyze and rate this resume and suggest how to improve it.
    The rating can be low if the resume is bad.
    Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
    If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
    If available, use the job description for the job user is applying to to give more detailed feedback.
    If provided, take the job description into consideration.
    The job title is: ${jobTitle}
    The job description is: ${jobDescription}
    Provide the feedback using the following format: ${AIResponseFormat}
    Return the analysis as a JSON object, without any other text and without the backticks.
    Do not include any other text or comments.`;