import React from 'react';
import './AcBoxWithHeading.css'; // Import external CSS file
import AcBoxwithheading1 from '../../assets/images/images/Ac1.png'
import AcBoxwithheading2 from '../../assets/images/images/Ac2.png';
import AcBoxwithheading3 from '../../assets/images/images/Ac3.png';

const AcBoxWithHeading = () => {
 const services = [
         {
             title: "AC EVAPORATOR",
             description: "The braking and suspension systems of European vehicles are engineered to deliver precise handling and safety. Our technicians are well-versed in the intricacies of these systems and can provide expert brake and suspension services. Whether it's brake pad replacement, rotor resurfacing, or suspension repairs, we ensure your vehicle's braking and suspension systems perform optimally.",
             imageUrl: AcBoxwithheading1,
         },
         {
             title: "AC REPAIRS",
             description: "European vehicles boast advanced electrical systems, and our technicians are equipped to handle any electrical issue that may arise. From troubleshooting complex electrical problems to repairing faulty wiring or replacing components, we have the expertise to restore the functionality of your vehicle's electrical system.",
             imageUrl: AcBoxwithheading2,
         },
         {
             title: "AC INSPECTIONS",
             description: "Regular maintenance is crucial to keeping your European vehicle in optimal condition. Our expert technicians are well-versed in the specific needs of BMW, Audi, VW, Mercedes-Benz, and Volvo cars. From oil changes and filter replacements to brake inspections and tire rotations, we provide comprehensive routine maintenance services to prolong the life of your vehicle and maintain its performance.",
             imageUrl: AcBoxwithheading3,
         }
     ];
 
     return (
         <div className="AcBox-container">
             <div className="AcBox-title">
 
             <h2 className='AcBox-header Ac-box-title'>Get Access to Comprehensive AC Services</h2>
             <p className='AcBox-header AcBox-description'>
             At Autohouse of Switzerland Inc, we offer a wide range of AC services to cater to all your needs. Whether you require routine maintenance, repairs, or system replacements, our skilled technicians have the expertise to handle it all.

Here are some of the expert auto services we provide
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

export default AcBoxWithHeading