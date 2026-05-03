import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '../Icons';
import './ProjectsGrid.css';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Secure Banking API',
      description: 'Architected a secure banking backend enforcing strict transactional integrity. Implemented global exception handling, robust input validation (@Valid), and auto-generated OpenAPI specifications for seamless integration.',
      tags: ['Spring Boot', 'REST', 'MySQL', 'Swagger'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'High-Speed Contact System',
      description: 'Engineered normalized database schemas serving 2K+ records. Containerized the full stack to cut deployment times by 60% and achieved a 45% increase in query lookup speeds.',
      tags: ['React', 'Docker', 'MySQL', 'JWT'],
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Full-Stack Property App',
      description: 'Led the end-to-end SDLC for a rental marketplace. Managed continuous high-availability cloud deployments via Vercel and Render. Integrated external APIs for geolocation and media.',
      tags: ['Node.js', 'MongoDB', 'Cloudinary', 'Mapbox'],
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-gradient">Architecture & Projects.</h2>
          <p className="section-subtitle">Systems designed for scale, security, and performance.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="bento-card project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <div className="project-links">
                  <a href={project.links.github} className="icon-link" aria-label="GitHub Repository">
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.links.live} className="icon-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
