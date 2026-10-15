// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Domínio principal (esgn-design.site sem www redireciona para cá na Vercel)
  site: 'https://www.esgn-design.site',
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
