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
import { useInView, useReplay, vars } from '../ill'

// Small, abstract, looping illustrations of each skill, drawn for a dark panel. They show the idea, not real data.
// Keyframes live in styles/globals.css (.ill-*); they only touch transform and opacity.

const pill = 'relative rounded-md border border-white/10 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200'
const row = 'rounded-lg border border-white/10 bg-zinc-800 px-3 py-2 text-xs'

function Services() {
    const line = (fill: string) => (
        <span className="relative h-px w-5 bg-zinc-700 sm:w-8">
            <span className="ill-fill absolute inset-x-0 -top-px h-0.5 bg-blue-500" style={vars({ '--fill': fill })} />
        </span>
    )
    return (
        <div className="flex h-full items-center justify-center gap-2 sm:gap-3">
            <span className={cn(pill, 'ill-ring')} style={vars({ '--ring': 'ms-gw' })}>Gateway</span>
            {line('ms-l1')}
            <div className="flex flex-col gap-2">
                {['Auth', 'Booking', 'Queue'].map((s, i) => (
                    <span key={s} className={cn(pill, 'ill-ring')} style={vars({ '--ring': 'ms-svc', '--ring-d': '9s', '--d': `${i * 3}s` })}>{s}</span>
                ))}
            </div>
            {line('ms-l2')}
            <span className="ill-ring relative rounded-md bg-white px-2.5 py-1 text-xs font-medium text-zinc-900" style={vars({ '--ring': 'ms-db' })}>Database</span>
        </div>
    )
}

function AbuseLog() {
    const rows = [
        { label: 'Same device, new IP', result: 'Blocked', dark: true },
        { label: 'New visitor', result: 'Allowed', dark: false },
        { label: 'Burst of requests', result: 'Rate limited', dark: true },
    ]
    const [tick, onEnd] = useReplay()
    return (
        <ul key={tick} onAnimationEnd={onEnd} className="ill-group flex h-full flex-col justify-center gap-2">
            {rows.map((r, i) => (
                <li
                    key={r.label}
                    className={cn('ill-in flex items-center justify-between gap-3', row)}
                    style={vars({ '--d': `${i * 1.4}s` })}
                >
                    <span className="font-medium text-zinc-300">{r.label}</span>
                    <span
                        className={cn('ill-pop rounded-full px-2 py-0.5 font-medium', r.dark ? 'bg-white text-zinc-900' : 'bg-blue-500/20 text-blue-300')}
                        style={vars({ '--d': `${i * 1.4 + 0.5}s` })}
                    >
                        {r.result}
                    </span>
                </li>
            ))}
        </ul>
    )
}

