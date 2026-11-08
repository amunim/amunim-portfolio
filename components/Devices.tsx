import { cn } from '@/lib/utils'

// A CSS MacBook around a real 2x screenshot: silver aluminium lid, thin black bezel, camera notch,
// hinge line and a base with the front thumb notch. The metal and glare are the only gradients on the page.
export function Laptop({ src, alt, priority, className }: { src: string; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={cn('relative w-full', className)}>
      {/* lid: aluminium shell */}
      <div className="rounded-[1.25rem] bg-gradient-to-b from-zinc-200 to-zinc-300 p-[3px] shadow-2xl ring-1 ring-black/25">
        {/* bezel */}
        <div className="relative rounded-[1.1rem] bg-black p-[1.5%] pb-[1.7%]">
          {/* camera notch */}
          <div className="absolute left-1/2 top-0 z-10 flex h-[3.4%] min-h-3 w-[11%] -translate-x-1/2 items-center justify-center rounded-b-[0.55rem] bg-black" aria-hidden>
            <span className="size-[0.3rem] rounded-full bg-zinc-800 ring-1 ring-sky-950/60" />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-[0.35rem] bg-white">
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
          {/* glass reflection */}
          <div className="pointer-events-none absolute inset-0 rounded-[1.1rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" aria-hidden />
        </div>
      </div>
      {/* hinge seam */}
      <div className="relative z-10 mx-[1%] h-[3px] rounded-b bg-gradient-to-b from-zinc-500 to-zinc-400" aria-hidden />
      {/* base with the thumb notch */}
      <div className="relative -mx-[2.2%] h-[1.05rem] rounded-b-[1.4rem] rounded-t-[3px] bg-gradient-to-b from-zinc-200 to-zinc-300 shadow-lg ring-1 ring-black/15 sm:h-[1.15rem]">
        <div className="absolute inset-x-0 top-0 h-px bg-white/80" aria-hidden />
        <div className="absolute left-1/2 top-0 h-[0.4rem] w-[17%] -translate-x-1/2 rounded-b-xl bg-gradient-to-b from-zinc-400/70 to-zinc-300" aria-hidden />
      </div>
      {/* dark floor shadow: a tight contact shadow under the base plus a wide soft one */}
      <div className="absolute inset-x-[1%] -bottom-3 -z-10 h-4 rounded-[50%] bg-black/80 blur-md" aria-hidden />
      <div className="absolute inset-x-[-2%] -bottom-10 -z-10 h-14 rounded-[50%] bg-black/55 blur-2xl" aria-hidden />
    </div>
  )
}
