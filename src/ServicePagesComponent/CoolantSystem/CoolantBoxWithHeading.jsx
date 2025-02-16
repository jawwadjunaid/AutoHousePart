import React from 'react';
import './CoolantBoxWithHeading.css'; // Import external CSS file
import CoolantBoxwithheading1 from '../../assets/images/images/CoolantCard1.png';
import CoolantBoxwithheading2 from '../../assets/images/images/CoolantCard2.png';
import CoolantBoxwithheading3 from '../../assets/images/images/CoolantCard3.png';

const CoolantBoxWithHeading = () => {
 const services = [
         {
             title: "Brake & Suspension",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: CoolantBoxwithheading1,
         },
         {
             title: "Electrical System Repairs",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: CoolantBoxwithheading2,
         },
         {
             title: "Routine Maintenance",
             description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
             imageUrl: CoolantBoxwithheading3,
         }
     ];
 
     return (
         <div className="CoolantCard-container">
             <div className="CoolantCard-title">
 
             <h2 className='CoolantCard-header CoolantCard-title'>Our Comprehensive Services For European Vehicles</h2>
             <p className='CoolantCard-header service-description'>
             At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions that are tailored to meet your vehicle’s specific needs. With our unrivaled expertise and commitment to excellence, you can trust us to keep your vehicle running at its best.
             </p>
             </div>
             <div className="CoolantCard-grid">
                 {services.map((service, index) => (
                     <div className="CoolantCard-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                         <div className="CoolantCard-content">
                             <h3>{service.title}</h3>
                             <p>{service.description}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
}

export default CoolantBoxWithHeading