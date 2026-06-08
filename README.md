# Nanda Kumar — Developer Portfolio

A modern, premium developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and Framer Motion. Designed with a dark aesthetic inspired by Vercel, Linear, and Stripe.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?logo=framer)

## Features

- **Premium Dark Theme** — Pure black background with electric blue and purple accents
- **Glassmorphism UI** — Cards with backdrop blur, subtle borders, and glow effects
- **Smooth Animations** — Framer Motion powered scroll reveals, stagger effects, and micro-interactions
- **Mobile-First Responsive** — Optimized for all screen sizes from 375px to ultrawide
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, sitemap, robots.txt
- **Accessible** — ARIA labels, keyboard navigation, focus indicators, semantic HTML
- **Performance** — Lazy-loaded sections, optimized imports, sub-second LCP
- **Smart Navbar** — Hides on scroll down, shows on scroll up, transparent to glass transition

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React + Custom SVGs |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, globals, sitemap)
├── components/
│   ├── icons/        # Custom SVG brand icons (GitHub, LinkedIn)
│   ├── layout/       # Navbar, Footer, ScrollProgress, CustomCursor, LoadingScreen
│   ├── sections/     # Hero, About, Skills, Experience, Projects, GitHub, Contact
│   └── ui/           # Reusable: Button, Card, Badge, Container, Section, SectionHeading
├── hooks/            # useActiveSection, useMediaQuery, useScrollProgress
├── lib/              # constants, utils, fonts, animations
└── types/            # TypeScript interfaces
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/nandakumar/portfolio.git
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run type-check` | Run TypeScript compiler check |

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repository
4. Configure:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (or `portfolio/` if nested)
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Add environment variables from `.env.example`
6. Click "Deploy"

Your site will be live at `your-project.vercel.app`. Add a custom domain in Project Settings → Domains.

### Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to GitHub Pages (Alternative)

1. Update `next.config.ts`:
   ```ts
   output: "export",
   basePath: "/portfolio",
   ```
2. Run `npm run build`
3. Push the `out/` folder to the `gh-pages` branch

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your production URL (for SEO) |
| `NEXT_PUBLIC_GITHUB_USERNAME` | No | GitHub username for stats |
| `GITHUB_TOKEN` | No | GitHub personal access token |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | No | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | No | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | No | EmailJS public key |

## Customization

### Update Content
- **Personal info:** `src/lib/constants.ts`
- **Skills:** `src/components/sections/Skills.tsx`
- **Experience:** `src/components/sections/Experience.tsx`
- **Projects:** `src/components/sections/Projects.tsx`
- **Contact:** `src/components/sections/Contact.tsx`

### Change Colors
Edit `src/app/globals.css` — update the `@theme` block with your preferred accent colors.

### Add Sections
1. Create a new component in `src/components/sections/`
2. Export it from `src/components/sections/index.ts`
3. Add it to `src/app/page.tsx`
4. Add a nav link in `src/lib/constants.ts`

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Lazy-loaded below-fold sections with `next/dynamic`
- Tree-shaken icon and animation imports
- Optimized fonts with `next/font`
- Static generation for zero TTFB

## License

MIT — feel free to use this as a template for your own portfolio.
