import React from "react";
import "./ThreeCardSection.css";
import card1 from '../../assets/images/images/card-1.png';
import card2 from '../../assets/images/images/card-2.png';
import card3 from '../../assets/images/images/card-3.png';
const cardData = [
  {
    title: "",
    text: "We will give you an easy-to-understand quote. Ask us about ways to reduce the expense of auto repairs to maintain your automobile in top condition.   ",
    buttonText: "Clear Estimate With No Hidden Costs",
    imageUrl: card1,
  },
  {
    title: "",
    text: "We’ll give you a comprehensive brake system inspection and maintenance to keep you safe on the road.",
    buttonText: "Quick & Trouble-Free",
    imageUrl: card2,
  },
  {
    title: "",
    text: "For domestic & international cars of all makes & models, our trained mechanics offer the best in auto repair services.",
    buttonText: "Quick & Trouble-Free",
    imageUrl: card3,
  },
];

const ThreeCardSection = () => {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <div
            className="card-bg"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <div className="content">
              <h3>{card.title}</h3>
              <button className="red-tag">{card.buttonText}</button>
              <p>{card.text}</p>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCardSection;
