import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import './ProjectDetail.css';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="page-shell project-detail-page">
        <main className="project-detail-main">
          <h1>Project not found</h1>
          <p className="project-detail-lead">
            That project doesn&apos;t exist or may have been renamed.
          </p>
          <Link className="hero-btn hero-btn-primary" to="/projects">
            See all projects
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell project-detail-page">
      <main className="project-detail-main">
        <Link className="project-detail-back" to="/projects">
          ← All projects
        </Link>

        <p className="project-detail-eyebrow">{project.tagline}</p>
        <h1>{project.title}</h1>
        <p className="project-detail-lead">{project.description}</p>

        <div className="project-detail-links">
          {project.github && (
            <a
              className="hero-btn hero-btn-primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
          {project.appLink ? (
            <a
              className="hero-btn hero-btn-secondary"
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live app
            </a>
          ) : (
            <span className="project-detail-nolink">Live app coming soon</span>
          )}
        </div>

        <img className="project-detail-image" src={project.image} alt={project.title} />

        <div className="project-detail-grid">
          <section>
            <h2>What it does</h2>
            <ul>
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>Built with</h2>
            <ul className="project-detail-tech">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetailPage;
