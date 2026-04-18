import { IconBrandAws, IconBrandFigma, IconBrandJavascript, IconBrandNodejs, IconBrandReact, IconBrandTypescript, IconDatabase, IconNotes, IconWorld } from '@tabler/icons-react';
import Image from 'next/image';

export default function IndexCaseStudiesSection() {
    return (
        <section className="mb-32" id="experience">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Highlighted Projects</h2>
                    <p className="text-on-surface-variant">Real-world systems deployed for venture-backed startups and enterprise clients.</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-outline">03 / PORTFOLIO</span>
            </div>

            <div className="space-y-16">
                {/* iClosed Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="order-2 lg:order-1 col-span-1 lg:col-span-2 mb-6">
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Full Stack Engineer</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between overflow-visible sm:justify-start sm:items-center">
                            <h4 className="inline-flex items-center gap-x-1 text-3xl font-extrabold tracking-tight w-full min-[500px]:w-auto"><Image src="/images/iclosed-dark.svg" alt="iclosed.io" width={50} height={50} /> iClosed.io</h4>

                            <a className="inline-flex items-center gap-x-1 text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://developer.iclosed.io">
                                <IconNotes className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View Documentation
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                            <a className="inline-flex gap-x-1 text-primary font-bold hover:underline" target="_blank" href="https://iclosed.io">
                                <IconWorld className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View iClosed <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                        </div>
                    </div>
                    <div className="order-3 lg:order-2">
                        <p className="text-on-surface-variant mb-3 leading-relaxed">
                            Key contributions include:
                        </p>
                        <ul className="text-sm text-on-surface-variant mb-8 list-disc space-y-3 pl-5 leading-relaxed marker:text-on-surface-variant">
                            <li>Delivered iClosed's public API platform — OAuth, rate limiting, versioned docs, and MCP server — now used by <strong>thousands of partners and users</strong> for secure agent-native integrations.</li>
                            <li>Integrated device fingerprinting into the booking pipeline, eliminating spam — one customer saw <strong>thousands of fraudulent bookings (IP-rotation-based) drop to zero post-rollout.</strong></li>
                            <li>Built automatic link previews (the rich cards that appear when sharing links on Slack, Twitter, etc.) or every shared event link across <strong>10,000+ events and 1M+ bookings</strong>, using AWS CloudFront — no extra infrastructure required.</li>
                            <li>Implemented pixel-perfect Figma-to-React across diverse product domains — unified inbox, iScore, and the core global data module.</li>
                        </ul>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandTypescript className="shrink-0" /> TypeScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandJavascript className="shrink-0" />JavaScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandReact className='shrink-0' /> React</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNodejs className='shrink-0' /> Node.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><Image width={25} height={25} src={'/images/microservices.svg'} alt='Microservices' className='outline-2 shrink-0' /> Microservices</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className='shrink-0' /> PostgreSQL/MongoDB</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandAws className='shrink-0' /> AWS</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandFigma className='shrink-0' /> Figma</span>
                        </div>
                        <div className='inline-flex items-center gap-x-4'>
                        </div>
                    </div>
                    <div className="order-1 lg:order-3 bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="iclosed.io Screenshot" className="w-full h-auto" src="/portfolio/iclosed.svg" />
                        </div>
                    </div>
                </div>

                {/* goldenerinns Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="goldenerinns.com Screenshot" className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBURC2CSoMDX6CaX573cS5N-SxALl2s0TMZcmmV_U2wm_57H95cRRK9vLxy3gi3BMa9H8Zheyj1ZMwh6wEDvW6jtEY1fE3Tp_jmiUcSNqnqN2HU9DE-5UHYblFKOwPSHp4cNKgiasvNQlMnHtz2QrDwDXnKmXVvUc4IKGtbcZFFme_yHqHa2141WnDVCdDJXWSilc-5LaILruLFs2CUSd-P0ooG0kuzQrkZWqtAyVXrP9B8zY2sL6oAwbkFSVdY0O-ricOlbNhug9c" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">Frontend Lead</h3>
                        <h4 className="text-3xl font-extrabold mb-6 tracking-tight">goldenerinns.com</h4>
                        <p className="text-on-surface-variant mb-8 leading-relaxed">
                            Developed a highly interactive UI for a logistics management system. Focused on state management optimization and reducing bundle sizes by 45%.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-3 py-1 bg-surface-container text-xs font-bold text-outline-variant rounded">React</span>
                            <span className="px-3 py-1 bg-surface-container text-xs font-bold text-outline-variant rounded">TypeScript</span>
                            <span className="px-3 py-1 bg-surface-container text-xs font-bold text-outline-variant rounded">Vite</span>
                        </div>
                        <a className="inline-flex items-center gap-2 text-primary font-bold hover:underline" href="#">
                            View Live Site <span className="material-symbols-outlined text-sm">north_east</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
