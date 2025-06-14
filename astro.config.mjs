import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
    // SSG primarily. SSR where prerender is false
    output: 'server',
    adapter: vercel({
        isr: {
            // caches all pages on first request and saves for 1 day
            expiration: 60 * 60 * 24,
        },
        webAnalytics: {
            enabled: false,
          }
    })
});
