import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Dependable Car Repair The Solutions</h2>
      <p className="services-description">
        At Autoshow of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions.
      </p>
      <div className="services-content">
        {/* Left side */}
        <div className="services-list">
          <div className="service-item">
            <img src="/icons/service.png" alt="Service" className="service-icon" />
            <div>
              <h3>Service and Maintenance</h3>
              <p>We provide expert auto service and maintenance solutions.</p>
            </div>
          </div>
          <div className="service-item">
            <img src="/icons/oil.png" alt="Oil Change" className="service-icon" />
            <div>
              <h3>Oil Change</h3>
              <p>Expert oil change services for your vehicle.</p>
            </div>
          </div>
          <div className="service-item">
            <img src="/icons/brakes.png" alt="Brakes" className="service-icon" />
            <div>
              <h3>Brakes</h3>
              <p>Ensure your safety with our professional brake services.</p>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="services-image">
          <img src="/your-image.jpg" alt="Repair" />
        </div>

        {/* Right side */}
        <div className="services-list">
          <div className="service-item">
            <img src="/icons/engine.png" alt="Engine" className="service-icon" />
            <div>
              <h3>Engine & Transmission</h3>
              <p>Expert solutions for engine and transmission problems.</p>
            </div>
          </div>
          <div className="service-item">
            <img src="/icons/electrical.png" alt="Electrical" className="service-icon" />
            <div>
              <h3>Electrical Problems</h3>
              <p>We diagnose and repair electrical issues efficiently.</p>
            </div>
          </div>
          <div className="service-item">
            <img src="/icons/ac.png" alt="AC" className="service-icon" />
            <div>
              <h3>AC & Heater</h3>
              <p>Stay comfortable with our AC and heater maintenance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;