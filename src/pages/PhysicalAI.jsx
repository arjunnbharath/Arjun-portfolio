import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './PhysicalAI.css';

function PhysicalAIPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell physical-ai-page">
      <main className="physical-ai-main">
        <p className="physical-ai-eyebrow">Now Exploring</p>
        <h1>Physical AI</h1>
        <p className="physical-ai-lead">
          Exploring the intersection of AI, robotics, and real-world systems — building intelligent
          applications that connect software, sensors, and physical environments.
        </p>

        <div className="physical-ai-grid">
          <article>
            <h2>Focus Areas</h2>
            <ul>
              <li>Embodied AI and agentic systems</li>
              <li>Edge inference and on-device intelligence</li>
              <li>Human-machine interaction</li>
              <li>Sensors, automation, and physical workflows</li>
            </ul>
          </article>
          <article>
            <h2>From Software to the World</h2>
            <p>
              From RAG and LLM workflows to automation and data-driven decision making, I&apos;m
              interested in how AI moves beyond screens into machines, devices, and everyday
              physical workflows.
            </p>
            <p>
              This space is where software architecture meets perception, control, and real-time
              systems — turning intelligent models into tools that act in the physical world.
            </p>
          </article>
        </div>

        <div className="physical-ai-actions">
          <Link className="hero-btn hero-btn-primary" to="/#contact">
            Get in touch
          </Link>
          <Link className="hero-btn hero-btn-secondary" to="/">
            Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}

export default PhysicalAIPage;
