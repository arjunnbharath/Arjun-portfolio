import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './TravelCursor.css';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1.1" />
  </svg>
);

const TravelCursor = ({ children, label = 'Instagram', href }) => {
  const cursorRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);
  const [active, setActive] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return undefined;

    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, scale: 0.72 });
    xToRef.current = gsap.quickTo(cursorRef.current, 'x', { duration: 0.42, ease: 'power3.out' });
    yToRef.current = gsap.quickTo(cursorRef.current, 'y', { duration: 0.42, ease: 'power3.out' });

    return undefined;
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !cursorRef.current) return undefined;

    gsap.to(cursorRef.current, {
      scale: active ? 1 : 0.72,
      duration: active ? 0.28 : 0.2,
      ease: active ? 'back.out(1.7)' : 'power2.in'
    });
  }, [active, enabled]);

  useEffect(() => {
    if (!enabled || !active) return undefined;

    const move = event => {
      xToRef.current?.(event.clientX);
      yToRef.current?.(event.clientY);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [active, enabled]);

  const openInstagram = () => {
    if (href) {
      window.open(href, '_blank', 'noopener');
    }
  };

  if (!enabled) {
    return <div className="travel-cursor-zone">{children}</div>;
  }

  return (
    <>
      <div
        className="travel-cursor-zone travel-cursor-zone--active"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onClick={openInstagram}
        onKeyDown={event => {
          if (event.key === 'Enter') openInstagram();
        }}
        role="link"
        tabIndex={0}
        aria-label={`Open ${label}`}
      >
        {children}
      </div>
      <div
        ref={cursorRef}
        className={`travel-cursor${active ? ' is-visible' : ''}`}
        aria-hidden="true"
      >
        <span className="travel-cursor-aura" />
        <span className="travel-cursor-ring" />
        <span className="travel-cursor-core">
          <span className="travel-cursor-icon">
            <InstagramIcon />
          </span>
          <span className="travel-cursor-text">{label}</span>
        </span>
      </div>
    </>
  );
};

export default TravelCursor;
