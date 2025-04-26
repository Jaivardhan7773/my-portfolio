import React  , { useState }from 'react';
import './Navbar.css';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
    return (
    <>
     <nav className="custom-navbar">
      <div className="navbar-logo">Jaivardhan</div>

      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>Home</a>
        <a href="#about" onClick={() => { window.scrollTo(0, 1000); toggleMenu(); }}>About</a>
        <a href="#projects" onClick={() => { window.scrollTo(0, 0); toggleMenu(); }}>Projects</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>

      <div className="right-controls">
        <div className="theme-toggle">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
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