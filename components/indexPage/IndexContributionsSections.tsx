import { ContributionParams } from "@/services/contributionService";
import ContributionCard from "../ContributionCard";

export default function IndexContributionsSection({ contributions }: { contributions: ContributionParams[] }) {
    return (
        <section id="open-source" className='section' aria-labelledby='oss-title'>
            <div className='wrap'>
                <div className='section__head'>
                    <h2 id='oss-title' className='section__title'>Open source</h2>
                    <p className='section__intro'>Code, answers and writing I have contributed to projects other people use.</p>
                </div>
                <ul className='oss-list'>
                    {contributions.map(x => <ContributionCard key={x.link} {...x} />)}
                </ul>
            </div>
        </section>
    )
}
