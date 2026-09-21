import React from 'react';
import { FolderGit2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Campus Hub',
      description: 'Resource management system for booking, facility allocation and maintenance.',
      tags: ['React', 'Spring Boot', 'PostgreSQL'],
      image: '/smart-campus.png', // Add your image to the public folder and name it 'smart-campus.png'
      github: '#',
      link: '#'
    },
    {
      title: 'Acadome - Student Accommodation System',
      description: 'Accommodation management platform with booking, payments and reviews.',
      tags: ['MERN Stack', 'JWT', 'OTP'],
      image: '/acadome.png',
      link: 'https://github.com/Ash-x-o/ITP_project_Y2S2
    },
    {
      title: 'Petora - Animal Shelter & Adoption',
      description: 'Platform to help adopt pets and manage shelter activities.',
      tags: ['React', 'Figma'],
      image: '/petora.png',
      github: '#',
      link: '#'
    },
    {
      title: 'Welli - Habit Tracking App',
      description: 'Mobile app to track daily habits and improve productivity.',
      tags: ['Android Studio'],
      image: '/welli.png',
      github: '#',
      link: '#'
    },
    {
      title: 'EmpConnect - Employee Management',
      description: 'System to manage employee details and attendance.',
      tags: ['Java', 'MySQL', 'MVC'],
      image: '/empconnect.png',
      github: '#',
      link: '#'
    },
    {
      title: 'Online Apartment Sales System',
      description: 'Web system for apartment listings and sales management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '/apartment.png',
      github: '#',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section dark-section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            <FolderGit2 size={28} /> Projects
          </h2>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            View All Projects
          </button>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image ? (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              ) : (
                <div className="project-image-placeholder"></div>
              )}
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="icon-link"><Github size={18} /></a>
                  <a href={project.link} className="icon-link"><ExternalLink size={18} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
