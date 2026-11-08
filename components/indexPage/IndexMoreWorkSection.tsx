import { IconArrowUpRight } from '@tabler/icons-react'

const projects = [
    {
        name: 'Lotte Chemicals',
        year: '2024',
        text: 'Bus In/Out module: QR-based vehicle entry and exit with kilometer logging, voice-assisted guard workflows and role-based admin and guard views. Shipped to a live security team.',
        stack: 'Node.js, React, PostgreSQL, Web Speech API',
    },
    {
        name: 'Kia Lucky Motors',
        year: '2024',
        text: 'Canteen management system: RFID attendance and lunch tracking with role-based dashboards, deduction management and audit trails across 500+ daily transactions.',
        stack: 'Node.js, React, PostgreSQL, RFID API',
    },
    {
        name: 'Simple Accounting',
        year: '2022',
        text: 'Invoices and journal, bank and cash vouchers, with reports by project and customer: audit trail, trial balance, income and expense, and yearly comparison.',
        stack: 'Accounting software',
    },
    {
        name: 'Opticofy',
        year: '2021',
        text: 'A point-of-sale app for optical shops: customers, sales and receivables, with yearly and per-customer sales reports.',
        stack: 'POS software',
        href: 'https://opticofy.com/',
    },
]

export default function IndexMoreWorkSection() {
    return (
        <section id="projects" aria-labelledby="projects-title" className="border-y border-zinc-200 bg-zinc-50 py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <h2 id="projects-title" className="text-3xl sm:text-4xl">More projects</h2>
                    <p className="mt-4 font-medium leading-snug text-zinc-600">Business systems built for clients and companies.</p>
                </div>
                <ul className="mt-12 divide-y divide-zinc-200 border-y border-zinc-200">
                    {projects.map(p => (
                        <li key={p.name} className="grid gap-2 py-6 md:grid-cols-[14rem_1fr_14rem] md:gap-8">
                            <div>
                                <h3 className="flex items-center gap-1.5 text-lg">
                                    {p.href ? (
                                        <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-blue-600">
                                            {p.name}
                                            <IconArrowUpRight className="size-4" aria-hidden />
                                        </a>
                                    ) : (
                                        p.name
                                    )}
                                </h3>
                                <p className="text-sm tabular-nums text-zinc-500">{p.year}</p>
                            </div>
                            <p className="font-medium leading-snug text-zinc-600">{p.text}</p>
                            <p className="text-sm text-zinc-500 md:text-right">{p.stack}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
