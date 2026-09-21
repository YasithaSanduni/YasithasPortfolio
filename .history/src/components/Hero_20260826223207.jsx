import React from 'react';
import { Download, ArrowRight, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section dark-section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title">
            Yasitha <span className="highlight-text text-gradient">Thilakarathna</span>
          </h1>
          <h2 className="hero-subtitle">
            IT Undergraduate | Business Analysis & Project Management Enthusiast
          </h2>
          <p className="hero-description">
            Passionate about bridging the gap between business needs and technology solutions. I enjoy analyzing problems, improving processes and delivering impactful results through technology.
          </p>
          
          <div className="hero-actions">
            <button className="btn bg-gradient">
              View Projects <ArrowRight size={18} />
            </button>
            <a href="/Yasitha_Thilakarathna_CV.pdf" download className="btn btn-outline">
              Download CV <Download size={18} />
            </a>
            <div className="social-links">
              <a href="www.linkedin.com/in/
" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
              <a href="https://github.com/YasithaSanduni" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
              <a href="mailto:yasithathilak@gmail.com" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="hero-image-container">
          <div className="hero-image-backdrop">
            <div className="hero-image-inner">
              <div className="image-placeholder">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Yasitha Thilakarathna" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
