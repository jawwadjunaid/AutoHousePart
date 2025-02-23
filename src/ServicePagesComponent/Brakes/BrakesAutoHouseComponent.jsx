import React from "react";
import { Link } from "react-router-dom";
import TrustImage from "../../assets/images/images/BrakesA.png";
import "./BrakesAutoHouseComponent.css"; // CSS file import



const BrakesAutoHouseComponent = () => {
    return (
       <div className="BrakesContent-containerss">
         {/* Text Section */}
         <div className="BrakesContent-textss">
           
           <h1 style={{}}>Book Your Expert Auto Care Today</h1>
           <p>
           Vehicles break down. That’s a fact of life. But with the right team, yours won’t stay that way for long. Automobile of Switzerland is your go-to solution when looking for brake repair near me in Houston, TX. Visit us today and let’s get your car back in top shape.
   
           </p>
           <Link to="/contact" className="BrakesContentbtnssd">Let's Get Started</Link>
         </div>
   
         {/* Image Section */}
         <div className="BrakesContent-imagess">
           <img src={TrustImage} alt="Trust and Quality" className="BrakesContentmainssd-img" />
           {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
         </div>
       </div>
     );
}

export default BrakesAutoHouseComponent