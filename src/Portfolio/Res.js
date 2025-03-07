import React from 'react';
import { pdfjs } from 'react-pdf';
import './Res1.css'; 
import img1 from './Assest/Static/bg1.avif'; 

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
              href="https://drive.google.com/file/d/1l0zOPeHaAxI_7_ES3xlpZYDAomfcO5Yb/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn">View</button>
            </a>
            <a
              href="https://drive.google.com/file/d/1l0zOPeHaAxI_7_ES3xlpZYDAomfcO5Yb/view"
              target="_blank"
              download="RamyaResume.pdf"
            >
              <button className="btn">Download</button>
            </a>
          </div>
        </div>
      </div>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="svg1">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3FFF00" />
              <stop offset="90%" stopColor="#7A1CAC" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient1)"
            d="M0,128L80,154.7C160,181,320,235,480,224C640,213,800,139,960,112C1120,85,1280,107,1360,117.3L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Res;
