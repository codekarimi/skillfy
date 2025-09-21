import React from 'react'
import { Link } from 'react-router'
import ATS from '~/components/ATS';
import Details from '~/components/Details';
import Summary from '~/components/Summary';
import { resumes } from '~/constants'

const resume = () => {

    const Resume = resumes;
  return (
    <main className="!pt-0">

        <nav className="resume-nav">
                <Link to="/" className="back-button">
                    <img src="/icons/back.svg" alt="logo" className="w-2.5 h-2.5" />
                    <span className="text-gray-800 text-sm font-semibold">Back to Homepage</span>
                </Link>
            </nav>
            {resumes.map((resume) => (
            <div className="flex flex-row w-full max-lg:flex-col-reverse">
            
                <section className="feedback-section bg-[url('/images/bg-small.svg') bg-cover h-[100vh] sticky top-0 items-center justify-center">
                 <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-wxl:h-fit w-fit">

                 
                            <a href={resume.resumePath} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={resume.imagePath}
                                    className="w-full h-full object-contain rounded-2xl"
                                    title="resume"
                                />
                            </a> 
                
                            
                        </div>
                </section>
                <section className="feedback-section">
                    <h2 className="text-4xl !text-black font-bold">Resume Review</h2>
                    <div className="flex flex-col gap-8 animate-in fade-in duration-1000">
                            <Summary feedback={resume.feedback} />
                            {/* <ATS score={resume.feedback.ATS.score || 0} suggestions={resume.feedback.ATS.tips || []} />
                            <Details feedback={resume.feedback} /> */}
                        </div>
                    
                </section>
                
            </div>
            ))}
    </main>
  )
}

export default resume