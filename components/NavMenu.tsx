import { IconDownloadFilled } from "@tabler/icons-react";

export default function NavMenu() {
    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href")?.replace("#", "");
        if (!targetId) return;

        document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl mt-6 mx-auto w-[90%] max-w-5xl sticky top-6 z-50 flex justify-between items-center px-8 py-4 shadow-xl dark:shadow-2xl border border-white/20">
            <div className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">AMunim.me</div>
            <div className="hidden md:flex gap-8 items-center">
                <a onClick={handleSmoothScroll} className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#experience">Experience</a>
                <a onClick={handleSmoothScroll} className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#ecosystem">Ecosystem</a>
                <a onClick={handleSmoothScroll} className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#contact">Get in Touch</a>
            </div>
            <a href="/Abdul-Munim-CV.pdf" download="Abdul-Munim-CV.pdf" className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-1"><IconDownloadFilled className="w-4 h-4" /> Resume</a>
        </nav>
    );
}