import { useEffect, useRef, useState } from 'react'

export const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Flips to true the first time the element scrolls into view, then stops observing.
export function useInView<T extends Element>(rootMargin = '0px 0px -8% 0px', initial = false) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(initial)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  return [ref, inView] as const
}
