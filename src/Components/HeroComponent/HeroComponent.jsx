import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./HeroComponent.css";
import heroImage from "../../assets/images/images/Jeep-Image.png";
import { PopupModal } from "react-calendly"; 

const HeroComponent = () => {
  const [calendlyOpen, setCalendlyOpen] = useState(false); 

  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h1 className="hero-heading">Houston's Trusted Auto Repair Shop</h1>
          <div className="hero-buttons">
            {/* Contact Page Link */}
            <Link to="/contact">
              <button className="btn btn-red">Let's Get Started</button>
            </Link>

            {/* Appointment Button */}
            <button className="appointment-btns" onClick={() => setCalendlyOpen(true)}>
              Book Appointment
            </button>
          </div>
        </div>

        {/* Right Side - Car Image */}
        <div className="hero-image">
          <img src={heroImage} alt="Car" />
        </div>
      </div>

      {/* Calendly Popup Modal */}
      <PopupModal
        url="https://calendly.com/swissautohouse/freeestimate"
        onModalClose={() => setCalendlyOpen(false)}
        open={calendlyOpen}
        rootElement={document.getElementById("root")}
      />
    </div>
  );
};

export default HeroComponent;
