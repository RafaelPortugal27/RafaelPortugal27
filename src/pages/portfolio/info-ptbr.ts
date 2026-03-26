import type { Translation } from "./types";

const info: Translation = {
  nav: { about: 'Sobre', skills: 'Skills', experience: 'Experiência', education: 'Formação', contact: 'Contato' },
  hero: {
    greeting: 'Olá, eu sou',
    role: 'Desenvolvedor Full Stack | React | Node.JS | Javascript | Typescript | Nest.JS | Next.JS',
    location: 'Volta Redonda, Rio de Janeiro — Brasil',
    available: 'Disponível para projetos',
    description: "Eu desenvolvo aplicações web escaláveis, APIs e Plataformas SaaS. Experiência comn e-commerce e integrações de ERP",
    badge: "Node.js · TypeScript · React",
    contactButton: "Entre em Contato",
  },
  about: {
    title: 'Sobre Mim',
    text: 'Desenvolvedor Full Stack com sólida experiência no ecossistema Node.js, especializado no desenvolvimento de microsserviços e APIs GraphQL utilizando TypeScript. Especialista em arquiteturas escaláveis com foco em Clean Architecture, SOLID e The Twelve-Factor App. Com background em Engenharia Mecânica e Pós-graduação em Engenharia de Software (MBA), aplico metodologias de controle de qualidade e resolução de problemas para entregar código testável e de alta performance.',
  },
  skills: {
    title: 'Habilidades Técnicas',
    languages: 'Linguagens',
    frontend: 'Front-end',
    backend: 'Back-end',
    db: 'Bancos de Dados',
    arch: 'Arquitetura & Ferramentas',
  },
  experience: {
    title: 'Experiência Profissional',
    jobs: [
      {
        period: 'Nov 2022 — Fev 2026 · 3 anos 4 meses',
        role: 'Desenvolvedor Full Stack',
        company: 'CRP Mango',
        desc: 'Desenvolvimento de aplicações em microsserviços com APIs GraphQL em TypeScript (Express + Apollo Server), PostgreSQL, MongoDB e filas SQS com Clean Architecture. Planejamento e desenvolvimento de integrações entre sistemas via JitterBit — ERPs, E-commerce (Shopify e VTEX) e bancos de dados heterogêneos. Suporte e melhorias em aplicações React e Next.js.',
      },
      {
        period: 'Dez 2020 — Out 2022 · 1 ano 11 meses',
        role: 'Desenvolvedor Full Stack',
        company: 'Quasar Systems',
        desc: 'Desenvolvimento web Full Stack com JavaScript e TypeScript, React, React Native, Next.js, Express e NestJS. Aplicação de boas práticas como Clean Code, SOLID e The Twelve-Factor App. Uso de Redux, Git, GitHub, PostgreSQL e MySQL em projetos de software colaborativos.',
      },
    ],
  },
  education: {
    title: 'Formação Acadêmica',
    items: [
      { year: '2023', title: 'MBA — Engenharia de Software', place: 'Faculdade Metropolitana', detail: 'Pós-Graduação Lato-Sensu · 600h' },
      { year: '2022', title: 'Modelagem e Desenvolvimento de Banco de Dados', place: 'Faculdade Metropolitana', detail: 'Curso de Aperfeiçoamento · 180h' },
      { year: '2019', title: 'Bacharelado em Engenharia Mecânica', place: 'Universidade Federal Fluminense (UFF)', detail: 'Graduação' },
      { year: '2009', title: 'Técnico em Telemática', place: 'Escola Técnica Pandiá Calógeras', detail: 'Ensino Técnico' },
    ],
  },
  softSkills: {
    title: 'Soft Skills',
    items: ['Perfil Resolutivo', 'Aprendizado Ágil', 'Trabalho em Equipe', 'Proativo e Dedicado', 'Comunicação Clara', 'Mentoria e Ensino'],
  },
  contact: { title: 'Vamos Conversar?', subtitle: 'Estou disponível para novas oportunidades e colaborações.' },
  footer: 'Desenvolvido por Rafael Araújo de Moura Portugal',
}

export default info;