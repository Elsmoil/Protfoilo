# CSS Palette Change Rule

When applying any patch that modifies CSS design-token variables
(colors, shadows, etc.) in globals.css or a theme file:

1. **Audit hardcoded values**: After applying the patch, grep all `.tsx`,
   `.ts`, and `.css` files for hardcoded hex/rgba values matching the OLD
   palette (e.g. `rgba(138,43,226`, `rgba(0,255,255`, `#050505`,
   `#0a0a0a`, `#8A2BE2`, `#00FFFF`). Flag every file containing them —
   these are NOT automatically handled by CSS variable aliasing and will
   visually clash with the new palette.

2. **Tailwind v4 `var()` aliasing warning**: If a `@theme` color is defined
   as `var(--another-var)`, warn that Tailwind v4 opacity modifiers
   (`/10`, `/20`, `/30`, etc.) will NOT work on that color because Tailwind
   cannot decompose a CSS `var()` reference into channel values at build time.
   Colors must be defined as literal values (hex, oklch, rgb) in `@theme`
   to support opacity utilities.

3. **Only report**: Do not automatically update files outside the patch scope
   without explicit user approval. Surface the list of mismatches and let the
   user decide.
