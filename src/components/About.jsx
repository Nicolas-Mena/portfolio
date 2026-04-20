import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

const stats = [
  { value: '1+', label: 'Years of experience'  },
  { value: '4',  label: 'Academic projects'    },
]

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <div className="about-grid">
          {/* Text column */}
          <div className="about-text">
            <span className="section-label animate">About me</span>
            <h2 className="section-title animate delay-1">
              Passionate about building <span>great products</span>
            </h2>
            <p className="about-desc animate delay-2">
              I'm a full stack developer with a strong eye for design and a
              love for clean, maintainable code. I enjoy taking complex
              problems and turning them into simple, elegant solutions that
              users actually enjoy using.
            </p>
            <p className="about-desc animate delay-3">
              When I'm not coding you'll find me exploring new technologies,
              contributing to open source, or diving into a good book on
              software architecture.
            </p>
          </div>

          {/* Stats column */}
          <div className="about-stats">
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`stat-card animate delay-${i + 2}`}>
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
