import React from "react";
import "./ElectricalHeroSection.css";
import { Link } from "react-router-dom";
import AcHeroimage1 from '../../assets/images/Pages/ElectricHero.png';

const ElectricalHeroSection = () => {
  return (
     <section className="Electrical-hero">
       <div className="Electrical-hero-container">
         <div className="Electrical-hero-images">
           <img src={AcHeroimage1} alt="Service 1" className="AcHero-img" />
         </div>
         <div className="Electrical-hero-content">
           <h1>Top-Quality Electrical Repair Services in Houston, TX</h1>
           <p>
           Autohouse of Switzerland has been a trusted name for car electrical problems, helping drivers stay on the road without the frustration of unexpected failures. Whether your vehicle refuses to start, the lights flicker, or you're dealing with electrical issues with car, our expert team is here to help.
             
           </p>
           <p>
           With cutting-edge diagnostic tools and years of hands-on experience, we quickly pinpoint the root of electrical problems in Autohouses and fix them efficiently. European, American, or Japanese—whatever you drive, we know how to handle it.
             
           </p>
           <Link to="/contact">
           <button className="Electrical-hero-btn">Let's Get Started</button>
           </Link>
           
         </div>
       </div>
     </section>
   );
}

export default ElectricalHeroSection