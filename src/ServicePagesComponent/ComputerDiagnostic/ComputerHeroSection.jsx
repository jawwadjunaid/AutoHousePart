import React from "react";
import "./ComputerHeroSection.css";
import image1 from '../../assets/images/images/ComputerHero.png';

const ComputerHeroSection = () => {
  return (
      <section className="ComputerHeroservices-hero">
        <div className="ComputerHeroservices-hero-container">
          <div className="ComputerHeroservices-hero-images">
            <img src={image1} alt="Service 1" className="service-img" />
          </div>
          <div className="ComputerHeroservices-hero-content">
            <h1>State-of-the-Art Technology for Reliable Insights</h1>
            <p>
            Your vehicle’s internal systems are more advanced than ever. A simple warning light could mean anything from a minor sensor glitch to a major engine issue. Our mechanic diagnostic computer tools connect directly to your car’s system, reading trouble codes and providing real-time data.
              
            </p>
            <p>
            Our certified technicians analyze this information with expertise and experience. Whether you need a car computer check near me or a complete auto repair computer diagnostics service, we deliver precise results so you can make informed decisions about your vehicle’s care.
              
            </p>
            <button className="ComputerHeroservices-hero-btn">Let's Get Started</button>
          </div>
        </div>
      </section>
    );
}

export default ComputerHeroSection