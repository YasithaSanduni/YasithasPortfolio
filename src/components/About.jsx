import React from 'react';
import { User, GraduationCap, Target, Zap, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section dark-section">
      <div className="container">
        <h2 className="section-title">
          <User size={28} /> Who I Am
        </h2>
        <div className="section-description">
          <p style={{ marginBottom: '1rem' }}>
            I’m a third-year BSc (Hons) in Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a strong interest in Business Analysis and Project Management.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            My IT background has given me a solid understanding of software development, databases, web technologies, system analysis, and how technology can be used to solve real-world problems. At the same time, I’ve developed a strong interest in understanding business requirements, analyzing processes, coordinating teams, identifying problems, and helping organizations improve through technology.
          </p>
          <p>
            I enjoy working at the point where business needs and technology meet. Rather than focusing only on developing software, I’m interested in understanding why a solution is needed, what users and businesses expect from it, and how a team can successfully deliver that solution.
          </p>
        </div>
        
        <div className="about-grid">
          <div className="info-card">
            <div className="card-icon-wrapper">
              <GraduationCap size={24} className="card-icon" />
            </div>
            <h3>Education</h3>
            <p>BSc (Hons) in Information Technology - SLIIT</p>
          </div>
          
          <div className="info-card">
            <div className="card-icon-wrapper">
              <Target size={24} className="card-icon" />
            </div>
            <h3>Focus</h3>
            <p>Business Analysis<br/>Project Management</p>
          </div>
          
          <div className="info-card">
            <div className="card-icon-wrapper">
              <Zap size={24} className="card-icon" />
            </div>
            <h3>Strengths</h3>
            <p>Problem Solving, Teamwork<br/>Communication, Time Management</p>
          </div>
          
          <div className="info-card">
            <div className="card-icon-wrapper">
              <Rocket size={24} className="card-icon" />
            </div>
            <h3>Aim</h3>
            <p>To be a valuable professional in IT & Business transformation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
