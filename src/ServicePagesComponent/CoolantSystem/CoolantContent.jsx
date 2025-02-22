import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/Pages/TurstImages.png";
import './CoolantContent.css';

const CoolantContent = () => {
    return (
        <div className="CoolantContent-containerss">
          {/* Text Section */}
          <div className="CoolantContent-textss">
            
            <h1 style={{color:'Black'}}>Expert Cooling System Care to Keep You on the Road</h1>
            <p>
            Ignoring your coolant system is like running a marathon without water. Eventually, your engine will overheat. At Automobile of Switzerland, we take care of your radiator flush, diagnose coolant leaks, and keep your antifreeze levels just right. Let’s make sure your vehicle runs cool, smooth, and problem-free.
    
            </p>
            <Link to="/contact" className="CoolantContentbtnssd">Let's Get Started</Link>
          </div>
    
          {/* Image Section */}
          <div className="CoolantContent-imagess">
            <img src={TrustImage} alt="Trust and Quality" className="CoolantContentmainssd-img" />
            {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
          </div>
        </div>
      );
}

export default CoolantContent