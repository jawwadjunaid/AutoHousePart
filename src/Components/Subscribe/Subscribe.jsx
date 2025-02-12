import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h2>Subscribe To Stay Connected</h2>
        <p>
          A car repair is a service provided to fix any issues or damages with
          vehicles. It involves diagnosing the problem, repairing, or replacing
          parts.
        </p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="subscribe-image">
        <img src="/your-image-path.jpg" alt="Mechanic" />
      </div>
    </div>
  );
};

export default Subscribe;
