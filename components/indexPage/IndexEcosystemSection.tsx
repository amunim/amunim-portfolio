export default function IndexEcosystemSection() {
    return (
        <section className="mb-32" id="ecosystem">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Engineering Ecosystem</h2>
                    <p className="text-on-surface-variant">Key technical contributions and architectural implementations across major projects.</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-outline">02 / CORE CONTRIBUTIONS</span>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-min">
                {/* iScore Billing Engine - PRIMARY LARGE */}
                <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-lg transition-all group overflow-hidden">
                    <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-wider">Frontend Lead</span>
                                <h3 className="text-2xl font-bold">iScore Billing Engine</h3>
                            </div>
                            <p className="text-base text-on-surface-variant max-w-lg">Redesigning core payment workflows with a focus on high-conversion UI and real-time transaction tracking for enterprise-scale billing.</p>
                        </div>
                        <div className="flex -space-x-2 shrink-0">
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm"><img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5SKZFCj9W-uofxKZ-5-8eALo4dFI9e_OKQy_ZJ4lGd1YaKZyUjj1szhFGmwYsnatYcwTCIuw6O1QCLinlcRuCiviPQ0ljBbmUTrb39wJ8AVI65okYcuJ2brHjLufRFmPhA8W206QaXniqhBWwaISXEjA-MpWOqnJ7-P6XOtUXfgq5_GodqQhbx7urJa6gI7DlCwPZi3m8JsdGMSG8UQDc6Moh-NTqUcn5wpva_8Zf38t8nZoMj6qlwybD_1Lu12iBQhmbZlZ-TXM" /></div>
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden shadow-sm"><img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhrupJYJIB3sUYyfmar_n3kADfksQT8f4sUBkD8Q6E_N-1I57TNCmPx95NqUoRqZVMKuxyqao7Rby-HnaEVF7xPH9hDOU5uiCRXiYk98PFU7gNFe73zWpJTwwVXA_p-wpvr7GUAYebBbnRxF1p7DjYJGHnLaNDwSNdLl2z7xgsJovP10et3-yLd2xvx-18kzRoaeXyQ1h8QCz6VTTnnEkZD3HGm-H3N-wjNI_U5g-eV7Z2DYfJ5XolZ-BVQo_jCVd1X8I_-05X93Y" /></div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 bg-surface-container-low/50 p-6 rounded-2xl border border-surface-container mt-auto">
                        <div className="flex-1">
                            <div className="flex justify-between text-xs font-bold text-outline mb-2 uppercase tracking-tight"><span>Transaction Success Rate</span><span>99.98%</span></div>
                            <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[99%] group-hover:w-full transition-all duration-1000"></div>
                            </div>
                        </div>
                        <div className="h-10 w-px bg-surface-container"></div>
                        <div className="text-center px-4">
                            <div className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Avg. Latency</div>
                            <div className="text-2xl font-black text-primary">42ms</div>
                        </div>
                    </div>
                </div>

                {/* Double-Sync Booking - PRIMARY TALL */}
                <div className="md:col-span-2 md:row-span-2 bg-primary rounded-3xl p-8 text-white flex flex-col justify-between hover:scale-[1.02] transition-all shadow-lg relative overflow-hidden group">
                    <div className="relative z-10">
                        <div className="text-[10px] font-bold bg-white/20 w-fit px-2 py-0.5 rounded mb-6 tracking-widest">AVAILABILITY</div>
                        <h3 className="text-3xl font-extrabold leading-tight mb-4">Double-Sync Engine</h3>
                        <p className="text-sm font-medium opacity-90 leading-relaxed">Architecting real-time synchronization across Airbnb, Booking.com, and custom platforms to eliminate overbooking risks for property managers.</p>
                    </div>
                    <div className="relative z-10 mt-12 mb-8">
                        <div className="flex items-center justify-center gap-8 py-10 border-y border-white/10 group-hover:bg-white/5 transition-colors rounded-xl">
                            <span className="material-symbols-outlined text-5xl opacity-50">home_work</span>
                            <div className="flex flex-col items-center gap-2">
                                <span className="material-symbols-outlined text-3xl animate-pulse">sync_alt</span>
                                <span className="text-[10px] font-bold opacity-70 tracking-widest uppercase">Live Sync</span>
                            </div>
                            <span className="material-symbols-outlined text-5xl opacity-50">hotel</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Last Sync: 120ms ago</span>
                    </div>
                    <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-[180px]">sync</span>
                    </div>
                </div>

                {/* Unified SaaS Inbox */}
                <div className="md:col-span-4 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow group">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-wider">iCLOSED</span>
                            <h3 className="text-xl font-bold">Unified SaaS Inbox</h3>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">System Online</span>
                        </div>
                    </div>
                    <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">Built a unified communication hub with React/TypeScript and Express, optimizing for real-time state synchronization across distributed clients.</p>
                    <div className="flex gap-4 items-center mt-auto">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-outline uppercase tracking-widest whitespace-nowrap">
                            <span className="material-symbols-outlined text-sm">sync</span> Real-time Engine
                        </div>
                        <div className="h-1.5 flex-1 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[92%]"></div>
                        </div>
                    </div>
                </div>

                {/* Zid Sheets */}
                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded tracking-wide uppercase">Middleware</span>
                                <h3 className="text-xl font-bold">Zid Sheets</h3>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed max-w-[85%]">A complete middleware solution for Zid customers to map orders, products, and customers to Google Sheets via secure webhooks.</p>
                        </div>
                        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                            <span className="material-symbols-outlined text-primary text-3xl">table_chart</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low text-[10px] font-bold text-primary border border-primary/10 rounded-full">
                            <span className="material-symbols-outlined text-base">bolt</span> ZAPIER-LIKE
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-low text-[10px] font-bold text-primary border border-primary/10 rounded-full">
                            <span className="material-symbols-outlined text-base">hub</span> DATA MAPPING
                        </div>
                    </div>
                </div>

                {/* Lotte Chemicals */}
                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow border-l-4 border-l-primary group">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-[10px] font-bold bg-surface-container-highest text-outline px-2 py-0.5 rounded tracking-wide uppercase">LOTTE</span>
                                <h3 className="text-lg font-bold leading-tight">Industrial Logistics</h3>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed">Streamlining warehouse security via QR integration and voice-assisted logging.</p>
                        </div>
                        <span className="material-symbols-outlined text-primary text-3xl shrink-0 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_2</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        <div className="flex items-center gap-1 px-2 py-1 bg-surface-container-low text-[9px] font-bold text-outline border border-surface-container uppercase rounded-full">
                            <span className="material-symbols-outlined text-sm">mic</span> Voice-Log
                        </div>
                        <div className="flex items-center gap-1 px-2 py-1 bg-surface-container-low text-[9px] font-bold text-outline border border-surface-container uppercase rounded-full">
                            <span className="material-symbols-outlined text-sm">verified_user</span> QR-Auth
                        </div>
                    </div>
                </div>

                {/* Enterprise Auth */}
                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded tracking-wide uppercase">SECURITY</span>
                        <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>fingerprint</span>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Enterprise Auth</h3>
                        <p className="text-xs text-on-surface-variant leading-relaxed">Advanced Anti-Abuse Shield. Protecting core APIs with idempotent request handling and multi-layer validation.</p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-surface-container">
                        <div className="flex items-center justify-between text-[10px] font-bold text-outline uppercase tracking-widest">
                            <span>Shield v1.2</span>
                            <span className="flex items-center gap-1.5 text-primary font-black"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> VERIFIED</span>
                        </div>
                    </div>
                </div>

                {/* Canteen Tracking */}
                <div className="md:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-surface-container-high flex flex-col justify-between hover:shadow-md transition-shadow group">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center border border-surface-container shrink-0 group-hover:border-primary/30 transition-colors">
                            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>contactless</span>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded tracking-wide uppercase">KIA</span>
                                <h3 className="text-lg font-bold">Canteen Tracking</h3>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed">RFID consumption tracking for 5,000+ daily employees.</p>
                        </div>
                    </div>
                    <div className="space-y-2 mt-auto">
                        <div className="flex justify-between text-[9px] font-bold text-outline uppercase tracking-widest">
                            <span>Active Users</span>
                            <span>88% Capacity</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="h-1.5 bg-primary rounded-full"></div>
                            <div className="h-1.5 bg-primary rounded-full"></div>
                            <div className="h-1.5 bg-primary/20 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
