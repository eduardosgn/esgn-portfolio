# Handoff: Portfolio Eduardo Nascimento

Landing page única (one-page) com portfolio, stack, experiência e contato. Tema escuro e claro, roxo como cor de destaque, títulos em Inter Tight e textos em JetBrains Mono.

Este pacote tem tudo para começar a implementação no Claude Code:

```
portfolio-handoff/
├── HANDOFF.md                  ← este documento (spec + plano)
├── CLAUDE.md                   ← regras do projeto (copiar para a raiz do repo)
├── reference/
│   └── design-source.html      ← fonte da verdade do design (CSS e lógica das interações)
└── assets/
    ├── cv-eduardo-nascimento.pdf
    └── images/
        ├── eduardo.jpg         ← foto da seção Sobre (400x400)
        ├── covers/             ← capas dos estudos de caso do Behance (proporção 808:632)
        └── sites/              ← prints das homes dos sites no ar
```

As capas originais em alta resolução estão em `Downloads/portfolio-behance/<projeto>/capa.jpg`, caso precise de mais qualidade.

---

## 1. Stack recomendada

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | **Astro** (output estático) | É uma página só, sem rotas. Astro gera HTML puro, manda zero JS por padrão e só carrega os scripts das interações. Dá componentes `.astro` para organizar as seções e otimização de imagem nativa. Não precisa de SPA. |
| Estilo | **Tailwind CSS v4** (`npx astro add tailwind`) + um `global.css` | Tailwind para layout e utilitários do dia a dia. Os tokens ficam em `@theme`. Os efeitos mais específicos (goo, tilt, marquee, view transition do tema) ficam em CSS normal, portado direto da referência. |
| Interações | **TypeScript puro** em `<script>` dos componentes Astro | São poucas interações e todas pequenas. Nenhum framework de UI é necessário. Meta: menos de 15 KB de JS no total. |
| Fontes | **@fontsource-variable/inter-tight** e **@fontsource-variable/jetbrains-mono** | Self-hosted, sem requisição ao Google Fonts, com `font-display: swap`. |
| Imagens | `astro:assets` (`<Image>` / `<Picture>`) | Gera AVIF/WebP com `srcset`, `width`/`height` e lazy loading. |
| Deploy | **Vercel** (adapter estático) | Já está no fluxo do Edu (MCP do Vercel). Domínio: `esgn-design.com`. |

O que **não** usar: React/Vue islands (não há estado complexo), bibliotecas de animação (GSAP, Framer), jQuery, carrosséis prontos.

Use sempre as versões estáveis mais recentes (`npm create astro@latest`).

---

## 2. Como ler a referência

`reference/design-source.html` foi feito numa ferramenta de design e usa um formato próprio (`.dc.html`). Não é para copiar o arquivo inteiro, e sim para extrair dele:

- **CSS**: está todo dentro de `<helmet><style>`. Os valores (cores, `clamp()`, easings, durações) são a fonte da verdade e podem ser portados quase 1:1.
- **Marcação**: está dentro de `<x-dc>`. Ignore a sintaxe do template (`{{variavel}}`, `<sc-if>`, `ref="{{...}}"`, `onClick="{{...}}"`). O HTML em volta é o que vale.
- **Lógica**: está em `class Component extends DCLogic` no fim do arquivo. É estilo React. Os métodos `_initGoo`, `_measureGoo`, `_gooTick`, `_initToTop`, `onTiltMove` e `toggleTheme` têm a lógica que precisa virar TypeScript puro.

### Ajustes obrigatórios ao portar

1. **Container queries viram media queries.** Na referência, `.site` tem `container-type: inline-size` e o responsivo usa `@container site (...)` e unidades `cqi`, porque o design rodava dentro de um canvas. No site real:
   - troque `@container site (max-width: X)` por `@media (max-width: X)`;
   - troque `cqi` por `vw` (os `clamp()` já limitam os extremos);
   - **remova** o `container-type` do wrapper. Ele cria um containing block e quebra o `position: fixed` do botão de voltar ao topo.
2. **Tweaks do canvas saem.** A referência tem classes para trocar fonte e cor (`.ft-*`, `.fm-*`, `.acc-*`). Em produção fica só o padrão: Inter Tight, JetBrains Mono e roxo. Mantenha os tokens das outras cores comentados, se quiser, mas sem UI para trocar.
3. **O tema** era controlado por estado do componente. No site real ele fica em `data-theme` no `<html>` (ver seção 6).
4. **Imagens** na referência apontam para `/_blob/...`. Use os arquivos de `assets/`.
5. **Divisão das telas no canvas** (`Desktop-2`, `Mobile-2`) era só para visualizar. Ignore.

