import React from "react";
import "./RedBanner.css"; // Ensure the CSS file is imported
import ProjectDone from "../../assets/images/images/ProjectDone.png"
import ProjectWin from "../../assets/images/images/ProjectWin.png"
import Glorious from "../../assets/images/images/Glorious.png"
import ActiveClients from "../../assets/images/images/ActiveClients.png"

const RedBanner = () => {
  return (
    <section className="red-banner">
      <div className="stats-container">
        <div className="stat-item">
          <div className="stat-image">
            <img src={ProjectDone} alt="Project Done" />
          </div>
          <div className="stat-number">2540+</div>
          <div className="stat-text">Project Done</div>
        </div>
        <div className="stat-item">
          <div className="stat-image">
            <img src={ProjectWin} alt="Project Win" />
          </div>
          <div className="stat-number">100+</div>
          <div className="stat-text">Project Win</div>
        </div>
        <div className="stat-item">
          <div className="stat-image">
            <img src={Glorious} alt="Glorious Years" />
          </div>
          <div className="stat-number">10+</div>
          <div className="stat-text">Glorious Years</div>
        </div>
        <div className="stat-item">
          <div className="stat-image">
            <img src={ActiveClients} alt="Active Clients" />
          </div>
          <div className="stat-number">825+</div>
          <div className="stat-text">Active Clients</div>
        </div>
      </div>
    </section>
  );
};

export default RedBanner;