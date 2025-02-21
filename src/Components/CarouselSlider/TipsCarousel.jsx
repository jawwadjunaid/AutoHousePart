import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TipsCarousel.css"; // ✅ Import CSS file
import tripycon from "../../assets/images/image6.png"; // ✅ Make sure the path is correct

const tipsData = [
  { id: 1, text: "A timely oil change service keeps your engine healthy, improves fuel efficiency, and extends your car’s lifespan.", imageUrl: tripycon },
  { id: 2, text: "Get brake inspections regularly to ensure safe stopping power and prevent costly repairs.", imageUrl: tripycon },
  { id: 3, text: "Visit an auto repair shop for proper inflation and rotation to enhance traction, fuel economy, and tire longevity.", imageUrl: tripycon },
  { id: 4, text: "A timely oil change service keeps your engine healthy, improves fuel efficiency, and extends your car’s lifespan.", imageUrl: tripycon },
  { id: 5, text: "Get brake inspections regularly to ensure safe stopping power and prevent costly repairs.", imageUrl: tripycon },
  { id: 6, text: "Visit an auto repair shop for proper inflation and rotation to enhance traction, fuel economy, and tire longevity.", imageUrl: tripycon },
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
      <p style={{color:'#C00104'}}>───  &nbsp; VEHICLE TIPS &nbsp; ───
</p>
      <h2>Essential Tips For Vehicle Care</h2>

      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button left">
          <FaArrowLeft size={20} />
        </button>

        <div className="carousel">
          {tipsData.slice(currentIndex, currentIndex + 3).map((tip) => (
            <div key={tip.id} className="tip-card">
              <img src={tip.imageUrl} alt="Tip Icon" className="tip-image" />
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