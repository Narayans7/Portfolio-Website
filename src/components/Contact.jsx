import React, { useEffect, useRef } from 'react';
    import './Contact.css';

    export const Contact = () => {
      const contactRef = useRef(null);

      useEffect(() => {
        if (contactRef.current) {
          contactRef.current.classList.add('slide-in-left');
        }
      }, []);

      return (
        <section className="contact" style={{ backgroundColor: '#003366' }}>
          <div className="container">
            <div className="contact-info" ref={contactRef}>
              <h2 style={{ color: '#FFFFFF' }}>Contact Me</h2>
              <p>Name: Narayan Shrangare</p>
              <p>Email: <a href="mailto:narayanshrangare78@gmail.com">narayanshrangare78@gmail.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/narayan-shrangare-7a2a7b21b/" target="_blank" rel="noopener noreferrer">Narayan Shrangare</a></p>
              <p>GitHub: <a href="https://github.com/narayanshrangare" target="_blank" rel="noopener noreferrer">Narayan Shrangare</a></p>
            </div>
          </div>
        </section>
      );
    };
