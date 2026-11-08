import { IconArrowUpRight } from '@tabler/icons-react'

const items = [
    {
        title: 'MediatR',
        language: 'C#',
        text: 'A StackOverflow answer about generic handlers in MediatR, the dependency-free mediator library for in-process messaging in .NET.',
        href: 'https://stackoverflow.com/questions/73760859/mediatr-generic-handlers/73760945#73760945',
    },
    {
        title: 'Ant Design rc-rate',
        language: 'TypeScript',
        text: 'A pull request to rc-rate, the React rating component used by Ant Design.',
        href: 'https://github.com/react-component/rate/pull/137',
    },
    {
        title: 'Custom Electron Prompt',
        language: 'JavaScript',
        text: 'A contribution to a library of prompt templates for Electron: input, keybind, counter, select and multi-input.',
        href: 'https://github.com/Araxeus/custom-electron-prompt',
    },
    {
        title: 'Flagsmith blog',
        language: 'C#',
        text: 'A technical article for Flagsmith on feature flags in .NET, with T4 templates that import flags as C# enums.',
        href: 'https://www.flagsmith.com/blog/net-feature-flag',
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
                        className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-zinc-300 underline-offset-4 hover:decoration-blue-600"
                    >
                        Stack Overflow: top 5% yearly, 1,000+ reputation
                        <IconArrowUpRight className="size-4" aria-hidden />
                    </a>
                </div>
                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {items.map(i => (
                        <a
                            key={i.title}
                            href={i.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-md"
                        >
                            <span className="flex items-start justify-between gap-3">
                                <h3 className="text-lg">{i.title}</h3>
                                <IconArrowUpRight className="size-5 shrink-0 text-zinc-400 transition-colors group-hover:text-blue-600" aria-hidden />
                            </span>
                            <span className="mt-2 text-sm text-zinc-600">{i.text}</span>
                            <span className="mt-4 text-sm font-medium text-zinc-900">{i.language}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
