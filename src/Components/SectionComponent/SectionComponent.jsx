import React from "react";
import "./SectionComponent.css"; // Import CSS file
import { Link } from "react-router-dom";
import bestChoice from "../../assets/images/images/bestChoice.png"; // Badge as image

const SectionComponent = ({hideReadMore}) => {
  return (
    <div className="section-container">
      <div className="image-section custom-image-section">
        <img src={bestChoice} className="" alt="" />
       
      </div>

      {/* Text Section */}
      <div className="content-section">

      <div className="text-section about-text-section">
        <h1>Expert Auto Repair Services You Can Trust</h1>
        <p>
        When your car needs professional attention, Autohouse of Switzerland is your go-to auto repair shop for quality service and expert care. Whether you're dealing with engine issues, electrical problems, or general wear and tear, our skilled mechanics are here to help.
        </p>
        <p>
        We specialize in auto air conditioning repair, ensuring your cooling system works efficiently, especially during hot summers. If you're searching for auto air conditioning repair near me, our team provides fast diagnostics and reliable fixes. Need brake repairs?  Tired of searching for repair brakes near me services? Don't worry because we are here to keep your vehicle safe on the road with top-quality brake pads and expert installation.
        </p>
        <p >
        From minor fixes to major overhauls, we handle it all. If you're looking for an auto service shops near me in Houston, Texas, visit Autohouse of Switzerland for professional, efficient, and affordable auto repair solutions.
        </p>

        {/* Buttons */}
  {!hideReadMore &&(
    <div className="button-container">
  <Link to="/aboutus">
  <button className="read-more-btn">Read More</button>
  </Link>
       </div>
                  )}
  
         </div>
      </div>
    </div>
  );
};

export default SectionComponent;
