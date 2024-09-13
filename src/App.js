import React from 'react';
import { Routes, Route ,Navigate} from 'react-router-dom';
import NavBar from "./Portfolio/NavBar";
import  Home  from './Portfolio/Home';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Resume from './Portfolio/Resume';
import Projects from './Portfolio/Projects';


function App() {
  return (
    <>
    <NavBar />
    <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Resume" element={<Resume/>} />
    </Routes>
    </>
  );
}

export default App;
{/* 
      */}