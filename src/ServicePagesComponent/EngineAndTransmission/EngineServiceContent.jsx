import React from "react";
import { Link } from "react-router-dom";
import EngineTrustImage from "../../assets/images/images/EngineContent.png";
import './EngineServiceContent.css';

const EngineServiceContent = () => {
    return (
        <div className="EngineServicess-containerss">
          {/* Text Section */}
          <div className="EngineServicess-textss">
            
            <h1 style={{color:'white'}}>Book Your Computer Diagnostic Check Today</h1>
            <p>

            When your vehicle speaks, we listen. Don’t ignore the signs—bring your car to Autohouse of Switzerland for a professional diagnostic test. Whether you drive a BMW diagnostic computer system or another high-performance vehicle, our experts are ready to assist. Searching for a check-up near me on Google? We'll be in the first few search results to show up.

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