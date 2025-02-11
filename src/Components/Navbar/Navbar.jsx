import React, { useState } from "react";
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Hiring</a>
        <button className="appointment-btn">Appointment</button>
      </div>
    </nav>
  );
};

export default Navbar;
