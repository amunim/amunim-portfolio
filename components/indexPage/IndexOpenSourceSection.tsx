import {
    IconArrowRight,
    IconArrowUpRight,
    IconBrandStackoverflow,
    IconCheck,
    IconFlag,
    IconGitPullRequest,
    IconRoute,
    IconStarFilled,
    IconWindow,
    type TablerIcon,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useInView, useReplay, vars } from '../ill'

// Abstract, looping illustrations of what each contribution actually did. Keyframes are in styles/globals.css (.ill-*).

const pill = 'relative rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm'

// MediatR: my answer and proposed extension registers open generic handlers (Handler<T>) for every closed type it finds.
function Mediator() {
    const [tick, onEnd] = useReplay()
    const handlers = ['Handler<int>', 'Handler<string>', 'Handler<Order>']
    return (
        <div key={tick} onAnimationEnd={onEnd} className="ill-group flex h-full items-center justify-center gap-2 sm:gap-3">
            <span className={cn(pill, 'ill-in')} style={vars({ '--d': '0.2s' })}>RegisterGenericMediatRHandlers</span>
            <IconArrowRight className="ill-in size-4 shrink-0 text-zinc-400" aria-hidden style={vars({ '--d': '0.6s' })} />
            <div className="flex flex-col gap-1.5">
                {handlers.map((h, i) => (
                    <span key={h} className={cn(pill, 'ill-in flex items-center gap-1.5')} style={vars({ '--d': `${1 + i * 0.9}s` })}>
                        {h}
                        <IconCheck className="ill-pop size-3.5 text-blue-600" aria-hidden stroke={3} style={vars({ '--d': `${1.35 + i * 0.9}s` })} />
                    </span>
                ))}
            </div>
        </div>
    )
}

// rc-rate: the starsSpacing prop opens and closes the gap between stars.
function Rate() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
            <div className="flex gap-1.5" aria-hidden>
                {[0, 1, 2, 3, 4].map(i => (
                    <span key={i} className="ill-spread" style={vars({ '--i': String(i) })}>
                        <IconStarFilled className={cn('size-8', i < 4 ? 'text-blue-600' : 'text-zinc-300')} />
                    </span>
                ))}
            </div>
            <div className="relative grid">
                <span className={cn(pill, 'ill-label-a col-start-1 row-start-1')}>{'<Rate starsSpacing={0} />'}</span>
                <span className={cn(pill, 'ill-label-b col-start-1 row-start-1')}>{'<Rate starsSpacing={18} />'}</span>
            </div>
        </div>
    )
}

