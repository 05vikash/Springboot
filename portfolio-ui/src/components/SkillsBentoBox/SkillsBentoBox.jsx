import React from 'react';
import { Layers, SquareTerminal, Cloud, Database, Server } from 'lucide-react';
import './SkillsBentoBox.css';

const SkillsBentoBox = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title text-gradient">Technical Arsenal.</h2>
        
        <div className="skills-bento">
          {/* Core Backend */}
          <div className="bento-card skill-card span-2 bg-gradient-primary">
            <div className="skill-header">
              <Server size={32} className="skill-icon" />
              <h3>Core Backend</h3>
            </div>
            <p className="skill-desc">The foundation of robust, scalable enterprise systems.</p>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Node.js</span>
            </div>
          </div>

          {/* Architecture */}
          <div className="bento-card skill-card span-2">
            <div className="skill-header">
              <Layers size={32} className="skill-icon" />
              <h3>Architecture & Quality</h3>
            </div>
            <p className="skill-desc">Designing for maintainability, clarity, and performance.</p>
            <ul className="skill-list">
              <li>Layered Architecture</li>
              <li>Microservices fundamentals</li>
              <li>OpenAPI/Swagger</li>
              <li>SLF4J Logging</li>
            </ul>
          </div>

          {/* Database */}
          <div className="bento-card skill-card">
            <div className="skill-header">
              <Database size={32} className="skill-icon" />
              <h3>Database</h3>
            </div>
            <div className="skill-tags mt-auto">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bento-card skill-card bg-gradient-secondary">
            <div className="skill-header">
              <Cloud size={32} className="skill-icon" />
              <h3>Infrastructure</h3>
            </div>
            <div className="skill-tags mt-auto">
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Render</span>
              <span className="skill-tag">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsBentoBox;
