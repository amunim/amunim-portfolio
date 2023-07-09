import { PortfolioParams } from "@/services/portfolioService";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
// import Markdown from 'markdown-to-jsx';

export default function PortfolioItem({ title, year, posterLink, description, videoLink, previewLink, visitLink }: PortfolioParams) {

    return (
        <>
            <div className='container lg:max-w-[960px] mx-auto px-7 py-20'>
                <div className='flex flex-col md:flex-row items-center text-center lg:text-left h-full'>
                    <div className='lg:basis-1/2 lg:p-0'>
                        <video autoPlay loop {...(posterLink ? { poster: posterLink } : {})}>
                            <source src={videoLink} />
                        </video>
                    </div>
                    <div className='lg:basis-1/2 mx-auto py-4'>
                        <h3>{title}<span className='badge badge-sm'>{year}</span></h3>
                        <p className="style-anchor-below whitespace-pre-wrap text-left"><ReactMarkdown>{description}</ReactMarkdown></p>
                        <div className="flex flex-col md:flex-row">
                            <a href={previewLink} className="btn btn-primary lg:inline-block mb-4 md:mb-0 lg:mr-4">Preview</a>
                            <a href={visitLink} className='btn btn-secondary'>Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}