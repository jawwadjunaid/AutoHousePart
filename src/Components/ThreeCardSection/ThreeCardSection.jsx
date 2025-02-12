import React from "react";
import "./ThreeCardSection.css";
import '../../assets/images/images/card-1.png';

const ThreeCardSection = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div
          className="card-bg"
          style={{ backgroundImage: `url(/images/images/card-1.png)` }}
        >
          <div className="content">
            <h3>Title 1</h3>
            <p>
              We will give you an easy-to-understand quote. Ask us about ways
              to reduce the expense of auto repairs to maintain your automobile
              in top condition.
            </p>
            <button className="red-tag">
              Clear Estimate With No Hidden Costs
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-bg"
          style={{
            backgroundImage: `url(../../assets/images/images/Frame 1000008629.png)`,
          }}
        >
          <div className="content">
            <h3>Title 2</h3>
            <p>
              We’ll give you a comprehensive brake system inspection and
              maintenance to keep you safe on the road.
            </p>
            <button className="red-tag">Quick & Trouble-Free</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-bg"
          style={{ backgroundImage: `url(/images/images/card-1.png)` }}
        >
          <div className="content">
            <h3>Title 3</h3>
            <p>
              For domestic & international cars of all makes & models, our
              trained mechanics offer the best in auto repair services here in
              Houston, TX.
            </p>
            <button className="red-tag">Quick & Trouble-Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardSection;
