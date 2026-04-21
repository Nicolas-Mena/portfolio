import { useState, useEffect, useRef } from 'react'

const PHASE_COUNT = 5

const KEYFRAMES = [
  [  0,   0],   // 0 hero
  [ 28,  65],   // 1 about
  [  0,   0],   // 2 skills
  [-28, -65],   // 3 projects
  [  0,   0],   // 4 contact
]

function smoothstep(t) {
  const c = Math.max(0, Math.min(1, t))
  return c * c * (3 - 2 * c)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

export function getLaptopTransform(rawProgress) {
  const scaled   = rawProgress * (KEYFRAMES.length - 1)
  const fromIdx  = Math.min(KEYFRAMES.length - 2, Math.floor(scaled))
  const t        = smoothstep(scaled - fromIdx)
  const tx       = lerp(KEYFRAMES[fromIdx][0], KEYFRAMES[fromIdx + 1][0], t)
  const ry       = lerp(KEYFRAMES[fromIdx][1], KEYFRAMES[fromIdx + 1][1], t)
  return { tx, ry }
}

export function useScrollPhase(storyRef) {
  const [phase, setPhase] = useState(0)
  const rawRef  = useRef(0)
  const rafRef  = useRef(null)
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768

  useEffect(() => {
    if (isMobile) return

    function update() {
      const el = storyRef.current
      if (!el) return

      const storyTop    = el.offsetTop
      const storyHeight = el.offsetHeight
      const rel         = Math.max(0, Math.min(window.scrollY - storyTop, storyHeight))
      const raw         = rel / storyHeight

      rawRef.current = raw
      const p = Math.min(PHASE_COUNT - 1, Math.floor(raw * PHASE_COUNT))
      setPhase(prev => (prev !== p ? p : prev))
    }

    function onScroll() {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        update()
        rafRef.current = null
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [storyRef, isMobile])

  return { phase, rawRef }
}
