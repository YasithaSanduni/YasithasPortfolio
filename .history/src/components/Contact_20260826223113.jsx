import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section dark-section contact-section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p className="contact-desc">
              I am always open to discussing new opportunities, collaborations and exciting projects.
            </p>
            <button className="btn btn-primary" style={{ marginBottom: '2rem' }}>
              Contact Me <Send size={16} />
            </button>
            
            <div className="contact-details">
              <a href="mailto:yasithathilak@gmail.com" className="contact-item">
                <Mail size={20} /> yasithathilak@gmail.com
              </a>
              <a href="tel:0705509972" className="contact-item">
                <Phone size={20} /> 070 550 9972
              </a>
              <div className="contact-item">
                <MapPin size={20} /> Pannipitiya, Sri Lanka
              </div>
            </div>

            <div className="social-links" style={{ marginTop: '2rem' }}>
              <a href="www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={20} /></a>
              <a href="https://github.com/YasithaSanduni" target="_blank" rel="noopener noreferrer" className="social-icon"><Github size={20} /></a>
              <a href="mailto:yasithathilak@gmail.com" className="social-icon"><Mail size={20} /></a>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" className="form-input"></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer">
          <p>&copy; {new Date().getFullYear()} Yasitha Thilakarathna. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
