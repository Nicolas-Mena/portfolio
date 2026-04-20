import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const projects = [
  {
    title: 'Mini Compiler',
    description:
      'A compiler built from scratch in Java featuring lexical analysis, parsing, and semantic validation for a custom language grammar.',
    tags: ['Java', 'Compilers', 'Automata'],
    icon: '⚙️',
  },
  {
    title: 'EPS Inventory Organizer',
    description:
      'Web application to manage and organize medical supplies inventory for an EPS (health provider). Includes stock tracking, alerts, and reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🏥',
  },
  {
    title: 'AWS Web App Infrastructure',
    description:
      'Designed and deployed a scalable cloud infrastructure on AWS for a web application, including EC2, S3, RDS, and load balancing.',
    tags: ['AWS', 'EC2', 'S3', 'RDS'],
    icon: '☁️',
  },
]

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <span className="section-label animate">What I've built</span>
        <h2 className="section-title animate delay-1">
          Academic <span>projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map(({ title, description, tags, icon }, i) => (
            <div key={title} className={`project-card animate delay-${i + 1}`}>
              <div className="project-icon">{icon}</div>
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{description}</p>
              <div className="project-tags">
                {tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
