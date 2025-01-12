import React, { useEffect, useRef } from 'react';
    import './Education.css';

    export const Education = () => {
      const timelineRef = useRef(null);

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.timeline-item');
                items.forEach((item, index) => {
                  setTimeout(() => {
                    item.classList.add('fade-in');
                  }, index * 200);
                });
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        if (timelineRef.current) {
          observer.observe(timelineRef.current);
        }

        return () => {
          if (timelineRef.current) {
            observer.unobserve(timelineRef.current);
          }
        };
      }, []);

      return (
        <section className="education" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <h2 style={{ color: '#003366' }}>Education</h2>
            <div className="timeline" ref={timelineRef}>
              <div className="timeline-item">
                <h3>MCA 1st Semester, Amity University, Noida</h3>
              </div>
              <div className="timeline-item">
                <h3>SRTMU B.Sc Computer Science</h3>
              </div>
            </div>
          </div>
        </section>
      );
    };
