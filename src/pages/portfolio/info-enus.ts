import type { Translation } from "./types";

const info: Translation = {
  nav: { about: 'About', skills: 'Skills', experience: 'Experience', education: 'Education', contact: 'Contact' },
  hero: {
    greeting: "Hi, I'm",
    role: 'Mid-Level Full Stack Developer',
    location: 'Volta Redonda, Rio de Janeiro — Brazil',
    available: 'Available for projects',
  },
  about: {
    title: 'About Me',
    text: 'Full Stack Developer with solid experience in the Node.js ecosystem, specialized in building microservices and GraphQL APIs using TypeScript. Expert in scalable architectures focused on Clean Architecture, SOLID, and The Twelve-Factor App. With a background in Mechanical Engineering and an MBA in Software Engineering, I apply quality control methodologies and problem-solving to deliver testable, high-performance code.',
  },
  skills: {
    title: 'Technical Skills',
    languages: 'Languages',
    frontend: 'Front-end',
    backend: 'Back-end',
    db: 'Databases',
    arch: 'Architecture & Tools',
  },
  experience: {
    title: 'Work Experience',
    jobs: [
      {
        period: 'Nov 2022 — Feb 2026 · 3 years 4 months',
        role: 'Full Stack Developer',
        company: 'CRP Mango',
        desc: 'Built microservice applications with GraphQL APIs in TypeScript (Express + Apollo Server), PostgreSQL, MongoDB, and SQS queues using Clean Architecture. Planned and developed system integrations via JitterBit — ERPs, E-commerce platforms (Shopify & VTEX), and heterogeneous databases. Maintained and improved React and Next.js applications.',
      },
      {
        period: 'Dec 2020 — Oct 2022 · 1 year 11 months',
        role: 'Full Stack Developer',
        company: 'Quasar Systems',
        desc: 'Full Stack web development with JavaScript and TypeScript, React, React Native, Next.js, Express, and NestJS. Applied best practices including Clean Code, SOLID, and The Twelve-Factor App. Used Redux, Git, GitHub, PostgreSQL, and MySQL in collaborative software projects.',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      { year: '2023', title: 'MBA — Software Engineering', place: 'Faculdade Metropolitana', detail: 'Postgraduate · 600h' },
      { year: '2022', title: 'Database Modeling & Development', place: 'Faculdade Metropolitana', detail: 'Certification · 180h' },
      { year: '2019', title: "Bachelor's in Mechanical Engineering", place: 'Federal Fluminense University (UFF)', detail: 'Undergraduate' },
      { year: '2009', title: 'Technical Degree in Telematics', place: 'Escola Técnica Pandiá Calógeras', detail: 'Technical School' },
    ],
  },
  softSkills: {
    title: 'Soft Skills',
    items: ['Problem Solver', 'Fast Learner', 'Team Player', 'Proactive & Dedicated', 'Clear Communication', 'Mentoring & Teaching'],
  },
  contact: { title: "Let's Talk?", subtitle: "I'm available for new opportunities and collaborations." },
  footer: 'Developed by Rafael Araújo de Moura Portugal',
}

export default info;