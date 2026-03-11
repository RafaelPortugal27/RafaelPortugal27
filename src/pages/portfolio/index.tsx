import { useState, useEffect, useRef } from 'react';
import type { Theme, Lang, Translation } from './types';
import pt from './info-ptbr';
import en from './info-enus';
import './portfolio.css';

// ─── Translations ─────────────────────────────────────────────────────────────
const translations: Record<Lang, Translation> = {
  pt,
  en,
};

// ─── Skill data ───────────────────────────────────────────────────────────────
const skillsData = {
  languages: ['JavaScript (ES6+)', 'TypeScript', 'Node.js'],
  frontend: ['React', 'React Native', 'Next.js', 'Redux', 'HTML5', 'CSS3'],
  backend: ['Nest.js', 'Express', 'GraphQL', 'RESTful APIs', 'Microsserviços'],
  db: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB', 'SQL Server'],
  arch: ['Clean Architecture', 'SOLID', 'Twelve-Factor App', 'Docker', 'SQS', 'JitterBit', 'Git / GitHub'],
};

// ─── Hook: Intersection Observer ─────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`animate-section ${inView ? 'in-view' : ''} ${className}`}>
      {children}
    </div>
  );
}

function SkillTag({ label, index }: { label: string; index: number }) {
  return (
    <span className="skill-tag" style={{ animationDelay: `${index * 60}ms` }}>
      {label}
    </span>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`skill-group ${inView ? 'in-view' : ''}`}>
      <h4 className="skill-group-title">{title}</h4>
      <div className="skill-tags">
        {items.map((item, i) => <SkillTag key={item} label={item} index={i} />)}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [lang, setLang] = useState<Lang>('pt');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  // Sync theme to <html> class
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Navbar scroll state
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={`portfolio-root theme-${theme}`}>

      {/* ── Navbar ─────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <span className="navbar-logo" onClick={() => scrollTo('hero')}>
            <span className="logo-bracket">&lt;</span>rmp
            <span className="logo-bracket">/&gt;</span>
          </span>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {(['about', 'skills', 'experience', 'education', 'contact'] as const).map(key => (
              <button key={key} className="nav-link" onClick={() => scrollTo(key)}>
                {t.nav[key]}
              </button>
            ))}
          </div>

          <div className="nav-controls">
            <button
              className="toggle-btn"
              onClick={() => setLang(l => l === 'pt' ? 'en' : 'pt')}
              title="Switch language"
            >
              {lang === 'pt' ? '🇧🇷 PT' : '🇺🇸 EN'}
            </button>
            <button
              className="toggle-btn theme-toggle"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────── */}
      <section id="hero" className="section hero-section">
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{t.hero.greeting}</p>
            <h1 className="hero-name">
              Rafael<br />
              <span className="hero-name-accent">Portugal</span>
            </h1>
            <p className="hero-role">{t.hero.role}</p>
            <p className="hero-location">
              <span className="location-dot" />
              {t.hero.location}
            </p>
            <div className="hero-badges">
              <span className="badge badge-available">{t.hero.available}</span>
              <span className="badge">Node.js · TypeScript · React</span>
            </div>
            <div className="hero-cta">
              <a href="mailto:rafael.mportugal@gmail.com" className="btn-primary">
                {lang === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
              </a>
              <a
                href="https://linkedin.com/in/rafaelmportugal"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar-ring avatar-ring-2" />
            <img
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=RafaelBlonde&backgroundColor=b6e3f4&hairColor=e8c14a&beardProbability=100"
              alt="Avatar"
              className="avatar-img"
            />
            <div className="avatar-glow" />
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-line" />
          <span className="scroll-label">{lang === 'pt' ? 'Role para baixo' : 'Scroll down'}</span>
        </div>
      </section>

      {/* ── About ──────────────────────────────────── */}
      <section id="about" className="section about-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// sobre' : '// about'}</div>
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-grid">
            <p className="about-text">{t.about.text}</p>
            <div className="about-stats">
              {[
                { value: '5+', label: lang === 'pt' ? 'Anos de experiência' : 'Years of experience' },
                { value: '2', label: lang === 'pt' ? 'Empresas' : 'Companies' },
                { value: 'MBA', label: lang === 'pt' ? 'Pós-graduação' : 'Postgraduate' },
              ].map(stat => (
                <div key={stat.value} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Skills ─────────────────────────────────── */}
      <section id="skills" className="section skills-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// habilidades' : '// skills'}</div>
          <h2 className="section-title">{t.skills.title}</h2>
        </AnimatedSection>
        <div className="skills-grid">
          <SkillGroup title={t.skills.languages} items={skillsData.languages} />
          <SkillGroup title={t.skills.frontend} items={skillsData.frontend} />
          <SkillGroup title={t.skills.backend} items={skillsData.backend} />
          <SkillGroup title={t.skills.db} items={skillsData.db} />
          <SkillGroup title={t.skills.arch} items={skillsData.arch} />
        </div>
      </section>

      {/* ── Experience ─────────────────────────────── */}
      <section id="experience" className="section experience-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// experiência' : '// experience'}</div>
          <h2 className="section-title">{t.experience.title}</h2>
        </AnimatedSection>
        <div className="timeline">
          {t.experience.jobs.map((job, i) => (
            <AnimatedSection key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-period">{job.period}</span>
                <h3 className="timeline-role">{job.role}</h3>
                <span className="timeline-company">{job.company}</span>
                <p className="timeline-desc">{job.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Education ──────────────────────────────── */}
      <section id="education" className="section education-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// formação' : '// education'}</div>
          <h2 className="section-title">{t.education.title}</h2>
        </AnimatedSection>
        <div className="edu-grid">
          {t.education.items.map((item, i) => (
            <AnimatedSection key={i} className="edu-card-wrap">
              <div className="edu-card">
                <span className="edu-year">{item.year}</span>
                <div className="edu-body">
                  <h4 className="edu-title">{item.title}</h4>
                  <span className="edu-place">{item.place}</span>
                  <span className="edu-detail">{item.detail}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Soft Skills ────────────────────────────── */}
      <section className="section softskills-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// competências' : '// soft skills'}</div>
          <h2 className="section-title">{t.softSkills.title}</h2>
          <div className="soft-grid">
            {t.softSkills.items.map((item, i) => (
              <div key={i} className="soft-card" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="soft-icon">{'◆'}</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Contact ────────────────────────────────── */}
      <section id="contact" className="section contact-section">
        <AnimatedSection>
          <div className="section-label">{lang === 'pt' ? '// contato' : '// contact'}</div>
          <h2 className="section-title contact-title">{t.contact.title}</h2>
          <p className="contact-subtitle">{t.contact.subtitle}</p>
          <div className="contact-links">
            <a href="mailto:rafael.mportugal@gmail.com" className="contact-link">
              <span className="contact-link-icon">✉</span>
              rafael.mportugal@gmail.com
            </a>
            <a href="tel:+5524998410807" className="contact-link">
              <span className="contact-link-icon">✆</span>
              (24) 99841-0807
            </a>
            <a href="https://linkedin.com/in/rafaelmportugal" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">in</span>
              linkedin.com/in/rafaelmportugal
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Footer ─────────────────────────────────── */}
      <footer className="footer">
        <span className="footer-text">{t.footer}</span>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
