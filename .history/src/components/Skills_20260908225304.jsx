import React from 'react';
import { Briefcase, Code, Wrench, CheckSquare, Check, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Briefcase size={24} />,
      title: 'Business Analysis',
      description: 'Understanding business needs and turning them into effective solutions.',
      skills: [
        'Requirements Gathering',
        'Process Analysis & Improvement',
        'Documentation (SRS, BRD)',
        'Stakeholder Communication',
        'Problem Solving & Critical Thinking'
      ],
      color: '#2563EB'
    },
    {
      icon: <CheckSquare size={24} />,
      title: 'Project Management',
      description: 'Planning, coordinating and delivering projects successfully.',
      skills: [
        'Project Planning & Tracking',
        'Task Coordination',
        'Agile / Scrum',
        'Risk Management',
        'Monitoring & Reporting'
      ],
      color: '#2563EB'
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      description: 'Building and working with modern technologies to create efficient solutions.',
      skills: [
        'Java, JavaScript, C, C++',
        'React.js, Node.js, Express',
        'Spring Boot',
        'SQL, PostgreSQL, MongoDB',
        'HTML, CSS, Tailwind CSS'
      ],
      color: '#2563EB'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Others',
      description: 'Using the right tools to plan, design, collaborate and get things done.',
      skills: [
        'Jira, Trello, ClickUp',
        'Power BI (Basic)',
        'Figma',
        'Git & GitHub',
        'Microsoft Office Suite'
      ],
      color: '#2563EB'
    }
  ];

  const technologies = [
    { name: 'Java', icon: '☕' },
    { name: 'JavaScript', icon: '𝐉𝐒' },
    { name: 'C / C++', icon: '🇨' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Express', icon: '🔗' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Jira', icon: '📋' },
    { name: 'Trello', icon: '📌' },
    { name: 'ClickUp', icon: '✅' },
    { name: 'Power BI', icon: '📊' },
    { name: 'Figma', icon: '🎯' },
    { name: 'GitHub', icon: '🐙' }
  ];

  return (
    <section id="skills" className="skills-section" style={{ minHeight: '100vh' }}>
      <div className="container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-header-left">
            <span className="skills-label">MY SKILLS</span>
            <h2 className="skills-main-title">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="skills-subtitle">
              A blend of business understanding and technical skills that help me
              analyse, solve problems and create impactful solutions.
            </p>
          </div>
          <div className="skills-header-right">
            <span className="skills-decorative-text">Learn</span>
            <span className="skills-decorative-text">Build</span>
            <span className="skills-decorative-text">Grow</span>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="skills-cards-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills-card-new">
              <div className="skills-card-icon" style={{ background: `linear-gradient(135deg, ${category.color}, #38BDF8)` }}>
                {category.icon}
              </div>
              <h3 className="skills-card-title">{category.title}</h3>
              <p className="skills-card-desc">{category.description}</p>
              <ul className="skills-card-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <Check size={16} className="check-icon" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="tech-section">
          <div className="tech-header">
            <h3 className="tech-title">
              <Layers size={24} /> Technologies I Work With
            </h3>
            <p className="tech-subtitle">Tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="tech-badges">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                <span className="tech-badge-icon">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Motivational Banner */}
        <div className="skills-banner">
          <div className="banner-left">
            <span className="banner-icon">✦</span>
            <span>Always open to learning new tools and technologies to stay ahead.</span>
          </div>
          <div className="banner-right">
            <span className="banner-cursive">Better Skills</span>
            <span className="banner-cursive">Bigger Dreams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
