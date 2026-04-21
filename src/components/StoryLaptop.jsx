import { useRef, useEffect } from 'react'
import { useScrollPhase, getLaptopTransform } from '../hooks/useScrollPhase'
import HeroPanel    from './panels/HeroPanel'
import AboutPanel   from './panels/AboutPanel'
import SkillsPanel  from './panels/SkillsPanel'
import ProjectsPanel from './panels/ProjectsPanel'
import ContactPanel  from './panels/ContactPanel'
import './StoryLaptop.css'
import './Hero.css'
import './About.css'
import './Skills.css'
import './Projects.css'
import './Contact.css'

/* ── Screen content sub-components ─────────────────────── */
function HeroScreenContent({ visible }) {
  return (
    <div className={`screen-content-layer${visible ? ' scl--visible' : ''}`}>
      <div className="scl-lines">
        <div className="scl-line l1" />
        <div className="scl-line l2" />
        <div className="scl-line l3" />
        <div className="scl-line l4" />
        <div className="scl-line l5" />
        <div className="scl-line l6" />
        <div className="scl-line l7" />
        <div className="scl-cursor" />
      </div>
      <p className="scl-name">Nicolas</p>
    </div>
  )
}

function SkillsScreenContent({ visible }) {
  return (
    <div className={`screen-content-layer${visible ? ' scl--visible' : ''}`}>
      <div className="scl-orbit">
        <div className="orbit-center">&lt;/&gt;</div>
        <span className="orbit-tag ot1">Frontend</span>
        <span className="orbit-tag ot2">Backend</span>
        <span className="orbit-tag ot3">DevOps</span>
      </div>
    </div>
  )
}

function ContactScreenContent({ visible }) {
  return (
    <div className={`screen-content-layer${visible ? ' scl--visible' : ''}`}>
      <div className="scl-envelope">
        <div className="env-body" />
        <div className="env-flap" />
        <div className="env-line" />
      </div>
      <p className="scl-email">nicomenarivas@gmail.com</p>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────── */
export default function StoryLaptop() {
  const storyRef  = useRef(null)
  const laptopRef = useRef(null)
  const glowRef   = useRef(null)

  const { phase, rawRef } = useScrollPhase(storyRef)

  /* Drive the laptop transform every frame without React re-renders */
  useEffect(() => {
    let raf
    function loop() {
      const { tx, ry } = getLaptopTransform(rawRef.current)
      if (laptopRef.current) {
        laptopRef.current.style.transform =
          `perspective(1200px) translateX(${tx}vw) rotateY(${ry}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.left = `calc(50% + ${tx * 0.9}vw)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [rawRef])

  return (
    <div className="story-stage" ref={storyRef}>
      {/* Navbar sentinels */}
      <div id="hero"     className="story-sentinel" style={{ top: '0' }} />
      <div id="about"    className="story-sentinel" style={{ top: '100vh' }} />
      <div id="skills"   className="story-sentinel" style={{ top: '200vh' }} />
      <div id="projects" className="story-sentinel" style={{ top: '300vh' }} />
      <div id="contact"  className="story-sentinel" style={{ top: '400vh' }} />

      <div className="story-sticky">
        {/* Background */}
        <div className="stage-grid" />
        <div className="stage-glow" ref={glowRef} />

        {/* Content panels */}
        <HeroPanel     active={phase === 0} />
        <AboutPanel    active={phase === 1} />
        <SkillsPanel   active={phase === 2} />
        <ProjectsPanel active={phase === 3} />
        <ContactPanel  active={phase === 4} />

        {/* 3D Laptop */}
        <div className="laptop-3d-wrap" ref={laptopRef}>
          <div className="laptop-3d">
            {/* Screen */}
            <div className="l3d-screen-wrap">
              <div className="l3d-screen">
                <div className="l3d-camera-dot" />
                <div className="l3d-screen-inner">
                  <HeroScreenContent    visible={phase === 0} />
                  <SkillsScreenContent  visible={phase === 2} />
                  <ContactScreenContent visible={phase === 4} />
                </div>
                <div className="l3d-scanlines" />
              </div>
              {/* Back of the lid (visible when rotated) */}
              <div className="l3d-lid-back">
                <span className="lid-logo">N.</span>
              </div>
            </div>

            {/* Base */}
            <div className="l3d-hinge" />
            <div className="l3d-base">
              <div className="l3d-keyboard" />
              <div className="l3d-trackpad" />
            </div>
          </div>
        </div>

        {/* Scroll indicator (only on hero) */}
        <a href="#about"
           className={`scroll-indicator story-scroll-hint${phase === 0 ? ' si--visible' : ''}`}
           aria-label="Scroll down">
          <span />
        </a>
      </div>
    </div>
  )
}
