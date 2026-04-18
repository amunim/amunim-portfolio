export default function IndexContactSection() {
    return (
        <section className="mb-32" id="contact">
            <div className="bg-primary text-white rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container rounded-full blur-[80px]"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-6">Initialize Conversation</h2>
                        <p className="text-on-primary/80 mb-10 text-lg leading-relaxed">
                            Interested in building a high-performance system or auditing your current architecture? Reach out for a technical consultation.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white">mail</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Email</span>
                                    <span className="font-semibold">engineering@portfolio.exe</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Location</span>
                                    <span className="font-semibold">Remote / San Francisco</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl">
                        <form action="#" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Full Name</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface placeholder-outline-variant" placeholder="John Doe" type="text" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Work Email</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface placeholder-outline-variant" placeholder="john@company.com" type="email" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Subject</label>
                                <select className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface">
                                    <option>System Architecture Audit</option>
                                    <option>Product Development</option>
                                    <option>Scalability Consulting</option>
                                    <option>Other Enquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Message</label>
                                <textarea className="w-full bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary text-on-surface placeholder-outline-variant" placeholder="Describe the project scope or technical challenges..." rows={4}></textarea>
                            </div>
                            <button className="w-full py-4 blue-gradient text-white font-extrabold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1" type="submit">
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
