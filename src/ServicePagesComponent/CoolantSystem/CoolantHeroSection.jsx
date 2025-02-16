import React from "react";
import './CoolantHeroSection.css'
import Coolantimage from '../../assets/images/images/CoolantHeroSection.png'

const CoolantHeroSection = () => {
  return (
     <section className="ContactHero-hero">
       <div className="ContactHero-hero-container">
         <div className="ContactHero-hero-images">
           <img src={Coolantimage} alt="Service 1" className="ContactHero-img" />
         </div>
         <div className="ContactHero-hero-content">
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
           <button className="ContactHero-hero-btn">Let's Get Started</button>
         </div>
       </div>
     </section>
  )
}

export default CoolantHeroSection