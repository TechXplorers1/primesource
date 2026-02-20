import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Prime Source
        </Link>
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" className="navbar-item" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/service" className="navbar-item" onClick={() => setIsOpen(false)}>
            Service
          </NavLink>
          <NavLink to="/about" className="navbar-item" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
          <NavLink to="/contact" className="navbar-item" onClick={() => setIsOpen(false)}>
            Contact Us
          </NavLink>
          <Link to="/login" className="login-btn mobile-only" onClick={() => setIsOpen(false)}>
            Login
          </Link>
        </div>
        <Link to="/login" className="login-btn desktop-only">
          Login
        </Link>
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
