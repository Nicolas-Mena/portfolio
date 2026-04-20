import { useState, useEffect } from 'react'
import './Hero.css'

const roles = [
  'Full Stack Developer',
  'UI / UX Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [paused, setPaused]       = useState(false)

  useEffect(() => {
    const target = roles[roleIndex]

    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false) }, 1800)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      return () => clearTimeout(t)
    }

    if (!deleting && displayed.length === target.length) {
      setPaused(true)
      return
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      return () => clearTimeout(t)
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
  }, [displayed, deleting, paused, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <p className="hero-greeting animate">Hi there, I'm</p>
        <h1 className="hero-name animate delay-1">Nicolas</h1>
        <h2 className="hero-role animate delay-2">
          <span>{displayed}</span>
          <span className="cursor" />
        </h2>
        <p className="hero-bio animate delay-3">
          I craft fast, accessible, and beautiful digital experiences.<br />
          Turning ideas into production-ready products.
        </p>
        <div className="hero-ctas animate delay-4">
          <a href="#about" className="btn-primary">View my work</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator animate delay-5" aria-label="Scroll down">
        <span />
      </a>
    </section>
  )
}
