export default function IndexMetricsSection() {
    return (
        <section className="mb-16">
            <div className="bg-primary p-1 rounded-3xl shadow-xl">
                <div className="bg-primary border border-white/10 rounded-[1.4rem] px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
                    <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left">
                        <span className="text-4xl font-extrabold tracking-tighter">100%</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Job Success (Upwork Top Rated)</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left border-t sm:border-t-0 sm:border-l border-white/10 pt-8 sm:pt-0 sm:pl-12">
                        <span className="text-4xl font-extrabold tracking-tighter">1M+</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Users Across Platforms</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                        <span className="text-4xl font-extrabold tracking-tighter">100k+</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Attacks Blocked (Anti-Abuse)</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center lg:items-start text-center lg:text-left border-t sm:border-t-0 lg:border-t-0 sm:border-l lg:border-l border-white/10 pt-8 sm:pt-0 lg:pt-0 sm:pl-12 lg:pl-12">
                        <span className="text-4xl font-extrabold tracking-tighter">$10M+</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Processed via Idempotent Billing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
