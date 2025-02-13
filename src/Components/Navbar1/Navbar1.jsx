import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar1.css";
import NavLogo from '../../assets/images/images/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar1">
      {/* Logo */}
      <div className="navlogo-container">
        <Link to="/">
          <img src={NavLogo} alt="Logo" className="Navlogosa" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburgers" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav1-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="mobile-appointment">
          <button className="appointment-btns">Book Appointment</button>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
