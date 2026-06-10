import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// Published as a GitHub Pages project site under the Floret-Labs org:
// https://floret-labs.github.io/blossom/
export default defineConfig({
  site: 'https://floret-labs.github.io',
  base: '/blossom/',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
