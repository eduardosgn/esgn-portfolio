import type { ImageMetadata } from 'astro';

import siteAthenas from '../assets/images/sites/athenas.jpg';
import siteMinddhi from '../assets/images/sites/minddhi.jpg';
import siteSupremeMind from '../assets/images/sites/suprememind.jpg';
import siteOpthyze from '../assets/images/sites/opthyze.jpg';

import coverOpthyze from '../assets/images/covers/opthyze.jpg';
import coverMinddhi from '../assets/images/covers/minddhi.jpg';
import coverVia from '../assets/images/covers/via.jpg';
import coverStudentDashboard from '../assets/images/covers/edunext-student-dashboard.jpg';
import coverCheckout from '../assets/images/covers/edunext-checkout.jpg';
import coverWebapp from '../assets/images/covers/edunext-webapp.jpg';
import coverInnoLabs from '../assets/images/covers/inno-labs.jpg';

/* ============ Idiomas ============ */

export type Lang = 'pt-br' | 'en';

export const LANGS: { code: Lang; label: string; name: string; htmlLang: string; ogLocale: string; path: string }[] = [
  { code: 'pt-br', label: 'PT', name: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR', path: '/' },
  { code: 'en', label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_US', path: '/en/' },
];

export const getLang = (locale?: string): Lang => (locale === 'en' ? 'en' : 'pt-br');

/* ============ Dados que não mudam com o idioma ============ */

export const contact = {
  email: 'eduardosgn19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/edusgn/',
  linkedinLabel: 'linkedin.com/in/edusgn',
  behance: 'https://www.behance.net/eduardosgndfc0',
  behanceLabel: 'behance.net/eduardosgndfc0',
  cv: '/cv-eduardo-nascimento.pdf',
  location: 'Barra Velha, SC',
};

/* ============ Tipos ============ */

export interface LiveSite {
  name: string;
  url: string;
  domain: string;
  description: string;
  image: ImageMetadata;
}

export interface Work {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}

export interface StackItem {
  name: string;
  level?: string;
  soft?: boolean;
}

export interface StackGroup {
  label: string;
  items: StackItem[];
  note?: string;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  bullets: string[];
}

export interface Content {
  meta: { title: string; description: string; ogAlt: string };
  a11y: {
    skip: string;
    logo: string;
    mainNav: string;
    menuNav: string;
    themeToLight: string;
    themeToDark: string;
    menuOpen: string;
    menuClose: string;
    language: string;
    switchTo: string;
    areas: string;
    codeCard: string;
    toTop: string;
  };
  nav: { links: { href: string; label: string; menuLabel: string; n: string }[]; cta: string };
  status: string;
  hero: { tags: string[]; lead: string; leadEm: string; ctaWorks: string; ctaCv: string; codeXp: string };
  marquee: { label: string; outline?: boolean }[];
  works: {
    title: [string, string];
    aside: string;
    liveLabel: string;
    liveAside: string;
    behanceAside: string;
    cardCta: string;
    archiveLabel: string;
    archiveAside: string;
    more: string;
    liveSites: LiveSite[];
    featured: Work[];
    grid: Work[];
    archive: { index: string; title: string; type: string; href: string }[];
  };
  about: {
    title: string;
    aside: string;
    photoAlt: string;
    statement: string;
    statementEm: string;
    paragraphs: string[]; // HTML confiável (só <strong>)
    facts: { label: string; value: string }[];
    services: { title: string; text: string }[];
  };
  stack: { title: string; aside: string; groups: StackGroup[] };
  experience: {
    title: string;
    aside: string;
    items: Experience[];
    eduTitle: string;
    education: { years: string; course: string; school: string }[];
  };
  contact: {
    idx: string;
    title: string;
    titleEm: string;
    titleEmPrefix: string;
    text: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: { toTop: string };
}

/* ============ Português ============ */

const pt: Content = {
  meta: {
    title: 'Eduardo Nascimento | Portfolio',
    description:
      'Product Designer & UX/UI com 6+ anos criando produtos digitais para fintechs, logística e plataformas com IA, do conceito ao código.',
    ogAlt: 'Eduardo Nascimento, Product Designer',
  },
  a11y: {
    skip: 'Pular para os trabalhos',
    logo: 'Eduardo Nascimento, voltar ao início',
    mainNav: 'Principal',
    menuNav: 'Menu',
    themeToLight: 'Ativar modo claro',
    themeToDark: 'Ativar modo escuro',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    language: 'Idioma',
    switchTo: 'Mudar para',
    areas: 'Áreas',
    codeCard: 'Resumo do perfil em formato de código',
    toTop: 'Voltar ao topo',
  },
  nav: {
    links: [
      { href: '#trabalhos', label: 'trabalhos', menuLabel: 'Trabalhos', n: '01' },
      { href: '#sobre', label: 'sobre', menuLabel: 'Sobre', n: '02' },
      { href: '#stack', label: 'stack', menuLabel: 'Stack', n: '03' },
      { href: '#experiencia', label: 'experiência', menuLabel: 'Experiência', n: '04' },
      { href: '#contato', label: 'contato', menuLabel: 'Contato', n: '05' },
    ],
    cta: 'Vamos conversar',
  },
  status: 'Aberto a vagas remotas',
  hero: {
    tags: ['Product Designer', 'UX/UI', 'Front-end'],
    lead: 'Product Designer & UX/UI com 6+ anos criando produtos digitais para fintechs, logística e plataformas com IA,',
    leadEm: 'do conceito ao código.',
    ctaWorks: 'Ver trabalhos',
    ctaCv: 'Baixar CV',
    codeXp: '6+ anos',
  },
  marquee: [
    { label: 'Product Design' },
    { label: 'UX/UI', outline: true },
    { label: 'Design Systems' },
    { label: 'Front-end', outline: true },
    { label: 'Prototipação' },
    { label: 'Acessibilidade', outline: true },
    { label: 'Vue.js' },
    { label: 'React', outline: true },
  ],
  works: {
    title: ['Trabalhos', 'selecionados'],
    aside: 'Webapps, dashboards e redesigns de sites, do wireframe ao protótipo de alta fidelidade. Cada projeto abre no Behance ou no site no ar.',
    liveLabel: 'No ar agora',
    liveAside: 'Front-end em produção',
    behanceAside: 'Estudos de caso de UX/UI',
    cardCta: 'Ver no Behance ↗',
    archiveLabel: 'Arquivo',
    archiveAside: 'Landing pages, motion e social media',
    more: 'Ver tudo no Behance',
    liveSites: [
      { name: 'Athenas', url: 'https://athen.as/', domain: 'athen.as', description: 'Logística · Website e landing pages', image: siteAthenas },
      { name: 'Minddhi', url: 'https://minddhi.ai/', domain: 'minddhi.ai', description: 'Plataforma de IA · Vue + Tailwind', image: siteMinddhi },
      { name: 'Supreme Mind', url: 'https://suprememind.one/', domain: 'suprememind.one', description: 'Desenvolvimento pessoal · Vue.js', image: siteSupremeMind },
      { name: 'Opthyze', url: 'https://opthyze.com/', domain: 'opthyze.com', description: 'Marketing digital · Website', image: siteOpthyze },
    ],
    featured: [
      {
        title: 'Opthyze',
        description: 'Website Redesign',
        href: 'https://www.behance.net/gallery/245967451/Opthyze-Website-Redesign',
        image: coverOpthyze,
        alt: 'Site da Opthyze redesenhado, em notebook e celular',
      },
      {
        title: 'Minddhi',
        description: 'Website Redesign',
        href: 'https://www.behance.net/gallery/245904091/Minddhi-Website-Redesign',
        image: coverMinddhi,
        alt: 'Home do site da Minddhi redesenhado, em um MacBook',
      },
    ],
    grid: [
      {
        title: 'VIA Webapp',
        description: 'UX/UI Design',
        href: 'https://www.behance.net/gallery/186173205/VIA-Webapp-UXUI-Design',
        image: coverVia,
        alt: 'VIA Webapp em notebook e celular sobre dunas ao pôr do sol',
      },
      {
        title: 'Student Dashboard',
        description: 'edunext · UX/UI Design',
        href: 'https://www.behance.net/gallery/185127937/Student-Dashboard-UXUI-Design-edunext',
        image: coverStudentDashboard,
        alt: 'Student Dashboard da edunext no notebook e no celular',
      },
      {
        title: 'Checkout',
        description: 'edunext · UI Design',
        href: 'https://www.behance.net/gallery/184444493/Checkout-UI-Design-edunext',
        image: coverCheckout,
        alt: 'Telas do checkout da edunext em celulares',
      },
      {
        title: 'Webapp',
        description: 'edunext · UI Design',
        href: 'https://www.behance.net/gallery/183744493/Webapp-UI-Design-edunext',
        image: coverWebapp,
        alt: 'Dashboard financeiro do webapp da edunext em um notebook',
      },
      {
        title: 'Inno Labs',
        description: 'UX/UI Design',
        href: 'https://www.behance.net/gallery/178963693/Inno-Labs-UXUI-Design',
        image: coverInnoLabs,
        alt: 'Site da Inno Labs em mockup de notebook e celular',
      },
    ],
    archive: [
      { index: '08', title: 'Extensão Criação de Startups', type: 'Landing page', href: 'https://www.behance.net/gallery/116039019/Landing-Page-Extensao-Criacao-de-Startups' },
      { index: '09', title: 'Economia e Investimentos', type: 'Landing page', href: 'https://www.behance.net/gallery/116049445/Landing-Page-Economia-e-Investimentos' },
      { index: '10', title: 'Roçadeiras Tekna', type: 'Animação', href: 'https://www.behance.net/gallery/87233893/Animacao-Rocadeiras-Tekna' },
      { index: '11', title: 'Techno Party Posts', type: 'Social media', href: 'https://www.behance.net/gallery/80409631/Social-Media-Electronic-Parties' },
    ],
  },
  about: {
    title: 'Sobre',
    aside: 'Product Designer que fala a língua do front-end.',
    photoAlt: 'Foto de Eduardo Nascimento sorrindo',
    statement: 'Desenho interfaces pensando em quem usa,',
    statementEm: 'e em quem vai codar.',
    paragraphs: [
      'Sou <strong>Product Designer e UX/UI Designer</strong> com mais de 6 anos de experiência em produtos digitais para fintechs, logística e plataformas de tecnologia com IA, do conceito à entrega, lado a lado com times de desenvolvimento.',
      'Trabalho com Design Systems, prototipação em Figma, testes de usabilidade e acessibilidade. E como também programo (<strong>HTML, CSS, JavaScript, Vue.js e React</strong>, com base em Java e Rust), a conversa entre design e engenharia fica bem mais fluida.',
    ],
    facts: [
      { label: 'base', value: 'Barra Velha, SC · Brasil' },
      { label: 'modelo', value: 'Remoto' },
      { label: 'foco', value: 'Produto · UX/UI · Design Systems' },
      { label: 'idiomas', value: 'Português · Inglês (intermediário)' },
    ],
    services: [
      { title: 'Product & UX/UI Design', text: 'MVPs, fluxos, wireframes, personas, jornadas do usuário e protótipos de alta fidelidade no Figma.' },
      { title: 'Design Systems & Acessibilidade', text: 'Bibliotecas de componentes reutilizáveis, contraste, leitura de tela e WCAG, validados com testes de usabilidade.' },
      { title: 'Front-end', text: 'HTML, CSS/SCSS, JavaScript, Vue.js e React: interfaces que saem do Figma e chegam no navegador do jeito que foram pensadas.' },
    ],
  },
  stack: {
    title: 'Stack',
    aside: 'Design que já nasce pensando no código. O que uso no dia a dia e o que estou aprofundando.',
    groups: [
      {
        label: 'design',
        items: [{ name: 'Figma' }, { name: 'FigJam' }, { name: 'Miro' }, { name: 'Photoshop' }, { name: 'Illustrator' }, { name: 'Canva' }],
      },
      {
        label: 'processo',
        items: [{ name: 'Scrum / Kanban' }, { name: 'Design Thinking' }, { name: 'Jira' }, { name: 'Notion' }, { name: 'Trello' }],
      },
      {
        label: 'front-end',
        items: [
          { name: 'HTML', level: 'dia a dia' },
          { name: 'CSS / SCSS', level: 'dia a dia' },
          { name: 'Tailwind CSS', level: 'produção' },
          { name: 'WordPress', level: 'produção' },
          { name: 'JavaScript', level: 'dia a dia' },
          { name: 'TypeScript', level: 'produção' },
          { name: 'Vue.js', level: 'produção' },
          { name: 'React', level: 'produção' },
          { name: 'Angular', level: 'produção' },
        ],
      },
      {
        label: 'back-end',
        items: [
          { name: 'Python', level: 'fundamentos', soft: true },
          { name: 'Java', level: 'fundamentos', soft: true },
          { name: 'Rust', level: 'fundamentos', soft: true },
        ],
        note: '// entendo a base e leio código com tranquilidade, mas ainda tenho pouca experiência prática.',
      },
      {
        label: 'ia',
        items: [
          { name: 'Claude Code' },
          { name: 'Claude Design' },
          { name: 'MCP', level: 'Figma' },
          { name: 'MCP', level: 'FigJam' },
          { name: 'MCP', level: 'Vercel' },
          { name: 'Grok Bot', level: 'tarefas do dia a dia' },
        ],
        note: '// IA no fluxo de trabalho, do Figma ao deploy, e na organização da rotina.',
      },
    ],
  },
  experience: {
    title: 'Experiência',
    aside: 'Do design gráfico ao Product Design, sempre perto de quem constrói.',
    items: [
      {
        period: 'Dez 2023 - Atual',
        company: 'Global Tech Holding',
        role: 'Product Designer Pleno',
        bullets: [
          'Lidero a criação de MVPs, interfaces e Design Systems para produtos de fintech, logística, armazenagem e plataformas com IA.',
          'Desenvolvo fluxos, wireframes, personas, jornadas do usuário e protótipos de alta fidelidade em Figma, junto com o time de desenvolvimento.',
          'Realizo testes de usabilidade e aplico boas práticas de acessibilidade (contraste, leitura de tela) nas interfaces entregues.',
          'Atuo em squads multidisciplinares com metodologia ágil, usando Jira e Notion do conceito à entrega.',
        ],
      },
      {
        period: 'Ago 2020 - Dez 2023',
        company: 'Edunext',
        role: 'UX/UI Designer Pleno',
        bullets: [
          'Conduzi a evolução visual da plataforma fintech, elevando consistência e usabilidade a partir de testes com usuários.',
          'Construí a biblioteca de componentes reutilizáveis (Design System), reduzindo retrabalho e acelerando as entregas de design.',
          'Colaborei com squads de produto e desenvolvimento em workshops de Design Thinking (FigJam/Miro) para priorizar melhorias de usabilidade.',
        ],
      },
      {
        period: 'Set 2019 - Fev 2020',
        company: 'Nordtech Máquinas e Motores',
        role: 'Designer Gráfico Jr.',
        bullets: [
          'Desenvolvi campanhas digitais, materiais gráficos e vídeos promocionais para ações de marketing e comunicação da marca.',
          'Apoiei a coordenação de eventos internos e externos da empresa.',
        ],
      },
      {
        period: 'Set 2018 - Mai 2019',
        company: 'inFlux English School',
        role: 'Designer Gráfico Jr.',
        bullets: ['Criei campanhas e materiais gráficos impressos e digitais para o marketing da marca e para as unidades inFlux de todo o país.'],
      },
      {
        period: 'Mar 2017 - Jun 2018',
        company: 'FIEP',
        role: 'Estagiário de Design Gráfico',
        bullets: [
          'Estágio na Gerência de Marketing da Federação das Indústrias do Estado do Paraná.',
          'Criação e diagramação de peças digitais (mídias sociais e e-mail marketing) e impressas (banners, faixas, folders e flyers) para eventos e campanhas do Sesi, Senai, IEL e Faculdades da Indústria.',
        ],
      },
    ],
    eduTitle: 'Formação',
    education: [
      { years: '2023 - 2026', course: 'Análise e Desenvolvimento de Sistemas', school: 'Estácio' },
      { years: '2022 - 2023', course: 'Desenvolvimento Web', school: 'Rocketseat' },
      { years: '2016 - 2018', course: 'Design Gráfico', school: 'UNICURITIBA' },
      { years: '2014 - 2016', course: 'Mecatrônica e Automação', school: 'SENAI Paraná' },
    ],
  },
  contact: {
    idx: '(05) Contato',
    title: 'Tem um projeto',
    titleEmPrefix: 'em ',
    titleEm: 'mente?',
    text: 'Aberto a vagas remotas e projetos freelance de produto, UX/UI e front-end. Me manda um e-mail:',
    copy: 'Copiar e-mail',
    copied: 'E-mail copiado!',
    cv: 'Currículo',
  },
  footer: { toTop: 'Voltar ao topo' },
};

/* ============ English ============ */

const en: Content = {
  meta: {
    title: 'Eduardo Nascimento | Portfolio',
    description:
      'Product Designer & UX/UI with 6+ years building digital products for fintech, logistics and AI platforms, from concept to code.',
    ogAlt: 'Eduardo Nascimento, Product Designer',
  },
  a11y: {
    skip: 'Skip to work',
    logo: 'Eduardo Nascimento, back to top',
    mainNav: 'Main',
    menuNav: 'Menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    switchTo: 'Switch to',
    areas: 'Areas',
    codeCard: 'Profile summary written as code',
    toTop: 'Back to top',
  },
  nav: {
    links: [
      { href: '#trabalhos', label: 'work', menuLabel: 'Work', n: '01' },
      { href: '#sobre', label: 'about', menuLabel: 'About', n: '02' },
      { href: '#stack', label: 'stack', menuLabel: 'Stack', n: '03' },
      { href: '#experiencia', label: 'experience', menuLabel: 'Experience', n: '04' },
      { href: '#contato', label: 'contact', menuLabel: 'Contact', n: '05' },
    ],
    cta: "Let's talk",
  },
  status: 'Open to remote roles',
  hero: {
    tags: ['Product Designer', 'UX/UI', 'Front-end'],
    lead: 'Product Designer & UX/UI with 6+ years building digital products for fintech, logistics and AI platforms,',
    leadEm: 'from concept to code.',
    ctaWorks: 'View work',
    ctaCv: 'Download CV',
    codeXp: '6+ years',
  },
  marquee: [
    { label: 'Product Design' },
    { label: 'UX/UI', outline: true },
    { label: 'Design Systems' },
    { label: 'Front-end', outline: true },
    { label: 'Prototyping' },
    { label: 'Accessibility', outline: true },
    { label: 'Vue.js' },
    { label: 'React', outline: true },
  ],
  works: {
    title: ['Selected', 'work'],
    aside: 'Webapps, dashboards and website redesigns, from wireframe to high-fidelity prototype. Each project opens on Behance or on the live site.',
    liveLabel: 'Live now',
    liveAside: 'Front-end in production',
    behanceAside: 'UX/UI case studies',
    cardCta: 'View on Behance ↗',
    archiveLabel: 'Archive',
    archiveAside: 'Landing pages, motion and social media',
    more: 'See everything on Behance',
    liveSites: [
      { name: 'Athenas', url: 'https://athen.as/', domain: 'athen.as', description: 'Logistics · Website and landing pages', image: siteAthenas },
      { name: 'Minddhi', url: 'https://minddhi.ai/', domain: 'minddhi.ai', description: 'AI platform · Vue + Tailwind', image: siteMinddhi },
      { name: 'Supreme Mind', url: 'https://suprememind.one/', domain: 'suprememind.one', description: 'Personal development · Vue.js', image: siteSupremeMind },
      { name: 'Opthyze', url: 'https://opthyze.com/', domain: 'opthyze.com', description: 'Digital marketing · Website', image: siteOpthyze },
    ],
    featured: [
      { ...pt.works.featured[0], alt: 'Redesigned Opthyze website on a laptop and a phone' },
      { ...pt.works.featured[1], alt: 'Home page of the redesigned Minddhi website on a MacBook' },
    ],
    grid: [
      { ...pt.works.grid[0], alt: 'VIA Webapp on a laptop and a phone over sand dunes at sunset' },
      { ...pt.works.grid[1], alt: 'edunext Student Dashboard on a laptop and a phone' },
      { ...pt.works.grid[2], alt: 'edunext checkout screens on phones' },
      { ...pt.works.grid[3], alt: 'Financial dashboard of the edunext webapp on a laptop' },
      { ...pt.works.grid[4], alt: 'Inno Labs website in a laptop and phone mockup' },
    ],
    archive: [
      { ...pt.works.archive[0] },
      { ...pt.works.archive[1] },
      { ...pt.works.archive[2], type: 'Animation' },
      { ...pt.works.archive[3] },
    ],
  },
  about: {
    title: 'About',
    aside: 'A Product Designer who speaks front-end.',
    photoAlt: 'Photo of Eduardo Nascimento smiling',
    statement: 'I design interfaces for the people who use them,',
    statementEm: 'and for the people who code them.',
    paragraphs: [
      "I'm a <strong>Product Designer and UX/UI Designer</strong> with more than 6 years of experience in digital products for fintech, logistics and AI technology platforms, from concept to delivery, side by side with development teams.",
      'I work with Design Systems, Figma prototyping, usability testing and accessibility. And since I also code (<strong>HTML, CSS, JavaScript, Vue.js and React</strong>, with a foundation in Java and Rust), the conversation between design and engineering flows much more smoothly.',
    ],
    facts: [
      { label: 'based', value: 'Barra Velha, SC · Brazil' },
      { label: 'model', value: 'Remote' },
      { label: 'focus', value: 'Product · UX/UI · Design Systems' },
      { label: 'languages', value: 'Portuguese · English (intermediate)' },
    ],
    services: [
      { title: 'Product & UX/UI Design', text: 'MVPs, flows, wireframes, personas, user journeys and high-fidelity prototypes in Figma.' },
      { title: 'Design Systems & Accessibility', text: 'Reusable component libraries, contrast, screen readers and WCAG, validated through usability testing.' },
      { title: 'Front-end', text: 'HTML, CSS/SCSS, JavaScript, Vue.js and React: interfaces that leave Figma and reach the browser exactly as they were designed.' },
    ],
  },
  stack: {
    title: 'Stack',
    aside: "Design built with code in mind. What I use every day and what I'm going deeper into.",
    groups: [
      { ...pt.stack.groups[0] },
      { ...pt.stack.groups[1], label: 'process' },
      {
        label: 'front-end',
        items: [
          { name: 'HTML', level: 'daily' },
          { name: 'CSS / SCSS', level: 'daily' },
          { name: 'Tailwind CSS', level: 'production' },
          { name: 'WordPress', level: 'production' },
          { name: 'JavaScript', level: 'daily' },
          { name: 'TypeScript', level: 'production' },
          { name: 'Vue.js', level: 'production' },
          { name: 'React', level: 'production' },
          { name: 'Angular', level: 'production' },
        ],
      },
      {
        label: 'back-end',
        items: [
          { name: 'Python', level: 'fundamentals', soft: true },
          { name: 'Java', level: 'fundamentals', soft: true },
          { name: 'Rust', level: 'fundamentals', soft: true },
        ],
        note: '// I understand the basics and read code comfortably, but I still have little hands-on experience.',
      },
      {
        label: 'ai',
        items: [
          { name: 'Claude Code' },
          { name: 'Claude Design' },
          { name: 'MCP', level: 'Figma' },
          { name: 'MCP', level: 'FigJam' },
          { name: 'MCP', level: 'Vercel' },
          { name: 'Grok Bot', level: 'everyday tasks' },
        ],
        note: '// AI in my workflow, from Figma to deploy, and in organizing my routine.',
      },
    ],
  },
  experience: {
    title: 'Experience',
    aside: 'From graphic design to Product Design, always close to the people who build.',
    items: [
      {
        period: 'Dec 2023 - Present',
        company: 'Global Tech Holding',
        role: 'Mid-level Product Designer',
        bullets: [
          'I lead the creation of MVPs, interfaces and Design Systems for fintech, logistics, warehousing and AI platform products.',
          'I develop flows, wireframes, personas, user journeys and high-fidelity prototypes in Figma, together with the development team.',
          'I run usability tests and apply accessibility best practices (contrast, screen readers) to the interfaces I deliver.',
          'I work in cross-functional squads using agile methods, with Jira and Notion from concept to delivery.',
        ],
      },
      {
        period: 'Aug 2020 - Dec 2023',
        company: 'Edunext',
        role: 'Mid-level UX/UI Designer',
        bullets: [
          'Led the visual evolution of the fintech platform, improving consistency and usability based on user testing.',
          'Built the reusable component library (Design System), reducing rework and speeding up design delivery.',
          'Worked with product and development squads in Design Thinking workshops (FigJam/Miro) to prioritize usability improvements.',
        ],
      },
      {
        period: 'Sep 2019 - Feb 2020',
        company: 'Nordtech Máquinas e Motores',
        role: 'Junior Graphic Designer',
        bullets: [
          'Developed digital campaigns, graphic materials and promotional videos for marketing and brand communication.',
          "Supported the coordination of the company's internal and external events.",
        ],
      },
      {
        period: 'Sep 2018 - May 2019',
        company: 'inFlux English School',
        role: 'Junior Graphic Designer',
        bullets: ["Created print and digital campaigns and graphic materials for the brand's marketing and for inFlux schools across the country."],
      },
      {
        period: 'Mar 2017 - Jun 2018',
        company: 'FIEP',
        role: 'Graphic Design Intern',
        bullets: [
          'Internship in the Marketing department of the Federation of Industries of the State of Paraná.',
          'Created and laid out digital pieces (social media and email marketing) and print pieces (banners, signs, folders and flyers) for events and campaigns of Sesi, Senai, IEL and Faculdades da Indústria.',
        ],
      },
    ],
    eduTitle: 'Education',
    education: [
      { years: '2023 - 2026', course: 'Systems Analysis and Development', school: 'Estácio' },
      { years: '2022 - 2023', course: 'Web Development', school: 'Rocketseat' },
      { years: '2016 - 2018', course: 'Graphic Design', school: 'UNICURITIBA' },
      { years: '2014 - 2016', course: 'Mechatronics and Automation', school: 'SENAI Paraná' },
    ],
  },
  contact: {
    idx: '(05) Contact',
    title: 'Got a project',
    titleEmPrefix: 'in ',
    titleEm: 'mind?',
    text: 'Open to remote roles and freelance projects in product, UX/UI and front-end. Drop me an email:',
    copy: 'Copy email',
    copied: 'Email copied!',
    cv: 'Resume',
  },
  footer: { toTop: 'Back to top' },
};

const content: Record<Lang, Content> = { 'pt-br': pt, en };

export const getContent = (locale?: string): Content => content[getLang(locale)];
