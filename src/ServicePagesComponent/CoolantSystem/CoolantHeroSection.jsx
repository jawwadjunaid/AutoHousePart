import React from "react";
import './CoolantHeroSection.css'
import { Link } from "react-router-dom";
  
import Coolantimage from '../../assets/images/images/CoolantHeroSection.png'

const CoolantHeroSection = () => {
  return (
     <section className="ContactHero-hero">
       <div className="ContactHero-hero-container">
         <div className="ContactHero-hero-images">
           <img src={Coolantimage} alt="Service 1" className="ContactHero-img" />
         </div>
         <div className="ContactHero-hero-content">
           <h1>Avail the Best Coolant System Service for Your Vehicle in Houston, TX  </h1>
           <p>
           Keeping your engine cool isn’t just about comfort—it’s about survival. An overheated engine can lead to costly breakdowns, coolant leaks, and serious damage. At Autohouse of Switzerland, we take your vehicle’s coolant system seriously. Whether it’s a coolant flush, diagnosing a radiator leak, or checking for antifreeze contamination, we handle it with precision.
             
           </p>
           <p>
           Our certified technicians work on BMW, Audi, VW, Mercedes-Benz, and Volvo. With decades of experience and cutting-edge diagnostic tools, we ensure your car’s cooling system performs flawlessly. Schedule your appointment today.
             
           </p>
           <Link to="/contact">
           <button className="ContactHero-hero-btn">Let's Get Started</button>
           </Link>
           
         </div>
       </div>
     </section>
  )
}

export default CoolantHeroSection