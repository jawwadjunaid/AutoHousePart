import React from "react";
import "./ServicesSection.css";
import maintenance from '../../assets/images/images/Maintenance.png';
import oilChange from '../../assets/images/images/oilChange.png';
import Brakes from '../../assets/images/images/Brakes.png';
import Steering from '../../assets/images/images/Steering.png';
import Coolant from '../../assets/images/images/CoolantSystem.png';
import Service from '../../assets/images/images/serviceCenter.png';
import Engine from '../../assets/images/images/Engine.png';
import Electrical from '../../assets/images/images/electrical.png';
import Computer from '../../assets/images/images/computer.png';
import AC from '../../assets/images/images/Ac.png';
import Belt from '../../assets/images/images/belt.png';

const ServicesSection = () => {
  return (
    <div className="services-container">
      {/* Added Reading Heading */}
      <h1 className="reading-heading"> WHAT WE DO </h1>

      <h2 className="services-heading">Dependable Car Repair Solutions</h2>
      <p className="services-description">
        At Autoshow of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions.
      </p>
      <div className="services-content">
        {/* Left Side */}
        <div className="services-list">
          <div className="service-item">
            <div>
              <h3>Service and Maintenance</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
            <img src={maintenance} alt="Service" className="service-icon" />
          </div>
          <div className="service-item">
            <div>
              <h3>Oil Change</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
            <img src={oilChange} alt="Oil Change" className="service-icon" />
          </div>
          <div className="service-item">
            <div>
              <h3>Brakes</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
            <img src={Brakes} alt="Brakes" className="service-icon" />
          </div>
          <div className="service-item">
            <div>
              <h3>Steering & Suspension</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
            <img src={Steering} alt="Steering" className="service-icon" />
          </div>
          <div className="service-item">
            <div>
              <h3>Coolant System</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
            <img src={Coolant} alt="Coolant System" className="service-icon" />
          </div>
        </div>

        {/* Center Image */}
        <div className="services-image">
          <img src={Service} alt="Repair" className="center-image" />
        </div>

        {/* Right Side */}
        <div className="services-list">
          <div className="service-item">
            <img src={Engine} alt="Engine" className="service-icon" />
            <div>
              <h3>Engine & Transmission</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Electrical} alt="Electrical" className="service-icon" />
            <div>
              <h3>Electrical Problems</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Computer} alt="Computer" className="service-icon" />
            <div>
              <h3>Computer Diagnostics</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
          </div>
          <div className="service-item">
            <img src={AC} alt="AC" className="service-icon" />
            <div>
              <h3>AC & Heater</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Belt} alt="Belt" className="service-icon" />
            <div>
              <h3>Belt and Rollers</h3>
              <p>At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
