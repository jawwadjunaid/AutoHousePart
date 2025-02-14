import React from "react";
import "./AboutUsSubscriptionBox.css";
import AboutUsIcon from '../../assets/images/images/AboutUsIcon.png';



const AboutUsSubscriptionBox = () => {
  return (
    <div className="subscription-box">
      <div className="subscription-content">
        <img
          src={AboutUsIcon} // Replace with actual image path
          alt="Newsletter"
          className="newsletter-icon"
        />
        <div className="text-content">
          <h2>Subscribe our newsletter</h2>
          <p>To get updates</p>
        </div>
      </div>
      <div className="subscription-form">
        <input type="email" placeholder="Email" />
        <button>Subscribe <span>▼</span></button>
      </div>
    </div>
  );
};

export default AboutUsSubscriptionBox;
