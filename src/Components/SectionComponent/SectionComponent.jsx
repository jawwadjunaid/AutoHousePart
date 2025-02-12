import React from "react";
import "./SectionComponent.css"; // Import CSS file
import mechanicImage from "../../assets/images/images/DSC04344.png";
import garageImage from "../../assets/images/images/about_2-2.png.png";
import badgeImage1 from "../../assets/images/images/Group 1.png"; // Badge as image
import badgeImage2 from "../../assets/images/images/Background+shadow.png"; // Badge as image

const SectionComponent = () => {
  return (
    <div className="section-container">
      <div className="section-content">
        {/* Image Section */}
        <div className="image-section">
          {/* 5K+ Trusted Customers Badge */}
          <img src={badgeImage1} alt="5K+ Trusted Customers" className="badge-img badge-img-customers" />

          {/* Mechanic Image */}
          <img src={mechanicImage} alt="Mechanic at work" className="main-img" />

          {/* Garage Image */}
          <img src={garageImage} alt="Garage" className="secondary-img" />

          {/* Since 1980 Badge */}
          <img src={badgeImage2} alt="Since 1980" className="badge-img badge-img-year" />
        </div>

        {/* Text Section */}
        <div className="text-section">
          <h1>Your Best Choice For Auto Repair In Texas</h1>
          <p>
            It can be difficult to find a professional, reliable, and honest mechanic for your European vehicle. How can you be certain that you won’t be taken advantage of? What happens if you don’t have enough time to collect multiple quotes? What if you really only need to drop off your automobile and be ready to leave the following day?
          </p>
          <p>
            Fortunately, Autohouse of Switzerland Inc has the answers to these queries. Since 1980, we have offered dependable, reasonable service to the Houston region, and we will keep doing so.
          </p>
          <p className="warranty">Warranty: 12 months / 12k miles warranty on approved parts and labor.</p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default SectionComponent;
