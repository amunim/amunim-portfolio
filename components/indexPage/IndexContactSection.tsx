import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useEffect } from "react";

export default function IndexContactSection() {
    useEffect(() => {
        (function (C: any, A: string, L: string) {
            function p(a: any, ar: any) { a.q.push(ar); }
            const d = C.document;
            C.Cal = C.Cal || function () {
                const cal = C.Cal;
                const ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api: any = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else {
                        p(cal, ar);
                    }
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const Cal = (window as any).Cal;
        Cal("init", "15min", { origin: "https://cal.com" });
        Cal.ns["15min"]("inline", {
            elementOrSelector: "#cal-inline",
            config: { layout: "month_view", theme: "light" },
            calLink: "amunim/15min",
        });
        Cal.ns["15min"]("ui", {
            cssVarsPerTheme: { light: { "cal-brand": "#5B788F" } },
            hideEventTypeDetails: false,
            layout: "month_view",
        });
    }, []);

    return (
        <section className="mb-32" id="contact">
            <div className="bg-primary text-white rounded-[2rem] p-8 lg:p-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container rounded-full blur-[80px]"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                    <div>
                        <h2 className="text-4xl font-extrabold tracking-tight mb-6">Book a Call</h2>
                        <p className="text-on-primary/80 mb-10 text-lg leading-relaxed">
                            Interested in building a high-performance system or auditing your current architecture? Grab a slot for a technical consultation.
                        </p>
                        <div className="space-y-6">
                            <a href="mailto:amunim@amunim.me" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <span className="material-symbols-outlined text-white">mail</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Email</span>
                                    <span className="font-semibold group-hover:underline">amunim@amunim.me</span>
                                </div>
                            </a>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">Location</span>
                                    <span className="font-semibold">Remote / Pakistan</span>
                                </div>
                            </div>
                            <a href="https://www.linkedin.com/in/abdul-munim-x2002x/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <IconBrandLinkedin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">LinkedIn</span>
                                    <span className="font-semibold group-hover:underline">in/abdul-munim-x2002x</span>
                                </div>
                            </a>
                            <a href="https://github.com/amunim" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <IconBrandGithub className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest">GitHub</span>
                                    <span className="font-semibold group-hover:underline">github.com/amunim</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-2">
                        <div id="cal-inline" className="w-full h-[600px] overflow-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
}