---

## 3. Design tokens

### Cores

| Token | Dark | Light | Uso |
|---|---|---|---|
| `--bg` | `#0A0A0B` | `#F4F4F2` | Fundo da página |
| `--bg2` | `#131315` | `#EAEAE7` | Fundo de placeholders de imagem, pílula da URL |
| `--card` | `#141416` | `#FFFFFF` | Cards, code card, browser bar |
| `--line` | `#232327` | `#DCDCD8` | Divisórias (hairlines) |
| `--line2` | `#37373D` | `#C3C3BE` | Bordas de pills, botões, cards |
| `--fg` | `#F4F4F5` | `#0D0D0F` | Texto principal |
| `--mut` | `#A0A0A8` | `#55555C` | Texto secundário |
| `--dim` | `#5C5C64` | `#A6A6A2` | Números de linha do code card |
| `--acc` | `#9B6BFF` | `#6A2EE8` | Destaque roxo (links, selos, hover) |
| `--on-acc` | `#0A0A0B` | `#FFFFFF` | Texto sobre o roxo |
| `--slash` | `color-mix(in oklab, #9B6BFF 82%, #000)` | `#9B6BFF` | Barra "/" e cursor líquido do hero |
| `--acc-soft` | `color-mix(in srgb, var(--acc) 14%, transparent)` | igual | Fundo de hover de linhas e pills |
| `--acc-mid` | `color-mix(in srgb, var(--acc) 58%, var(--fg))` | igual | Strings no code card |
| `--edge` | `color-mix(in srgb, var(--acc) 42%, var(--card))` | igual | "Espessura" do card no tilt 3D |

Os pares de texto principais passam em WCAG AA (texto `--mut` sobre `--bg` dá cerca de 7:1 no dark e 6:1 no light). `--dim` é só para elementos decorativos, como os números de linha.

### Tipografia

| Token | Valor | Uso |
|---|---|---|
| `--f-title` | `"Inter Tight", "Inter", system-ui, sans-serif` | Títulos, nomes de projeto, pills |
| `--f-mono` | `"JetBrains Mono", ui-monospace, Consolas, monospace` | Corpo, labels, botões, code card |
| Corpo | 15px, line-height 1.7 | Texto base |
| `.title` | peso 700, letter-spacing -0.04em, line-height 0.95 | Base de todos os títulos |
| Nome no hero | `clamp(52px, 15.5vw, 250px)`, letter-spacing -0.055em, line-height 0.9 | "Eduardo / Nascimento." |
| Título de seção | `clamp(40px, 6.4vw, 104px)` | "Trabalhos selecionados", "Sobre"... |
| Título do contato | `clamp(48px, 10.5vw, 176px)` | "Tem um projeto em mente?" |

### Espaçamento e forma

| Token | Valor |
|---|---|
| Container | `max-width: 1440px`, padding lateral `clamp(16px, 4vw, 56px)` |
| Respiro de seção | `padding-block: clamp(72px, 9vw, 150px)` |
| Gap de grids | `clamp(20px, 2vw, 28px)` |
| Raio de card | 14px (cards Behance), 16px (sites no ar, code card) |
| Raio de pill e botão | 999px |
| Altura mínima de alvo de toque | 44px em tudo que é clicável |

### Motion

| Token | Valor |
|---|---|
| `--ease` | `cubic-bezier(.16, 1, .3, 1)` (saída suave, usado em quase tudo) |
| `--ease-io` | `cubic-bezier(.7, 0, .2, 1)` (preenchimento de botões, rolagem de texto) |

---

## 4. Estrutura da página

Ordem das seções (âncoras entre parênteses). O texto exato de cada uma está na referência, em pt-BR.

1. **Nav fixa** (sticky, blur no fundo): logo `esgn_` (cursor piscando), links numerados 01 a 05 (trabalhos, sobre, stack, experiência, contato), relógio de Barra Velha, botão de tema, CTA "Vamos conversar". Abaixo de 1020px os links viram menu sanduíche com overlay de tela cheia.
2. **Hero** (`#topo`): tags (Product Designer, UX/UI, Front-end), status "Aberto a vagas remotas" com ponto pulsando, nome gigante em duas linhas, barra "/" com efeito líquido, parágrafo de apresentação, botões "Ver trabalhos" e "Baixar CV", code card `edu.config.js`.
3. **Marquee** de habilidades (palavras alternando sólido e contorno, separadas por "/").
4. **Trabalhos** (`#trabalhos`):
   - **No ar agora**: grade 2x2 com Athenas, Minddhi, Supreme Mind e Opthyze (print do site no fundo, nome, selo "site no ar", descrição).
   - **Behance**: 2 cards grandes (Opthyze, Minddhi) e uma grade com VIA, Student Dashboard, Checkout, Webapp e Inno Labs.
   - **Arquivo**: lista com 4 projetos antigos (landing pages, motion, social media).
   - Botão "Ver tudo no Behance".
