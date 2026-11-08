import { IconCalendar } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const CAL_URL = 'https://cal.com/amunim/15min'

const links = [
    { id: 'work', label: 'Work' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'projects', label: 'Projects' },
    { id: 'open-source', label: 'Open source' },
]

// every section the observer watches; the ones without a nav link clear the underline
const watched = ['intro', ...links.map(l => l.id), 'contact']

// which section the reader is in: the one crossing a band near the top of the viewport
function useActiveSection() {
    const [active, setActive] = useState<string | null>(null)
    const [inContact, setInContact] = useState(false)
    useEffect(() => {
        const io = new IntersectionObserver(
            entries => {
                for (const e of entries) {
                    if (e.isIntersecting) setActive(links.some(l => l.id === e.target.id) ? e.target.id : null)
                }
            },
            { rootMargin: '-30% 0px -65% 0px' },
        )
        watched.forEach(id => {
            const el = document.getElementById(id)
            if (el) io.observe(el)
        })
        // the last section is short, so the band never reaches it at the bottom of the page: clear the underline once it is mostly on screen
        const contact = document.getElementById('contact')
        const bottom = new IntersectionObserver(([e]) => setInContact(e.isIntersecting), { threshold: 0.4 })
        if (contact) bottom.observe(contact)
        return () => {
            io.disconnect()
            bottom.disconnect()
        }
    }, [])
    return inContact ? null : active
}

export default function NavMenu() {
    const active = useActiveSection()

    return (
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
            <a href="#main" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-semibold">
                <span className="grid size-8 place-items-center rounded-lg bg-zinc-900 text-xs font-bold text-white" aria-hidden>AM</span>
                <span className="hidden sm:inline">Abdul Munim</span>
            </a>

            <nav aria-label="Main" className="hidden h-full items-stretch gap-8 text-sm font-medium md:flex">
                {links.map(l => (
                    <a
                        key={l.id}
                        href={`#${l.id}`}
                        aria-current={active === l.id ? 'location' : undefined}
                        className={cn(
                            'relative flex items-center transition-colors',
                            "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-zinc-900 after:transition-transform after:duration-200 after:content-['']",
                            active === l.id ? 'text-zinc-900 after:scale-x-100' : 'text-zinc-600 hover:text-zinc-900',
                        )}
                    >
                        {l.label}
                    </a>
                ))}
            </nav>

            <div className="flex items-center gap-2">
                <details className="group relative md:hidden">
                    <summary className="flex h-10 cursor-pointer list-none items-center rounded-xl border border-zinc-200 px-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
                        Menu
                    </summary>
                    <nav aria-label="Mobile" className="absolute right-0 top-12 z-40 w-48 rounded-2xl border border-zinc-200 bg-white p-2 shadow-xl">
                        {links.map(l => (
                            <a
                                key={l.id}
                                href={`#${l.id}`}
                                aria-current={active === l.id ? 'location' : undefined}
                                className={cn(
                                    'block rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-zinc-100',
                                    active === l.id && 'bg-zinc-100 text-zinc-900 underline decoration-2 underline-offset-4',
                                )}
                            >
                                {l.label}
                            </a>
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
