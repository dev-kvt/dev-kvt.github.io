import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import profile from './assets/profile.jpg';
import { SITE, SKILLS, SOCIALS } from './data';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
};

const viewport = { once: true, amount: 0.35 };

const Section = ({ id, title, eyebrow, children }) => (
  <section id={id} className="section">
    <motion.div
      className="section-heading"
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={viewport}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
    </motion.div>
    {children}
  </section>
);

const ThemeToggle = ({ theme, onToggle }) => (
  <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
    <span className="toggle-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    <span className="toggle-pill" data-theme={theme}>
      <span className="toggle-thumb" />
    </span>
  </button>
);

const IconGitHub = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.69c-2.78.61-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.56 1.37.21 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.93.36.31.68.93.68 1.87v2.77c0 .27.18.59.69.48A10 10 0 0 0 12 2z" />
  </svg>
);

const IconLinkedIn = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

function App() {
  const initialTheme = useMemo(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem('theme');
    if (stored) return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }, []);

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const resumeUrl = `${import.meta.env.BASE_URL}${SITE.resumePath}`;
  const heatmapUrl = `https://ghchart.rshah.org/${theme === 'dark' ? '6c8cff' : 'ff8e3c'}/devkvt`;

  return (
    <div className="page">
      <header className="nav">
        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#heatmap">Heatmap</a>
        </nav>
        <ThemeToggle
          theme={theme}
          onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
      </header>

      <main>
        <section className="hero" id="work">
          <motion.div
            className="hero-media"
            variants={fadeIn}
            initial="initial"
            animate="animate"
          >
            <div className="photo-frame">
              <img src={profile} alt="Divyansh Singh" loading="lazy" decoding="async" />
            </div>
          </motion.div>

          <motion.div
            className="hero-copy"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.span className="eyebrow" variants={fadeUp}>
              {SITE.role}
            </motion.span>
            <motion.h1 variants={fadeUp}>Hi, I&apos;m {SITE.name}.</motion.h1>
            <motion.p className="lead" variants={fadeUp}>
              {SITE.summary}
            </motion.p>
            <motion.div className="cta-row" variants={fadeUp}>
              <a className="btn primary" href={resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="btn ghost" href={`mailto:${SITE.email}`}>
                Let&apos;s talk
              </a>
            </motion.div>
            <motion.div className="icon-row" variants={fadeUp}>
              {SOCIALS.map((link) => {
                const Icon = link.label === 'GitHub' ? IconGitHub : IconLinkedIn;
                return (
                  <a
                    key={link.label}
                    className="icon-link"
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="icon" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </motion.div>
            <motion.div className="hero-meta" variants={fadeUp}>
              <span>{SITE.location}</span>
              <span>{SITE.email}</span>
            </motion.div>
          </motion.div>
        </section>

        <Section id="skills" title="Skill Stack" eyebrow="Toolkit">
          <motion.p
            className="skill-paragraph"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
          >
            {SKILLS.map((group) => `${group.title} includes ${group.items.join(', ')}`).join('. ')}.
          </motion.p>
        </Section>

        <Section id="heatmap" title="GitHub Heatmap" eyebrow="Open Source">
          <motion.div
            className="card heatmap-card"
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
          >
            <div className="heatmap-header">
              <p className="muted">Live contribution activity from GitHub.</p>
              <a className="icon-link subtle" href="https://github.com/dev-kvt" target="_blank" rel="noreferrer">
                <IconGitHub className="icon" />
                <span>github.com/dev-kvt</span>
              </a>
            </div>
            <div className="heatmap-wrap">
              <img src={heatmapUrl} alt="GitHub contribution heatmap" loading="lazy" decoding="async" />
            </div>
          </motion.div>
        </Section>

      </main>

      <footer className="footer">
        <span>@devkvt</span>
      </footer>
    </div>
  );
}

export default App;
