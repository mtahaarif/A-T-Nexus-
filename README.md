# A&T Nexus Next.js Clone

This project is a Next.js implementation of the atnexus.io single-page Elementor site, recreated as a responsive React app with the same section flow, content hierarchy, and dynamic behavior patterns.

## Implemented Dynamics

- Sticky header with desktop navigation and off-canvas mobile menu
- Smooth in-page anchor navigation
- Animated number counters (on viewport enter)
- Service image accordion with active panel expansion
- Auto-rotating service carousel with bullet controls
- Infinite affiliations marquee with hover pause
- Reveal-on-scroll section animations
- Contact and newsletter forms with client-side submit states

## Branding Assets

Provided theme references are available in:

- public/theme/logo-no-text.png
- public/theme/brand-board-1.jpeg
- public/theme/brand-board-2.jpeg
- public/theme/brand-reference.pdf

## Project Structure

- src/app/page.tsx: Main page layout, content, and interactions
- src/app/globals.css: Full styling, responsive rules, and animations
- src/app/layout.tsx: Metadata and global shell

## Run Locally

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run production build:

```bash
npm run start
```
