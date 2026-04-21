const projects = [
  {
    title: 'Mini Compiler',
    description: 'A compiler built from scratch in Java featuring lexical analysis, parsing, and semantic validation for a custom language grammar.',
    tags: ['Java', 'Compilers', 'Automata'],
    icon: '⚙️',
  },
  {
    title: 'EPS Inventory Organizer',
    description: 'Web application to manage and organize medical supplies inventory for an EPS (health provider). Includes stock tracking, alerts, and reporting.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    icon: '🏥',
  },
  {
    title: 'AWS Web App Infrastructure',
    description: 'Designed and deployed a scalable cloud infrastructure on AWS for a web application, including EC2, S3, RDS, and load balancing.',
    tags: ['AWS', 'EC2', 'S3', 'RDS'],
    icon: '☁️',
  },
]

export default function ProjectsPanel({ active }) {
  return (
    <div className={`story-panel panel-right${active ? ' panel--active' : ''}`}>
      <span className="section-label">What I've built</span>
      <h2 className="section-title">Academic <span>projects</span></h2>
      <div className="projects-list">
        {projects.map(({ title, description, tags, icon }) => (
          <div key={title} className="project-card-panel">
            <div className="project-card-header">
              <span className="project-icon-sm">{icon}</span>
              <h3 className="project-title-sm">{title}</h3>
            </div>
            <p className="project-desc-sm">{description}</p>
            <div className="project-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
