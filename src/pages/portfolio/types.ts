export interface Translation {
  nav: { about: string; skills: string; experience: string; education: string; contact: string };
  hero: { greeting: string; role: string; location: string; available: string };
  about: { title: string; text: string };
  skills: { title: string; languages: string; frontend: string; backend: string; db: string; arch: string };
  experience: { title: string; jobs: { period: string; role: string; company: string; desc: string }[] };
  education: { title: string; items: { year: string; title: string; place: string; detail: string }[] };
  softSkills: { title: string; items: string[] };
  contact: { title: string; subtitle: string };
  footer: string;
}

export type Theme = 'dark' | 'light';
export type Lang = 'pt' | 'en';