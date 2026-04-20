# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # Install dependencies (first-time setup)
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Production build → dist/
npm run preview      # Preview the production build locally
```

## Architecture

Single-page React + Vite portfolio with vanilla CSS (no UI framework). Each section is a self-contained component with co-located styles.

### Section flow (in render order)

```
App.jsx
├── Navbar      — Fixed top bar; transparent → frosted-glass on scroll; hamburger on mobile
├── Hero        — Full-viewport intro; typewriter role animation; load-time CSS keyframe entry
├── About       — Two-column: bio text left, stats cards right
├── Skills      — Three-column category grid of pill badges
├── Experience  — Vertical timeline with card entries
└── Contact     — Two-column: info/socials left, contact form right; site footer inside
```

### Scroll animation system

`src/hooks/useScrollAnimation.js` returns a `ref` that, when attached to a section wrapper, fires an `IntersectionObserver` over all `.animate` descendants and adds `.visible` to each one as it enters the viewport.

- CSS in `src/index.css` defines the base states (`opacity:0; transform:translateY(36px)`) and the `.visible` transition.
- Delay variants: `.delay-1` through `.delay-5` stagger children within a section.
- Direction variants: add `.from-left` or `.from-right` alongside `.animate` for horizontal entry.
- **Exception — Hero**: animations run as CSS `@keyframes` on page load (not scroll-triggered), so the hook is not used there.

### Styling conventions

- All design tokens live in `:root` in `src/index.css`. Never hard-code colors or sizes inline.
- Key tokens: `--accent` (#00d4ff), `--bg-primary/secondary/card`, `--text-primary/secondary/muted`, `--border`, `--border-accent`.
- Each component has a sibling `.css` file (`Navbar.jsx` → `Navbar.css`).
- The `.btn-primary` / `.btn-outline` button styles are defined in `Hero.css` and reused via class name.

### Content to personalise

All placeholder content lives directly in the component files — no external data layer:

| What               | File                         |
|--------------------|------------------------------|
| Name / roles       | `src/components/Hero.jsx`    |
| Bio, stats         | `src/components/About.jsx`   |
| Skills list        | `src/components/Skills.jsx`  |
| Work history       | `src/components/Experience.jsx` |
| Email, social URLs | `src/components/Contact.jsx` |

The contact form's `handleSubmit` in `Contact.jsx` is a stub — wire it to Formspree, EmailJS, or a serverless function before deploying.
