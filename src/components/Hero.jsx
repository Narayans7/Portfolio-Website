import React, { useEffect, useRef } from 'react';
    import './Hero.css';

    export const Hero = () => {
      const textRef = useRef(null);

      useEffect(() => {
        if (textRef.current) {
          textRef.current.classList.add('fade-in');
        }
      }, []);

      return (
        <section className="hero" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="container">
            <div className="hero-content">
              <h1 ref={textRef} style={{ color: '#003366' }}>
                Hi, I'm Narayan Shrangare, an AI Learner
              </h1>
              <p style={{ color: '#333333' }}>
                Passionate about AI, Machine Learning, and Data Science
              </p>
            </div>
          </div>
        </section>
      );
    };