// Custom Electron Prompt: a multiInputs prompt with an extra button that runs a custom function (autofill).
function Prompt() {
    const [tick, onEnd] = useReplay()
    const field = (label: string, w: string, d: string) => (
        <div className="space-y-0.5">
            <p className="text-zinc-500">{label}</p>
            <div className="flex h-5 items-center overflow-hidden rounded-md border border-zinc-300 bg-white px-2">
                <span className={cn('ill-x h-1.5 rounded-full bg-zinc-400', w)} style={vars({ '--d': d })} />
            </div>
        </div>
    )
    return (
        <div key={tick} onAnimationEnd={onEnd} className="ill-group mx-auto flex h-full max-w-60 items-center">
            <div className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-white text-xs shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-1">
                    <span className="size-2 rounded-full bg-zinc-300" />
                    <span className="size-2 rounded-full bg-zinc-300" />
                    <span className="size-2 rounded-full bg-zinc-300" />
                </div>
                <div className="space-y-1.5 p-2.5">
                    {field('Username', 'w-1/2', '2.4s')}
                    {field('Password', 'w-1/3', '3.1s')}
                    <div className="flex justify-end gap-1.5 pt-0.5">
                        <span className="ill-ring1 relative rounded-md border border-blue-600 px-2 py-1 font-medium text-blue-700" style={vars({ '--d': '1.2s' })}>Autofill</span>
                        <span className="rounded-md border border-zinc-200 px-2 py-1 font-medium text-zinc-700">Cancel</span>
                        <span className="rounded-md bg-zinc-900 px-2 py-1 font-medium text-white">OK</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Flagsmith article: flip a flag, then a T4 template writes every flag into a C# enum.
function Flags() {
    const [tick, onEnd] = useReplay()
    const flags = [
        { name: 'NewCheckout', flips: '1s' },
        { name: 'DarkMode', flips: '' },
        { name: 'BetaSearch', flips: '2.4s' },
    ]
    const toggle = (flips: string) => (
        <span className={cn('relative flex h-4 w-7 items-center justify-end overflow-hidden rounded-full p-0.5', flips ? 'bg-blue-600' : 'bg-zinc-300')}>
            {flips && <span className="ill-off absolute inset-0 bg-zinc-300 opacity-0" style={vars({ '--d': flips })} />}
            <span className={cn('relative size-3 rounded-full bg-white', flips ? 'ill-knob' : '-translate-x-3')} style={flips ? vars({ '--d': flips }) : undefined} />
        </span>
    )
    return (
        <div key={tick} onAnimationEnd={onEnd} className="ill-group flex h-full items-center justify-center gap-3">
            <ul className="flex w-44 flex-col gap-2">
                {flags.map(f => (
                    <li key={f.name} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs shadow-sm">
                        <span className="font-medium text-zinc-700">{f.name}</span>
                        {toggle(f.flips)}
                    </li>
                ))}
            </ul>
            <IconArrowRight className="size-4 shrink-0 text-zinc-400" aria-hidden />
            <div className="w-32 overflow-hidden rounded-lg border border-zinc-200 bg-white text-xs shadow-sm">
                <div className="bg-zinc-900 px-3 py-1.5 font-medium text-white">Flag.cs</div>
                {flags.map((f, i) => (
                    <div key={f.name} className="ill-in border-t border-zinc-100 px-3 py-1.5 text-zinc-700" style={vars({ '--d': `${3.6 + i * 0.5}s` })}>
                        {f.name}
                    </div>
                ))}
            </div>
        </div>
    )
}

const items: { title: string; text: string; language: string; href: string; Icon: TablerIcon; visual: ReactNode }[] = [
    {
        title: 'MediatR',
        language: 'C#',
        text: 'An accepted StackOverflow answer, with a proposed extension that registers open generic handlers automatically.',
        href: 'https://stackoverflow.com/questions/73760859/mediatr-generic-handlers/73760945#73760945',
        Icon: IconRoute,
        visual: <Mediator />,
    },
    {
        title: 'Ant Design rc-rate',
        language: 'TypeScript',
        text: 'An open pull request that adds a starsSpacing prop to Rate and Star, so spacing no longer needs CSS selector overrides.',
        href: 'https://github.com/react-component/rate/pull/137',
        Icon: IconGitPullRequest,
        visual: <Rate />,
    },
    {
        title: 'Custom Electron Prompt',
        language: 'JavaScript',
        text: 'A merged pull request that adds a multiInputs prompt type and an optional extra button that runs your own function.',
        href: 'https://github.com/Araxeus/custom-electron-prompt',
        Icon: IconWindow,
        visual: <Prompt />,
    },
    {
        title: 'Flagsmith blog',
        language: 'C#',
        text: 'A step-by-step .NET feature flag guide for Flagsmith, with T4 templates that turn flags into C# enums.',
        href: 'https://www.flagsmith.com/blog/net-feature-flag',
        Icon: IconFlag,
        visual: <Flags />,
    },
]

export default function IndexOpenSourceSection() {
    const [ref, visible] = useInView<HTMLElement>()
    return (
        <section ref={ref} data-paused={!visible} id="open-source" aria-labelledby="oss-title" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                        <h2 id="oss-title" className="text-3xl sm:text-4xl">Open source and community</h2>
                        <p className="mt-4 font-medium leading-snug text-zinc-600">Code, answers and writing for projects other people use.</p>
                    </div>
                    <a
                        href="https://stackoverflow.com/users/9138440/amunim"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 text-sm font-semibold transition-colors hover:bg-zinc-100"
                    >
                        <IconBrandStackoverflow className="size-5" aria-hidden />
                        Top 5% yearly, 1,000+ reputation
                        <IconArrowUpRight className="size-4" aria-hidden />
                    </a>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {items.map(({ title, text, language, href, Icon, visual }) => (
                        <a
                            key={title}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-2 transition-shadow hover:shadow-lg"
                        >
                            <div className="ill h-52 overflow-hidden rounded-2xl bg-zinc-100 p-4 sm:p-5" aria-hidden>
                                {visual}
                            </div>
                            <div className="p-5 pt-6">
                                <div className="flex items-center gap-3">
                                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-zinc-900 text-white">
                                        <Icon className="size-5" aria-hidden stroke={1.75} />
                                    </span>
                                    <h3 className="flex-1 text-lg">{title}</h3>
                                    <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">{language}</span>
                                    <IconArrowUpRight className="size-5 shrink-0 text-zinc-400 transition-colors group-hover:text-blue-600" aria-hidden />
                                </div>
                                <p className="mt-3 text-sm font-medium leading-snug text-zinc-600">{text}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
