# 100Plans — App Stack

Personal product showcase website for 100Plans indie developer studio.

## Tech Stack

- **Vite** + **Vue 3** + **TypeScript**
- **TailwindCSS v4** + **@tailwindcss/typography**
- **Pinia** for state management
- **Vue Router** with locale prefix (`/en/`, `/zh/`, `/ja/`)
- **Vue I18n** for internationalization (EN / 简体中文 / 日本語)
- **Lucide Icons** + **markdown-it**

## Features

- 8 app products with detailed pages
- Trilingual support (English, Chinese, Japanese)
- Light / Dark / System theme
- Privacy Policy & Terms of Service per product
- Responsive design (mobile-first)
- SEO with hreflang tags
- Page transitions and hover animations

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

**Vercel**: Push to GitHub, connect the repo on Vercel. `vercel.json` handles SPA rewrites.

**GitHub Pages**: Enable Pages in repo settings. The GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-builds and deploys on push to `main`.
