import React from "react";
import "./RedBanner.css"; // CSS file for styling

const stats = [
  { icon: "/icon1.png", number: "2540+", text: "Project Done" },
  { icon: "/icon2.png", number: "100+", text: "Project Win" },
  { icon: "/icon3.png", number: "10+", text: "Glorious Years" },
  { icon: "/icon4.png", number: "825+", text: "Active Clients" },
];

const RedBanner = () => {
  return (
    <div className="red-banner">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <img src={stat.icon} alt={stat.text} className="stat-icon" />
            <div className="stat-text-container">
              <h1 className="stat-number">{stat.number}</h1>
              <p className="stat-text">{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RedBanner;
