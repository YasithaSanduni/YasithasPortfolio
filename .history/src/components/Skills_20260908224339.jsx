import React from 'react';
import { Settings, Briefcase, Code, Wrench, CheckSquare } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="section dark-section">
    <section id="skills" className="section dark-section" style={{ minHeight: '100vh' }}>
      <div className="container">
        <h2 className="section-title">
          <Settings size={28} /> Skills
        </h2>
        
        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-category">
              <Briefcase size={20} /> Business Analysis
            </h3>
            <ul className="skill-list">
              <li>Requirements Gathering</li>
              <li>Process Analysis</li>
              <li>Documentation (SRS, BRD)</li>
              <li>Use Case & User Stories</li>
              <li>Stakeholder Communication</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-category">
              <CheckSquare size={20} /> Project Management
            </h3>
            <ul className="skill-list">
              <li>Project Planning</li>
              <li>Task Coordination</li>
              <li>Agile / Scrum</li>
              <li>Risk Management</li>
              <li>Monitoring & Reporting</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-category">
              <Code size={20} /> Technical Skills
            </h3>
            <ul className="skill-list">
              <li>Java, JavaScript, C, C++</li>
              <li>React.js, Node.js, Express</li>
              <li>Spring Boot</li>
              <li>SQL, PostgreSQL, MongoDB</li>
              <li>HTML, CSS, Tailwind CSS</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <h3 className="skill-category">
              <Wrench size={20} /> Tools & Others
            </h3>
            <ul className="skill-list">
              <li>Jira, Trello, ClickUp</li>
              <li>Power BI (Basic)</li>
              <li>Figma</li>
              <li>Git & GitHub</li>
              <li>Microsoft Office Suite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
