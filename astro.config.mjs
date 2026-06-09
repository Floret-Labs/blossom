import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Published as a GitHub Pages project site under the Floret-Labs org:
// https://floret-labs.github.io/blossom/
export default defineConfig({
  site: 'https://floret-labs.github.io',
  base: '/blossom/',
  vite: {
    plugins: [tailwindcss()],
  },
});
