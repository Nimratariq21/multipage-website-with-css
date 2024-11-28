import React from 'react';
import './Navbar.css';  
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul className="menu">
          <li className="menuLink"><a href="#hero">Home</a></li>
          <li className="menuLink"><a href="#about">About</a></li>
          <li className="menuLink"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
