import React, { useEffect, useRef } from 'react';
    import './About.css';

    export const About = () => {
      const aboutRef = useRef(null);

      useEffect(() => {
        if (aboutRef.current) {
          aboutRef.current.classList.add('slide-in-left');
        }
      }, []);

      return (
        <section className="about" style={{ backgroundColor: '#F5F5F5' }}>
          <div className="container">
            <div className="about-content" ref={aboutRef}>
              <h2 style={{ color: '#003366' }}>About Me</h2>
              <p>
                I am currently pursuing a Master’s in Computer Applications (MCA) at Amity University, Noida, with a strong focus on Artificial Intelligence and Data Science. Passionate about leveraging cutting-edge technologies, I specialize in AI development, machine learning algorithms, and data analysis. Alongside my academic journey, I am continuously honing my skills such as Python, data structure and algorithm, deep learning, Natural Language Processing (NLP), and exploring new advancements in AI. My goal is to apply innovative solutions to solve real-world challenges and contribute to the growth of intelligent systems.
              </p>
            </div>
          </div>
        </section>
      );
    };
