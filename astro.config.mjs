// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Trocar para https://esgn-design.com quando o domínio estiver ligado na Vercel
  site: 'https://esgn-portfolio.vercel.app',
  output: 'static',
  // pt-BR na raiz (/) e inglês em /en/
  i18n: {
    locales: ['pt-br', 'en'],
    defaultLocale: 'pt-br',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
