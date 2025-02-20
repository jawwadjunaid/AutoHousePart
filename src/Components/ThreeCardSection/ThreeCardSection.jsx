import React from "react";
import "./ThreeCardSection.css";
import card1 from '../../assets/images/images/card-1.png';
import card2 from '../../assets/images/images/card-2.png';
import card3 from '../../assets/images/images/card-3.png';
const cardData = [
  {
    title: "",
    text: "Looking for an oil change near me? We offer quick and professional oil changes to keep your engine in top shape. Our affordable services and offers ensure you get the best care for your car.   ",
    buttonText: "Fast and Reliable Oil Change Services",
    imageUrl: card1,
  },
  {
    title: "",
    text: "From auto air conditioning repair to brake services, we cover all your car’s needs. Our skilled technicians specialize in air conditioning repair car, auto air conditioning repair much more to keep you comfortable year-round.",
    buttonText: "Comprehensive Auto Repair and Maintenance",
    imageUrl: card2,
  },
  {
    title: "",
    text: "Accidents happen, and when they do, you need a trusted auto collision shops to restore your car. We also provide reliable brakes repair and replacement services to keep you safe on the road.",
    buttonText: "Collision and Brake Repair Services",
    imageUrl: card3,
  },
];

const ThreeCardSection = () => {
  return (
    <div className="cards-container3">
      {cardData.map((card, index) => (
        <div key={index} className="card3">
          <div
            className="card-bg3"
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <div className="content3">
              <h3>{card.title}</h3>
              <button className="red-tag3">{card.buttonText}</button>
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeCardSection;