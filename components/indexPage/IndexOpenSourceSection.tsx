import {
    IconArrowRight,
    IconArrowUpRight,
    IconBrandStackoverflow,
    IconFlag,
    IconGitPullRequest,
    IconRoute,
    IconStar,
    IconStarFilled,
    IconWindow,
    type TablerIcon,
} from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// Abstract illustrations of what each project does. They show the idea, not real data.

const pill = 'rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm'

function Mediator() {
    return (
        <div className="flex h-full items-center justify-center gap-2 sm:gap-3">
            <span className={pill}>Request</span>
            <IconArrowRight className="size-4 text-zinc-400" aria-hidden />
            <span className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm">Mediator</span>
            <IconArrowRight className="size-4 text-zinc-400" aria-hidden />
            <div className="flex flex-col gap-1.5">
                {['Handler<T>', 'Notification'].map(h => <span key={h} className={pill}>{h}</span>)}
            </div>
        </div>
    )
}

function Rate() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-4">
            <div className="flex gap-1.5" aria-hidden>
                {[0, 1, 2, 3, 4].map(i => {
                    const Star = i < 4 ? IconStarFilled : IconStar
                    return <Star key={i} className={cn('size-8', i < 4 ? 'text-blue-600' : 'text-zinc-300')} />
                })}
            </div>
            <span className={pill}>{'<Rate allowHalf />'}</span>
        </div>
    )
}

function Prompt() {
    return (
        <div className="mx-auto flex h-full max-w-56 items-center">
            <div className="w-full overflow-hidden rounded-lg border border-zinc-200 bg-white text-xs shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 py-2">
                    <span className="size-2 rounded-full bg-zinc-300" />
                    <span className="size-2 rounded-full bg-zinc-300" />
                    <span className="size-2 rounded-full bg-zinc-300" />
                </div>
                <div className="space-y-3 p-3">
                    <p className="font-medium text-zinc-800">Enter a name</p>
                    <div className="h-7 rounded-md border border-blue-600 bg-white" />
                    <div className="flex justify-end gap-2">
                        <span className="rounded-md border border-zinc-200 px-2.5 py-1 font-medium text-zinc-700">Cancel</span>
                        <span className="rounded-md bg-zinc-900 px-2.5 py-1 font-medium text-white">OK</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Flags() {
    const flags = [
        { name: 'NewCheckout', on: true },
        { name: 'DarkMode', on: false },
        { name: 'BetaSearch', on: true },
    ]
    return (
        <ul className="flex h-full flex-col justify-center gap-2">
            {flags.map(f => (
                <li key={f.name} className="flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs shadow-sm">
                    <span className="font-medium text-zinc-700">{f.name}</span>
                    <span className={cn('flex h-4 w-7 items-center rounded-full p-0.5', f.on ? 'justify-end bg-blue-600' : 'justify-start bg-zinc-300')}>
                        <span className="size-3 rounded-full bg-white" />
                    </span>
                </li>
            ))}
        </ul>
    )
}

const items: { title: string; text: string; language: string; href: string; Icon: TablerIcon; visual: ReactNode }[] = [
    {
        title: 'MediatR',
        language: 'C#',
        text: 'A StackOverflow answer about generic handlers in MediatR, the dependency-free mediator library for in-process messaging in .NET.',
        href: 'https://stackoverflow.com/questions/73760859/mediatr-generic-handlers/73760945#73760945',
        Icon: IconRoute,
        visual: <Mediator />,
    },
    {
        title: 'Ant Design rc-rate',
        language: 'TypeScript',
        text: 'A pull request to rc-rate, the React rating component used by Ant Design.',
        href: 'https://github.com/react-component/rate/pull/137',
        Icon: IconGitPullRequest,
        visual: <Rate />,
    },
    {
        title: 'Custom Electron Prompt',
        language: 'JavaScript',
        text: 'A contribution to a library of prompt templates for Electron: input, keybind, counter, select and multi-input.',
        href: 'https://github.com/Araxeus/custom-electron-prompt',
        Icon: IconWindow,
        visual: <Prompt />,
    },
    {
        title: 'Flagsmith blog',
        language: 'C#',
        text: 'A technical article for Flagsmith on feature flags in .NET, with T4 templates that import flags as C# enums.',
        href: 'https://www.flagsmith.com/blog/net-feature-flag',
        Icon: IconFlag,
        visual: <Flags />,
    },
]

export default function IndexOpenSourceSection() {
    return (
        <section id="open-source" aria-labelledby="oss-title" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="max-w-2xl">
                        <h2 id="oss-title" className="text-3xl sm:text-4xl">Open source and community</h2>
                        <p className="mt-4 text-zinc-600">Code, answers and writing for projects other people use.</p>
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
                            <div className="h-44 overflow-hidden rounded-2xl bg-zinc-100 p-4 sm:p-5" aria-hidden>
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
                                <p className="mt-3 text-sm text-zinc-600">{text}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
