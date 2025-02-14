import React from "react";
import "./CarOilImportant.css"; // Import CSS file for styling

const CarOilImportant = () => {
  return (
    <section className="oil-section">
      <div className="oil-container">
        {/* Left: Heading */}
        <div className="oil-heading">
          <h2>
            The Importance Of <br />
            <span>Regular Oil Changes</span>
          </h2>
        </div>

        {/* Right: Description */}
        <div className="oil-text">
          <p>
            Maintaining the health of your European vehicle begins with regular oil changes.
            Clean oil lubricates the engine, reduces friction, and prevents premature wear
            and tear. Failing to do so can become compromised with dirt, debris, and sludge
            over time, which diminishes its ability to protect the engine effectively.
          </p>
          <p>
            By maintaining a schedule, you ensure optimal engine performance, extended
            engine life, improvement in efficiency, and reduced emissions.
          </p>
          <p>Here are some of the expert auto services we provide:</p>
        </div>
      </div>
    </section>
  );
};

export default CarOilImportant;
