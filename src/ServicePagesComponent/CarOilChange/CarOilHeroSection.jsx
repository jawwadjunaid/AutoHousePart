import React from 'react'
import './CarOilHeroSection.css';
import image1 from '../../assets/images/Pages/CarOilService1.png';
import image2 from '../../assets/images/Pages/CarOilService2.png';

const CarOilHeroSection = () => {
  return (
     <section className="CarOil-hero">
          <div className="CarOil-hero-container">
            <div className="CarOil-hero-images">
              <img src={image1} alt="Service 1" className="CarOilservice-img" />
              <img src={image2} alt="Service 2" className="CarOilservice-img" />
            </div>
            <div className="CarOilservices-hero-content">
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
              <button className="CarOilservices-hero-btn">Let's Get Started</button>
            </div>
          </div>
        </section>
  )
}

export default CarOilHeroSection