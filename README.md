# Antigravity Portfolio

A modern, highly optimized Next.js 16 portfolio for Elsmoal S. Ibrahim (Backend Architect & CTO).

## Features
- **Next.js 16 (Turbopack)** + React 19
- **Tailwind CSS v4** styling
- **Internationalization (i18n)** via `next-intl`
- **Framer Motion** + **Three.js** dynamic animations
- **Cloudflare Workers** deployment via OpenNext (`@opennextjs/cloudflare`)

## Development
```bash
npm run dev
```

## Deployment
This project is configured to deploy automatically to Cloudflare Workers via GitHub Actions on every push to the `main` branch.

To deploy manually from your local machine:
```bash
npm run cf:deploy
```
