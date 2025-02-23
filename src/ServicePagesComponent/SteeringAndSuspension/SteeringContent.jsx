import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/images/SteeringContent.png";
import './SteeringContent.css';

const SteeringContent = () => {
    return (
        <div className="SteeringContent-containerss">
          {/* Text Section */}
          <div className="SteeringContent-textss">
            
            <h1 style={{color:'white'}}>SteeringContent-containerss</h1>
            <p>
            If your car isn’t handling the way it should, don’t wait. Get in touch today for top-tier steering and suspension repair services. Click here to schedule an appointment—your car will thank you for it.

    
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