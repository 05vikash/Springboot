import React from 'react';
import { Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../Icons';
import './FooterContact.css';

const FooterContact = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <h2 className="footer-title">Ready to build something <span className="text-gradient">scalable?</span></h2>
            <p className="footer-text">
              Whether you're a startup looking to architect a new product or an enterprise optimizing deployment pipelines, let's connect.
            </p>
            <a href="mailto:05vikashdubey@gmail.com" className="btn btn-primary contact-btn">
              <Mail size={18} />
              05vikashdubey@gmail.com
            </a>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-logo">
              <Terminal className="logo-icon" size={24} />
              <span>VKD.</span>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={22} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon size={22} />
              </a>
            </div>
            
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Vikash Kumar Dubey. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
