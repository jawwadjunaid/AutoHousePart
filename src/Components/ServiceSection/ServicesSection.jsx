import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import maintenance from "../../assets/images/images/maintenance.svg";
import oilChange from "../../assets/images/images/oilChange.svg";
import Brakes from "../../assets/images/images/brakes.svg";
import Steering from "../../assets/images/images/steering.svg";
import Coolant from "../../assets/images/images/coolant.svg";
import Service from "../../assets/images/images/serviceCenter.png";
import Engine from "../../assets/images/images/engine.svg";
import Electrical from "../../assets/images/images/electrical.svg";
import Computer from "../../assets/images/images/computer.svg";
import AC from "../../assets/images/images/ac.svg";
import Belt from "../../assets/images/images/belt.svg";

const ServicesSection = () => {
  return (
    <div className="services-container">
      <h1 className="reading-heading" style={{fontWeight:"800"}}>─── WHAT WE DO ───</h1>
      <h2 className="services-heading">Reliable Auto Repair Shop</h2>
      <p className="services-description">
        At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions.
      </p>
      <div className="services-content">
        <div className="services-list sty1">
          <div className="service-item">
            <div className="services-list-content">
              <h3><Link to="/services">Service and Maintenance</Link></h3>
              <p>Keep your car in peak condition with expert auto repair services.</p>
            </div>
            <img src={maintenance} alt="Service" className="service-icon" />
          </div>
          <div className="service-item sty1">
            <div className="services-list-content">
              <h3><Link to="/car-oil-change">Oil Change</Link></h3>
              <p>Get a quick and reliable oil change in Houston.</p>
            </div>
            <img src={oilChange} alt="Oil Change" className="service-icon" />
          </div>
          <div className="service-item sty1">
            <div className="services-list-content">
              <h3><Link to="/brakes">Brakes</Link></h3>
              <p>Ensure your safety with expert brake repair services.</p>
            </div>
            <img src={Brakes} alt="Brakes" className="service-icon" />
          </div>
          <div className="service-item sty1">
            <div className="services-list-content">
              <h3><Link to="/steering-suspension">Steering & Suspension</Link></h3>
              <p>Precision services for shocks, struts, and alignment.</p>
            </div>
            <img src={Steering} alt="Steering" className="service-icon" />
          </div>
          <div className="service-item sty1">
            <div className="services-list-content">
              <h3><Link to="/coolant-system">Coolant System</Link></h3>
              <p>Prevent overheating with coolant flush and radiator repair services.</p>
            </div>
            <img src={Coolant} alt="Coolant System" className="service-icon" />
          </div>
        </div>
        
        <div className="services-image">
          <img src={Service} alt="Repair" className="center-image" />
        </div>
        
        <div className="services-list sty2">
          <div className="service-item">
            <img src={Engine} alt="Engine" className="service-icon" />
            <div className="services-list-content">
              <h3><Link to="/engine-transmission">Engine & Transmission</Link></h3>
              <p>From engine tune-ups to full transmission overhauls.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Electrical} alt="Electrical" className="service-icon" />
            <div className="services-list-content">
              <h3><Link to="/electrical-problems">Electrical Problems</Link></h3>
              <p>We diagnose and fix vehicle electrical issues.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Computer} alt="Computer" className="service-icon" />
            <div className="services-list-content">
              <h3><Link to="/computer-diagnostics">Computer Diagnostics</Link></h3>
              <p>Using advanced tools to detect and resolve car issues.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={AC} alt="AC" className="service-icon" />
            <div className="services-list-content">
              <h3><Link to="/ac-heater">AC & Heater</Link></h3>
              <p>Professional air conditioning repair for cooling and heating.</p>
            </div>
          </div>
          <div className="service-item">
            <img src={Belt} alt="Belt" className="service-icon" />
            <div className="services-list-content">
              <h3><Link to="/belt-rollers">Belt and Rollers</Link></h3>
              <p>Timely inspections and replacements for belts and rollers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
