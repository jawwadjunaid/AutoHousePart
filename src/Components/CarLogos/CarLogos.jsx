import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarLogos.css";

// Import your car logo images

import bmw from "../../assets/CarLogos/1_BMW.svg";
import mini from "../../assets/CarLogos/2_MINI.svg";
import porsche from "../../assets/CarLogos/9_Porsche.svg";
import jaguar from "../../assets/CarLogos/8_Jaguar.svg";
import landrover from "../../assets/CarLogos/7_Landrover.svg";
import audi from "../../assets/CarLogos/4_Audi.svg";
import mercedes from "../../assets/CarLogos/3_Mercedes.svg";
import volkswagen from "../../assets/CarLogos/5_Volkswagen.svg";
import volvo from "../../assets/CarLogos/6_Volvo.svg";
import toyota from "../../assets/CarLogos/10_Toyota.svg";
import honda from "../../assets/CarLogos/11_Honda.svg";
import nissan from "../../assets/CarLogos/12_Nissan.svg";
import mazda from "../../assets/CarLogos/13_Mazda.svg";
import subaru from "../../assets/CarLogos/14_Subaru.svg";
import ford from "../../assets/CarLogos/15_Ford.svg";
import chevy from "../../assets/CarLogos/16_Chevy.svg";
import buick from "../../assets/CarLogos/17_Buick.svg";
import cadillac from "../../assets/CarLogos/18_Cadillac.svg";
import jeep from "../../assets/CarLogos/19_Jeep.svg";


const CarLogos = () => {
  const Clogos = [
    { src: bmw, atl: "BMW"},
    { src: mini, alt: "MINI" },
    { src: porsche, alt: "Porsche" },
    { src: jaguar, alt: "Jaguar" },
    { src: landrover, alt: "Land Rover" },
    { src: audi, alt: "Audi" },
    { src: mercedes, alt: "Mercedes" },
    { src: volkswagen, alt: "Volkswagen"},
    { src: volvo, alt: "Volvo"},
    { src: toyota, alt: "Toyota"},
    { src: honda, alt: "Honda"},
    { src: nissan , alt: "Nissan"},
    { src: mazda, alt: "Mazda"},
    { src: subaru, alt: "Subaru"},
    { src: ford, alt: "Ford"},
    { src: chevy, alt: "Chevy"},
    { src: buick, alt: "Buick"},
    { src: cadillac , alt: "Cadillac"},
    { src: jeep, alt: "Jeep"},
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
