import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/Pages/TurstImages.png";
import './ServiceContent3.css';
const ServiceContent3 = () => {
  return (
    <div className="Servicess-containerss">
      {/* Text Section */}
      <div className="Servicess-textss">
        
        <h1 style={{color:'white'}}>Get Access to ​​Expert
Service and Maintenance
for European Vehicles</h1>
        <p>
        When it comes to service and maintenance for European vehicles in the Houston area, Autohouse of Switzerland Inc is the name you can rely on. With our decades of experience, certified trained technicians, comprehensive automotive solutions, and commitment to customer satisfaction, we can keep your vehicle in pristine condition.

Schedule an auto service and maintenance appointment with Autohouse of Switzerland Inc today or visit us at 3402 San Jacinto St, Houston, TX 77004.

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
