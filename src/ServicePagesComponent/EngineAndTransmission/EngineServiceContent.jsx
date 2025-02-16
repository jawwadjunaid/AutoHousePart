import React from "react";
import { Link } from "react-router-dom";
import EngineTrustImage from "../../assets/images/images/EngineContent.png";
import './EngineServiceContent.css';

const EngineServiceContent = () => {
    return (
        <div className="EngineServicess-containerss">
          {/* Text Section */}
          <div className="EngineServicess-textss">
            
            <h1 style={{color:'white'}}>Get Access to ​​Expert
    Service and Maintenance
    for European Vehicles</h1>
            <p>
            When it comes to service and maintenance for European vehicles in the Houston area, Autohouse of Switzerland Inc is the name you can rely on. With our decades of experience, certified trained technicians, comprehensive automotive solutions, and commitment to customer satisfaction, we can keep your vehicle in pristine condition.
    
    Schedule an auto service and maintenance appointment with Autohouse of Switzerland Inc today or visit us at 3402 San Jacinto St, Houston, TX 77004.
    
            </p>
            <Link to="/contact" className="Enginebtnssd">Let's Get Started</Link>
          </div>
    
          {/* Image Section */}
          <div className="EngineServicess-imagess">
            <img src={EngineTrustImage} alt="Trust and Quality" className="mainssd-img" />
            {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
          </div>
        </div>
      );
}

export default EngineServiceContent