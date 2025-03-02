import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Importing Up & Down Arrows
import "./ElectricalHouse.css"; // CSS file import
import AutoHouseIMG from '../../assets/images/Pages/ElectricHousetp.png';

const ElectricalHouse = () => {
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ElectricalHousecontainer"> 
      <div className="ElectricalHousecontent">
        {/* Text Section */}
        <div className="ElectricalHousetext-section">
          <h2 style={{ fontSize: '2.81rem', color: '#0A0A0A' }}>
          Get Your Electrical Issues Fixed Today!          </h2>
          {/* <p className="ElectricalHousesubtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
            For All Your Service and Maintenance Needs?
          </p> */}
          <p className="ElectricalHousedescription" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
          If you're searching for fix car electrical problems near me, look no further. Whether your dashboard is flashing warning lights or your car won’t start, we have the expertise to restore your vehicle’s performance.          </p>

          {/* Accordion Section */}
          <div className="ElectricalHouseaccordion">
            {[
              { title: "✔ Certified Electrical Experts ", content: "Our mechanics specialize in diagnosing and repairing complex electrical faults in cars.  " },
              { title: "✔ Same-Day Service Available ", content: "We work fast to get you back on the road" },
              { title: "✔ Advanced Diagnostic Equipment ", content: "Our tools detect hidden issues before they become major problems. " }
            ].map((item, index) => (
              <div className="ElectricalHouseaccordion-item" key={index} onClick={() => toggleAccordion(index)}>
                <div className="ElectricalHouseaccordion-title">
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>
                    {item.title}
                  </span>
                  {activeIndex === index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                </div>
                {activeIndex === index && (
                  <div className="ElectricalHouseaccordion-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="ElectricalHouseimage-section">
          <img src={AutoHouseIMG} alt="AutoHouse" />
        </div>
      </div>
    </div>
  );
}

export default ElectricalHouse