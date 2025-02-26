import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"; // Import icons
import TrustImage from "../../assets/images/images/BrakesA.png";
import BrakesAutoHouse1 from "../../assets/images/images/Auto.jpg"; // Import the missing image
import "./BrakesAutoHouseComponent.css";

const BrakesAutoHouseComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Declare activeIndex

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* First Section */}
      <div className="BrakesContent-containerss">
        {/* Text Section */}
        <div className="BrakesContent-textss">
          <h1>Book Your Expert Auto Care Today</h1>
          <p>
            Vehicles break down. That’s a fact of life. But with the right team, yours won’t stay that way for long.
            Automobile of Switzerland is your go-to solution when looking for brake repair near me in Houston, TX. Visit
            us today and let’s get your car back in top shape.
          </p>
          <Link to="/contact" className="BrakesContentbtnssd">
            Let's Get Started
          </Link>
        </div>

        {/* Image Section */}
        <div className="BrakesContent-imagess">
          <img src={TrustImage} alt="Trust and Quality" className="BrakesContentmainssd-img" />
        </div>
      </div>

     
    </>
  );
};

export default BrakesAutoHouseComponent;
