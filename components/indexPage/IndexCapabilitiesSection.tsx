import {
    IconArrowsExchange,
    IconBoxMultiple,
    IconCalendarEvent,
    IconCheck,
    IconDatabase,
    IconShieldCheck,
    IconSitemap,
    IconTestPipe,
    type TablerIcon,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Small, abstract illustrations of each skill. They show the idea, not real data.

const pill = 'rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm'

function Services() {
    return (
        <div className="flex h-full items-center justify-center gap-2 sm:gap-3">
            <span className={pill}>Gateway</span>
            <span className="h-px w-5 bg-zinc-300 sm:w-8" />
            <div className="flex flex-col gap-2">
                {['Auth', 'Booking', 'Queue'].map(s => <span key={s} className={pill}>{s}</span>)}
            </div>
            <span className="h-px w-5 bg-zinc-300 sm:w-8" />
            <span className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white shadow-sm">Database</span>
        </div>
    )
}

function AbuseLog() {
    const rows = [
        { label: 'Same device, new IP', result: 'Blocked', dark: true },
        { label: 'New visitor', result: 'Allowed', dark: false },
        { label: 'Burst of requests', result: 'Rate limited', dark: true },
    ]
    return (
        <ul className="flex h-full flex-col justify-center gap-2">
            {rows.map(r => (
                <li key={r.label} className="flex items-center justify-between gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs shadow-sm">
                    <span className="font-medium text-zinc-700">{r.label}</span>
                    <span className={cn('rounded-full px-2 py-0.5 font-medium', r.dark ? 'bg-zinc-900 text-white' : 'bg-blue-50 text-blue-700')}>{r.result}</span>
                </li>
            ))}
        </ul>
    )
}

function BookingSync() {
    const booked = new Set([2, 3, 4, 9, 10, 16, 17, 18, 19])
    return (
        <div className="flex h-full flex-col justify-center gap-4">
            <div className="grid grid-cols-7 gap-1.5" aria-hidden>
                {Array.from({ length: 21 }, (_, i) => (
                    <span key={i} className={cn('aspect-square rounded-md', booked.has(i) ? 'bg-blue-600' : 'bg-zinc-200')} />
                ))}
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className={pill}>Airbnb</span>
                <IconArrowsExchange className="size-4 text-zinc-500" aria-hidden />
                <span className={pill}>Booking.com</span>
            </div>
        </div>
    )
}

function Tables() {
    const table = (name: string, cols: string[]) => (
        <div className="w-36 overflow-hidden rounded-lg border border-zinc-200 bg-white text-xs shadow-sm">
            <div className="bg-zinc-900 px-3 py-1.5 font-medium text-white">{name}</div>
            {cols.map(c => <div key={c} className="border-t border-zinc-100 px-3 py-1.5 text-zinc-700">{c}</div>)}
        </div>
    )
    return (
        <div className="flex h-full items-center justify-center gap-3">
            {table('users', ['id', 'email', 'name'])}
            <span className="h-px w-6 bg-blue-600" aria-hidden />
            {table('bookings', ['id', 'user_id', 'starts_at'])}
        </div>
    )
}

function TestRun() {
    return (
        <ul className="flex h-full flex-col justify-center gap-2">
            {['creates a booking', 'rejects a double booking', 'retries a failed webhook'].map(t => (
                <li key={t} className="flex items-center gap-2.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-sm">
                    <IconCheck className="size-4 shrink-0 text-blue-600" aria-hidden stroke={2.5} />
                    {t}
                </li>
            ))}
        </ul>
    )
}

function Layers() {
    const layers = [
        { name: 'Core', w: 'w-[52%]', tone: 'bg-zinc-900 text-white' },
        { name: 'Application', w: 'w-[68%]', tone: 'bg-zinc-700 text-white' },
        { name: 'Infrastructure', w: 'w-[84%]', tone: 'bg-zinc-300 text-zinc-800' },
        { name: 'Persistence', w: 'w-full', tone: 'bg-zinc-200 text-zinc-700' },
    ]
    return (
        <div className="flex h-full flex-col items-center justify-center gap-1.5">
            {layers.map(l => (
                <span key={l.name} className={cn('rounded-md py-1.5 text-center text-xs font-medium', l.w, l.tone)}>{l.name}</span>
            ))}
        </div>
    )
}

const capabilities: { title: string; text: string; Icon: TablerIcon; span: string; visual: ReactNode }[] = [
    {
        title: 'Scalable microservices',
        text: 'Distributed systems with Go, Node.js and AWS for high-availability SaaS workflows, with a focus on concurrency and performance.',
        Icon: IconBoxMultiple,
        span: 'lg:col-span-4',
        visual: <Services />,
    },
    {
        title: 'Anti-abuse and security',
        text: 'Browser fingerprinting, rate limiting and backend validation that stop automated spam and fraud before it reaches the product.',
        Icon: IconShieldCheck,
        span: 'lg:col-span-2',
        visual: <AbuseLog />,
    },
    {
        title: 'High-concurrency booking',
        text: 'Real-time synchronisation for scheduling and rentals across platforms such as Airbnb and Booking.com.',
        Icon: IconCalendarEvent,
        span: 'lg:col-span-2',
        visual: <BookingSync />,
    },
    {
        title: 'Database design',
        text: 'SQL or NoSQL, entity relationships and ER diagrams, and scaling large systems up and out.',
        Icon: IconDatabase,
        span: 'lg:col-span-4',
        visual: <Tables />,
    },
    {
        title: 'Test-driven development',
        text: 'Unit and API tests with xUnit and Jest, end-to-end tests with Puppeteer, Storybook for React components.',
        Icon: IconTestPipe,
        span: 'lg:col-span-3',
        visual: <TestRun />,
    },
    {
        title: 'Domain-driven design',
        text: 'Monolith or microservices, split into core, infrastructure, persistence and front-end projects.',
        Icon: IconSitemap,
        span: 'lg:col-span-3',
        visual: <Layers />,
    },
]

export default function IndexCapabilitiesSection() {
    return (
        <section id="capabilities" aria-labelledby="capabilities-title" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <h2 id="capabilities-title" className="text-3xl sm:text-4xl">What I build</h2>
                    <p className="mt-4 text-zinc-600">Backend-heavy systems that have to stay up, stay fast and stay correct.</p>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {capabilities.map(({ title, text, Icon, span, visual }) => (
                        <article
                            key={title}
                            className={cn('group flex flex-col rounded-3xl border border-zinc-200 bg-white p-2 transition-shadow hover:shadow-lg', span)}
                        >
                            <div className="h-52 overflow-hidden rounded-2xl bg-zinc-100 p-4 sm:p-5" aria-hidden>
                                {visual}
                            </div>
                            <div className="p-5 pt-6">
                                <div className="flex items-center gap-3">
                                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-zinc-900 text-white">
                                        <Icon className="size-5" aria-hidden stroke={1.75} />
                                    </span>
                                    <h3 className="text-lg">{title}</h3>
                                </div>
                                <p className="mt-3 text-sm text-zinc-600">{text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
