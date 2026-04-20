import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Skills.css'

const categories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Vite', 'Next.js'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Tools & Other',
    skills: ['Git', 'Linux', 'Figma', 'CI/CD', 'AWS'],
  },
]

export default function Skills() {
  const ref = useScrollAnimation()

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills-header">
          <span className="section-label animate">What I work with</span>
          <h2 className="section-title animate delay-1">
            My <span>skill set</span>
          </h2>
        </div>

        <div className="skills-grid">
          {categories.map(({ title, skills }, ci) => (
            <div key={title} className={`skill-category animate delay-${ci + 1}`}>
              <h3 className="category-title">{title}</h3>
              <ul className="skill-list">
                {skills.map((skill) => (
                  <li key={skill} className="skill-pill">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
