import { useEffect, useRef, useState, type AnimationEvent, type CSSProperties } from 'react'

export const vars = (o: Record<string, string>) => o as CSSProperties

// A scene is one animation on a root element. When that animation ends, bump the key to replay it from zero,
// so every item restarts together with its delay (no drifting loops).
export function useReplay() {
    const [tick, setTick] = useState(0)
    const onEnd = (e: AnimationEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) setTick(t => t + 1)
    }
    return [tick, onEnd] as const
}

// true while the element is on screen; loops rest otherwise (see [data-paused] in globals.css)
export function useInView<T extends HTMLElement>(threshold = 0.05) {
    const ref = useRef<T>(null)
    const [visible, setVisible] = useState(true)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold })
        io.observe(el)
        return () => io.disconnect()
    }, [threshold])
    return [ref, visible] as const
}
