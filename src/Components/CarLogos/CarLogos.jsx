import React from "react";
import "./CarLogos.css"; // Import CSS for styling

// Import your car logo images
import mini from "../../assets/images/images/MINI.png";
import porsche from '../../assets/images/images/Porsche.png';
import jaguar from "../../assets/images/images/Jaguar.png";
import landrover from "../../assets/images/images/LandRover.png";
import audi from "../../assets/images/images/Audi.png";

const CarLogos = () => {
  const Clogos = [
    { src: mini, alt: "MINI" },
    { src: porsche, alt: "PORSCHE" },
    { src: jaguar, alt: "JAGUAR" },
    { src: landrover, alt: "LAND ROVER" },
    { src: audi, alt: "AUDI" },
  ];

  return (
    <section className="car-Frame-container">
      <div className="car-Frame-wrapper">
        {Clogos.map((Clogo, index) => (
          <div className="logo-img">
          <img key={index} src={Clogo.src} alt={Clogo.alt} className="car-Frame" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarLogos;
