import { cn } from '@/lib/utils'

// A CSS laptop around a real 2x screenshot. The glare and the shadow are the only gradients on the page.
export function Laptop({ src, alt, priority, className }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* lid */}
      <div className="rounded-[1.25rem] bg-zinc-700 p-[3px] shadow-2xl ring-1 ring-black/20">
        <div className="relative rounded-[1.1rem] bg-zinc-950 p-[2.2%] pb-[2.6%]">
          <span className="absolute left-1/2 top-[1.1%] size-1.5 -translate-x-1/2 rounded-full bg-zinc-700" aria-hidden />
          <div className="aspect-[16/10] overflow-hidden rounded-md bg-white">
            <img
              src={src}
              alt={alt}
              width={2560}
              height={1600}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="size-full object-cover object-top"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] bg-gradient-to-br from-white/15 via-transparent to-transparent" aria-hidden />
        </div>
      </div>
      {/* base */}
      <div className="relative -mx-[2.5%] h-[1.1rem] rounded-b-[1.4rem] rounded-t-[2px] bg-zinc-300 shadow-lg ring-1 ring-black/10 sm:h-5">
        <div className="absolute inset-x-0 top-0 h-px bg-white/70" aria-hidden />
        <div className="absolute left-1/2 top-0 h-1.5 w-[16%] -translate-x-1/2 rounded-b-lg bg-zinc-400" aria-hidden />
      </div>
      <div className="absolute inset-x-[6%] -bottom-8 -z-10 h-10 rounded-[50%] bg-zinc-900/30 blur-2xl" aria-hidden />
    </div>
  )
}
