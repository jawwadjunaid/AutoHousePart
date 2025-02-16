import React from 'react';
import './ComputerBoxWithHeading.css'; // Import external CSS file
import ComputerBoxwithheading1 from '../../assets/images/Pages/Boxwithheading1.png';
import ComputerBoxwithheading2 from '../../assets/images/Pages/Boxwithheading2.png';
import ComputerBoxwithheading3 from '../../assets/images/Pages/Boxwithheading3.png';

const ComputerBoxWithHeading = () => {
       const services = [
            {
                title: "Brake & Suspension",
                description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
                imageUrl: ComputerBoxwithheading1,
            },
            {
                title: "Electrical System Repairs",
                description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
                imageUrl: ComputerBoxwithheading2,
            },
            {
                title: "Routine Maintenance",
                description: "Ensuring a smooth suspension system or a responsive brake system is crucial for your safety. We provide professional inspections, repairs, and replacements to enhance your vehicle's handling and braking performance.",
                imageUrl: ComputerBoxwithheading3,
            }
        ];
  return (
    <div className="Computerservices-container">
            <div className="Computerservice-title">

            <h2 className='Computerservices-header'>Our Comprehensive Services For European Vehicles</h2>
            <p className='Computerservices-header Computerservice-description'>
            At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions that are tailored to meet your vehicle’s specific needs. With our unrivaled expertise and commitment to excellence, you can trust us to keep your vehicle running at its best.
            </p>
            </div>
            <div className="Computerservices-grid">
                {services.map((service, index) => (
                    <div className="Computerservice-card" key={index} style={{ backgroundImage: `url(${service.imageUrl})` }}>
                        <div className="Computerservice-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default ComputerBoxWithHeading