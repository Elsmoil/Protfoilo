/**
 * Next.js Edge Middleware — i18n routing via next-intl
 *
 * This file MUST be at src/middleware.ts (standard Next.js location) so that
 * Next.js compiles it with the Edge Runtime. The plugin-generated proxy.ts
 * middleware produced a Node.js runtime artifact which is not supported on
 * Cloudflare Workers.
 *
 * The matcher excludes:
 *  - api/*         — API routes (none in this portfolio, future-proof)
 *  - _next/*       — Next.js internal assets
 *  - _vercel/*     — Vercel/OpenNext internal paths
 *  - .*\..*        — Static files with extensions (images, fonts, cv.pdf, etc.)
 */
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/',
    '/(ar|en)/:path*',
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
