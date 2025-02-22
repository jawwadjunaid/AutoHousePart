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
           <h1>Top-Quality Auto Service And Maintenance Solutions In Houston, TX</h1>
           <p>
             Autohouse of Switzerland has been a trusted name in the Houston area since 1980, 
             providing exceptional service and maintenance for European vehicles. 
             With a focus on honesty, reliability, and affordability, we have built 
             a reputation as the go-to destination for BMW, Audi, VW, Mercedes-Benz, 
             and Volvo owners.
             
           </p>
           <p>
             Our team of certified technicians, state-of-the-art diagnostic equipment, 
             and commitment to customer satisfaction make us the premier choice for 
             all your European car service needs.
             Autohouse of Switzerland has been a trusted name in the Houston area since 1980, 
             providing exceptional service and maintenance for European vehicles. 
             With a focus on honesty, reliability, and affordability, we have built 
             a reputation as the go-to destination for BMW, Audi, VW, Mercedes-Benz, 
             and Volvo owners.
             Our team of certified technicians, state-of-the-art diagnostic equipment, 
             and commitment to customer satisfaction make us the premier choice for 
             all your European car service needs.
             
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