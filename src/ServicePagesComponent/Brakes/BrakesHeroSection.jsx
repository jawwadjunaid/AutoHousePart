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
           <h1>Brake Services at Automobile of Switzerland For Houston Residents</h1>
           <p>
           Your vehicle’s brakes do more than stop your car—they keep you safe. Whether it's a quick brake repair, a complete brake change, or troubleshooting issues with your braking system, our expert technicians are here to help.
             
           </p>
           <p>
           At Automobile of Switzerland, we fix cars to take care of people. Since 1980, drivers have trusted us for reliable, high-quality auto service. With our cutting-edge diagnostic tools, we get to the root of the problem fast. Whether your brakes are squeaking, feeling soft, or taking longer to stop, we’ll figure it out and fix it right the first time.
             
           </p>
           <button className="BrakesHero-hero-btn">Let's Get Started</button>
         </div>
       </div>
     </section>
   );
}

export default BrakesHeroSection