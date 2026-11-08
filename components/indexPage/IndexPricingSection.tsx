import type { ReactNode } from "react";

type Experience = { name: ReactNode, when: string, items: ReactNode[] };

const ext = { target: '_blank', rel: 'noreferrer', className: 'link' } as const;

const experiences: Experience[] = [
    {
        name: 'Magical Digits',
        when: 'Almost a year',
        items: [
            <>Lead back-end developer on the migration of a classic ASP rentals site to ASP.NET and Next.js (<a href='https://crystalcabins.com/' {...ext}>crystalcabins.com</a>), later promoted to lead full-stack developer.</>,
            'Added multi-store support to Opticofy, a standalone POS and invoicing application. It is the only optics POS, reporting and invoicing solution in the metropolis.',
            'Built an accounting application to manage payments and generate reports, in the spirit of Crystal Reports, for organisations with many accounts.',
            'Built a Flutter application that times prayer.',
            <>Reached about 1000 reputation on <a href='https://stackoverflow.com/users/9138440/amunim' {...ext}>StackOverflow</a>, with <a href='https://stackoverflow.com/users/87015/salman-a' {...ext}>Salman Arshad</a> among my seniors.</>,
            <>The <a href='https://www.linkedin.com/in/abdul-munim-x2002x/' {...ext}>reviews on LinkedIn</a> speak for themselves.</>,
        ],
    },
    {
        name: <a href='https://www.upwork.com/freelancers/~016f42c0501a199670' {...ext}>Upwork</a>,
        when: 'Freelance since late 2021',
        items: [
            'More than 17 jobs, Top Rated with a 100% job success score so far.',
            'A restaurant client system.',
            'A referral tracker system on a Discord server.',
            <><a href='https://mentorflight-production.up.railway.app/route' {...ext}>Mentor Flight</a>.</>,
            <>An article on <a href='https://flagsmith.com/blog/net-feature-flag/' {...ext}>.NET feature flags</a> for Flagsmith.</>,
            'A stream trading API integration with a referral system.',
            'A gift card balance checker for Walmart, Home Depot and Bed Bath & Beyond.',
            'An application that monitors keywords in an RSS feed and pastes by simulating mouse and keyboard.',
        ],
    },
    {
        name: 'Hobby projects',
        when: 'Side projects and game jams',
        items: [
            'A Zoom-like meeting application, built when COVID hit. Voice calls used RSA and ECHA encryption, with Opus encoding the packets.',
            <>Honourable mention in the N3rkMind game jam for <a href='https://amunim.itch.io/robos-jailbreak' {...ext}>Robo&apos;s Jailbreak</a>.</>,
            <>Took part in Ludum Dare with <a href='https://izanamiworkshop.itch.io/chick-n-die' {...ext}>Chick n Die</a>.</>,
            <>Pluralsight C# assessment, <a href='https://www.upwork.com/freelancers/~016f42c0501a199670?p=1377856912245268480' {...ext}>expert score 251</a>.</>,
        ],
    },
];

export default function IndexPricingSection() {
    return (
        <section id="experience" className='experience section on-blue' aria-labelledby='experience-title'>
            <div className='wrap'>
                <h2 id='experience-title' className='section__title'>Experience</h2>
                <div className='exp-grid'>
                    {experiences.map((e, i) => (
                        <div key={i} className='exp'>
                            <h3>{e.name}</h3>
                            <p className='exp__when'>{e.when}</p>
                            <ul>
                                {e.items.map((item, j) => <li key={j}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