function BookingSync() {
    const booked = [2, 3, 4, 9, 10, 16, 17, 18, 19]
    const [tick, onEnd] = useReplay()
    return (
        <div className="flex h-full flex-col justify-center gap-4">
            <div key={tick} onAnimationEnd={onEnd} className="ill-group grid grid-cols-7 gap-1.5" aria-hidden>
                {Array.from({ length: 21 }, (_, i) => (
                    <span key={i} className="relative aspect-square rounded-md bg-zinc-800">
                        {booked.includes(i) && (
                            <span className="ill-pop absolute inset-0 rounded-md bg-blue-500" style={vars({ '--d': `${booked.indexOf(i) * 0.25}s` })} />
                        )}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-center gap-2">
                <span className={pill}>Airbnb</span>
                <IconArrowsExchange className="ill-sync size-4 text-zinc-400" aria-hidden />
                <span className={pill}>Booking.com</span>
            </div>
        </div>
    )
}

function Tables() {
    const table = (name: string, cols: string[], lit: string, hl: string) => (
        <div className="w-36 overflow-hidden rounded-lg border border-white/10 bg-zinc-800 text-xs">
            <div className="bg-zinc-700 px-3 py-1.5 font-medium text-zinc-100">{name}</div>
            {cols.map(c => (
                <div key={c} className="relative border-t border-white/5 px-3 py-1.5 text-zinc-300">
                    {c === lit && <span className="ill-hl" style={vars({ '--hl': hl })} aria-hidden />}
                    <span className="relative">{c}</span>
                </div>
            ))}
        </div>
    )
    return (
        <div className="flex h-full items-center justify-center gap-3">
            {table('users', ['id', 'email', 'name'], 'id', 'tb-a')}
            <span className="relative h-0.5 w-8 bg-zinc-700" aria-hidden>
                <span className="ill-fill absolute inset-0 bg-blue-500" style={vars({ '--fill': 'tb-line', '--fill-d': '4s' })} />
            </span>
            {table('bookings', ['id', 'user_id', 'starts_at'], 'user_id', 'tb-b')}
        </div>
    )
}

function TestRun() {
    const [tick, onEnd] = useReplay()
    return (
        <ul key={tick} onAnimationEnd={onEnd} className="ill-group flex h-full flex-col justify-center gap-2">
            {['creates a booking', 'rejects a double booking', 'retries a failed webhook'].map((t, i) => (
                <li key={t} className={cn('flex items-center gap-2.5 font-medium text-zinc-300', row)}>
                    <span className="relative size-4 shrink-0">
                        <span className="absolute inset-0 rounded-full border border-zinc-600" />
                        <IconCheck className="ill-pop absolute inset-0 size-4 text-blue-400" aria-hidden stroke={2.5} style={vars({ '--d': `${0.8 + i * 1.5}s` })} />
                    </span>
                    {t}
                </li>
            ))}
        </ul>
    )
}

function Layers() {
    const layers = [
        { name: 'Core', w: 'w-[52%]', tone: 'bg-white text-zinc-900' },
        { name: 'Application', w: 'w-[68%]', tone: 'bg-zinc-300 text-zinc-900' },
        { name: 'Infrastructure', w: 'w-[84%]', tone: 'bg-zinc-600 text-white' },
        { name: 'Persistence', w: 'w-full', tone: 'bg-zinc-800 text-zinc-300' },
    ]
    const [tick, onEnd] = useReplay()
    return (
        <div key={tick} onAnimationEnd={onEnd} className="ill-group flex h-full flex-col items-center justify-center gap-1.5">
            {layers.map((l, i) => (
                <span
                    key={l.name}
                    className={cn('ill-in rounded-md py-1.5 text-center text-xs font-medium', l.w, l.tone)}
                    style={vars({ '--d': `${(layers.length - 1 - i) * 0.5}s` })}
                >
                    {l.name}
                </span>
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
    // loops rest while the section is off-screen
    const [ref, visible] = useInView<HTMLElement>()

    return (
        <section
            ref={ref}
            data-paused={!visible}
            id="capabilities"
            data-header="dark"
            aria-labelledby="capabilities-title"
            className="on-dark relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-28"
        >
            {/* faint dot grid that fades out from the top, to echo the hero */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 [background-image:radial-gradient(rgb(255_255_255/0.09)_1px,transparent_1px)] [background-size:22px_22px] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent_55%)] [mask-image:linear-gradient(to_bottom,#000,transparent_55%)]"
            />
            <div className="relative mx-auto max-w-6xl px-6">
                <div className="max-w-2xl">
                    <h2 id="capabilities-title" className="text-3xl sm:text-4xl">What I build</h2>
                    <p className="mt-4 font-medium leading-snug text-zinc-400">Backend-heavy systems that have to stay up, stay fast and stay correct.</p>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {capabilities.map(({ title, text, Icon, span, visual }) => (
                        <article
                            key={title}
                            className={cn(
                                'group flex flex-col rounded-3xl border border-white/10 bg-zinc-900 p-2 transition-colors hover:border-white/20 hover:bg-zinc-900/80',
                                span,
                            )}
                        >
                            <div className="ill h-52 overflow-hidden rounded-2xl bg-zinc-950 p-4 ring-1 ring-white/5 sm:p-5" aria-hidden>
                                {visual}
                            </div>
                            <div className="p-5 pt-6">
                                <div className="flex items-center gap-3">
                                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-zinc-900">
                                        <Icon className="size-5" aria-hidden stroke={1.75} />
                                    </span>
                                    <h3 className="text-lg">{title}</h3>
                                </div>
                                <p className="mt-3 text-sm font-medium leading-snug text-zinc-400">{text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
