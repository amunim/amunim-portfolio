import { PortfolioParams } from "@/services/portfolioService";
import PortfolioItem from "../PortfolioItem";

export default function IndexPortfolioSection({ portfolioItems }: { portfolioItems: PortfolioParams[]}) {
    return (
        <section id="portfolio">
            <h1 className='text-center uppercase text-gray-600'>Portfolio</h1>
            {
                portfolioItems.map(x => <><hr /><PortfolioItem {...x} key={`portfolio-${x.Id}`} /></>)
            }
        </section>
    )
}