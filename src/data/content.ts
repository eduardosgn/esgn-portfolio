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

export const contact = {
  email: 'eduardosgn19@gmail.com',
  linkedin: 'https://www.linkedin.com/in/edusgn/',
  linkedinLabel: 'linkedin.com/in/edusgn',
  behance: 'https://www.behance.net/eduardosgndfc0',
  behanceLabel: 'behance.net/eduardosgndfc0',
  cv: '/cv-eduardo-nascimento.pdf',
  location: 'Barra Velha, SC',
};

export const navLinks = [
  { href: '#trabalhos', label: 'trabalhos', menuLabel: 'Trabalhos', n: '01' },
  { href: '#sobre', label: 'sobre', menuLabel: 'Sobre', n: '02' },
  { href: '#stack', label: 'stack', menuLabel: 'Stack', n: '03' },
  { href: '#experiencia', label: 'experiência', menuLabel: 'Experiência', n: '04' },
  { href: '#contato', label: 'contato', menuLabel: 'Contato', n: '05' },
];

export const heroTags = ['Product Designer', 'UX/UI', 'Front-end'];

export const marquee: { label: string; outline?: boolean }[] = [
  { label: 'Product Design' },
  { label: 'UX/UI', outline: true },
  { label: 'Design Systems' },
  { label: 'Front-end', outline: true },
  { label: 'Prototipação' },
  { label: 'Acessibilidade', outline: true },
  { label: 'Vue.js' },
  { label: 'React', outline: true },
];

export interface LiveSite {
  name: string;
  url: string;
  domain: string;
  description: string;
  image: ImageMetadata;
}

export const liveSites: LiveSite[] = [
  { name: 'Athenas', url: 'https://athen.as/', domain: 'athen.as', description: 'Logística · Website e landing pages', image: siteAthenas },
  { name: 'Minddhi', url: 'https://minddhi.ai/', domain: 'minddhi.ai', description: 'Plataforma de IA · Vue + Tailwind', image: siteMinddhi },
  { name: 'Supreme Mind', url: 'https://suprememind.one/', domain: 'suprememind.one', description: 'Desenvolvimento pessoal · Vue.js', image: siteSupremeMind },
  { name: 'Opthyze', url: 'https://opthyze.com/', domain: 'opthyze.com', description: 'Marketing digital · Website', image: siteOpthyze },
];

export interface Work {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
  alt: string;
}

export const featuredWorks: Work[] = [
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
];

export const works: Work[] = [
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
];

export const archive = [
  { index: '08', title: 'Extensão Criação de Startups', type: 'Landing page', href: 'https://www.behance.net/gallery/116039019/Landing-Page-Extensao-Criacao-de-Startups' },
  { index: '09', title: 'Economia e Investimentos', type: 'Landing page', href: 'https://www.behance.net/gallery/116049445/Landing-Page-Economia-e-Investimentos' },
  { index: '10', title: 'Roçadeiras Tekna', type: 'Animação', href: 'https://www.behance.net/gallery/87233893/Animacao-Rocadeiras-Tekna' },
  { index: '11', title: 'Techno Party Posts', type: 'Social media', href: 'https://www.behance.net/gallery/80409631/Social-Media-Electronic-Parties' },
];

export const facts = [
  { label: 'base', value: 'Barra Velha, SC · Brasil' },
  { label: 'modelo', value: 'Remoto' },
  { label: 'foco', value: 'Produto · UX/UI · Design Systems' },
  { label: 'idiomas', value: 'Português · Inglês (intermediário)' },
];

export const services = [
  {
    title: 'Product & UX/UI Design',
    text: 'MVPs, fluxos, wireframes, personas, jornadas do usuário e protótipos de alta fidelidade no Figma.',
  },
  {
    title: 'Design Systems & Acessibilidade',
    text: 'Bibliotecas de componentes reutilizáveis, contraste, leitura de tela e WCAG, validados com testes de usabilidade.',
  },
  {
    title: 'Front-end',
    text: 'HTML, CSS/SCSS, JavaScript, Vue.js e React: interfaces que saem do Figma e chegam no navegador do jeito que foram pensadas.',
  },
];

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

export const stack: StackGroup[] = [
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
    label: 'design',
    items: [{ name: 'Figma' }, { name: 'FigJam' }, { name: 'Miro' }, { name: 'Photoshop' }, { name: 'Illustrator' }, { name: 'Canva' }],
  },
  {
    label: 'processo',
    items: [{ name: 'Scrum / Kanban' }, { name: 'Design Thinking' }, { name: 'Jira' }, { name: 'Notion' }, { name: 'Trello' }],
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
];

export interface Experience {
  period: string;
  company: string;
  role: string;
  bullets: string[];
}

export const experiences: Experience[] = [
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
    bullets: [
      'Criei campanhas e materiais gráficos impressos e digitais para o marketing da marca e para as unidades inFlux de todo o país.',
    ],
  },
  {
    period: 'Mar 2017 - Jun 2018',
    company: 'Fiep',
    role: 'Estagiário de Design Gráfico',
    bullets: [
      'Estágio na Gerência de Marketing da Federação das Indústrias do Estado do Paraná.',
      'Criação e diagramação de peças digitais (mídias sociais e e-mail marketing) e impressas (banners, faixas, folders e flyers) para eventos e campanhas do Sesi, Senai, IEL e Faculdades da Indústria.',
    ],
  },
];

export const education = [
  { years: '2023 - 2026', course: 'Análise e Desenvolvimento de Sistemas', school: 'Estácio' },
  { years: '2022 - 2023', course: 'Desenvolvimento Web', school: 'Rocketseat' },
  { years: '2016 - 2018', course: 'Design Gráfico', school: 'UNICURITIBA' },
  { years: '2014 - 2016', course: 'Mecatrônica e Automação', school: 'SENAI Paraná' },
];
