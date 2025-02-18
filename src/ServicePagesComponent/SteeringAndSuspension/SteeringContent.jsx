import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/images/SteeringContent.png";
import './SteeringContent.css';

const SteeringContent = () => {
    return (
        <div className="SteeringContent-containerss">
          {/* Text Section */}
          <div className="SteeringContent-textss">
            
            <h1 style={{color:'white'}}>Let Our Auto AC and Heater Experts Keep Your Vehicle Comfortable</h1>
            <p>
            When it comes to service and maintenance for European vehicles in the Houston area, Autohouse of Switzerland Inc is the name you can rely on. With our decades of experience, certified trained technicians, comprehensive automotive solutions, and commitment to customer satisfaction, we can keep your vehicle in pristine condition.

Schedule an auto service and maintenance appointment with Autohouse of Switzerland Inc today or visit us at 3402 San Jacinto St, Houston, TX 77004.

    
            </p>
            <Link to="/contact" className="SteeringContentbtnssd">Let's Get Started</Link>
          </div>
    
          {/* Image Section */}
          <div className="SteeringContent-imagess">
            <img src={TrustImage} alt="Trust and Quality" className="SteeringContentmainssd-img" />
            {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
          </div>
        </div>
      );
}

export default SteeringContent