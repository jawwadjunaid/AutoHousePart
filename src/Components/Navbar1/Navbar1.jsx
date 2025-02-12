import React, { useState } from "react";
import "./Navbar1.css"; // Import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar1">
      {/* Logo */}
      <div className="navlogo-container">
        <img src="./assets/images/logo.png" alt="Logo" className="Navlogo" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburgers" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`nav1-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#service">Service</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Appointment Button */}
      <button className="appointment-btns">Book Appointment</button>
    </nav>
  );
};

export default Navbar;
