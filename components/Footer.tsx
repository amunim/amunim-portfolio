export default function Footer() {
  return (
    <footer className="bg-[#f2f4f6] dark:bg-slate-950 w-full pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="text-lg font-bold text-slate-800 dark:text-slate-200">Portfolio.EXE</div>
        <div className="font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          © 2024 Architectural Engineering. Built with precision.
        </div>
        <div className="flex gap-6">
          <a className="font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4" href="#">LinkedIn</a>
          <a className="font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4" href="#">GitHub</a>
          <a className="font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
}