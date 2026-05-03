import React from 'react';
import { ArrowRight, Server } from 'lucide-react';
import { GithubIcon } from '../Icons';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      {/* Background decoration */}
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="badge">
            <Server size={14} className="badge-icon" />
            <span>Available for new opportunities</span>
          </div>
          
          <h1 className="hero-title">
            Engineering <span className="text-gradient-accent">Reliable</span><br />
            Backend Systems.
          </h1>
          
          <p className="hero-subtitle delay-100">
            Hi, I'm Vikash. An MCA Software Engineer specializing in Java, Spring Boot, and scalable API architecture. Building resilient backends so your product can scale flawlessly.
          </p>
          
          <div className="hero-cta delay-200">
            <a href="#projects" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubIcon size={18} />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
