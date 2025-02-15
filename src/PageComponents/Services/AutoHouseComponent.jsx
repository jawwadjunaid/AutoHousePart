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
            Why choose Autohouse of Switzerland Inc
          </h2>
          <p className="subtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
            For All Your Service and Maintenance Needs?
          </p>
          <p className="description" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
            When it comes to your auto service and maintenance needs, you can never go wrong with AutoHouse of Switzerland Inc. 
            We are dedicated to providing unparalleled customer service and offer a wide range of top-notch services that set us apart from the competition.
            When it comes to your auto service and maintenance needs, you can never go wrong with AutoHouse of Switzerland Inc. 
            We are dedicated to providing unparalleled customer service and offer a wide range of top-notch services that set us apart from the competition.
          </p>

          {/* Accordion Section */}
          <div className="accordion">
            {[
              { title: "✔ Same-Day Service on Most Cars", content: "We provide fast and reliable same-day service on most vehicles, ensuring your car is back on the road quickly." },
              { title: "✔ Latest Diagnostic Equipment", content: "Our workshop is equipped with state-of-the-art diagnostic tools for accurate vehicle servicing and repairs." },
              { title: "✔ Expert Technicians", content: "Our highly skilled mechanics ensure top-quality repairs and maintenance." }
            ].map((item, index) => (
              <div className="accordion-item" key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion-title">
                  <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0A0A0A' }}>
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
