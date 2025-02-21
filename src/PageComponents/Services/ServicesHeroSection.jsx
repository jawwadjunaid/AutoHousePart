import React from "react";
import "./ServicesHeroSection.css";
import image1 from '../../assets/images/Pages/HeroSection3.png';

const ServicesHeroSection = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-container">
        <div className="services-hero-images">
          <img src={image1} alt="Service 1" className="service-img" />
        </div>
        <div className="services-hero-content">
          <h1>The Best Car Service and Maintenance for Vehicles in Houston, TX</h1>
          <p>
          Automobile of Switzerland has been a trusted name for decades. We don’t just fix cars, we keep them running like they should. Whether it's car oil change, brakes, or steering & suspension, our expert team ensures your vehicle gets exactly what it needs.
            
          </p>
          <p>
          Every car tells a story. Some purr like a kitten. Others groan under the weight of time. If your vehicle is whispering (or shouting) for help, our specialists are ready. From coolant system inspections to computer diagnostics, we cover it all. And yes, if your cabin feels more like an oven or a freezer, our AC & heater services will bring the temperature back to normal.
            
          </p>
          <button className="services-hero-btn">Let's Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
