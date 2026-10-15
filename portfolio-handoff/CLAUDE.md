# Portfolio Eduardo Nascimento

One-page portfolio em Astro + Tailwind CSS v4 + TypeScript puro, com deploy na Vercel. Spec completa em `portfolio-handoff/HANDOFF.md`.

## Fonte da verdade

- `portfolio-handoff/reference/design-source.html` tem o CSS, os textos, os links e a lógica das interações. Em caso de dúvida sobre valores (cores, tamanhos, durações, easings), copie de lá em vez de inventar.
- Ao portar o CSS: `@container site (...)` vira `@media (...)`, `cqi` vira `vw`, e não use `container-type` no wrapper da página (quebra o `position: fixed`).

## Regras de conteúdo

- Todo o texto do site é pt-BR.
- Nunca use travessão (—) nem meia-risca (–) em textos do site, `alt`, `aria-label`, títulos ou metadados. Use vírgula, ponto ou parênteses. Intervalos de datas com hífen simples: `2016 - 2018`.
- Não crie seções, textos ou números novos sem perguntar.
- Não mostre idade nem telefone.

## Regras de código

- Sem frameworks de UI (React, Vue) e sem bibliotecas de animação. Interações em TypeScript puro dentro de `<script>` dos componentes Astro.
- JS total abaixo de 15 KB gzip. Tudo precisa funcionar e ficar visível sem JS.
- Todo efeito de movimento respeita `prefers-reduced-motion` e fica desligado em telas touch quando depende de mouse (goo do hero, tilt 3D).
- Alvos clicáveis com no mínimo 44px. `:focus-visible` roxo em tudo.
- Imagens sempre via `astro:assets`, com `alt` adequado e sem salto de layout.
- Dados editáveis (projetos, stack, experiências) em `src/data/content.ts`.

## Comandos

- `npm run dev`: servidor local
- `npm run build`: build de produção
- `npm run preview`: testar o build

## Checklist antes de dar uma etapa como pronta

- Build sem erros nem warnings.
- Sem scroll horizontal de 320px a 1920px.
- Visual conferido nos temas dark e light, em 390px e 1440px.
- Nenhum travessão nos textos (`grep -rn "—\|–" src/`).
