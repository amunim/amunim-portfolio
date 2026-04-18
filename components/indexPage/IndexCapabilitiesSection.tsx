export default function IndexCapabilitiesSection() {
    return (
        <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4">Core Capabilities</h2>
                    <p className="text-on-surface-variant">Engineering solutions designed for precision, reliability, and technical excellence.</p>
                </div>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-outline">01 / TECHNICAL DOMAINS</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-lowest transition-all duration-300">
                    <div className="w-12 h-12 blue-gradient rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>lan</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Scalable Microservices</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Architecting distributed systems with Go, Node.js, and AWS for high-availability SaaS workflows. Focus on concurrency and performance.</p>
                </div>
                <div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-lowest transition-all duration-300">
                    <div className="w-12 h-12 blue-gradient rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Anti-Abuse & Security</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Implementing platform-wide protection using browser fingerprinting, rate-limiting, and backend validations to eliminate automated spam and fraud.</p>
                </div>
                <div className="group bg-surface-container-low p-8 rounded-2xl hover:bg-surface-container-lowest transition-all duration-300">
                    <div className="w-12 h-12 blue-gradient rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>sync_alt</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">High-Concurrency Booking</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">Engineering real-time synchronization engines for complex scheduling across multi-platform integrations (Airbnb, Booking.com, etc.).</p>
                </div>
            </div>
        </section>
    );
}
