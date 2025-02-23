import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./TipsCarousel.css";
import tripycon from "../../assets/images/image6.png";

const tipsData = [
  { id: 1, text: "A timely oil change service keeps your engine healthy, improves fuel efficiency, and extends your car’s lifespan.", imageUrl: tripycon },
  { id: 2, text: "Get brake inspections regularly to ensure safe stopping power and prevent costly repairs.", imageUrl: tripycon },
  { id: 3, text: "Visit an auto repair shop for proper inflation and rotation to enhance traction, fuel economy, and tire longevity.", imageUrl: tripycon },
  { id: 4, text: "Regularly check your battery health to avoid unexpected breakdowns.", imageUrl: tripycon },
  { id: 5, text: "Keep your windshield wipers in good condition for clear visibility during rain.", imageUrl: tripycon },
  { id: 6, text: "Check your coolant level regularly to prevent engine overheating.", imageUrl: tripycon },
];

const TipsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? tipsData.length - (isMobile ? 1 : 3) : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === tipsData.length - (isMobile ? 1 : 3) ? 0 : prev + 1
    );
  };

  return (
    <div className="tips-carousel">
      <p style={{ color: "#C00104" }}>─── &nbsp; VEHICLE TIPS &nbsp; ───</p>
      <h2>Essential Tips For Vehicle Care</h2>

      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button left">
          <FaArrowLeft size={20} />
        </button>

        <div className="carousel">
          {tipsData
            .slice(currentIndex, currentIndex + (isMobile ? 1 : 3))
            .map((tip) => (
              <div key={tip.id} className="tip-card">
               <div className="tip-image-container">
    <img src={tip.imageUrl} alt="Tip Icon" className="tip-image" />
  </div>
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