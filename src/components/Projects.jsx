import React from 'react';
    import './Projects.css';

    export const Projects = () => {
      return (
        <section className="projects" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="container">
            <h2 style={{ color: '#003366' }}>My Projects</h2>
            <div className="project-card">
              <h3>AI-Coding-Tutor</h3>
              <p>
                An interactive AI-powered coding tutor that helps users learn programming concepts through personalized instruction and real-time feedback.
              </p>
              <a href="https://github.com/narayanshrangare" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
            <div className="project-card">
              <h3>AI-Agent</h3>
              <p>
                Contains code and resources for advanced software engineering topics and practices. It provides practical insights into software development and engineering principles.
              </p>
              <a href="https://github.com/narayanshrangare" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        </section>
      );
    };
