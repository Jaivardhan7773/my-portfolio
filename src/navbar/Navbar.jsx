import React, { useState } from 'react';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>

      <nav className="custom-navbar">
        <div className="navbar-logo">
          <i className="fa-solid fa-j animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="1000" />
          <i className="fa-solid fa-a animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="1200" />
          <i className="fa-solid fa-i animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="1400" />
          <i className="fa-solid fa-v animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="1600" />
          <i className="fa-solid fa-a animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="2000" />
          <i className="fa-solid fa-r animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="2200" />
          <i className="fa-solid fa-d animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="2400" />
          <i className="fa-solid fa-h animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="2600" />
          <i className="fa-solid fa-a animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="2800" />
          <i className="fa-solid fa-n animate-pulse text-gray-50" data-aos="fade-up" data-aos-duration="3000" />

        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="#home" data-aos="fade-up"
            data-aos-duration="500" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>Home</a>
          <a href="#about" data-aos="fade-up"
            data-aos-duration="600" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>About</a>
          <a href="#skills" data-aos="fade-up"
            data-aos-duration="700" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>Skills</a>
          <a href="#projects" data-aos="fade-up"
            data-aos-duration="800" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>Projects</a>
          <a href="#contact" data-aos="fade-up"
            data-aos-duration="900" onClick={toggleMenu}>Contact</a>
        </div>

        <div className="right-controls">
          {/* <div className="theme-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div> */}
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  )
};
export default NavBar