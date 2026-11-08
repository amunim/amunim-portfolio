import { IconCalendar, IconDownload } from '@tabler/icons-react'
import { CAL_URL } from '../NavMenu'

export default function IndexHeroSection() {
    return (
        <section id="intro" aria-labelledby="hero-title" className="bg-zinc-50 pb-20 pt-14 sm:pt-20">
            <div className="mx-auto max-w-6xl px-6">
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
