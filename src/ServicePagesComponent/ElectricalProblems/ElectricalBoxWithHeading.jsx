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
             description: "If your vehicle struggles to start or makes clicking noises, we troubleshoot the issue—be it the starter, ignition switch, or something deeper.",
             imageUrl: ElectricalBoxWithHeading3,
         }
     ];
 
     return (
         <div className="AcBox-container">
             <div className="AcBox-title">
 
             <h2 className='AcBox-header Ac-box-title'>Get Professional Help for All Electrical Issues</h2>
             <p className='AcBox-header AcBox-description'>
             We handle a wide range of automobile electrical problems, from minor glitches to complete system failures. Our services include:
             </p>
             </div>
             <div className="AcBox-grid">
                 {services.map((service, index) => (
                     <div className="AcBox-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                         <div className="AcBox-content">
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