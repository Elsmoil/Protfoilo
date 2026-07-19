/**
 * OpenNext configuration for Cloudflare Pages.
 *
 * Required shape for @opennextjs/cloudflare v1.20.1+.
 * Docs: https://opennext.js.org/cloudflare/get-started
 *
 * This portfolio has no ISR / on-demand revalidation / background queues,
 * so incrementalCache, tagCache and queue are all set to "dummy".
 */

import type { OpenNextConfig } from "@opennextjs/cloudflare";

const config: OpenNextConfig = {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },

  /**
   * node:crypto is provided by the Cloudflare Workers runtime via the
   * `nodejs_compat` compatibility flag (set in wrangler.jsonc).
   * Declaring it here tells the bundler not to bundle it — use the runtime's
   * native implementation instead.
   */
  edgeExternals: ["node:crypto"],

  middleware: {
    external: true,
    override: {
      wrapper: "cloudflare-edge",
      converter: "edge",
      proxyExternalRequest: "fetch",
      incrementalCache: "dummy",
      tagCache: "dummy",
      queue: "dummy",
    },
  },
};

export default config;
