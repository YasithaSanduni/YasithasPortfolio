import React from 'react';
import { BarChart3, Calendar, Code, Wrench, ArrowRight, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart3 size={24} />,
      title: 'Business Analysis',
      skills: [
        'Requirements Gathering',
        'Process Analysis',
        'Documentation (SRS, BRD)',
        'Use Case & User Stories',
        'Stakeholder Communication'
      ],
      color: '#10b981', // Teal/Green
      gradientClass: 'skill-card-teal'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Project Management',
      skills: [
        'Project Planning',
        'Task Coordination',
        'Agile / Scrum',
        'Risk Management',
        'Monitoring & Reporting'
      ],
      color: '#8b5cf6', // Purple
      gradientClass: 'skill-card-purple'
    },
    {
      icon: <Code size={24} />,
      title: 'Technical Skills',
      skills: [
        'Java, JavaScript, C, C++',
        'React.js, Node.js, Express',
        'Spring Boot',
        'SQL, PostgreSQL, MongoDB',
        'HTML, CSS, Tailwind CSS'
      ],
      color: '#3b82f6', // Blue
      gradientClass: 'skill-card-blue'
    },
    {
      icon: <Wrench size={24} />,
      title: 'Tools & Others',
      skills: [
        'Jira, Trello, ClickUp',
        'Power BI (Basic)',
        'Figma',
        'Git & GitHub',
        'Microsoft Office Suite'
      ],
      color: '#ec4899', // Pink
      gradientClass: 'skill-card-pink'
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
    <section id="skills" className="skills-section" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div className="skills-bg-glow glow-left"></div>
      <div className="skills-bg-glow glow-right"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-header-left">
            <span className="skills-label">MY SKILLS</span>
            <h2 className="skills-main-title">
              What I <span className="text-gradient">Work With</span>
            </h2>
            <p className="skills-subtitle">
              Here are the key skills and tools I use to bring ideas to life
              and build impactful solutions.
            </p>
          </div>
          <div className="skills-header-right">
            <span className="skills-decorative-text">Turning Ideas</span>
            <span className="skills-decorative-text" style={{ marginLeft: '2rem' }}>Into Solutions</span>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="skills-cards-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className={`skills-card-new ${category.gradientClass}`}>
              <div className="skills-card-icon" style={{ backgroundColor: category.color }}>
                {category.icon}
              </div>
              <h3 className="skills-card-title">{category.title}</h3>
              <ul className="skills-card-list">
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <span className="dot-icon" style={{ backgroundColor: category.color }}></span>
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="skills-card-arrow" style={{ borderColor: category.color, color: category.color }}>
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
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
