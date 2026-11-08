import { IconCalendar } from '@tabler/icons-react'

export const CAL_URL = 'https://cal.com/amunim/15min'

const links = [
    { href: '#work', label: 'Work' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#projects', label: 'Projects' },
    { href: '#open-source', label: 'Open source' },
]

export default function NavMenu() {
    return (
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
            <a href="#main" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-semibold">
                <span className="grid size-8 place-items-center rounded-lg bg-zinc-900 text-xs font-bold text-white" aria-hidden>AM</span>
                <span className="hidden sm:inline">Abdul Munim</span>
            </a>

            <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
                {links.map(l => (
                    <a key={l.href} href={l.href} className="transition-colors hover:text-zinc-900">{l.label}</a>
                ))}
            </nav>

            <div className="flex items-center gap-2">
                <details className="group relative md:hidden">
                    <summary className="flex h-10 cursor-pointer list-none items-center rounded-xl border border-zinc-200 px-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                        Menu
                    </summary>
                    <nav aria-label="Mobile" className="absolute right-0 top-12 z-40 w-48 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl">
                        {links.map(l => (
                            <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-zinc-100">{l.label}</a>
                        ))}
                    </nav>
                </details>
                <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-zinc-700"
                >
                    <IconCalendar className="size-4" aria-hidden />
                    Book a call
                </a>
            </div>
        </div>
    )
}
