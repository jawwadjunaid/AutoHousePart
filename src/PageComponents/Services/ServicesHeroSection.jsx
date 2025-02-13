import React from "react";
import "./ServicesHeroSection.css";
import image1 from '../../assets/images/Pages/ServiceHeroSection1.png';
import image2 from '../../assets/images/Pages/ServiceHeroSection2.png';



const ServicesHeroSection = () => {
  return (
    <section className="services-hero">
      <div className="services-hero-container">
        <div className="services-hero-images">
          <img src={image1} alt="Service 1" className="service-img" />
          <img src={image2} alt="Service 2" className="service-img" />
        </div>
        <div className="services-hero-content">
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
          </p>
          <button className="services-hero-btn">Let's Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
