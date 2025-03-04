import React from "react";
import "./RedBanner.css"; 
import ProjectDone from "../../assets/images/images/ProjectDone.png"
import ProjectWin from "../../assets/images/images/ProjectWin.png"
import Glorious from "../../assets/images/images/Glorious.png"
import ActiveClients from "../../assets/images/images/ActiveClients.png"

const stats = [
  { img: ProjectDone, number: "100,000+", text: " Vehicles Serviced" },
  { img: ProjectWin, number: "4.9★", text: "Average Customer Rating" },
  { img: Glorious, number: "25+", text: " Years of Experience" },
  { img: ActiveClients, number: "3,000+", text: "Loyal Customers" }
];

const RedBanner = () => {
  return (
    <section className="red-banner">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-content">
              <img src={stat.img} alt={stat.text} className="stat-image" />
              <div className="stat-info">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-text">{stat.text}</div>
              </div>
            </div>
            {index !== stats.length - 1 && <div className="stat-divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RedBanner;
