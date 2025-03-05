import React from 'react';
import './ElectricalBoxWithHeading.css'; // Import external CSS file
import ElectricalBoxWithHeading1 from '../../assets/images/Pages/Electric1.png';
import ElectricalBoxWithHeading2 from '../../assets/images/Pages/Electric2.png';
import ElectricalBoxWithHeading3 from '../../assets/images/Pages/Electric3.png';

const ElectricalBoxWithHeading = () => {
 const services = [
         {
             title: "Battery & Charging System Check",
             description: "A weak battery or faulty alternator can leave you stranded. We inspect, test, and replace components to prevent such headaches.",
             imageUrl: ElectricalBoxWithHeading1,
         },
         {
             title: "Lighting & Wiring Repairs",
             description: "Dim or flickering headlights? Interior lights not responding? Our technicians diagnose and repair car wiring problems with precision.",
             imageUrl: ElectricalBoxWithHeading2,
         },
         {
             title: "Ignition & Starter Issues",
             description: "If your vehicle struggles to start or makes clicking noises, we troubleshoot—be it the starter, ignition switch, or something deeper.",
             imageUrl: ElectricalBoxWithHeading3,
         }
     ];
 
     return (
         <div className="ElectricalBoxWithHeading-container">
             <div className="ElectricalBoxWithHeading-title">
 
             <h2 className='ElectricalBoxWithHeading-header ElectricalBoxWithHeading-title'>Get Professional Help for All Electrical Issues</h2>
             <p className='ElectricalBoxWithHeading-header ElectricalBoxWithHeading-description'>
             We handle a wide range of Autohouse electrical problems, from minor glitches to complete system failures. Our services include:
             </p>
             </div>
             <div className="ElectricalBoxWithHeading-grid">
                 {services.map((service, index) => (
                     <div className="ElectricalBoxWithHeading-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                         <div className="ElectricalBoxWithHeading-content">
                             <h3>{service.title}</h3>
                             <p>{service.description}</p>
                         </div>
                     </div>
                 ))}
             </div>
         </div>
     );
}

export default ElectricalBoxWithHeading           