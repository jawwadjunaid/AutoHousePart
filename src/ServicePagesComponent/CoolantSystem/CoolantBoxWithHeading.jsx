import React from 'react';
import './CoolantBoxWithHeading.css'; // Import external CSS file
import CoolantBoxwithheading1 from '../../assets/images/images/CoolantCard1.png';
import CoolantBoxwithheading2 from '../../assets/images/images/CoolantCard2.png';
import CoolantBoxwithheading3 from '../../assets/images/images/CoolantCard3.png';

const CoolantBoxWithHeading = () => {
 const services = [
         {
             title: "Prevent Overheating with a Professional Coolant Flushnsion",
             description: "Over time, coolant collects rust, debris, and deposits that reduce efficiency. A coolant flush clears out contaminants and restores your engine’s ability to stay cool. If you notice rising temperatures, a sweet smell, or discolored antifreeze, it’s time to schedule a radiator flush before the damage gets worse.",
             imageUrl: CoolantBoxwithheading1,
         },
         {
             title: "Fix Leaks Before They Lead to Costly Repairs",
             description: "Leaking coolant can destroy your engine if ignored. Whether it’s a coolant hose, radiator, or water pump, our technicians quickly find and repair the source of the problem. A small antifreeze leak today could mean a blown head gasket tomorrow. Don’t wait—let’s get it fixed.",
             imageUrl: CoolantBoxwithheading2,
         },
         {
             title: "Routine Coolant System Maintenance",
             description: "Regular checks on your coolant level, thermostat, and radiator cap help avoid overheating and expensive repairs. Just like you wouldn’t ignore electrical system repairs or brake & suspension issues, keeping your coolant system in top shape is just as important. Our team inspects every component, ensuring your engine stays cool no matter the road ahead.",
             imageUrl: CoolantBoxwithheading3,
         }
     ];
 
     return (
         <div className="CoolantCard-container">
             <div className="CoolantCard-title">
 
             <h2 className='CoolantCard-header CoolantCard-title'>Comprehensive Coolant System Services for European Vehicles</h2>
             <p className='CoolantCard-header service-description'>
             Your coolant system isn’t just another part of your engine—it’s the key to preventing overheating, breakdowns, and costly damage. At Automobile of Switzerland, we ensure your radiator, coolant hoses, thermostat, and antifreeze levels work together perfectly. With our expertise in BMW, Audi, VW, Mercedes-Benz, and Volvo, you can trust us to keep your engine running at the right temperature.
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