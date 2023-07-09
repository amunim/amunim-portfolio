import { ContributionParams } from "@/services/contributionService";
import ContributionCard from "../ContributionCard";

export default function IndexContributionsSection({ contributions }: { contributions: ContributionParams[] }) {
    return (
        <section id="contributions" className='mt-5'>
            <div className='text-center'>
                <h1 className='-mb-[2px] text-4xl'>Open Source Contributions</h1>
                <p className='text-gray-500'>some of my open source contributions</p>
            </div>
            <div className='lg:px-44'>
                <div className='container mx-auto flex flex-col md:flex-row justify-around'>
                    {contributions.reduce<ContributionParams[][]>((arr, curr, ind) => {
                        if (ind % 2 == 0 && ind != 0)
                            arr.push(contributions.slice(ind - 2, ind));
                        return arr;
                    }, []).concat([contributions.slice(-2)]).map((group, grpInd) =>
                        <div key={`contrinution-col-${grpInd}`} className='md:w-[49%]'>
                            {group.map((x, itemInd) => (
                                <div key={`contribution-${grpInd}-${itemInd}`} className='flex flex-col justify-around'>
                                    <ContributionCard {...x} />
                                </div>
                            ))}
                        </div>)}
                </div>
            </div>
        </section>
    )
}