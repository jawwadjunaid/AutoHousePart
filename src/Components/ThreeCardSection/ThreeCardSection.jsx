import React from "react";
import "./ThreeCardSection.css";

const ThreeCardSection = () => {
  const cards = [
    {
      title: "Brake Problems Need a Reliable Fix?",
      text: "We’ll give you a comprehensive brake system inspection and maintenance to keep you safe on the road.",
      image: "/images/brake.jpg",
    },
    {
      title: "Quick & Trouble-Free",
      text: "Modern brake and engine maintenance procedures are built to be comprehensive yet no-stress.",
      image: "/images/engine.jpg",
    },
    {
      title: "Easy & Trouble-Free",
      text: "A hassle-free vehicle fix connects to seamless digital management and expert hands in execution.",
      image: "/images/mechanic.jpg",
    },
  ];

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div
            className="card-bg"
            style={{ backgroundImage: `url(${card.image})` }}
          >
            <div className="content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <button className="red-tag">Learn More</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCardSection;
