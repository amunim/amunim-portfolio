import { IconCalendar, IconCalendarEvent, IconCheck, IconDownload, IconKey } from '@tabler/icons-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { CAL_URL } from '../NavMenu'

// Hero decoration: a dot grid, a soft glow and a loose cluster of small pieces that echo the work
// (API call, booking event, time slots, rate limit, OAuth). Illustrations only (aria-hidden), wide screens only.
// The pieces are static: depth comes from shadows alone, with no borders, motion or hover effects.

function Piece({ className, tilt, children }: { className: string; tilt: string; children: ReactNode }) {
    return (
        <div className={cn('absolute', className)}>
            <div className={tilt}>{children}</div>
        </div>
    )
}

function CurlSnippet() {
    return (
        <div className="w-60 rounded-xl bg-zinc-900 p-3.5 font-mono text-[11px] leading-5 text-zinc-300 shadow-2xl">
            <p>
                <span className="text-zinc-500">$</span> curl -X GET /v1/events
            </p>
            <p className="text-emerald-400">200 OK</p>
            <p className="text-zinc-400">{'{ "data": [ … ] }'}</p>
        </div>
    )
}

function BookingToast() {
    return (
        <div className="flex w-52 items-center gap-3 rounded-2xl bg-white p-3 shadow-2xl">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-blue-600 text-white">
                <IconCalendarEvent className="size-5" stroke={1.75} />
            </span>
            <span className="text-xs">
                <span className="block font-semibold text-zinc-900">New booking</span>
                <span className="text-zinc-500">Fri, 3:30 PM</span>
            </span>
        </div>
    )
}

function SlotPicker() {
    return (
        <div className="w-52 rounded-2xl bg-white p-3 shadow-xl">
            <p className="mb-2 text-xs font-semibold text-zinc-900">Pick a time</p>
            <div className="grid grid-cols-3 gap-1.5">
                {['9:00', '9:30', '10:00'].map(s => (
                    <span key={s} className="rounded-lg bg-zinc-100 py-1.5 text-center text-xs font-medium text-zinc-700">
                        {s}
                    </span>
                ))}
            </div>
        </div>
    )
}

function RateMeter() {
    return (
        <div className="w-40 rounded-xl bg-white p-3 shadow-xl">
            <p className="text-xs font-medium text-zinc-500">Rate limit</p>
            <div className="mt-2 flex items-end gap-1.5">
                {[10, 14, 18, 22, 26, 30].map(h => (
                    <span key={h} className="w-3 rounded-full bg-blue-600" style={{ height: h }} />
                ))}
            </div>
        </div>
    )
}

function OAuthChip() {
    return (
        <span className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-3 pr-2 text-xs font-medium text-zinc-700 shadow-lg">
            <IconKey className="size-3.5 text-blue-600" stroke={2} />
            OAuth 2.0
            <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-white">
                <IconCheck className="size-3" stroke={3} />
            </span>
        </span>
    )
}

export default function IndexHeroSection() {
    return (
        <section id="intro" aria-labelledby="hero-title" className="relative overflow-hidden bg-zinc-50 pb-20 pt-14 sm:pt-20">
            {/* backdrop: faint dot grid fading out from the headline, plus a soft blue glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:22px_22px] [-webkit-mask-image:radial-gradient(ellipse_65%_75%_at_50%_35%,#000_30%,transparent_100%)] [mask-image:radial-gradient(ellipse_65%_75%_at_50%_35%,#000_30%,transparent_100%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[56rem] max-w-full -translate-x-1/2 [background:radial-gradient(closest-side,rgb(37_99_235/0.09),transparent)]"
            />

            {/* a loose cluster close to the headline, at different heights and angles (wide screens only) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 hidden xl:block">
                <Piece className="right-[calc(50%+23rem)] top-10" tilt="-rotate-3">
                    <CurlSnippet />
                </Piece>
                <Piece className="right-[calc(50%+25rem)] top-[17.5rem]" tilt="rotate-2">
                    <BookingToast />
                </Piece>
                <Piece className="left-[calc(50%+25.5rem)] top-[9rem]" tilt="rotate-3">
                    <SlotPicker />
                </Piece>
                <Piece className="left-[calc(50%+28rem)] top-5" tilt="-rotate-2">
                    <RateMeter />
                </Piece>
                <Piece className="left-[calc(50%+23.5rem)] top-[19.5rem]" tilt="-rotate-2">
                    <OAuthChip />
                </Piece>
            </div>

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl">
                        Software engineer building APIs, integrations and booking systems
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
                        I&apos;m Abdul Munim. At iClosed I built the public API and MCP server. I also founded Cast, and I freelance on Upwork as a Top Rated developer.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a
                            href={CAL_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex h-12 items-center gap-2 rounded-xl bg-zinc-900 px-6 font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700"
                        >
                            <IconCalendar className="size-5" aria-hidden />
                            Book a call
                        </a>
                        <a
                            href="/Abdul-Munim-CV.pdf"
                            download="Abdul-Munim-CV.pdf"
                            className="inline-flex h-12 items-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 font-semibold transition-colors hover:bg-zinc-100"
                        >
                            <IconDownload className="size-5" aria-hidden />
                            Download CV
                        </a>
                    </div>
                    <p className="mt-6 flex items-center justify-center gap-2 text-sm text-zinc-600">
                        <span className="size-2 rounded-full bg-emerald-500" aria-hidden />
                        Upwork: Top Rated, 100% job success, about 30 jobs, 4.89 stars
                    </p>
                </div>
            </div>
        </section>
    )
}
