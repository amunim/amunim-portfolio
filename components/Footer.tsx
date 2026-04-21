import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-[#f2f4f6] dark:bg-slate-950 w-full pt-16 pb-8">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto space-y-4 md:space-y-0">
        <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
          AMUNIM.ME
        </div>
        <div className="font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
          © 2026 Software Engineering. Built with precision.
        </div>
        <div className="flex gap-6">
          <a
            className="flex justify-center gap-x-2 font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandLinkedin className="w-5 h-5" /> LinkedIn
          </a>
          <a
            className="flex justify-center gap-x-2 font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <IconBrandGithub className="w-5 h-5" /> GitHub
          </a>
          <a
            className="flex justify-center gap-x-2 font-['Inter'] text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400 opacity-80 hover:opacity-100 transition-opacity underline decoration-[#5B788F] decoration-2 underline-offset-4"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <IconMail className="w-5 h-5" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
