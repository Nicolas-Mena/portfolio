import { useState } from 'react'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}
function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials = [
  { label: 'GitHub',   href: 'https://github.com/yourhandle',        icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle',    icon: LinkedinIcon },
]

export default function ContactPanel({ active }) {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xeevlznd', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <div className={`story-panel panel-bottom${active ? ' panel--active' : ''}`}>
      <div className="contact-panel-inner">
        <div className="contact-panel-info">
          <span className="section-label">Let's talk</span>
          <h2 className="section-title">Get in <span>touch</span></h2>
          <p className="panel-desc">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <a href="mailto:nicomenarivas@gmail.com" className="email-link">
            nicomenarivas@gmail.com
          </a>
          <div className="social-links">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="social-btn" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="cp-name">Name</label>
            <input id="cp-name" name="name" type="text" placeholder="John Doe"
              value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cp-email">Email</label>
            <input id="cp-email" name="email" type="email" placeholder="john@example.com"
              value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="cp-msg">Message</label>
            <textarea id="cp-msg" name="message" rows="4"
              placeholder="Tell me about your project..."
              value={form.message} onChange={handleChange} required />
          </div>
          {status === 'sent' ? (
            <p className="form-success">Message sent! I'll be in touch soon.</p>
          ) : (
            <>
              <button type="submit" className="btn-primary form-btn"
                disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'error' && (
                <p className="form-error">Oops! Something went wrong.</p>
              )}
            </>
          )}
        </form>
      </div>

      <footer className="site-footer">
        <p>Designed & built by Nicolas · {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
