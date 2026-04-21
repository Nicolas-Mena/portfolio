const stats = [
  { value: '1+', label: 'Years of experience' },
  { value: '4',  label: 'Academic projects'   },
]

export default function AboutPanel({ active }) {
  return (
    <div className={`story-panel panel-left${active ? ' panel--active' : ''}`}>
      <span className="section-label">About me</span>
      <h2 className="section-title">
        Passionate about <span>great products</span>
      </h2>
      <p className="panel-desc">
        I'm a full stack developer with a strong eye for design and a love for
        clean, maintainable code. I enjoy taking complex problems and turning
        them into simple, elegant solutions that users actually enjoy using.
      </p>
      <p className="panel-desc">
        When I'm not coding you'll find me exploring new technologies,
        contributing to open source, or diving into a good book on software
        architecture.
      </p>
      <div className="panel-stats">
        {stats.map(({ value, label }) => (
          <div key={label} className="stat-card">
            <span className="stat-value">{value}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
