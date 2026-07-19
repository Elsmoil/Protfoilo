import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

/**
 * createNextIntlPlugin wires up next-intl's server-side getRequestConfig().
 *
 * We explicitly provide the requestConfig path (same as before) so the plugin
 * knows where to find the i18n request config for Server Components. We do NOT
 * rely on the plugin to generate the middleware — that lives in src/middleware.ts
 * and is compiled by Next.js at Edge Runtime automatically.
 */
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/i18n.ts',
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
