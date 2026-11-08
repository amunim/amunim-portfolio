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

const HEADER_H = 64

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

// true while a section marked data-header="dark" sits behind the header (the top HEADER_H pixels of the viewport)
function useDarkHeader() {
    const [dark, setDark] = useState(false)
    useEffect(() => {
        let io: IntersectionObserver | undefined
        const hits = new Set<Element>()
        const start = () => {
            io?.disconnect()
            hits.clear()
            io = new IntersectionObserver(
                entries => {
                    for (const e of entries) e.isIntersecting ? hits.add(e.target) : hits.delete(e.target)
                    setDark(hits.size > 0)
                },
                { rootMargin: `0px 0px ${HEADER_H - window.innerHeight}px 0px` },
            )
            document.querySelectorAll('[data-header="dark"]').forEach(el => io?.observe(el))
        }
        start()
        window.addEventListener('resize', start)
        return () => {
            io?.disconnect()
            window.removeEventListener('resize', start)
        }
    }, [])
    return dark
}

export default function NavMenu() {
    const active = useActiveSection()
    const dark = useDarkHeader()

    return (
        <header
            data-theme={dark ? 'dark' : 'light'}
            className={cn(
                'sticky top-0 z-40 border-b transition-colors duration-200',
                dark ? 'border-white/10 bg-zinc-950 text-white' : 'border-zinc-200 bg-white text-zinc-900',
            )}
        >
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
                <a href="#main" className="flex shrink-0 items-center gap-2.5 whitespace-nowrap font-semibold">
                    <span
                        className={cn(
                            'grid size-8 place-items-center rounded-lg text-xs font-bold transition-colors duration-200',
                            dark ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white',
                        )}
                        aria-hidden
                    >
                        AM
                    </span>
                    <span className="hidden sm:inline">Abdul Munim</span>
                </a>

                <nav aria-label="Main" className="hidden h-full items-stretch gap-8 text-sm font-medium md:flex">
                    {links.map(l => (
                        <a
                            key={l.id}
                            href={`#${l.id}`}
                            aria-current={active === l.id ? 'location' : undefined}
                            className={cn(
                                'relative flex items-center transition-colors duration-200',
                                "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:transition-transform after:duration-200 after:content-['']",
                                dark ? 'after:bg-white' : 'after:bg-zinc-900',
                                active === l.id
                                    ? cn('after:scale-x-100', dark ? 'text-white' : 'text-zinc-900')
                                    : dark
                                      ? 'text-zinc-400 hover:text-white'
                                      : 'text-zinc-600 hover:text-zinc-900',
                            )}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <details className="group relative md:hidden">
                        <summary
                            className={cn(
                                'flex h-10 cursor-pointer list-none items-center rounded-xl border px-4 text-sm font-medium transition-colors duration-200 [&::-webkit-details-marker]:hidden',
                                dark ? 'border-white/15 text-white' : 'border-zinc-200 text-zinc-900',
                            )}
                        >
                            Menu
                        </summary>
                        <nav
                            aria-label="Mobile"
                            className={cn(
                                'absolute right-0 top-12 z-40 w-48 rounded-2xl border p-2 shadow-xl',
                                dark ? 'border-white/10 bg-zinc-900' : 'border-zinc-200 bg-white',
                            )}
                        >
                            {links.map(l => (
                                <a
                                    key={l.id}
                                    href={`#${l.id}`}
                                    aria-current={active === l.id ? 'location' : undefined}
                                    className={cn(
                                        'block rounded-lg px-3 py-2.5 text-sm font-medium',
                                        dark ? 'text-zinc-200 hover:bg-white/10' : 'text-zinc-900 hover:bg-zinc-100',
                                        active === l.id && cn('underline decoration-2 underline-offset-4', dark ? 'bg-white/10' : 'bg-zinc-100'),
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
                        className={cn(
                            'inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl px-4 text-sm font-semibold transition-colors duration-200',
                            dark ? 'bg-white text-zinc-900 hover:bg-zinc-200' : 'bg-zinc-900 text-white hover:bg-zinc-700',
                        )}
                    >
                        <IconCalendar className="size-4" aria-hidden />
                        Book a call
                    </a>
                </div>
            </div>
        </header>
    )
}
