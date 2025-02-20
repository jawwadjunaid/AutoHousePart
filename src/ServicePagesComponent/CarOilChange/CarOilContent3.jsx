import React from "react";
import { Link } from "react-router-dom";
import CarOilContent from "../../assets/images/Pages/CarOilContent.png";
import './CarOilContent3.css';
const CarOilContent3 = () => {
 return (
     <div className="CarOilContent3-containerss">
       {/* Text Section */}
       <div className="CarOilContent3-textss">
         
         <h1 style={{color:'white'}}>Get Access to ​​Expert Service and Maintenance for European Vehicles</h1>
         <p>
         When it comes to service and maintenance for European vehicles in the Houston area, Autohouse of Switzerland Inc is the name you can rely on. With our decades of experience, certified trained technicians, comprehensive automotive solutions, and commitment to customer satisfaction, we can keep your vehicle in pristine condition.
 
 Schedule an auto service and maintenance appointment with Autohouse of Switzerland Inc today or visit us at 3402 San Jacinto St, Houston, TX 77004.
 
         </p>
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