// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Trocar para https://esgn-design.com quando o domínio estiver ligado na Vercel
  site: 'https://esgn-portfolio.vercel.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
