import { PortfolioParams } from "@/services/portfolioService";
import PortfolioItem from "../PortfolioItem";

export default function IndexPortfolioSection({ portfolioItems }: { portfolioItems: PortfolioParams[] }) {
    return (
        <section id="work" className='work' aria-labelledby='work-title'>
            <div className='wrap'>
                <div className='section__head'>
                    <h2 id='work-title' className='section__title'>Selected work</h2>
                    <p className='section__intro'>Systems running for real clients. The screens are recordings of the live software.</p>
                </div>
                {portfolioItems.map((x, i) => <PortfolioItem {...x} flip={i % 2 === 1} key={`portfolio-${x.Id}`} />)}
            </div>
        </section>
    )
}
