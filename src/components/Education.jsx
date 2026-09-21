import React from 'react';
import { GraduationCap, Building, BookOpen, Code, Database, Globe, Settings, Layout } from 'lucide-react';

const Education = () => {
  const coursework = [
    { icon: Code, text: 'Java', iconColor: '#6C63FF', bgColor: '#302B5C' },
    { icon: Code, text: 'JavaScript', iconColor: '#34D399', bgColor: '#164B4B' },
    { icon: Layout, text: 'React.js', iconColor: '#F472B6', bgColor: '#52254D' },
    { icon: Database, text: 'Database Systems', iconColor: '#FB923C', bgColor: '#53301F' },
    { icon: Globe, text: 'Web Technologies', iconColor: '#60A5FA', bgColor: '#253D65' },
    { icon: Settings, text: 'Software Engineering', iconColor: '#38BDF8', bgColor: '#17445A' },
    { icon: BookOpen, text: 'Project Management', iconColor: '#A78BFA', bgColor: '#3B2C68' }
  ];

  return (
    <section id="education" className="section dark-section">
      <div className="container">
        <div className="experience-header-wrapper">
          <div className="experience-header-left">
            <span className="journey-label">MY ACADEMIC BACKGROUND</span>
            <h2 className="section-title">
              <GraduationCap size={28} /> Education
            </h2>
            <p className="section-description">
              My academic background and the foundation for my future career.
            </p>
          </div>
          <div className="experience-header-right">
            <div className="handwritten-graphic">
              Building my future
            </div>
          </div>
        </div>
        
        <div className="education-container">
          <div className="timeline-card enhanced-card">
            <div className="enhanced-card-header">
              <div className="enhanced-card-left">
                <div className="timeline-logo">
                  <GraduationCap size={32} className="timeline-logo-icon" />
                </div>
                <div className="timeline-info">
                  <h3>BSc (Hons) in Information Technology</h3>
                  <p className="timeline-subtitle">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  <div className="timeline-meta">
                    <span className="timeline-date">2023 - Present</span>
                    <span className="timeline-tag">Undergraduate</span>
                  </div>
                </div>
              </div>
              <div className="enhanced-card-right">
                <div className="company-logo-section">
                  <div className="company-logo">
                    <img 
                      src="/sliit-logo.png" 
                      alt="SLIIT Logo" 
                      className="company-logo-image"
                      onError={(e) => {
                        console.error('SLIIT logo failed to load:', e);
                        e.target.style.display = 'none';
                        e.target.parentElement.style.background = 'rgba(99, 102, 241, 0.2)';
                        e.target.parentElement.innerHTML = '<span style="color: white; font-weight: bold;">SLIIT</span>';
                      }}
                    />
                  </div>
                  <div className="company-name">SLIIT</div>
                  <div className="company-tagline">EXCELLENCE IN IT EDUCATION</div>
                </div>
              </div>
            </div>
            
            <div className="responsibilities-section">
              <div className="responsibilities-title-wrapper">
                <BookOpen size={20} className="resp-title-icon" />
                <h4 className="responsibilities-title">Relevant Coursework</h4>
              </div>
              <div className="responsibilities-grid">
                {coursework.map((course, index) => (
                  <div key={index} className="responsibility-item">
                    <div className="resp-icon-wrapper" style={{ background: course.bgColor }}>
                      <course.icon size={20} className="resp-icon" style={{ color: course.iconColor }} />
                    </div>
                    <span className="resp-text">{course.text}</span>
                    <div className="resp-check">
                      <span className="check-small">✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
