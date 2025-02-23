import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarLogos.css";

// Import your car logo images
import mini from "../../assets/images/images/MINI.png";
import porsche from "../../assets/images/images/Porsche.png";
import jaguar from "../../assets/images/images/Jaguar.png";
import landrover from "../../assets/images/images/LandRover.png";
import audi from "../../assets/images/images/Audi.png";

const CarLogos = () => {
  const Clogos = [
    { src: mini, alt: "MINI" },
    { src: porsche, alt: "Porsche" },
    { src: jaguar, alt: "Jaguar" },
    { src: landrover, alt: "Land Rover" },
    { src: audi, alt: "Audi" },
    
  ];

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="car-Frame-container">
      <Slider {...settings} className="car-Frame-slider">
        {Clogos.map((Clogo, index) => (
          <div key={index} className="logo-img">
            <img src={Clogo.src} alt={Clogo.alt} className="car-Frame" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CarLogos;
