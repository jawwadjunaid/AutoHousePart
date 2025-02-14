import React, { useState } from "react";
import './CarOilChangeComponent.css';
import CarOil from '../../assets/images/Pages/CarOilChangeComponent.png';

const CarOilChangeComponent = () => {
const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

return (
    <div className="CarOilChangeComponentcontainer">
      <div className="CarOilChangeComponentcontent">
        {/* Text Section */}
        <div className="CarOilChangeComponenttext-section">
          <h2 style={{ fontSize:'2.81rem', color:'#0A0A0A'}}>Why choose Autohouse of Switzerland Inc</h2>
          <p className="CarOilChangeComponentsubtitle" style={{ fontSize:'1.25rem', color:'#0A0A0A'}}>For All Your Service and Maintenance Needs?</p>
          <p className="CarOilChangeComponentdescription" style={{ fontSize:'1rem', color:'#0A0A0A'}}>
            When it comes to your auto service and maintenance needs, you can never go wrong with AutoHouse of Switzerland Inc. 
            We are dedicated to providing unparalleled customer service and offer a wide range of top-notch services that set us apart from the competition.
          </p>

          {/* Accordion Section */}
          <div className="CarOilChangeComponentaccordion">
            <div className="CarOilChangeComponentaccordion-item" onClick={() => toggleAccordion(0)}>
              <div className="CarOilChangeComponentaccordion-title">
                <span style={{ fontSize:'1rem', font:'bold', color:'#0A0A0A'}}>✔ Same-Day Service on Most Cars</span>
                <span>{activeIndex === 0 ? "−" : "+"}</span>
              </div>
              {activeIndex === 0 && (
                <div className="CarOilChangeComponentaccordion-content">
                  We provide fast and reliable same-day service on most vehicles, ensuring your car is back on the road quickly.
                </div>
              )}
            </div>

            <div className="CarOilChangeComponentaccordion-item" onClick={() => toggleAccordion(1)}>
              <div className="CarOilChangeComponentaccordion-title">
                <span style={{ fontSize:'1rem', font:'bold', color:'#0A0A0A'}}>✔ Latest Diagnostic Equipment</span>
                <span>{activeIndex === 1 ? "−" : "+"}</span>
              </div>
              {activeIndex === 1 && (
                <div className="CarOilChangeComponentaccordion-content">
                  Our workshop is equipped with state-of-the-art diagnostic tools for accurate vehicle servicing and repairs.
                </div>
              )}
            </div>
            <div className="CarOilChangeComponentaccordion-item" onClick={() => toggleAccordion(2)}>
              <div className="CarOilChangeComponentaccordion-title">
                <span style={{ fontSize:'1rem', font:'bold', color:'#0A0A0A'}}>✔ Latest Diagnostic Equipment</span>
                <span>{activeIndex === 2 ? "−" : "+"}</span>
              </div>
              {activeIndex === 2 && (
                <div className="CarOilChangeComponentaccordion-content">
                  Our workshop is equipped with state-of-the-art diagnostic tools for accurate vehicle servicing and repairs.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="CarOilChangeComponentimage-section">
          <img src={CarOil} alt="AutoHouse" />
        </div>
      </div>
    </div>
  );
}

}

export default CarOilChangeComponent