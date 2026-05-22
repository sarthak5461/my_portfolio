# Sarthak Sahu — Portfolio Site

## Original Problem Statement
> "build me a portfolio of my self i have added my resume use this and give me a portfolio so i can deploy easily."

User uploaded resume: `FullStack_Developer_Sarthaksahu.pdf`

## User Choices
- **Design style:** Creative / playful (neo-brutalist by design agent)
- **Contact:** Mailto + WhatsApp links (no contact form, no backend)
- **Socials:** LinkedIn `https://www.linkedin.com/in/sarthaksahu54/`, GitHub `https://github.com/sarthak5461`
- **Resume download:** Yes (PDF served from `/resume.pdf`)
- **Sections:** Standard — Hero, About, Skills, Experience, Projects, Contact

## Architecture
- **Frontend-only** React 19 + Tailwind + framer-motion + react-icons + lucide-react
- Static data lives in `/app/frontend/src/data/portfolio.js`
- Resume PDF served from `/app/frontend/public/resume.pdf`
- **No backend changes** — boilerplate FastAPI/Mongo untouched
- Single-page anchored navigation with smooth scroll (CSS `scroll-behavior`)
- Custom cursor (disabled on touch); framer-motion micro-interactions on scroll

## Design System
- Theme: Neo-Brutalism / Vibrant Play (light)
- Colors: cream `#FDFBF7`, ink `#0F0F0F`, tomato `#FF4500`, mint `#D6F1D6`, butter `#FFEAC2`, gold `#FFD700`, aqua `#00E5FF`
- Typography: Cabinet Grotesk (display), Outfit (body), IBM Plex Mono (accents)
- Shadows: solid offset `6px 6px 0px #0F0F0F` (brutal), depress-on-hover

## What's Been Implemented (May 2026)
- Sticky pill navbar with desktop links + mobile menu
- Hero with massive display text, animated avatar, 2 CTAs, status pill
- About section with stat cards + education
- Kinetic skills marquee + skill chips
- Experience zigzag timeline with 2 roles
- Projects bento grid (MediaTek + NGO Management Platform)
- Contact section with mailto, WhatsApp, resume download, LinkedIn, GitHub
- Custom mix-blend-difference cursor
- Grain texture overlay, smooth scroll, mobile-responsive
- All interactive elements carry `data-testid`
- 37/37 frontend tests passing

## Backlog (P1/P2)
- **P1:** Replace placeholder phone/email with verified contacts if changed
- **P1:** Add more projects as Sarthak ships them
- **P2:** Optional blog/notes section
- **P2:** OG image generation for social previews
- **P2:** Lighthouse SEO sweep
- **P2:** Optional contact form via Resend if user provides API key

## Next Tasks
- Easy custom-domain deployment (the site is static, ready for any host)
- Future: add testimonials section once Sarthak collects them
