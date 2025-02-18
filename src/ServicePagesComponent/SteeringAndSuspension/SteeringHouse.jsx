import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Importing Up & Down Arrows
import "./SteeringHouse.css"; // CSS file import
import AutoHouseIMG from '../../assets/images/images/SteeringHouse.png';

const SteeringHouse = () => {
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="SteeringHousecontainer"> 
      <div className="SteeringHousecontent">
        {/* Text Section */}
        <div className="SteeringHousetext-section">
          <h2 style={{ fontSize: '2.81rem', color: '#0A0A0A' }}>
          Experience Expert Heater Services
          </h2>
          {/* <p className="SteeringHousesubtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
            For All Your Service and Maintenance Needs?
          </p> */}
          <p className="SteeringHousedescription" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
          When it comes to your auto service and maintenance needs, you can never go wrong with Autohouse of Switzerland Inc. We are dedicated to providing unparalleled expertise, exceptional customer service, and top-notch solutions that set us apart from the competition. /n

Here’s why you should entrust your European vehicle to us:
          </p>

          {/* Accordion Section */}
          <div className="SteeringHouseaccordion">
            {[
              { title: "✔ Certified Trained Technicians", content: "Your European vehicle deserves the best care from professionals who understand its intricacies. Our technicians are certified and undergo continuous training to stay updated with the latest advancements in European automotive technology. With our team’s expertise, we can accurately diagnose and efficiently repair any issues your vehicle may have." },
              { title: "✔ Same-Day Service on Most Cars", content: "Your European vehicle deserves the best care from professionals who understand its intricacies. Our technicians are certified and undergo continuous training to stay updated with the latest advancements in European automotive technology. With our team’s expertise, we can accurately diagnose and efficiently repair any issues your vehicle may have." },
              { title: "✔ Latest Diagnostic Equipment", content: "Your European vehicle deserves the best care from professionals who understand its intricacies. Our technicians are certified and undergo continuous training to stay updated with the latest advancements in European automotive technology. With our team’s expertise, we can accurately diagnose and efficiently repair any issues your vehicle may have." }
            ].map((item, index) => (
              <div className="SteeringHouseaccordion-item" key={index} onClick={() => toggleAccordion(index)}>
                <div className="SteeringHouseaccordion-title">
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0A0A0A' }}>
                    {item.title}
                  </span>
                  {activeIndex === index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                </div>
                {activeIndex === index && (
                  <div className="SteeringHouseaccordion-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="SteeringHouseimage-section">
          <img src={AutoHouseIMG} alt="AutoHouse" />
        </div>
      </div>
    </div>
  );
}

export default SteeringHouse