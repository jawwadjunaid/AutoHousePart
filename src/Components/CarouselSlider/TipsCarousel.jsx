import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TipsCarousel.css";
import tripycon from "../../assets/images/image6.png";
import { Autoplay } from "swiper/modules";

const tipsData = [
  { id: 1, text: "A timely oil change service keeps your engine healthy, improves fuel efficiency, and extends your car’s lifespan.", imageUrl: tripycon },
  { id: 2, text: "Get brake inspections regularly to ensure safe stopping power and prevent costly repairs.", imageUrl: tripycon },
  { id: 3, text: "Visit an auto repair shop for proper inflation and rotation to enhance traction, fuel economy, and tire longevity.", imageUrl: tripycon },
  { id: 4, text: "Regularly check your battery health to avoid unexpected breakdowns.", imageUrl: tripycon },
  { id: 5, text: "Keep your windshield wipers in good condition for clear visibility during rain.", imageUrl: tripycon },
  { id: 6, text: "Check your coolant level regularly to prevent engine overheating.", imageUrl: tripycon },
];

const CustomPrevArrow = ({ onClick }) => (
  <button className="carousel-button left" onClick={onClick}>
    <FaArrowLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button className="carousel-button right" onClick={onClick}>
    <FaArrowRight size={20} />
  </button>
);

const TipsCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true, // Enable infinite scrolling
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: isMobile ? true : false, // Enable autoplay only on mobile
    autoplaySpeed: 3000, // Set autoplay speed (3s)
    
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          autoplay: true, // Ensure autoplay is enabled on mobile
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  

  return (
    <div className="tips-carousel">
      <p style={{ color: "#C00104",  fontWeight: "800" }}>─── &nbsp; VEHICLE TIPS &nbsp; ───</p>
      <h2 className="tipsCarouselHeading">Essential Tips For Vehicle Care</h2>

      <div className="carousel-container">


        <div className="cont">
        <Slider {...settings}>
          {tipsData.map((tip) => (
            <div key={tip.id} className="tip-card">
              <div className="tip-image-container">
                <img src={tip.imageUrl} alt="Tip Icon" className="tip-image" />

              </div>
              <p>{tip.text}</p>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default TipsCarousel;