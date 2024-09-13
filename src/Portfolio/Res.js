import React from 'react';
import { pdfjs } from 'react-pdf';
import './Res1.css'; 

import img1 from './Assest/Static/bg1.avif'; // Importing background image

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Res = () => {
  return (
    <>
    <h1 id="hd1">Here Is My Resume!!!</h1>
    <div className="container">
      <div className="left-column">
        <img src={img1} alt="Background" className="bg-image" />
      </div>
      <div className="right-column">
        <div className="buttons-container">
          <a
            href="http://localhost:3000/My_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn1">View</button>
          </a>
          <a
            href="http://localhost:3000/My_Resume.pdf"
            download="Ramya_Resume.pdf"
          >
            <button className="btn btn2">Download</button>
          </a>
        </div>
      </div>
      </div>

    <div>
    <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 1440 320" 
  id="svg1"
>
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#3FFF00', stopOpacity: 1}} />
      <stop offset="90%" style={{stopColor: '#7A1CAC', stopOpacity: 1}} />
    </linearGradient>
  </defs>
  <path fill="url(#gradient1)" fillOpacity="2.5" d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,112C1120,85,1280,107,1360,117.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>

    </div>
</>
  );
};

export default Res;
{/* 
  
  background-image: url('./Assest/Static/bg9.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  */}