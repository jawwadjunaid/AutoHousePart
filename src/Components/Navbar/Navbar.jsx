import React, { useState } from "react";
import "./Navbar.css";


import logo from '../../assets/images/images/logo.png';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Service</a>
        <a href="#">Contact</a>
      </div>

      {/* Appointment Button */}
      <button className="appointment-btn">Book Appointment</button>
    </nav>
  );
};

export default Navbar;