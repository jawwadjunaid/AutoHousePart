import React from "react";
import "./AboutUsSubscriptionBox.css";
import AutoCan from '../../assets/images/Pages/AboutUsIcon.png';



const AboutUsSubscriptionBox = () => {
  return (
    <div className="subscription-box">
      <div className="subscription-content">
        <img
          src={AutoCan} // Replace with actual image path
          alt="Newsletter"
          className="newsletter-icon"
        />
        <div className="text-content">
          <h3>Subscribe our newsletter</h3> 
          <p>To get updates</p>
        </div>
      </div>
      <div className="subscription-form">
        <input type="email" placeholder="Email" />
        <button>Subscribe </button>
      </div>
    </div>
  );
};

export default AboutUsSubscriptionBox;
