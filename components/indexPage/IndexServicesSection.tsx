const services = [
    {
        title: 'Custom software',
        text: 'Web and desktop applications built around your workflow, at a fixed cost or on time and materials.',
    },
    {
        title: 'Database design',
        text: 'SQL or NoSQL, entity relationships and ER diagrams, and scaling large systems up and out.',
    },
    {
        title: 'Test-driven development',
        text: 'Unit and API tests with xUnit and Jest, end-to-end tests with Puppeteer, Storybook for React components.',
    },
    {
        title: 'Domain-driven design',
        text: 'Monolith or microservices, split into core, infrastructure, persistence and front-end projects.',
    },
    {
        title: 'Design to code',
        text: 'Figma designs or wireframes turned into a live website or desktop application.',
    },
    {
        title: 'E-commerce',
        text: 'Online stores designed, built, launched and maintained on a current tech stack.',
    },
    {
        title: 'CRM',
        text: 'A CRM tailored to your business model, or built on top of the one you already use.',
    },
];

export default function IndexServices() {
    return (
        <section id="services" className='section' aria-labelledby='services-title'>
            <div className='wrap services__grid'>
                <div className='services__head'>
                    <h2 id='services-title' className='section__title'>What I build</h2>
                    <p className='section__intro'>Seven kinds of work, one test-first way of doing it.</p>
                </div>
                <ul className='services__list'>
                    {services.map(s => (
                        <li key={s.title} className='service'>
                            <h3>{s.title}</h3>
                            <p>{s.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
