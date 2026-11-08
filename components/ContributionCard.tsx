export default function ContributionCard({ title, description, link, language }: { title: string, description: string, link: string, language: string, languageColor: string }) {
    return (
        <li className='oss'>
            <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
            <p>{description}</p>
            <span className='oss__lang'>{language}</span>
        </li>
    );
}
