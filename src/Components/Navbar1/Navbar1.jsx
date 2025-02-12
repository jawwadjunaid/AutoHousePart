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
          <img src={NavLogo} alt="Logo" className="Navlogo" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburgers" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav1-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/services">Service</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Appointment Button */}
      <button className="appointment-btns">Book Appointment</button>
    </nav>
  );
};

export default Navbar;
