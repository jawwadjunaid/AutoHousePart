import React from 'react';
import './BrakesBoxWithHeading.css'; // Import external CSS file
import Boxwithheading1 from '../../assets/images/images/BrakesBoxWithHeading1.png';
import Boxwithheading2 from '../../assets/images/images/BrakesBoxWithHeading2.png';
import Boxwithheading3 from '../../assets/images/images/BrakesBoxWithHeading3.png';

const BrakesBoxWithHeading = () => {
  const services = [
          {
              title: "Brake & Suspension",
              description: "Maintain smooth handling and safety with expert brake and suspension repairs in Houson, TX. We inspect, repair, and replace components for optimal performance and control.  ",
              imageUrl: Boxwithheading1,
          },
          {
              title: "Electrical System Repairs",
              description: "Ensure proper brake light and ABS functionality with electrical system diagnostics and repairs. We fix wiring, sensors, and control modules for reliable braking performance.",
              imageUrl: Boxwithheading2,
          },
          {
              title: "Routine Maintenance",
              description: "Extend your brake system’s lifespan with regular maintenance and inspections. We check brake pads, fluids, and rotors to prevent issues and keep you safe on the road.",
              imageUrl: Boxwithheading3,
          }
      ];
  
      return (
          <div className="BrakesBox-container">
              <div className="BrakesBox-title">
  
              <h2 className='BrakesBox-header'>Our Comprehensive Services For European Vehicles</h2>
              <p className='BrakesBox-header BrakesBox-description'>
              At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions that are tailored to meet your vehicle’s specific needs. With our unrivaled expertise and commitment to excellence, you can trust us to keep your vehicle running at its best.
              </p>
              </div>
              <div className="BrakesBox-grid">
                  {services.map((service, index) => (
                      <div className="BrakesBox-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                          <div className="BrakesBox-content">
                              <h3>{service.title}</h3>
                              <p>{service.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      )
}

export default BrakesBoxWithHeading