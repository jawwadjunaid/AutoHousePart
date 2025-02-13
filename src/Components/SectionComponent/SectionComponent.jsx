import React from "react";
import "./SectionComponent.css"; // Import CSS file

import bestChoice from "../../assets/images/images/bestChoice.png"; // Badge as image

const SectionComponent = () => {
  return (
    <div className="section-container">
      <div className="image-section">
        <img src={bestChoice} className="" alt="" />
       
      </div>

      {/* Text Section */}
      <div className="content-section">

      <div className="text-section">
        <h1>Your Best Choice For Auto Repair In Texas</h1>
        <p>
          It can be difficult to find a professional, reliable, and honest
          mechanic for your European vehicle. How can you be certain that you
          won’t be taken advantage of? What happens if you don’t have enough
          time to collect multiple quotes? What if you really only need to drop
          off your automobile and be ready to leave the following day?
        </p>
        <p>
          Fortunately, Autohouse of Switzerland Inc has the answers to these
          queries. Since 1980, we have offered dependable, reasonable service to
          the Houston region, and we will keep doing so.
        </p>
        <p className="warranty">
          Warranty: 12 months / 12k miles warranty on approved parts and labor.
        </p>

        {/* Buttons */}
        <div className="button-container">
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionComponent;
