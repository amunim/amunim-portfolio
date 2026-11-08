import { IconBrandAws, IconBrandCSharp, IconBrandFigma, IconBrandGoogle, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandReact, IconBrandTypescript, IconDatabase, IconMapPin, IconNotes, IconStarFilled, IconTable, IconWorld } from '@tabler/icons-react';
import Image from 'next/image';
import Badge from '../Badge';

export default function IndexCaseStudiesSection() {
    return (
        <section className="mb-32" id="experience">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Highlighted Projects</h2>
                    <p className="text-on-surface-variant">Real-world systems deployed for venture-backed startups and enterprise clients.</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-outline">04 / PORTFOLIO</span>
            </div>

            <div className="space-y-16">
                {/* iClosed Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="order-2 lg:order-1 col-span-1 lg:col-span-2 mb-6">
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-x-2"><IconMapPin className="shrink-0" stroke={1.75} /> <Badge>2025 - Present</Badge> Full Stack Engineer</h3>
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
                            <li>Built iClosed's <strong>public API</strong> platform — OAuth 2.0, rate limiting, versioned OpenAPI/Swagger docs, and an MCP server — now serving <strong>10,000+ partners</strong> and processing <strong>1M+ API requests/week</strong> for secure, agent-native integrations.</li>
                            <li>Integrated device fingerprinting into the booking pipeline, eliminating spam — one customer saw <strong>thousands of fraudulent bookings (IP-rotation-based) drop to zero post-rollout.</strong></li>
                            <li>Built AWS CloudFront–based OG link previews (the rich cards that appear when sharing links on Slack, Twitter, etc.) across <strong>10,000+ events and 1M+ bookings</strong>, improving SEO discoverability — no extra infrastructure required.</li>
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

                {/* Cast Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="Cast — MCP server analytics dashboard" className="w-full h-auto" src="/portfolio/cast.svg" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-x-2"><Badge>2025 - Present</Badge> Founder &amp; Full Stack Engineer</h3>
                        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between overflow-visible sm:justify-start sm:items-center">
                            <h4 className="inline-flex items-center gap-x-2 text-3xl font-extrabold tracking-tight w-full min-[500px]:w-auto">
                                <Image src="/images/cast-icon.svg" alt="Cast" width={50} height={50} />
                                Cast
                            </h4>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://getcast.io">
                                <IconWorld className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View Cast
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://getcast.io/demo">
                                <IconNotes className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                Try demo
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                        </div>
                        <p className="text-on-surface-variant mb-3 leading-relaxed">
                            Turn any API into a production, agent-ready MCP server — no OAuth/DCR work required. Key contributions include:
                        </p>
                        <ul className="text-sm text-on-surface-variant mb-8 list-disc space-y-3 pl-5 leading-relaxed marker:text-on-surface-variant">
                            <li><strong>Spec-to-server pipeline:</strong> Built the full flow that turns any <strong>OpenAPI/Swagger</strong> spec into a hosted MCP server in minutes — auto-generating tool definitions and endpoints, then provisioning isolated servers on <strong>AWS ECS</strong>.</li>
                            <li><strong>Real-time analytics suite:</strong> Shipped a unified dashboard across all of a customer's MCP servers — tool-call logs, latency, error monitoring by status code, top tools, request health, and geographic demographics.</li>
                            <li><strong>Pattern Intelligence:</strong> Engineered sequence mining that detects common tool-call chains and auto-suggests reusable agent <strong>SKILL.md</strong> workflows (e.g. an Order Lookup Flow at <strong>94% confidence</strong>).</li>
                            <li><strong>Granular governance:</strong> Per-tool enable/disable plus scope and custom-parameter injection at both workspace and tool level, and a custom-domains system with automated <strong>ACM</strong> cert validation and <strong>ALB</strong> host-header routing.</li>
                            <li><strong>Hardened for multi-tenant scale:</strong> <strong>AES-256-GCM</strong> secret encryption, <strong>Redis</strong>-backed distributed rate limiting (fail-open), soft-delete lifecycle, and plan-gated billing.</li>
                        </ul>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandTypescript className="shrink-0" stroke={1.75} /> TypeScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNextjs className="shrink-0" stroke={1.75} /> Next.js 15</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandReact className="shrink-0" stroke={1.75} /> React</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNodejs className="shrink-0" stroke={1.75} /> Node.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className="shrink-0" stroke={1.75} /> Prisma / MySQL</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className="shrink-0" stroke={1.75} /> Redis</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandAws className="shrink-0" stroke={1.75} /> AWS ECS / S3 / ACM</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><Image width={25} height={25} src={'/images/microservices.svg'} alt='MCP' className='outline-2 shrink-0' /> MCP</span>
                        </div>
                    </div>
                </div>

                {/* ZidSheets Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="ZidSheets — Zid to Google Sheets integration" className="w-full h-auto" src="/portfolio/zid-sheets.png" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-x-2"><Badge>2024 - Present</Badge> INDEPENDENT PROJECT</h3>
                        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between overflow-visible sm:justify-start sm:items-center">
                            <h4 className="inline-flex items-center gap-x-2 text-3xl font-extrabold tracking-tight w-full min-[500px]:w-auto">
                                <span className="inline-flex size-[50px] shrink-0 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#166534]" aria-hidden>
                                    <Image src="/portfolio/zid-sheets.webp" alt="logo" width={50} height={50} />
                                </span>
                                ZidSheets
                            </h4>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://zidsheets.amunim.me/">
                                <IconWorld className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View product site
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://web.zid.sa/market/app/4774">
                                <IconNotes className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                Zid marketplace listing
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                        </div>
                        <p className="text-on-surface-variant mb-3 leading-relaxed">
                            Key contributions include:
                        </p>
                        <ul className="text-sm text-on-surface-variant mb-8 list-disc space-y-3 pl-5 leading-relaxed marker:text-on-surface-variant">
                            <li><strong>Low-code data plane:</strong> Shipped a <strong>3-step</strong> merchant flow (connect → map fields → automate) so non-developers wire Zid to Sheets in minutes instead of custom scripts.</li>
                            <li><strong>Entity coverage:</strong> Built exports for <strong>4</strong> operational domains—<strong>orders, customers, carts,</strong> and <strong>product catalog</strong>—into user-selected workbooks with column-level mapping.</li>
                            <li><strong>Sync modes:</strong> Combined secure webhooks with on-demand pulls so teams can run <strong>3</strong> complementary paths—<strong>manual</strong> export, <strong>scheduled</strong> jobs, and <strong>event-driven</strong> pushes—from one configuration surface.</li>
                            <li><strong>Localization:</strong> Delivered <strong>2</strong> full UI locales (<strong>English + Arabic</strong>) including RTL layout, aimed at MENA operators on Zid.</li>
                            {/* <li><strong>Commercial packaging:</strong> Published on the Zid app marketplace as listing <strong>#4774</strong> with a <strong>14-day</strong> free trial and positioning up to <strong>2.5×</strong> lower cost than general-purpose automation tools (per public pricing page).</li> */}
                        </ul>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandTypescript className="shrink-0" stroke={1.75} /> TypeScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNextjs className="shrink-0" stroke={1.75} /> Next.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNodejs className="shrink-0" stroke={1.75} /> Node.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandGoogle className="shrink-0" stroke={1.75} /> Google APIs / OAuth</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className="shrink-0" stroke={1.75} /> Webhooks &amp; sync jobs</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><Image width={25} height={25} src={'/images/microservices.svg'} alt='Microservices' className='outline-2 shrink-0' /> Microservices</span>
                        </div>
                    </div>
                </div>

                {/* Upwork */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="Upwork profile" className="w-full h-auto" src="/portfolio/upwork.svg"/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4 flex items-center gap-x-2"><Badge>Top Rated</Badge> Freelance</h3>
                        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between overflow-visible sm:justify-start sm:items-center">
                            <h4 className="inline-flex items-center gap-x-2 text-3xl font-extrabold tracking-tight w-full min-[500px]:w-auto">
                                <span className="p-0.5 inline-flex size-[50px] shrink-0 items-center justify-center rounded-xl bg-[#e8f5e9] text-[#1b5e20] text-base font-extrabold" aria-hidden>
                                    Up
                                </span>
                                Upwork
                            </h4>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://www.upwork.com/freelancers/~016f42c0501a199670">
                                <IconWorld className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View Upwork profile
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                        </div>
                        <p className="text-on-surface-variant mb-3 leading-relaxed">
                            Highlights:
                        </p>
                        <ul className="text-sm text-on-surface-variant mb-8 list-disc space-y-3 pl-5 leading-relaxed marker:text-on-surface-variant">
                            <li><strong>Top Rated</strong> freelancer on Upwork.</li>
                            <li><strong>100% job success</strong> score.</li>
                            <li><strong>~30 jobs</strong> completed.</li>
                            <li><strong>4.89 stars</strong> average client rating.</li>
                        </ul>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandTypescript className="shrink-0" /> TypeScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandJavascript className="shrink-0" /> JavaScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandReact className="shrink-0" /> React</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNodejs className="shrink-0" /> Node.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNextjs className="shrink-0" /> Next.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><Image width={25} height={25} src="/images/microservices.svg" alt="Microservices" className="outline-2 shrink-0" /> Microservices</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className="shrink-0" /> PostgreSQL/MongoDB</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandAws className="shrink-0" /> AWS</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandFigma className="shrink-0" /> Figma</span>
                        </div>
                    </div>
                </div>

                {/* goldenerinns Case Study */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">
                    <div className="bg-surface-container-low p-6 rounded-3xl">
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img alt="goldenerinns.com Screenshot" className="w-full h-auto" src="/portfolio/goldenerinns.svg"/>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-primary tracking-widest uppercase mb-4"><Badge>2021 - 2022</Badge> Full Stack Engineer</h3>
                        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 items-center justify-between overflow-visible sm:justify-start sm:items-center">
                            <h4 className="inline-flex items-center gap-x-1 text-3xl font-extrabold tracking-tight w-full min-[500px]:w-auto"><Image src="/portfolio/magical-digits.png" alt="Magical Digits" width={50} height={50} /> Magical Digits</h4>
                            <a className="inline-flex gap-x-1 items-center text-primary font-bold hover:underline" target="_blank" rel="noreferrer" href="https://goldenerinns.com">
                                <IconWorld className="size-1 shrink-0" aria-hidden stroke={1.75} />
                                View Live Site
                                <span className="material-symbols-outlined text-sm">north_east</span>
                            </a>
                        </div>
                        <p className="text-on-surface-variant mb-3 leading-relaxed">
                            Project Highlights:
                        </p>
                        <ul className="text-sm text-on-surface-variant mb-8 list-disc space-y-3 pl-5 leading-relaxed marker:text-on-surface-variant">
                            <li><strong>Platform consolidation:</strong> Replaced all independent ASP.NET codebases with a unified <strong>.NET 6</strong> API and <strong>Next.js</strong> front end serving all brands from one multi-tenant backend.</li>
                            <li><strong>Content architecture:</strong> Designed a SQL Server–driven dynamic page and routing model, removing per-property release cycles entirely.</li>
                            <li><strong>High-traffic migration:</strong> Transitioned OTA and direct booking flows (peak: thousands/day) with full availability, pricing, and transactional reliability maintained throughout.</li>
                            <li><strong>Availability:</strong> Kept the consolidated platform within <strong>four- to five-nines</strong> targets — <strong>99.99%+</strong> to <strong>99.999%</strong> annual uptime on booking and OTA integration surfaces.</li>
                            <li><strong>Performance:</strong> ~60% reduction in bespoke markup via shared templating; p95 <strong>API latency improved ~40% on checkout paths.</strong></li>
                        </ul>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandJavascript className="shrink-0" /> JavaScript</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandCSharp className="shrink-0" /> C# / .NET 6</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconDatabase className="shrink-0" /> SQL Server</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNodejs className="shrink-0" /> Node.js</span>
                            <span className="px-2 inline-flex items-center gap-x-1 py-1 bg-surface-container text-xs font-bold text-primary rounded"><IconBrandNextjs className="shrink-0" /> Next.js</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
