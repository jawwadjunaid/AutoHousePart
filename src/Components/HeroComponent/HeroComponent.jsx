import React from "react";
import "./HeroComponent.css"; // Import CSS file

const HeroComponent = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Left Side - Image Box */}
        <div className="hero-image">
          <img src="/your-image.jpg" alt="Banner Image" />
        </div>

        {/* Right Side - Heading */}
        <div className="hero-text">
          <h1 className="hero-component-heading">Your Powerful Heading Here</h1>
          
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
