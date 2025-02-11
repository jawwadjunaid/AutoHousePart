import React from "react";
import "./SectionComponent.css"; // Import CSS file

const SectionComponent = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        {/* Left Side - Image Grid */}
        <div className="image-grid">
          <img src="/images/car1.jpg" alt="Car 1" className="small-img" />
          <img src="/images/mechanic.jpg" alt="Mechanic" className="big-img" />
          <img src="/images/garage.jpg" alt="Garage" className="big-img" />
          <img src="/images/vintage-car.jpg" alt="Vintage Car" className="small-img" />
        </div>

        {/* Right Side - Text Content */}
        <div className="section-text">
          <h2>Your Best Choice For Auto Repair In Texas</h2>
          <p>
            It can be difficult to find a professional, reliable, and honest
            mechanic for your European vehicle. How can you be certain that you
            won’t be taken advantage of?
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
