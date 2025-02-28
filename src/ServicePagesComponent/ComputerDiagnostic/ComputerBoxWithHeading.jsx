import React from 'react';
import './ComputerBoxWithHeading.css'; // Import external CSS file
import ComputerBoxwithheading1 from '../../assets/images/Pages/Boxwithheading1.png';
import ComputerBoxwithheading2 from '../../assets/images/Pages/Boxwithheading2.png';
import ComputerBoxwithheading3 from '../../assets/images/Pages/Boxwithheading3.png';

const ComputerBoxWithHeading = () => {
       const services = [
            {
                title: "Engine Performance ",
                description: "A well-tuned engine is the heart of your vehicle’s performance. Our diagnostics uncover misfires, fuel efficiency concerns, and ignition problems that might be slowing you down. If your engine hesitates, stalls, or consumes more fuel than usual, our system identifies the root cause, helping to prevent costly breakdowns and ensuring smooth operation.",
                imageUrl: ComputerBoxwithheading1,
            },
            {
                title: "Transmission Health ",
                description: "The transmission is one of the most critical and expensive components of your vehicle. Early signs of trouble—such as rough shifting, delayed response, or unusual noises—can indicate bigger problems ahead. Our diagnostic computer for cars reads transmission codes, detecting faults before they escalate into costly repairs, keeping your ride smooth and efficient.",
                imageUrl: ComputerBoxwithheading2,
            },
            {
                title: "Electrical System ",
                description: "Modern vehicles rely on complex electrical systems to function correctly. Faulty sensors, failing batteries, or damaged wiring can cause a cascade of issues, from inconsistent engine performance to total system failures. Our mechanic diagnostic computer identifies weak points in your vehicle’s electrical network, ensuring every component is communicating as it should.",
                imageUrl: ComputerBoxwithheading3,
            }
        ];
  return (
    <div className="Computerservices-container">
            <div className="Computerservice-title">

            <h2 className='Computerservices-header'>Comprehensive Diagnostic Checks</h2>
            <p className='Computerservices-header Computerservice-description'>
            We leave no stone unturned. Our diagnostic car code reader technology scans for issues across various systems, including:
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