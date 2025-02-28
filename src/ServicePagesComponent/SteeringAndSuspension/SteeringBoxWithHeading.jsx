import React from 'react';
import './SteeringBoxWithHeading.css'; // Import external CSS file
import SteeringBoxWithHeading1 from '../../assets/images/images/Ac1.png'
import SteeringBoxWithHeading2 from '../../assets/images/images/Ac2.png';
import SteeringBoxWithHeading3 from '../../assets/images/images/Ac3.png';

const SteeringBoxWithHeading = () => {
 const services = [
         {
             title: "Suspension Diagnostics",
             description: "A faulty suspension can cause unstable handling and wear. Our experts assess every component for a safe, stable ride.",
             imageUrl: SteeringBoxWithHeading1,
         },
         {
             title: "Steering System Repairs",
             description: "Issues with your steering rack can make handling unpredictable. We repair and replace components as needed.",
             imageUrl: SteeringBoxWithHeading2,
         },
         {
             title: "Alignment & Balance Adjustments",
             description: "Poor alignment leads to uneven tire wear and a rough ride. We fine-tune your wheels for better performance and fuel efficiency.",
             imageUrl: SteeringBoxWithHeading3,
         }
     ];
 
     return (
         <div className="SterringBoxBa-container">
             <div className="SterringBoxBa-title">
 
             <h2 className='SterringBoxBa-header Ac-box-title'>Get Access to Comprehensive Suspension Services</h2>
             <p className='SterringBoxBa-header SterringBoxBa-description'>
             At Automobile of Switzerland, we offer top-tier steering and suspension services tailored to your vehicle’s needs. Whether you require routine suspension auto repair, steering rack replacement, or system diagnostics, our skilled technicians have the expertise to handle it all. Here are some of the expert services we provide:
             </p>
             </div>
             <div className="SterringBoxBa-grid">
                 {services.map((service, index) => (
                     <div className="SterringBoxBa-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                         <div className="SterringBoxBa-content">
                             <h3>{service.title}</h3>
                             <p>{service.description}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
}

export default SteeringBoxWithHeading