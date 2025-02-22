import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"; // Importing Up & Down Arrows
import "./BrakesAutoHouseComponent.css"; // CSS file import
import BrakesAutoHouse1 from '../../assets/images/images/BrakeAutoHouse.png'


const BrakesAutoHouseComponent = () => {
   const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="BrakesAutocontainer">
        <div className="BrakesAutocontent">
          {/* Text Section */}
          <div className="BrakesAutotext-section">
            <h2 style={{ fontSize: '2.81rem', color: '#0A0A0A' }}>
              Why choose Autohouse of Switzerland Inc
            </h2>
            <p className="BrakesAutosubtitle" style={{ fontSize: '1.25rem', color: '#0A0A0A' }}>
              For All Your Service and Maintenance Needs?
            </p>
            <p className="BrakesAutodescription" style={{ fontSize: '1rem', color: '#0A0A0A' }}>
            Need service today? We offer same-day brake repair on most cars, so you don’t have to wait. Our team works efficiently to get you back on the road safely. Plus, our pricing is clear—no hidden surprises. Your brakes won’t fix themselves. Waiting too long can lead to bigger (and more expensive) problems. Call us or stop by for a thorough inspection. While you're here, ask us about our engine and transmission services to keep your vehicle running at its best.
            </p>
  
            {/* Accordion Section */}
            <div className="BrakesAutoaccordion">
              {[
                { title: "✔ Same-Day Service on Most Cars", content: "No long waits—our efficient process ensures quick turnaround without cutting corners." },
                { title: "✔ Latest Diagnostic Equipment", content: "We use top-tier technology to identify issues accurately and provide precise solutions." },
                { title: "✔ Expert Technicians", content: "Our highly trained mechanics have the expertise to handle even the trickiest brake problems." }
              ].map((item, index) => (
                <div className="BrakesAutoaccordion-item" key={index} onClick={() => toggleAccordion(index)}>
                  <div className="BrakesAutoaccordion-title">
                    <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0A0A0A' }}>
                      {item.title}
                    </span>
                    {activeIndex === index ? <AiOutlineUp size={20} /> : <AiOutlineDown size={20} />}
                  </div>
                  {activeIndex === index && (
                    <div className="BrakesAutoaccordion-content">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
  
          {/* Image Section */}
          <div className="BrakesAutoimage-section">
            <img src={BrakesAutoHouse1} alt="AutoHouse" />
          </div>
        </div>
      </div>
    );
}

export default BrakesAutoHouseComponent