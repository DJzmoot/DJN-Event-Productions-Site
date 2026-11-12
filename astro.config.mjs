// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Custom domain on GitHub Pages (configured in the repository's Pages
// settings), so no `base` path.
export default defineConfig({
  site: 'https://djneventproductions.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  image: {
    // Generated widths for responsive images.
    breakpoints: [480, 768, 1080, 1440, 1920, 2560],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
