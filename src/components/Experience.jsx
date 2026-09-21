import React from 'react';
import { Briefcase, Check, Building2, FileText, Mail, Users, Wallet, Briefcase as WorkIcon } from 'lucide-react';

const Experience = () => {


  return (
    <section id="experience" className="section dark-section">
      <div className="container">
        <div className="experience-header-wrapper">
          <div className="experience-header-left">
            <span className="journey-label">MY JOURNEY</span>
            <h2 className="section-title">
              <Briefcase size={28} /> Experience
            </h2>
            <p className="section-description">
              My professional journey and the key experiences that have shaped my skills and growth.
            </p>
          </div>
          <div className="experience-header-right">
            <div className="handwritten-graphic">
              Learn Grow Make an Impact
            </div>
          </div>
        </div>
        
        <div className="experience-container">
          <div className="timeline-card enhanced-card">
            <div className="enhanced-card-header">
              <div className="enhanced-card-left">
                <div className="timeline-logo">
                  <Building2 size={32} className="timeline-logo-icon" />
                </div>
                <div className="timeline-info">
                  <h3>HR Intern - Sampath Bank</h3>
                  <p className="timeline-subtitle">Head Office HR Department</p>
                  <div className="timeline-meta">
                    <span className="timeline-date">Feb 2023 - Oct 2023</span>
                    <span className="timeline-tag">Human Resources</span>
                  </div>
                </div>
              </div>
              <div className="enhanced-card-right">
                <div className="company-logo-section">
                  <div className="company-logo">
                    <img 
                      src="/sampath-bank-logo.png" 
                      alt="Sampath Bank Logo" 
                      className="company-logo-image"
                    />
                  </div>
                  <div className="company-name">Sampath Bank</div>
                  <div className="company-tagline">WE PRESENT YOUR FUTURE</div>
                </div>
              </div>
            </div>
            
            <p className="timeline-description">
              Gained hands-on experience in HR operations and administrative processes, while supporting various departmental functions at Sampath Bank.
            </p>
            
            <div className="responsibilities-section">
              <div className="responsibilities-title-wrapper">
                <WorkIcon size={20} className="resp-title-icon" />
                <h4 className="responsibilities-title">Key Responsibilities</h4>
              </div>
              <ul className="timeline-list" style={{ marginTop: '1rem', padding: 0, listStyle: 'none' }}>
                <li>
                  <Check size={18} className="check-icon" />
                  <span>Assisted the Human Resources Department with routine administrative and documentation activities.</span>
                </li>
                <li>
                  <Check size={18} className="check-icon" />
                  <span>Supported the preparation and maintenance of departmental structure documentation.</span>
                </li>
                <li>
                  <Check size={18} className="check-icon" />
                  <span>Collected and organized employee information from departments and branches to support the development of departmental structures.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
