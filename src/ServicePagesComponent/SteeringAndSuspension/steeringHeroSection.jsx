import React from "react";
import { Link } from "react-router-dom";
import "./steeringHeroSection.css";
import AcHeroimage1 from '../../assets/images/images/SteeringHero.png'

const steeringHeroSection = () => {
  return (
     <section className="steering-hero">
       <div className="steering-hero-container">
         <div className="steering-hero-images">
           <img src={AcHeroimage1} alt="Service 1" className="AcHero-img" />
         </div>
         <div className="steering-hero-content">
           <h1>Reliable and Precise Services for Steering and Suspension in Houston, TX. </h1>
           <p>
           Your vehicle’s steering and suspension system does more than just keep things smooth—it keeps you in control. Whether it's a small shake in the wheel or a full-on bumpy ride, ignoring the warning signs can turn a simple fix into a costly headache. At Automobile of Switzerland, we make sure your suspension repair is handled by professionals who know exactly what your car needs.
             
           </p>

           <Link to="/contact"> 

  
           <button className="steering-hero-btn">Let's Get Started</button>
           </Link>
         
         </div>
       </div>
     </section>
   );
}

export default steeringHeroSection