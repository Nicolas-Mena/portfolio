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

export default function SkillsPanel({ active }) {
  return (
    <div className={`story-panel panel-bottom${active ? ' panel--active' : ''}`}>
      <div className="panel-bottom-header">
        <span className="section-label">What I work with</span>
        <h2 className="section-title">My <span>skill set</span></h2>
      </div>
      <div className="skills-grid-panel">
        {categories.map(({ title, skills }) => (
          <div key={title} className="skill-category">
            <h3 className="category-title">{title}</h3>
            <ul className="skill-list">
              {skills.map(s => <li key={s} className="skill-pill">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
