import React, { useEffect, useState } from 'react';
import skill1 from './Assest/Static/skill1.png';
import skill2 from './Assest/Static/skill2.png';
import skill3 from './Assest/Static/skill3.png';
import skill4 from './Assest/Static/skill4.webp';
import skill5 from './Assest/Static/skill5.png';
import skill6 from './Assest/Static/skill6.png';
import skill7 from './Assest/Static/skill7.png';
import skill8 from './Assest/Static/skill8.png';

const Demo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const styles = `
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0); }
      }

      .floating-image {
        animation: float 3s ease-in-out infinite;
        position: relative;
        width: 100px; /* Adjust size as needed */
        height: 100px; /* Adjust size as needed */
        padding: 10px;
        margin-left: 60px;
        cursor: pointer;
      }

      .hover-box {
        position: absolute;
        top: 120px; /* Adjust as per the image positioning */
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: none;
        z-index: 10;
        width: 200px; /* Adjust as needed */
      }

      .show {
        display: block;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }, []);

  const logos = [
    { src: skill1, alt: 'HTML', overview: 'HTML is the standard markup language for creating web pages.' },
    { src: skill2, alt: 'CSS', overview: 'CSS describes how HTML elements are to be displayed on screen.' },
    { src: skill3, alt: 'JavaScript', overview: 'JavaScript is a programming language used to create dynamic website content.' },
    { src: skill4, alt: 'Bootstrap', overview: 'A front-end framework used for building responsive, mobile-first web pages with pre-made CSS and JavaScript components.' },
    { src: skill5, alt: 'Reactjs', overview: 'A JavaScript library for building dynamic user interfaces, widely used in web development for creating interactive components.' },
    { src: skill6, alt: 'MUI', overview: 'A React component library used to build responsive web apps with Google’s Material Design principles.' },
    { src: skill7, alt: 'SASS', overview: 'A CSS preprocessor used to write cleaner, maintainable stylesheets with added features like variables and nesting.' },
    { src: skill8, alt: 'Redux', overview: 'A state management tool for JavaScript apps, used to manage shared or complex states in React and other frameworks.' }
  ];

  return (
    <div style={{ position: 'relative', textAlign: 'center', minHeight: '50vh' }}>
      {logos.map((logo, index) => (
        <div
          key={index}
          style={{ display: 'inline-block', position: 'relative' }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img 
            src={logo.src}
            alt={logo.alt}
            className="floating-image"
          />
          {hoveredIndex === index && (
            <div className={`hover-box show`}>
              <strong>{logo.alt}</strong>
              <p>{logo.overview}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Demo;
