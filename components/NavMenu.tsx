export default function NavMenu() {
    return (
        <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl mt-6 mx-auto w-[90%] max-w-5xl sticky top-6 z-50 flex justify-between items-center px-8 py-4 shadow-xl dark:shadow-2xl border border-white/20">
            <div className="text-xl font-black text-slate-900 dark:text-white tracking-tighter">Portfolio.EXE</div>
            <div className="hidden md:flex gap-8 items-center">
                <a className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#experience">Experience</a>
                <a className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#ecosystem">Ecosystem</a>
                <a className="font-['Manrope'] font-bold tracking-tight text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors hover:scale-105 duration-200" href="#contact">Get in Touch</a>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-all duration-200">Resume</button>
        </nav>
    );
}