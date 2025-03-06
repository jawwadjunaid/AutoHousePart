import React from 'react';
import './ServicesBoxWithHeading.css'; // Import external CSS file
import Boxwithheading1 from '../../assets/images/Pages/Boxwithheading1.png';
import Boxwithheading2 from '../../assets/images/Pages/Boxwithheading2.png';
import Boxwithheading3 from '../../assets/images/Pages/Boxwithheading3.png';

const ServicesBoxWithHeading = () => {
    const services = [
        {
            title: "Brake & Suspension",
            description: "A well-tuned brake system and suspension make all the difference. We handle repairs, replacements, and inspections to keep your ride smooth and safe.",
            imageUrl: Boxwithheading1,
        },
        {
            title: "Electrical System Repairs",
            description: "Flickering lights? Modern vehicles rely on complex electrical systems, and we’re here to diagnose and fix electrical problems before they leave you stranded.",
            imageUrl: Boxwithheading2,
        },
        {
            title: "Routine Maintenance",
            description: "Skip the breakdowns. Regular upkeep like car oil change and engine & transmission checks extends your vehicle’s lifespan. Prevent small issues from turning into big problems.",
            imageUrl: Boxwithheading3,
        }
    ];

    return (
        <div className="services-container">
            <div className="service-title">

            <h2 className='services-header service-heading'>Comprehensive Auto Services for Vehicles in Houston, Texas</h2>
            <p className='services-header service-description'>
            We take pride in offering an extensive range of services designed to keep your vehicle in peak condition. Our team is equipped with the knowledge and tools to get the job done right. We ensure your vehicle performs at its best, mile after mile.
            </p>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesBoxWithHeading;
