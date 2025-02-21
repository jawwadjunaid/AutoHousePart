import React from 'react';
import './BeltWithBox.css'; // Import external CSS file
import Boxwithheading1 from '../../assets/images/BElt/Belt1.png';
import Boxwithheading2 from '../../assets/images/BElt/belt.png';
import Boxwithheading3 from '../../assets/images/BElt/belt3.png';


const BeltWithBox = () => {
const services = [
        {
            title: "HIGH QUALITY PRODUCTS",
            description: "The braking and suspension systems of European vehicles are engineered to deliver precise handling and safety. Our technicians are well-versed in the intricacies of these systems and can provide expert brake and suspension services. Whether it's brake pad replacement, rotor resurfacing, or suspension repairs, we ensure your vehicle's braking and suspension systems perform optimally.",
            imageUrl: Boxwithheading1,
        },
        {
            title: "TIMELY & EFFICIENT",
            description: "European vehicles boast advanced electrical systems, and our technicians are equipped to handle any electrical issue that may arise. From troubleshooting complex electrical problems to repairing faulty wiring or replacing components, we have the expertise to restore the functionality of your vehicle's electrical system.",
            imageUrl: Boxwithheading2,
        },
        {
            title: "TRANSPARENT PRICING",
            description: "Regular maintenance is crucial to keeping your European vehicle in optimal condition. Our expert technicians are well-versed in the specific needs of BMW, Audi, VW, Mercedes-Benz, and Volvo cars. From oil changes and filter replacements to brake inspections and tire rotations, we provide comprehensive routine maintenance services to prolong the life of your vehicle and maintain its performance.",
            imageUrl: Boxwithheading3,
        }
    ];

    return (
        <div className="BeltBox-container">
            <div className="service-title">

            <h2 className='BeltBox-header'>Why choose Autohouse of Switzerland Inc for your Belt and Rollers Service Needs:</h2>
            <p className='BeltBox-header BeltBox-description'>
            We realize the necessity of dependable Belt and Rollers services for your car at Autohouse of Switzerland Inc. Our skilled experts can handle a wide range of Belt and Rollers repairs and replacements, ensuring your vehicle runs at peak performance. We invest in cutting-edge technology to precisely detect problems and give precise solutions. Here are the list of compelling reasons why Autohouse of Switzerland Inc is the best choice for your Belt and Rollers needs:
            </p>
            </div>
            <div className="BeltBox-grid">
                {services.map((service, index) => (
                    <div className="BeltBox-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                        <div className="BeltBox-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BeltWithBox