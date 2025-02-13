import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicesBoxWithHeading.css";

const services = [
  {
    title: "BRAKE AND SUSPENSION SERVICES",
    description:
      "Braking and suspension systems of European vehicles are designed to deliver precise handling and safety. Our technicians are skilled in the intricacies of these systems and can provide expert suspension service. Whether it's brake pad replacement, rebalancing, or suspension repairs, we ensure your vehicle's braking and suspension systems perform optimally.",
    image: "brake_suspension.jpg",
  },
  {
    title: "ELECTRICAL SYSTEM REPAIRS",
    description:
      "European vehicles boast advanced electrical systems, and our technicians are equipped to handle any electrical issue that may arise. From troubleshooting complex electrical problems to repairing faulty wiring or replacing components, we have the expertise to restore the functionality of your vehicle’s electrical system.",
    image: "electrical_repairs.jpg",
  },
  {
    title: "ROUTINE MAINTENANCE",
    description:
      "Regular maintenance is crucial to keeping your European vehicle in optimal condition. Our expert technicians are well-versed in the unique needs of BMW, Audi, VW, Mercedes-Benz, and Volvo cars. From oil changes and filter replacements to brake inspections, we take care of your comprehensive routine maintenance services to extend the life of your vehicle and maintain its performance.",
    image: "routine_maintenance.jpg",
  },
];

const ServicesBoxWithHeading = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="services-container">
      <div className="services-content">
        <h2 className="services-heading">
          Our Comprehensive Services <br /> For European Vehicles
        </h2>
        <p className="services-description">
          At Autohouse of Switzerland Inc, we pride ourselves on offering a wide range of expert auto service and maintenance solutions that are tailored to meet your vehicle’s specific needs. With our unrivaled expertise and commitment to excellence, you can trust us to keep your vehicle running at its best.
        </p>

        <Slider {...settings} className="services-slider">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-title">{service.title}</div>
              <div className="service-text">{service.description}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServicesBoxWithHeading;
