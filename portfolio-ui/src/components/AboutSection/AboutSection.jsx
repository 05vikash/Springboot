import React from 'react';
import './AboutSection.css';
import { Database, Lock, Cpu } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title text-gradient">Beyond Boilerplate Code.</h2>
            <p className="about-text">
              I focus on systems thinking, from utilizing standardized HTTP status codes to implementing centralized exception handling via <code>@ControllerAdvice</code>. 
            </p>
            <p className="about-text">
              My engineering philosophy revolves around data consistency, optimized indexing, and robust containerization using Docker. Startups need developers who bring engineering discipline to code quality, observability, and architecture. I don't just write basic CRUD applications; I design systems with clear layered architecture—isolating HTTP handling in Controllers and business rules in Services.
            </p>
            <p className="about-text">
              Currently leveraging my enterprise experience from LBTex to build business-critical, highly available applications.
            </p>
          </div>
          
          <div className="about-visual">
            <div className="bento-card visual-card">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Lock size={24} className="feature-icon" />
                </div>
                <div>
                  <h4>Secure Architecture</h4>
                  <p>Defense-in-depth security principles</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Database size={24} className="feature-icon" />
                </div>
                <div>
                  <h4>Optimized Data</h4>
                  <p>Strict boundaries & optimized indexing</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <Cpu size={24} className="feature-icon" />
                </div>
                <div>
                  <h4>Containerization</h4>
                  <p>Docker environments for seamless SDLC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
