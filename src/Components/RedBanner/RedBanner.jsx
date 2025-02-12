import React from "react";
import "./RedBanner.css"; // CSS for styling

const stats = [
  { image: "assests/images/images/ProjectDone.png", number: "2540+", text: "Project Done" },
  { image: "/image2.jpg", number: "100+", text: "Project Win" },
  { image: "/image3.jpg", number: "10+", text: "Glorious Years" },
  { image: "/image4.jpg", number: "825+", text: "Active Clients" },
];

const RedBanner = () => {
  return (
    <div className="red-banner">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <img src={stat.image} alt={stat.text} className="stat-image" />
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
