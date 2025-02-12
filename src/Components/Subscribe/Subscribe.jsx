import React from "react";
import "./Subscribe.css";
import subscribe from "../../assets/images/images/subscribeImage.png"

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Subscribe To Stay Connected</h2>
        <p>
          A car repair is a service provided to fix any issues or damages with
          vehicles. It involves diagnosing the problem, repairing, or replacing
          necessary parts.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="subscribe-image">
        <img
          src={subscribe}
          alt="Mechanic"
          className="mechanic-image"
        />
      </div>
    </div>
  );
};

export default Subscribe;
