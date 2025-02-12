import React from "react";
import "./HeroComponent.css";
import heroImage from "../../assets/images/images/Jeep-Image.png"
const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h1 className="hero-heading">Houston's Trusted Auto Repair Shop</h1>
          <div className="hero-buttons">
            <button className="btn btn-red">Let's Get Started</button>
            {/* Appointment Button */}
      <button className="appointment-btn">Book Appointment</button>
          </div>
        </div>

        {/* Right Side - Car Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Car" />
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
