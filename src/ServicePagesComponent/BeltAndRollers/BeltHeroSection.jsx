import React from "react";
import "./BeltHeroSection.css";
import image1 from '../../assets/images/Pages/HeroSection3.png';

const BeltHeroSection = () => {
 return (
    <section className="BeltHero-hero">
      <div className="BeltHero-hero-container">
        <div className="BeltHero-hero-images">
          <img src={image1} alt="Service 1" className="BeltHero-img" />
        </div>
        <div className="BeltHero-hero-content">
          <h1>Quality Auto Belt and Rollers Service in Houston, TX</h1>
          <p>


          </p>
          <p>
          Autohouse of Switzerland Inc has been a trusted name in the Houston area since 1980, providing exceptional service and maintenance for European vehicles. With a focus on honesty, reliability, and affordability, we have built a reputation as the go-to destination for BMW, Audi, VW, Mercedes-Benz, and Volvo owners. Our team of certified technicians, state-of-the-art diagnostic equipment, and commitment to customer satisfaction make us the premier choice for all your European car service needs.

Get in touch with Autohouse of Switzerland Inc today.

            
          </p>
          <button className="BeltHero-hero-btn">Let's Get Started</button>
        </div>
      </div>
    </section>
 )
}

export default BeltHeroSection