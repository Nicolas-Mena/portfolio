import { useEffect, useRef } from 'react'

/**
 * Adds `.visible` to elements with `.animate` class when they enter the viewport.
 * Pass `threshold` (0–1) to control how much of the element must be visible.
 */
export function useScrollAnimation(threshold = 0.12) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = el.classList.contains('animate')
      ? [el]
      : Array.from(el.querySelectorAll('.animate'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
