import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ronnygutierrez.dev',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