5. **Sobre** (`#sobre`): foto (preto e branco, ganha cor no hover), frase de destaque, dois parágrafos, lista de fatos (base, modelo, foco, idiomas), três serviços numerados.
6. **Stack** (`#stack`): linhas `~/front-end`, `~/back-end`, `~/design`, `~/processo`, `~/ia`, cada uma com pills. Back-end usa pill tracejada e nota de "fundamentos".
7. **Experiência** (`#experiencia`): acordeão com 5 empresas (só uma aberta por vez, a primeira aberta por padrão) e grade de formação com 4 cards.
8. **Contato** (`#contato`): título grande, e-mail clicável, botão "Copiar e-mail", links para LinkedIn, Behance e o PDF do currículo.
9. **Rodapé**: copyright, relógio, link "Voltar ao topo".
10. **Botão flutuante de voltar ao topo** (fora do fluxo, `position: fixed`).

### Componentes sugeridos

| Componente | Props | Observação |
|---|---|---|
| `Nav.astro` | | Inclui menu mobile e botão de tema |
| `Hero.astro` | | Inclui `GooSlash` e `CodeCard` |
| `GooSlash.astro` | | SVG filter + barra + 2 blobs + script |
| `Marquee.astro` | `items: {label, outline}[]` | Conteúdo duplicado para o loop |
| `LiveSiteCard.astro` | `name, url, domain, description, image` | Usa `data-tilt` |
| `WorkCard.astro` | `title, description, href, image, featured?` | Usa `data-tilt` na mídia |
| `ArchiveRow.astro` | `index, title, type, href` | |
| `StackRow.astro` | `label, items: {name, level?, soft?}[], note?` | |
| `ExperienceItem.astro` | `period, company, role, bullets[], open?` | `<details name="experiencia">` |
| `ToTop.astro` | | Botão flutuante + script |

Os dados (projetos, stack, experiências, formação) podem ficar num `src/data/content.ts` para facilitar edição futura.

---

## 5. Responsivo

| Largura | O que muda |
|---|---|
| Acima de 1020px | Layout completo. Nav com links, relógio e CTA. |
| Até 1020px | Links, relógio e CTA da nav somem. Entra o botão de menu (sanduíche) com overlay. |
| Até 960px | Cabeçalhos de seção empilham. Code card ocupa a largura toda. Experiência vira 2 linhas (período e empresa em cima, cargo embaixo). Stack empilha label e pills. Sites no ar viram 1 coluna (proporção 16:10). Linhas do arquivo perdem o número. |
| 641px a 960px | Grade do Behance em 2 colunas (o último card ímpar ocupa as 2). |
| Acima de 960px | Grade do Behance em 6 colunas virtuais: cards ocupam 2 (3 por linha) e os 2 últimos ocupam 3 cada. |
| Até 640px | Nav com 60px de altura. Nome do hero em 16vw, sem recuo na segunda linha. Efeito líquido desligado (barra estática com raio de 4px e 8.5vw de largura). Botões do hero se esticam. Code card com fonte de 12px. Rodapé empilhado. |

Testar em 320, 390, 768, 1024, 1440 e 1920px. Nenhuma largura pode gerar scroll horizontal.

---

## 6. Interações e estados

### Tema (dark/light)

- Padrão: **dark**. A escolha do usuário fica salva em `localStorage` (`theme`).
- Script inline no `<head>` (antes do CSS pintar) lê o `localStorage` e define `data-theme` no `<html>`, para não piscar o tema errado.
- Botão com ícone de sol (no dark) e lua (no light), `aria-label` "Ativar modo claro" ou "Ativar modo escuro".
- Transição: `document.startViewTransition` com um círculo que se abre a partir do clique (clip-path animado em `::view-transition-new(root)`, 700ms, `--ease`). Sem suporte ou com movimento reduzido: troca direta.

### Hero: barra "/" com cursor líquido

Efeito inspirado no mkvision.studio. Lógica completa em `_initGoo`, `_measureGoo` e `_gooTick` da referência.

