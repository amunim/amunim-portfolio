export default function ContributionCard({ title, description, link, language, languageColor }: { title: string, description: string, link: string, language: string, languageColor: string }) {
    return (
        <div className='rounded shadow-xl transition-shadow hover:shadow-2xl mx-6 md:mx-0 px-4 py-2 my-2 h-fit border border-[#00000010]'>
        <h1 className='text-blue-500'><a href={link} target="_blank">{title}</a></h1>
            <p className='text-gray-500 text-sm'>{description}</p>
            <div className='flex flex-row'>
                <div className={`cardLang`} data-lg-color={languageColor}>
                    <div style={{background: languageColor}} className={`inline-block w-4 h-4 rounded-[50%] relative top-[2px] -left-[2px] content-[" "]`}></div>{language}
                </div>
            </div>
        </div>
    );
}