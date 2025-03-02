import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Importing Up & Down Arrows
import "./AutoHouseComponent.css"; // CSS file import
import AutoHouseIMG from '../../assets/images/Pages/Autopp.png';

const AutoHouseComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="content">
        {/* Text Section */}
        <div className="text-section">
          <h2 style={{ fontSize: '2.81rem', color: '#0A0A0A' }}>
          Why Trust Autohouse of Switzerland?
          </h2>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
            For All Your Service and Maintenance Needs?
          </p>
          <p className="description" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
          Our reputation is built on expertise, honesty, and a commitment to excellence. We understand the importance of dependable transportation, and our team works hard to provide the highest level of service. Whether it’s preventive maintenance or urgent repairs, we put your vehicle’s performance and safety first.
          </p>

          {/* Accordion Section */}
          <div className="accordion">
            {[
              { title: "✔ Fast Service on Most Vehicles", content: "Because nobody likes waiting." },
              { title: "✔ Cutting-Edge Diagnostics", content: "We get straight to the problem without guesswork." },
              { title: "✔ Skilled Auto Specialists", content: "Your car deserves the best hands under the hood." }
            ].map((item, index) => (
              <div className="accordion-item" key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion-title">
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>
                    {item.title}
                  </span>
                  {activeIndex === index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                </div>
                {activeIndex === index && (
                  <div className="accordion-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <img src={AutoHouseIMG} alt="AutoHouse" />
        </div>
      </div>
    </div>
  );
};

export default AutoHouseComponent;
