import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Experience.css'

const jobs = [
  {
    role: 'Full Stack Developer',
    company: 'Company Name',
    period: '2023 — Present',
    bullets: [
      'Built and maintained scalable web applications used by 10k+ users',
      'Led migration from legacy REST API to GraphQL, reducing load times by 40%',
      'Collaborated with design team to implement pixel-perfect UI components',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Another Company',
    period: '2021 — 2023',
    bullets: [
      'Developed responsive React applications with accessibility best practices',
      'Integrated third-party APIs and payment systems for e-commerce platforms',
      'Improved Lighthouse performance score from 62 → 95 across all products',
    ],
  },
  {
    role: 'Junior Developer',
    company: 'First Job',
    period: '2020 — 2021',
    bullets: [
      'Contributed to internal tooling with Python and Node.js',
      'Set up CI/CD pipelines with GitHub Actions, cutting deploy time by 50%',
    ],
  },
]

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <span className="section-label animate">Where I've worked</span>
        <h2 className="section-title animate delay-1">
          Work <span>experience</span>
        </h2>

        <div className="timeline">
          {jobs.map(({ role, company, period, bullets }, i) => (
            <div key={i} className={`timeline-item animate from-screen delay-${i + 1}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-role">{role}</h3>
                    <span className="job-company">{company}</span>
                  </div>
                  <span className="job-period">{period}</span>
                </div>
                <ul className="job-bullets">
                  {bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
