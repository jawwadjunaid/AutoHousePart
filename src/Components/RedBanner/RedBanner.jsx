import React from "react";
import "./RedBanner.css"; 
import ProjectDone from "../../assets/images/images/ProjectDone.png"
import ProjectWin from "../../assets/images/images/ProjectWin.png"
import Glorious from "../../assets/images/images/Glorious.png"
import ActiveClients from "../../assets/images/images/ActiveClients.png"

const stats = [
  { img: ProjectDone, number: "2540+", text: "Project Done" },
  { img: ProjectWin, number: "100+", text: "Project Win" },
  { img: Glorious, number: "10+", text: "Glorious Years" },
  { img: ActiveClients, number: "825+", text: "Active Clients" }
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
