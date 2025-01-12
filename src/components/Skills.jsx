import React, { useEffect, useRef } from 'react';
    import './Skills.css';

    export const Skills = () => {
      const skillsRef = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.progress-bar');
                bars.forEach((bar) => {
                  const percentage = bar.getAttribute('data-percentage');
                  bar.style.width = percentage;
                });
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        if (skillsRef.current) {
          observer.observe(skillsRef.current);
        }

        return () => {
          if (skillsRef.current) {
            observer.unobserve(skillsRef.current);
          }
        };
      }, []);

      return (
        <section className="skills" style={{ backgroundColor: '#FFFFFF' }} ref={skillsRef}>
          <div className="container">
            <h2 style={{ color: '#003366' }}>My Skills</h2>
            <div className="skill-item">
              <h3>Python</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="90%" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Data Structure and Algorithm</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="85%" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Deep Learning</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="80%" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>React.js</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="75%" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Node.js</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="70%" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>JavaScript</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" data-percentage="80%" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </section>
      );
    };
