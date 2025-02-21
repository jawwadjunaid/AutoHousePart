import React from "react";
import "./CarOilImportant.css"; // Import CSS file for styling

const CarOilImportant = () => {
  return (
    <section className="oil-section">
      <div className="oil-container">
        {/* Left: Heading */}
        <div className="oil-heading">
          <h2>
            Precision Care for <br /> High-Performance Engines
            {/* <span></span>  */}
          </h2>
        </div>

        {/* Right: Description */}
        <div className="oil-text">
          <p>
          At Automobile of Switzerland, we understand the fine engineering that goes into every European vehicle. Every oil change service is handled with accuracy, using state-of-the-art equipment and premium-quality engine oil.
          </p>
          <p>
          Our team follows strict manufacturer guidelines to ensure that your oil filter is replaced, your oil pan is checked, and your car oil change service is completed without cutting corners.
          </p>
          {/* <p>Here are some of the expert auto services we provide:</p> */}
        </div>
      </div>
    </section>
  );
};

export default CarOilImportant;
