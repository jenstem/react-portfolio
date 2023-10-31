import React from 'react';
import './Navbar.css';

export default function Navbar() {

  return (
    <div className="navigation">
      <div></div>
      <div className="nav-items">
        <a className="about" href="#about">About</a>
        <a className="projects" href="#projects">Portfolio</a>
        <a className="resume" href="#resume">Resume</a>
        <a className="contact" href="#contact">Contact</a>
      </div>
      <div className="bar"></div>
    </div>

  );
};