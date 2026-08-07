import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-shell projects-page">
      <main className="projects-page-main">
        <p className="projects-page-eyebrow">Selected work</p>
        <h1>All Projects</h1>
        <p className="projects-page-lead">
          Full-stack applications, AI experiments, and product concepts — from sprint analytics and
          RAG pipelines to commerce platforms.
        </p>

        <div className="projects-page-grid">
          {projects.map((project) => (
            <Link key={project.slug} className="project-tile" to={`/projects/${project.slug}`}>
              <img src={project.image} alt="" loading="lazy" />
              <div className="project-tile-body">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <span className="project-tile-cta">View project →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="projects-page-actions">
          <Link className="hero-btn hero-btn-secondary" to="/">
            Back to portfolio
          </Link>
        </div>
      </main>
    </div>
  );
}

export default ProjectsPage;
