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
              <h1>Get Dependable Oil Change Service from Certified Trained Technicians in Houston, TX</h1>
              <p>
              When your engine oil isn't doing its job, your car doesn't just lose performance—it ages faster than it should. At Automobile of Switzerland, we take care of your vehicle like it's our own. Our certified trained technicians provide precise car oil change services to keep your car running smoothly and strongly.
              </p>
              <p>
              We specialize in full synthetic oil change and conventional oil service, ensuring that your car gets exactly what it needs. Schedule a visit today or stop by our shop at for trusted service.
              </p>
              <button className="CarOilservices-hero-btn">Let's Get Started</button>
            </div>
          </div>
        </section>
  )
}

export default CarOilHeroSection