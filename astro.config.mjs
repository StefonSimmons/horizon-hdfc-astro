import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    // SSG primarily. SSR where prerender is false
    output: 'hybrid',
    adapter: vercel({
        webAnalytics: {
            enabled: true,
          }
    }),
});
