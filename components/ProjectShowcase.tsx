import * as Tabs from '@radix-ui/react-tabs'
import { IconArrowUpRight, IconCheck } from '@tabler/icons-react'
import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'
import { Laptop } from './Devices'
import { slides, type Slide } from './indexPage/showcaseData'

const STAGES = [
  'Notification received from Zid',
  'Matched to the right tenant',
  'Mapped to the sheet columns',
  'Row delivered to Google Sheets',
]

function Flow({ flow, active }: { flow: NonNullable<Slide['flow']>; active: boolean }) {
  const node = 'rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium shadow-sm'
  return (
    <div className="mt-6 max-w-lg" role="img" aria-label={`${flow.from} to ${flow.to}: ${STAGES.join(', ')}. Handles ${flow.items.join(', ')}.`}>
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 pt-12">
        <span className={node}>{flow.from}</span>
        <div className="relative h-0.5 rounded-full bg-zinc-200">
          <div className={cn('absolute inset-0', active && 'animate-rider motion-reduce:animate-none')} aria-hidden>
            <span className="absolute right-0 top-1/2 size-2.5 -translate-y-1/2 rounded-full bg-blue-600" />
            {STAGES.map((label, i) => (
              <span key={label} className="absolute bottom-7 right-0 translate-x-1/2">
                <span
                  style={{ animationDelay: `${i * 2.4}s` }}
                  className={cn(
                    'block whitespace-nowrap rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white opacity-0',
                    active && 'animate-step-label motion-reduce:animate-none',
                    i === STAGES.length - 1 && 'motion-reduce:opacity-100',
                  )}
                >
                  {label}
                </span>
              </span>
            ))}
          </div>
        </div>
        <span className={node}>{flow.to}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2">
        {flow.items.map((item, i) => (
          <li
            key={item}
            style={{ animationDelay: `${i * 2.4}s`, '--d': `${i * 2.4}s` } as CSSProperties}
            className={cn(
              'relative cursor-default rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 transition-[transform,border-color,color,box-shadow] duration-150 hover:-translate-y-0.5 hover:border-blue-600 hover:text-blue-700 hover:shadow-md',
              'after:pointer-events-none after:absolute after:-inset-px after:rounded-full after:border after:border-blue-600 after:opacity-0 after:[animation-delay:var(--d)]',
              active && 'animate-chip-lift after:animate-chip-ring motion-reduce:animate-none motion-reduce:after:animate-none',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SlideText({ slide, active }: { slide: Slide; active: boolean }) {
  return (
    <div className={cn('max-w-xl', active && 'animate-fade-up')}>
      <div className="flex items-center gap-3">
        <img src={slide.logo} alt="" className={cn('size-9 rounded-lg object-contain', slide.logoClass)} />
        <p className="text-sm font-medium text-zinc-600">{slide.role}</p>
      </div>
      <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl">{slide.title}</h2>
      <p className="mt-6 text-lg text-zinc-600">{slide.summary}</p>
      <ul className="mt-6 space-y-3">
        {slide.points.map(p => (
          <li key={p} className="flex gap-3 text-zinc-700">
            <IconCheck className="mt-1 size-4 shrink-0 text-blue-600" aria-hidden stroke={2.5} />
            {p}
          </li>
        ))}
      </ul>
      {slide.flow && <Flow flow={slide.flow} active={active} />}
      <ul className="mt-8 flex flex-wrap gap-2" key={String(active)}>
        {slide.stack.map((t, i) => (
          <li
            key={t}
            style={{ animationDelay: `${i * 70}ms` }}
            className={cn('rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700', active && 'animate-chip-in')}
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        {slide.links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5 font-semibold transition-colors',
              i === 0
                ? 'h-12 rounded-xl bg-zinc-900 px-6 text-white hover:bg-zinc-700'
                : 'text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-blue-600',
            )}
          >
            {l.label}
            <IconArrowUpRight className="size-4" aria-hidden />
          </a>
        ))}
      </div>
    </div>
  )
}

export default function ProjectShowcase() {
  const [value, setValue] = useState(slides[0].id)
  const [auto, setAuto] = useState(true)
  const [visible, setVisible] = useState(true)
  const rootRef = useRef<HTMLElement>(null)

  const next = useCallback(() => {
    setValue(v => slides[(slides.findIndex(s => s.id === v) + 1) % slides.length].id)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setAuto(false)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={rootRef}
      id="work"
      aria-label="Experience and projects"
      data-paused={!visible}
      className="relative overflow-hidden bg-white"
    >
      <Tabs.Root
        value={value}
        onValueChange={v => {
          setAuto(false)
          setValue(v)
        }}
        className="mx-auto grid min-h-dvh max-w-[90rem] lg:grid-cols-[5fr_7fr]"
      >
        <div className="flex flex-col px-6 py-16 sm:px-10 lg:py-24 lg:pl-16">
          <div className="grid flex-1 content-center">
            {slides.map(s => (
              <Tabs.Content key={s.id} value={s.id} forceMount className="col-start-1 row-start-1 block data-[state=inactive]:invisible">
                <SlideText slide={s} active={value === s.id} />
              </Tabs.Content>
            ))}
          </div>

          <Tabs.List aria-label="Experience and projects" onPointerDown={() => setAuto(false)} className="mt-12 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4">
            {slides.map(s => {
              const active = value === s.id
              return (
                <Tabs.Trigger
                  key={s.id}
                  value={s.id}
                  className={cn(
                    'relative flex items-center gap-2 pt-4 text-left text-sm font-medium transition-colors',
                    active ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900',
                  )}
                >
                  <span className="absolute inset-x-0 top-0 h-0.5 rounded-full bg-zinc-200" aria-hidden />
                  {active && (
                    <span
                      key={`${s.id}-${auto}`}
                      aria-hidden
                      onAnimationEnd={auto ? next : undefined}
                      className={cn('absolute inset-x-0 top-0 h-0.5 origin-left rounded-full bg-zinc-900', auto ? 'animate-progress' : 'scale-x-100')}
                    />
                  )}
                  <img src={s.logo} alt="" className={cn('size-4 shrink-0 rounded-sm object-contain', s.logoClass && 'h-3.5 w-auto')} />
                  {s.tab}
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>
        </div>

        {/* the laptop is big, tilted and bleeds off the right edge */}
        <div className="relative grid min-h-[22rem] items-center pb-16 pl-6 lg:min-h-0 lg:pb-0 lg:pl-0" aria-hidden={false}>
          {slides.map((s, i) => {
            const active = value === s.id
            return (
              <div
                key={s.id}
                aria-hidden={!active}
                className={cn(
                  'col-start-1 row-start-1 transition-opacity duration-300 ease-out',
                  active ? 'opacity-100' : 'invisible opacity-0',
                )}
              >
                <div className="w-[100%] origin-left [transform:perspective(2400px)_rotateY(-14deg)_rotateX(5deg)_rotate(-1deg)] lg:w-[92%]">
                  <Laptop src={s.laptop.src} alt={s.laptop.alt} priority={i === 0} />
                </div>
              </div>
            )
          })}
        </div>
      </Tabs.Root>
    </section>
  )
}
