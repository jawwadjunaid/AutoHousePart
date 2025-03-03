import React from "react";
import { Link } from "react-router-dom";
import CarOilContent from "../../assets/images/Pages/CarOilContent.png";
import './CarOilContent3.css';
const CarOilContent3 = () => {
 return (
     <div className="CarOilContent3-containerss">
       {/* Text Section */}
       <div className="CarOilContent3-textss">
         
         <h1 style={{color:'white'}}>High-Quality Service, No Shortcuts</h1>
         <p>
         Autohouse of Switzerland has a commitment that goes beyond just pouring in fresh engine oil. We check every detail, ensuring that your oil pan, oil filter, and lubrication system work together for peak performance.
         </p>
         <p>No unnecessary upsells. No waiting for hours. Just straightforward, professional car oil change service from technicians who know your vehicle inside and out to ensure your engine and transmission function properly.</p>
         <p>Ready to give your car the care it deserves? Book your appointment today.</p>
         <Link to="/contact" className="CarOilContent3btnssd">Let's Get Started</Link>
       </div>
 
       {/* Image Section */}
       <div className="CarOilContent3-imagess">
         <img src={CarOilContent} alt="Trust and Quality" className="CarOilContent3mainssd-img" />
         {/* <img src={trustQuality} alt="Trust Quality" className="overlayss-img" /> */}
       </div>
     </div>
   );
}

export default CarOilContent3