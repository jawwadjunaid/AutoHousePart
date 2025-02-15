import React from 'react';
import './ServicesBoxWithHeading.css'; // Import external CSS file
import Boxwithheading1 from '../../assets/images/Pages/Boxwithheading1.png';
import Boxwithheading2 from '../../assets/images/Pages/Boxwithheading2.png';
import Boxwithheading3 from '../../assets/images/Pages/Boxwithheading3.png';

const ServicesBoxWithHeading = () => {
    const services = [
        {
            title: "Brake & Suspension",
            description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
            imageUrl: Boxwithheading1,
        },
        {
            title: "Electrical System Repairs",
            description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
            imageUrl: Boxwithheading2,
        },
        {
            title: "Routine Maintenance",
            description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
            imageUrl: Boxwithheading3,
        }
    ];

    return (
        <div className="services-container">
            <h2 className='services-header'>Our Comprehensive Services For European Vehicles</h2>
            <p className='services-header'>
                At AutoMasters of Switzerland Inc., we pride ourselves on offering a range of specialized auto services.
                Here are some of the top-notch services we provide:
            </p>
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
