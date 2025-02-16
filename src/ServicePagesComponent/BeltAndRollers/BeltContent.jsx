import React from "react";
import { Link } from "react-router-dom";
import BeltContentTrustImage from "../../assets/images/images/BeltContent.png";
import './BeltContent.css';

const BeltContent = () => {
  return (
    <div className="BeltContent-containerss">
      {/* Text Section */}
      <div className="BeltContent-textss">
        
        <h1 style={{color:'Black'}}>Excellent Belt and Rollers Services offered at Autohouse of Switzerland Inc</h1>
        <p>
        When it comes to service and maintenance for European vehicles in the Houston area, Autohouse of Switzerland Inc is the name you can rely on. With our decades of experience, certified trained technicians, comprehensive automotive solutions, and commitment to customer satisfaction, we can keep your vehicle in pristine condition.

Schedule an auto service and maintenance appointment with Autohouse of Switzerland Inc today or visit us at 3402 San Jacinto St, Houston, TX 77004.

        </p>
        <Link to="/contact" className="BeltContentbtnssd">Let's Get Started</Link>
      </div>

      {/* Image Section */}
      <div className="BeltContent-imagess">
        <img src={BeltContentTrustImage} alt="Trust and Quality" className="BeltContentmainssd-img" />
        {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
      </div>
    </div>
  );
}

export default BeltContent