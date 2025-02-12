import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TipsCarousel.css"; // ✅ Import CSS file

const tipsData = [
  { id: 1, text: "Tip 1: Always check your engine oil levels.", icon: "⛽" },
  { id: 2, text: "Tip 2: Regularly replace your air filters.", icon: "⛽" },
  { id: 3, text: "Tip 3: Maintain proper tire pressure.", icon: "⛽" },
  { id: 4, text: "Tip 4: Keep an eye on brake fluid levels.", icon: "⛽" },
  { id: 5, text: "Tip 5: Change spark plugs periodically.", icon: "⛽" },
  { id: 6, text: "Tip 6: Don’t ignore warning lights.", icon: "⛽" },
  { id: 7, text: "Tip 7: Wash your car to prevent rust.", icon: "⛽" },
  { id: 8, text: "Tip 8: Ensure headlights are clean.", icon: "⛽" },
  { id: 9, text: "Tip 9: Check battery terminals regularly.", icon: "⛽" },
];

const TipsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? tipsData.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === tipsData.length - 3 ? 0 : prev + 1));
  };

  return (
    <div className="tips-carousel">
      <p>Follow these tips to keep your vehicle in top shape.</p>
      
      <h2>Essential Tips For Vehicle Care</h2>
      

      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button left">
          <FaArrowLeft size={20} />
        </button>

        <div className="carousel">
          {tipsData.slice(currentIndex, currentIndex + 3).map((tip) => (
            <div key={tip.id} className="tip-card">
              <div className="tip-icon">{tip.icon}</div>
              <p>{tip.text}</p>
            </div>
          ))}
        </div>

        <button onClick={nextSlide} className="carousel-button right">
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TipsCarousel;
