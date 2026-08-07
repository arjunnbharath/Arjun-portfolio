import { useEffect, useState } from 'react';
import StaggeredMenu from './components/StaggeredMenu';
import SiteNav from './components/SiteNav';
import './styles.css';
import './menu-integration.css';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
  { label: 'Experience', ariaLabel: 'View experience', link: '#experience' },
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const featuredMenuItem = {
  label: 'Explore Physical AI',
  ariaLabel: 'Explore Physical AI',
  link: '#physical-ai',
  badge: 'Now Exploring'
};

const socialItems = [
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/arjun-bharath-sr/' },
  { label: 'GitHub', link: 'https://github.com/arjunnbharath' },
  { label: 'Email', link: 'mailto:arjun200118bharath@gmail.com' }
];

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  const [formStatus, setFormStatus] = useState('');
  const isLight = theme === 'light';

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLight);
    document.body.classList.add('animations-ready');
  }, [isLight]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(
      '.section h2, .about-grid > *, .about-copy > *, .services-grid > img, .service-list article, .project-card, .physical-ai-copy, .cert-list li, .education, .contact-grid > *'
    );

    revealElements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 80}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px' }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, []);

  const toggleTheme = () => {
    const nextTheme = isLight ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = new FormData(event.currentTarget).get('name').trim();
    setFormStatus(`Thanks, ${name}. I’ll be in touch soon.`);
    event.currentTarget.reset();
  };

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  return (
    <>
      <SiteNav
        name="Arjun Bharath SR"
        physicalAiLink="#physical-ai"
        isLight={isLight}
        onThemeToggle={toggleTheme}
      />
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering
        menuButtonColor={isLight ? '#1b1a16' : '#ffffff'}
        openMenuButtonColor="#1b1a16"
        changeMenuColorOnOpen
        colors={['#1b1a16', '#4f4b42']}
        logoUrl="/logo.svg"
        accentColor="#4f4b42"
        isFixed
        closeOnClickAway
        onMenuOpen={lockScroll}
        onMenuClose={unlockScroll}
        featuredItem={featuredMenuItem}
        panelActions={
          <button
            className="sm-theme-toggle"
            type="button"
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
            aria-pressed={isLight}
            onClick={toggleTheme}
          >
            <span className="theme-dot" />
            <span>{isLight ? 'Dark' : 'Light'}</span>
          </button>
        }
      />

      <div className="page-shell">
        <header className="hero" id="home">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-inner">
            <p className="hero-eyebrow">Software Engineer · Thiruvananthapuram, Kerala</p>
            <div className="hero-content">
              <div className="hero-title-block">
                <h1>
                  <span className="hero-line">Arjun</span>
                  <span className="hero-line">Bharath SR</span>
                </h1>
                <ul className="hero-tags" aria-label="Core skills">
                  <li>AI / ML</li>
                  <li>Backend</li>
                  <li>Full-Stack</li>
                  <li>Cloud</li>
                </ul>
              </div>
              <div className="hero-copy">
                <p>
                  Building scalable systems, intelligent products, and enterprise solutions with Java, Spring Boot, Node.js, and modern AI workflows.
                </p>
                <div className="hero-actions">
                  <a className="hero-btn hero-btn-primary" href="#projects">See my work</a>
                  <a className="hero-btn hero-btn-secondary" href="#contact">Get in touch</a>
                </div>
              </div>
            </div>
            <a className="hero-scroll" href="#about" aria-label="Scroll to about section">
              <span>Scroll</span>
              <span className="hero-scroll-line" aria-hidden="true" />
            </a>
          </div>
        </header>

        <main>
          <section id="about" className="section about">
            <h2>About</h2>
            <div className="about-grid">
              <img className="portrait" src="/profile_pic.png" alt="Arjun Bharath SR" />
              <div className="about-copy">
                <p>
                  Software Engineer with 2+ years of professional experience in software development, backend engineering, web technologies, APIs, databases, cloud technologies, and enterprise automation. Experienced in Java, Spring Boot, JavaScript, SQL, HTML/CSS, Node.js, and Express.js, with hands-on knowledge of Generative AI, LLM applications, RAG pipelines, embeddings, vector databases, and AI/ML platforms.
                </p>
                <p>
                  Currently working as a Software Engineer developing scalable, personalized customer engagement solutions using Salesforce Marketing Cloud. Strong foundation in problem-solving, software architecture, data processing, and full-stack application development.
                </p>
                <blockquote>Building scalable systems and intelligent products that create real impact.</blockquote>
              </div>
            </div>
          </section>

          <section id="experience" className="section services">
            <h2>Experience</h2>
            <div className="services-grid experience-grid">
              <img src="https://picsum.photos/seed/arjun-office/1000/700" alt="Engineering workspace" />
              <div className="service-list experience-list">
                <article>
                  <h3><span>01.</span> Software Engineer — G10X</h3>
                  <p className="role-meta">Infopark, Kochi | Apr 2025 – Present</p>
                  <p>Build personalized customer engagement apps with AMPscript, SQL, HTML &amp; CSS in Salesforce Marketing Cloud. Design Journey Builder / Automation Studio workflows, API integrations, debugging, data validation, and large-scale personalization for enterprise campaigns.</p>
                </article>
                <article>
                  <h3><span>02.</span> Associate Software Engineer — G10X</h3>
                  <p className="role-meta">Infopark, Kochi | Mar 2024 – Apr 2025</p>
                  <p>Performed software testing and quality validation for Salesforce Marketing Cloud personalization features. Validated customer data and campaign workflows, investigated defects, and worked in an agile cross-functional environment.</p>
                </article>
                <article>
                  <h3><span>03.</span> Java Full Stack Trainee — QUEST</h3>
                  <p className="role-meta">Thiruvananthapuram | May 2023 – Jan 2024</p>
                  <p>Developed full-stack web apps with Java, Spring Boot, HTML, CSS &amp; JavaScript. Implemented REST APIs, responsive UIs, database-driven workflows, and software development best practices.</p>
                </article>
                <article>
                  <h3><span>04.</span> Soft Skills &amp; Strengths</h3>
                  <p>Problem Solving · Analytical Thinking · Communication · Collaboration · Agile · Debugging · API Integration · Requirement Analysis · Continuous Learning</p>
                </article>
              </div>
            </div>
          </section>

          <section id="projects" className="section projects">
            <h2>Projects</h2>
            <div className="project-grid">
              <article className="project-card">
                <h3>Jira Spillover Analyzer</h3>
                <p>Web app to analyse Jira CSV data and identify sprint spillover patterns. Built with Node.js, Express.js, PostgreSQL, and Firebase auth for upload, processing, and visualization workflows.</p>
              </article>
              <article className="project-card">
                <h3>AI / RAG Knowledge Application</h3>
                <p>Explored RAG pipelines with document chunking, embeddings, FAISS/vector search, and LLMs. Focused on semantic retrieval, prompt engineering, and improving LLM response accuracy.</p>
              </article>
              <article className="project-card">
                <h3>OneMoreRep</h3>
                <p>Fitness &amp; workout tracking application concept for exercises, progress, and calorie-related activities across desktop and mobile experiences.</p>
              </article>
              <article className="project-card">
                <h3>Jewelry E-commerce Platform</h3>
                <p>E-commerce concept with product browsing, inventory, discounts, promotions, and an admin dashboard for stock, pricing, and campaigns.</p>
              </article>
              <article className="project-card">
                <h3>LoopLab Studios</h3>
                <p>Modern clothing e-commerce website concept with responsive UI and product-focused shopping experiences.</p>
              </article>
              <article className="project-card">
                <h3>Restrobar</h3>
                <p>Restaurant website concept with responsive layouts, menu presentation, and customer-focused web design.</p>
              </article>
            </div>
          </section>

          <section id="physical-ai" className="section physical-ai">
            <h2>Explore Physical AI</h2>
            <div className="physical-ai-copy">
              <p>
                Exploring the intersection of AI, robotics, and real-world systems — building intelligent applications that connect software, sensors, and physical environments. Focus areas include embodied AI, agentic systems, edge inference, and human-machine interaction.
              </p>
              <p>
                From RAG and LLM workflows to automation and data-driven decision making, I&apos;m interested in how AI moves beyond screens into machines, devices, and everyday physical workflows.
              </p>
            </div>
          </section>

          <section id="certs" className="section certs">
            <h2>Certifications</h2>
            <ul className="cert-list">
              <li>Oracle Certified Generative AI Professional — 2025</li>
              <li>Oracle Certified OCI Data Science Professional — 2025</li>
              <li>Salesforce Certified Agentforce Specialist — 2025</li>
              <li>Salesforce Certified AI Associate — 2025</li>
              <li>Salesforce Certified Marketing Cloud Email Specialist — 2025</li>
            </ul>
            <div className="education">
              <h3>Education</h3>
              <p>B.Tech in Computer Science and Engineering — APJ Abdul Kalam Technological University, Kerala | 2019–2023</p>
              <p>Senior Secondary (Computer Science) — St. Mary&apos;s HSS Pattom | 2017</p>
            </div>
          </section>

          <section id="contact" className="section contact">
            <h2>Contact</h2>
            <div className="contact-grid">
              <address>
                <p>Thiruvananthapuram, Kerala, India</p>
                <p><a href="mailto:arjun200118bharath@gmail.com">arjun200118bharath@gmail.com</a></p>
                <p><a href="https://www.linkedin.com/in/arjun-bharath-sr/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/arjunnbharath" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                <div className="socials">
                  <a href="https://www.linkedin.com/in/arjun-bharath-sr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                  <a href="https://github.com/arjunnbharath" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
                  <a href="mailto:arjun200118bharath@gmail.com" aria-label="Email">@</a>
                </div>
              </address>

              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Let’s get started!</h3>
                <label>
                  <span>Your name</span>
                  <input type="text" name="name" placeholder="YOUR NAME" required />
                </label>
                <label>
                  <span>Your phone</span>
                  <input type="tel" name="phone" placeholder="YOUR PHONE" required />
                </label>
                <label>
                  <span>Your email</span>
                  <input type="email" name="email" placeholder="YOUR EMAIL" required />
                </label>
                <button type="submit">Submit</button>
                <p className="form-status" role="status">{formStatus}</p>
              </form>
            </div>
          </section>
        </main>

        <footer>
          <a href="#home">Arjun Bharath SR</a>
          <p>About · Experience · Projects · Physical AI · Contact</p>
          <small>© 2026 AB. All rights reserved.</small>
        </footer>
      </div>
    </>
  );
}

export default App;
