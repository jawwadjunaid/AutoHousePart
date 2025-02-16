import React from 'react'
import "./BrakesHeroSection.css";
import Brakesimage1 from '../../assets/images/Pages/HeroSection3.png';

const BrakesHeroSection = () => {
 return (
     <section className="BrakesHero-hero">
       <div className="BrakesHero-hero-container">
         <div className="BrakesHero-hero-images">
           <img src={Brakesimage1} alt="Service 1" className="BrakesHero-img" />
         </div>
         <div className="BrakesHero-hero-content">
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
           <button className="BrakesHero-hero-btn">Let's Get Started</button>
         </div>
       </div>
     </section>
   );
}

export default BrakesHeroSection