# A&T Nexus Website (Next.js)

Production-oriented Next.js website for A&T Nexus with dedicated pages for:

- Home (`/`)
- About (`/about`)
- IT Services (`/services`)
- Home Health Care Operations (`/home-health-care-operations`)

The project uses the Next.js App Router, TypeScript, and a single global stylesheet for a consistent visual system.

## 1) Tech Stack

- Framework: Next.js 16 (App Router)
- Language: TypeScript + React 19
- Styling: Custom CSS (`src/app/globals.css`)
- Animation: Framer Motion (cinematic and stacked-card interactions)
- Icons: `lucide-react` and inline SVG
- Runtime APIs: App Router Route Handlers (`src/app/api/*`)

## 2) Project Goals

- Deliver a polished, responsive, design-consistent marketing site.
- Keep runtime overhead low while preserving high visual fidelity.
- Provide working contact/newsletter workflows.
- Maintain a clean codebase by removing dead code and unused files.

## 3) Routes and Pages

### Public Pages

- `src/app/page.tsx`
	- Home layout and section composition.
- `src/app/about/page.tsx`
	- About, mission, values, and leadership content.
- `src/app/services/page.tsx`
	- IT service catalog + contact section.
- `src/app/home-health-care-operations/page.tsx`
	- Dedicated operations-focused landing page.

### API Endpoints

- `src/app/api/contact/route.ts`
	- Validates contact payload and forwards to FormSubmit.
- `src/app/api/newsletter/route.ts`
	- Validates newsletter email and forwards to FormSubmit.

## 4) Components

- `src/components/SiteHeader.tsx`
	- Sticky header, desktop nav, mobile drawer nav.
- `src/components/SiteFooter.tsx`
	- Footer CTA, quick links, newsletter submit flow.
- `src/components/SiteSections.tsx`
	- Home/About shared sections and affiliations marquee.
- `src/components/CinematicWhoWeAre.tsx`
	- Scroll-based cinematic storytelling section.
- `src/components/BackendCoverageCards.tsx`
	- Stacked sticky cards for operations coverage.
- `src/components/ComparisonGrid.tsx`
	- Comparison table block.
- `src/components/ContactSection.tsx`
	- Contact form and company contact details.
- `src/components/useRevealOnScroll.ts`
	- Intersection observer reveal utility.
- `src/components/site-data.tsx`
	- Shared static copy and navigation data.

## 5) Design System and Styling

- Global design tokens (colors, gradients, typography vars) in `:root`.
- Central styling in `src/app/globals.css`.
- Responsive breakpoints tuned for desktop/tablet/mobile.
- Reduced-motion behavior supported for animation-heavy sections.

## 6) Performance Work (Implemented)

This repository includes targeted performance and cleanup work:

- Removed dead code and unused exports:
	- Removed unused service model/icon exports from `site-data.tsx`.
	- Removed unused `ServicesSection` from `SiteSections.tsx`.
	- Removed unused fallback dataset from `BackendCoverageCards.tsx`.
- Reduced runtime overhead:
	- Removed spring smoothing from cinematic scroll animation path.
	- Added reduced-motion static mode in `CinematicWhoWeAre`.
	- Updated reveal hook to skip observers for reduced-motion users.
- Improved media loading and rendering behavior:
	- Added explicit image dimensions where beneficial.
	- Added lazy-loading/async decoding hints for non-critical images.
	- Prioritized hero image loading on the operations page.
- CSS cleanup:
	- Pruned legacy/unused style blocks not referenced by current JSX.
	- Restored hero edge-fade overlays for smoother image blending.
- Repository cleanup:
	- Removed unused legacy export files from repo root:
		- `homepage.html`
		- `live-post-109.css`
		- `live-post-24.css`
		- `live-post-37.css`
		- `live-post-6.css`

## 7) Assets

Primary site assets live in `public/theme`.

Notable icons/images currently used by the app include:

- `public/theme/logo-no-text.png`
- `public/theme/ai.png`
- `public/theme/fullstack.png`
- `public/theme/uiux.png`
- `public/theme/home_care_operations.png`

## 8) Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Run production server:

```bash
npm run start
```

## 9) Validation Checklist

Before pushing:

- Run `npm run build` and ensure compile/type checks pass.
- Manually verify:
	- Header/menu behavior on desktop/mobile
	- Contact/newsletter form submission states
	- Services cards and icon rendering
	- Operations hero image blending and gradient continuity
	- Comparison grid layout across breakpoints

## 10) Maintenance Notes

- Keep `src/app/globals.css` aligned with active JSX classes; remove orphan selectors during feature changes.
- Prefer data-driven section content updates in `site-data.tsx` where applicable.
- For new heavy motion features, always add reduced-motion fallback behavior.
- If external image hosting changes, update references in section data/components accordingly.
