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
          Why Choose Us?
          </h2>
          {/* <p className="SteeringHousesubtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
            For All Your Service and Maintenance Needs?
          </p> */}
          <p className="SteeringHousedescription" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
          Our technicians don’t guess, they diagnose. With cutting-edge equipment and years of experience, we pinpoint issues before they become bigger problems. Whether you need auto suspension repair, steering rack replacement, or a full car suspension repair, we’ve got you covered.
          </p>

          {/* Accordion Section */}
          <div className="SteeringHouseaccordion">
            {[
              { title: "✔ Trained Technicians", content: "Experts who fix it right the first time." },
              { title: "✔ Advanced Tools", content: "Modern diagnostics for accurate repairs." },
              { title: "✔ Quick Turnaround", content: "We get you back on the road fast." }
            ].map((item, index) => (
              <div className="SteeringHouseaccordion-item" key={index} onClick={() => toggleAccordion(index)}>
                <div className="SteeringHouseaccordion-title">
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>
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