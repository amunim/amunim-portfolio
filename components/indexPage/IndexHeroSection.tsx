import { IconDownload } from "@tabler/icons-react";
import Badge from "../Badge";

export default function IndexHeroSection() {
    return (
        <section className="flex flex-col items-center text-center pt-16 pb-32 relative">
            <div className="absolute -top-full -left-full inset-0 blueprint-line opacity-20 pointer-events-none w-[200vw]"></div>
            <div className="flex flex-col items-center text-center">
                <div className="relative w-full flex flex-col items-center">
                    {/* Floating Technical UI Elements */}
                    <div className="hidden xl:block absolute inset-0 pointer-events-none">
                        {/* Primary Stack Cluster */}
                        <div className="absolute -top-24 -right-24 bg-white/60 backdrop-blur-md p-4 rounded-xl border border-primary/10 shadow-xl pointer-events-auto">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                <h5 className="text-[9px] font-bold text-outline uppercase tracking-widest">Stack Specification 01</h5>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col items-start px-2 py-1 bg-white border border-surface-container-high rounded-full">
                                    <span className="text-[8px] font-black text-primary opacity-50 uppercase">Framework</span>
                                    <span className="text-[11px] font-bold text-on-surface">Next.js</span>
                                </div>
                                <div className="flex flex-col items-start px-2 py-1 bg-white border border-surface-container-high rounded-full">
                                    <span className="text-[8px] font-black text-primary opacity-50 uppercase">Backend</span>
                                    <span className="text-[11px] font-bold text-on-surface">Node.js</span>
                                </div>
                                <div className="flex flex-col items-start px-2 py-1 bg-white border border-surface-container-high rounded-full">
                                    <span className="text-[8px] font-black text-primary opacity-50 uppercase">Infra</span>
                                    <span className="text-[11px] font-bold text-on-surface">AWS Cloud</span>
                                </div>
                                <div className="flex flex-col items-start px-2 py-1 bg-white border border-surface-container-high rounded-full">
                                    <span className="text-[8px] font-black text-primary opacity-50 uppercase">DB</span>
                                    <span className="text-[11px] font-bold text-on-surface">PostgreSQL / MongoDB</span>
                                </div>
                            </div>
                        </div>

                        {/* Distributed Systems Badge */}
                        <div className="absolute top-[22%] left-[5%] flex items-center gap-3 bg-white border border-primary/20 px-4 py-3 rounded-full shadow-lg pointer-events-auto hover:bg-surface-container-low transition-colors">
                            <div className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </div>
                            <span className="text-[10px] font-bold text-primary tracking-[0.15em] uppercase">Distributed Systems Specialist</span>
                        </div>

                        {/* Webhook Architecture Fragment */}
                        <div className="absolute -bottom-12 right-[5%] bg-white p-5 rounded-2xl shadow-xl border border-primary/5 pointer-events-auto">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-primary text-xl">hub</span>
                                <div className="h-[1px] w-8 bg-primary/20"></div>
                                <span className="material-symbols-outlined text-outline text-xl opacity-50">api</span>
                                <div className="h-[1px] w-8 bg-primary/20"></div>
                                <span className="material-symbols-outlined text-primary text-xl">sync_alt</span>
                            </div>
                            <div className="text-left">
                                <h5 className="text-[10px] font-black text-on-surface uppercase tracking-wider">Live Sync Architecture</h5>
                                <p className="text-[9px] text-outline font-medium mt-1">Multi-platform Webhook Ingestion</p>
                            </div>
                        </div>
                    </div>

                    {/* Headline with System Status Indicator */}
                    <div className="relative inline-block z-10">
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                            <div className="animate-bounce flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full border border-outline/10">
                                <span className="text-[9px] font-bold text-outline-variant uppercase tracking-[0.2em]">Deployment Status: </span>
                                <span className="text-[10px] font-black text-primary uppercase"><div className="animate-pulse bg-primary rounded-full w-2 h-2 content-[' '] inline-block"></div> Optimized</span>
                            </div>
                        </div>
                        <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1] text-on-surface max-w-5xl mb-8">
                            Architecting <br /> Enterprise Resilience.
                        </h1>
                    </div>
                    <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 relative z-10">
                        Senior Software Engineer specializing in high-availability SaaS architectures.
                        Building robust systems that scale with your business needs and technical complexity.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 relative z-10">
                    <a href="/Abdul-Munim-CV.pdf" download="Abdul-Munim-CV.pdf" className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200">
                        <IconDownload className="w-5 h-5" /> Download CV
                    </a>
                    <a href="https://cal.com/amunim/15min" target="_blank" rel="noreferrer" className="bg-white text-on-surface border border-surface-container-high px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-md hover:bg-surface-container-low transition-all duration-200 flex items-center gap-2">
                        <span className="material-symbols-outlined text-xl">calendar_today</span>
                        Book Call
                    </a>
                </div>
            </div>

            {/* Experience & Community Dashboard */}
            <div className="w-full max-w-6xl relative group text-left">
                <div className="absolute -inset-4 bg-gradient-to-b from-primary/10 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
                <div className="relative bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-surface-container-high transform transition-transform duration-700 min-h-[400px]">
                    <div className="flex flex-col md:flex-row h-full">
                        {/* Left Panel: Professional Experience */}
                        <div className="flex-1 p-8 lg:p-12 text-left border-b md:border-b-0 md:border-r border-surface-container">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-primary">terminal</span>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Professional Experience</h3>
                            </div>
                            <div className="space-y-8">
                                <div className="relative pl-6 border-l-2 border-primary/20">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary"></div>
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-lg">iClosed</h4>
                                        <Badge>Present</Badge>
                                    </div>
                                    <p className="text-sm font-semibold text-on-surface-variant">Software Engineer L1</p>
                                    <p className="text-xs text-outline mt-2 leading-relaxed">
                                        Delivered iClosed&apos;s <strong>public API</strong> platform—OAuth, rate limiting, versioned docs, and MCP server—used by <strong>thousands of partners and users</strong> for secure agent-native integrations.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        Integrated device fingerprinting into the booking pipeline, eliminating spam—one customer saw <strong>thousands of fraudulent bookings (IP-rotation-based) drop to zero post-rollout.</strong>
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        Built automatic link previews for every shared event link across <strong>10,000+ events and 1M+ bookings</strong> with AWS CloudFront—no extra infrastructure required.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-primary/10">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <h4 className="font-bold text-lg">Upwork</h4>
                                    <p className="text-sm font-semibold text-on-surface-variant">Independent Contractor</p>
                                    <p className="text-xs text-outline mt-2 leading-relaxed">
                                        <strong>Top Rated</strong> freelancer on Upwork.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>100% job success</strong> score.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>~30 jobs</strong> completed.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>4.89 stars</strong> average client rating.
                                    </p>
                                </div>
                                <div className="relative pl-6 border-l-2 border-primary/10">
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-outline-variant"></div>
                                    <h4 className="font-bold text-lg">Magical Digits</h4>
                                    <p className="text-sm font-semibold text-on-surface-variant">Full Stack Engineer</p>
                                    <p className="text-xs text-outline mt-2 leading-relaxed">
                                        <strong>Platform consolidation:</strong> Replaced all independent ASP.NET codebases with a unified <strong>.NET 6</strong> API and <strong>Next.js</strong> front end serving all brands from one multi-tenant backend.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>Content architecture:</strong> Designed a SQL Server–driven dynamic page and routing model, removing per-property release cycles entirely.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>High-traffic migration:</strong> Transitioned OTA and direct booking flows (peak: thousands/day) with full availability, pricing, and transactional reliability maintained throughout.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>Availability:</strong> Kept the consolidated platform within <strong>four- to five-nines</strong> targets—<strong>99.99%+</strong> to <strong>99.999%</strong> annual uptime on booking and OTA integration surfaces.
                                    </p>
                                    <p className="text-xs text-outline mt-1 leading-relaxed">
                                        <strong>Performance:</strong> ~60% reduction in bespoke markup via shared templating; p95 <strong>API latency improved ~40% on checkout paths.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Panel: Open Source & Community */}
                        <div className="flex-1 p-8 lg:p-12 text-left bg-surface-container-low/30">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-primary">hub</span>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Open Source & Community</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-bold">MediatR</span>
                                        <span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 rounded">CONTRIBUTOR</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">Logic decoupling and mediator pattern implementations for .NET ecosystems.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-bold">Ant Design</span>
                                        <span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 rounded">CONTRIBUTOR</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">UI component refinements and performance optimizations for enterprise React suites.</p>
                                </div>
                                <div className="bg-primary p-6 rounded-xl text-white shadow-lg flex items-center justify-between">
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Stack Overflow</h4>
                                        <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Top 5% Yearly · 1,000+ Rep</p>
                                    </div>
                                    <div className="text-3xl font-black opacity-30">#1</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 mb-8 mt-12">
                                <span className="material-symbols-outlined text-primary">factory</span>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-outline">Enterprise Projects</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-bold">Lotte Chemicals</span>
                                        <span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 rounded">2024</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">Bus In/Out module — QR-based vehicle entry/exit and kilometer logging with voice-assisted guard workflows and role-based admin/guard views, shipped to a live security team. <span className="text-outline">Node.js · React · PostgreSQL · Web Speech API</span></p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-bold">Kia Lucky Motors</span>
                                        <span className="text-[10px] font-black bg-surface-container-highest px-2 py-1 rounded">2024</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant leading-relaxed">Canteen management system — RFID-based attendance and lunch-consumption tracking with role-based dashboards for reporting, deduction management, and audit trails across 500+ daily transactions. <span className="text-outline">Node.js · React · PostgreSQL · RFID API</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex justify-center -skew-x-6">
                <div className="flex items-center gap-2 text-sm font-bold text-outline uppercase tracking-[0.2em] -translate-x-6">
                    &lt;&lt; Architecting Systems That Scale &gt;&gt;
                </div>
            </div>
        </section>
    );
}