- Filtro SVG `#goo-f`: `feGaussianBlur stdDeviation=11` seguido de `feColorMatrix` com alfa `0 0 0 24 -11` e `feComposite atop`. Aplicado num container que cobre o hero inteiro, atrás do conteúdo.
- Dentro dele: a barra (skewX -18°) e dois blobs (58px e 22px) que seguem o mouse com lerp de 0.2 e 0.09. Quando chegam perto, fundem com a barra.
- A barra é posicionada por um marcador invisível entre o "e" e o "n" de "Nascimento" (`<span class="slash-anchor">`). A posição é medida no JS, compensando a inclinação, e recalculada com `ResizeObserver` e `document.fonts.ready`.
- Efeito ímã: a barra é puxada até cerca de 9% da distância do mouse num raio de 420px.
- O cursor do sistema some no hero, exceto em links e botões (onde o blob encolhe para 0.32) e no code card (onde o blob some).
- Desligado em telas touch, abaixo de 641px e com `prefers-reduced-motion`. Nesses casos a barra fica estática, só com a animação de entrada (scaleY de 0 a 1, 1.3s, delay 0.5s).
- O loop de `requestAnimationFrame` para de escrever estilos quando o blob está escondido e parado.

### Cards com tilt 3D (sites no ar e mídia dos cards do Behance)

- Inclinação máxima: 5° nos sites no ar e 7° nos cards do Behance. `perspective(1100px)` e `translateZ(14px)` no hover.
- Variáveis CSS atualizadas no `pointermove`: `--rx`, `--ry`, `--mx`, `--my`, `--gx`, `--gy`.
- Espessura: `box-shadow` sólido com cor `--edge`, deslocado para o lado que vem para frente, e uma sombra suave que se move ao contrário.
- Brilho que segue o cursor (`radial-gradient` branco a 16% num `::after`).
- Paralaxe interna: imagem em sentido oposto (até 10px), texto no mesmo sentido (até 7px).
- Entrada no hover: transição de 0.3s. Saída: volta em 0.7s com `--ease`.
- Use delegação de eventos num listener da seção `#trabalhos`. Desligado em touch e com movimento reduzido.

### Demais interações

| Elemento | Gatilho | Comportamento |
|---|---|---|
| Links da nav e botões | hover | Texto "rola" para cima e é trocado por uma cópia (0.5s, `--ease-io`) |
| Botões | hover | Fundo roxo sobe de baixo para cima (0.5s), texto vira `--on-acc` |
| Cards Behance | hover | Pílula "Ver no Behance ↗" sobe; seta gira 45° e fica roxa |
| Linhas do arquivo | hover | Fundo `--acc-soft` cresce de baixo; título anda 12px para a direita |
| Pills da stack | hover | Borda roxa, fundo `--acc-soft`, sobe 3px |
| Code card | hover | Sobe 4px, borda roxa, sombra roxa; cada linha destaca no hover |
| Foto do Sobre | hover | Sai do preto e branco e dá zoom leve |
| Marquee | sempre | Loop de 40s; pausa no hover |
| Seções | scroll | Fade e subida de 18px com `animation-timeline: view()` (só onde há suporte; sem suporte, o conteúdo aparece direto) |
| Nome do hero | load | Cada linha sobe de dentro de uma máscara (1.2s, `--ease`, segunda linha com 0.1s de atraso) |
| Experiência | clique | Acordeão exclusivo. Sugestão: `<details name="experiencia">` nativo; o "+" gira 45° e vira "x" roxo quando aberto |
| Copiar e-mail | clique | `navigator.clipboard.writeText`; o botão mostra "E-mail copiado!" com ícone de check por 2.2s. Se o clipboard falhar, abre `mailto:` |
| Menu mobile | clique | Overlay abaixo da nav com links grandes em cascata (40ms de atraso entre eles). Fecha ao clicar num link e com Esc |
| Relógio | a cada 15s | Hora de `America/Sao_Paulo` no formato HH:MM, com os dois pontos piscando |
| Voltar ao topo | scroll | Aparece quando o hero sai da tela (base do hero acima de 15% da viewport) e some quando o rodapé fica a 140px de entrar. Anel em `conic-gradient` mostra o progresso da rolagem. Tooltip "Voltar ao topo" no hover. Clique: scroll suave ao topo e foco no logo |

---

## 7. Conteúdo e regras de texto

- Todo o texto é **pt-BR** e está na referência. Não inventar textos novos nem números.
- **Não usar travessão (—) nem meia-risca (–)** em nenhum texto. Use vírgula, ponto ou parênteses. Intervalos de datas com hífen simples: `Dez 2023 - Atual`, `2016 - 2018`.
- Não mostrar idade nem telefone.
- E-mail: `eduardosgn19@gmail.com`. LinkedIn: `https://www.linkedin.com/in/edusgn/`. Behance: `https://www.behance.net/eduardosgndfc0`.
- Sites no ar: `https://athen.as/`, `https://minddhi.ai/`, `https://suprememind.one/`, `https://opthyze.com/`.
- Links dos projetos do Behance estão nos `href` da referência.
- O botão "Baixar CV" aponta para `/cv-eduardo-nascimento.pdf` (copiar de `assets/` para `public/`).

