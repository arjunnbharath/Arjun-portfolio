import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SiteNav.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const SiteNav = ({
  name = 'Arjun Bharath SR',
  physicalAiLink = '/physical-ai',
  physicalAiLabel = 'Explore Physical AI',
  isLight = false,
  onThemeToggle
}) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const show = window.scrollY > 24;
      setScrolled(show);
      document.body.toggleAttribute('data-scrolled', show);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.body.removeAttribute('data-scrolled');
    };
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return undefined;
    }

    const sections = SECTIONS.map(section => document.getElementById(section.id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0.12, 0.35, 0.6]
      }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className={`site-nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-nav-shell">
        <Link className="site-nav-brand" to="/">
          {name}
        </Link>

        <nav className="site-nav-links" aria-label="Page sections">
          {SECTIONS.map(section => (
            <Link
              key={section.id}
              to={isHome ? `#${section.id}` : `/#${section.id}`}
              className={activeSection === section.id ? 'is-active' : ''}
            >
              {section.label}
            </Link>
          ))}
        </nav>

        <div className="site-nav-actions">
          {onThemeToggle && (
            <button
              className="site-nav-theme"
              type="button"
              aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
              aria-pressed={isLight}
              onClick={onThemeToggle}
            >
              <span className="theme-dot" />
              <span>{isLight ? 'Dark' : 'Light'}</span>
            </button>
          )}
          <Link
            className={`site-nav-cta${location.pathname === physicalAiLink ? ' is-active' : ''}`}
            to={physicalAiLink}
          >
            {physicalAiLabel}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteNav;
