import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/Pages/TurstImages.png";
import './ServiceContent3.css';
const ServiceContent3 = () => {
  return (
    <div className="Servicess-containerss">
      {/* Text Section */}
      <div className="Servicess-textss">
        
        <h1 style={{color:'white'}}>Book Your Expert Auto Care Today</h1>
        <p>
        Vehicles break down. That’s a fact of life. But with the right team, yours won’t stay that way for long. Automobile of Switzerland is your go-to solution when searching for service of brake repair near me in Houston, TX on Google. Visit us today and let’s get your car back in top shape.

        </p>
        <Link to="/contact" className="btnssd">Let's Get Started</Link>
      </div>

      {/* Image Section */}
      <div className="Servicess-imagess">
        <img src={TrustImage} alt="Trust and Quality" className="mainssd-img" />
        {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
      </div>
    </div>
  );
};

export default ServiceContent3;