---

## 8. Casos de borda

- **Sem JavaScript**: todo o conteúdo aparece, tema fica no dark, acordeão funciona (se usar `<details>`), menu mobile vira lista simples ou fica acessível de outro jeito. Nenhuma seção pode depender de JS para aparecer.
- **Imagens carregando**: caixas com `aspect-ratio` fixo e fundo `--bg2`, sem salto de layout (CLS 0).
- **Fontes carregando**: fallback com métricas próximas; a barra do hero é reposicionada quando as fontes terminam (`document.fonts.ready`).
- **Telas muito largas**: tudo limitado a 1440px, fundo continua na largura total.
- **Telas muito estreitas (320px)**: "Nascimento." tem que caber sem quebrar nem vazar.
- **Clipboard bloqueado**: cai no `mailto:`.
- **View Transitions sem suporte**: troca de tema direta.
- **`animation-timeline` sem suporte**: seções aparecem sem animação.

---

## 9. Acessibilidade

- Link "Pular para os trabalhos" como primeiro item focável.
- Ordem de foco: skip link, logo, links da nav, botão de tema, CTA, menu (mobile), conteúdo na ordem visual.
- `:focus-visible` com contorno roxo de 2px e offset de 3px em tudo.
- Botões de ícone com `aria-label` (tema, menu, voltar ao topo). Menu com `aria-expanded` e `aria-controls`.
- Itens do acordeão com `aria-expanded` (ou `<details>`, que já resolve).
- Marquee com `aria-hidden="true"` (é decorativo e repete conteúdo da Stack).
- Code card com `aria-label` descrevendo que é um resumo do perfil.
- Imagens: `alt` descritivo nas capas; prints dos sites no ar com `alt=""` (o nome já está no texto do card).
- Botão de copiar e-mail anuncia a mudança (`aria-live="polite"`).
- `prefers-reduced-motion: reduce`: desliga goo, tilt, marquee, reveals e a transição circular do tema.

---

## 10. Performance e SEO

- Meta: Lighthouse 95+ em todas as categorias, no mobile.
- JS total abaixo de 15 KB (gzip). Scripts com `type="module"`, carregados só onde usados.
- Imagens via `astro:assets`, com `sizes` corretos e `loading="lazy"` abaixo da dobra.
- Pré-carregar só as duas fontes, apenas os pesos usados.
- `<html lang="pt-BR">`, `<title>Eduardo Nascimento | Portfolio</title>`, meta description, Open Graph e Twitter card (gerar uma imagem OG 1200x630 com o nome e a barra roxa), `theme-color` para dark e light, favicon com o `esgn_`.
- JSON-LD `Person` com nome, cargo (Product Designer), local, e-mail e `sameAs` (LinkedIn, Behance).
- `robots.txt` permitindo tudo.

---

## 11. Plano de implementação

1. **Setup**: `npm create astro@latest` (template mínimo, TypeScript strict), `npx astro add tailwind`, fontes, `global.css` com tokens e tema, `CLAUDE.md` na raiz, deploy inicial na Vercel.
2. **Esqueleto**: layout base, Nav, Rodapé, todas as seções com o conteúdo estático e responsivo. Sem interações ainda.
3. **Interações sem risco**: tema, menu mobile, acordeão, copiar e-mail, relógio, voltar ao topo, hovers em CSS, marquee, reveals.
4. **Efeitos**: tilt 3D dos cards, depois a barra líquida do hero.
5. **Polimento**: acessibilidade, reduced motion, SEO, OG image, Lighthouse, testes nas larguras da seção 5.

Critério de pronto de cada etapa: build sem erros, sem scroll horizontal de 320px a 1920px, visual igual à referência nos dois temas.

---

## 12. Prompt para iniciar no Claude Code

Coloque esta pasta na raiz do novo projeto (ou aponte o Claude Code para ela) e mande:

> Leia `portfolio-handoff/HANDOFF.md` e `portfolio-handoff/CLAUDE.md`. Vamos implementar o portfolio seguindo a stack e o plano da seção 11. Comece pela etapa 1 (setup) e pela etapa 2 (esqueleto com todas as seções e o responsivo), usando `portfolio-handoff/reference/design-source.html` como fonte da verdade para CSS, textos e links. Me mostre o resultado de cada etapa antes de seguir para a próxima.
