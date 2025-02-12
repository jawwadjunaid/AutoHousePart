import { Link } from "react-router-dom";
import "./AboutusContent3 .css"; // CSS file
import Mechanic from '../../assets/images/Pages/mechanic.png';
import Garage from '../../assets/images/Pages/Garage.png';
const AboutusContent3 = () => {
  return (
    <div className="aboutss-container">
      <div className="aboutss-text">
        <p className="tagliness">VISION ABOUT US</p>
        <h1>Trust and Quality as Our Foundation</h1>
        <p>
          Auto House of Switzerland has earned a reputation built on trust and 
          uncompromising quality. We have cultivated strong relationships with 
          reputable dealers and sourced world-class cars, ensuring that our 
          inventory comprises only the finest luxury and exotic cars. 
        </p>
        <Link to="/contact" className="btnss">Let's Get Started</Link>
      </div>

      <div className="aboutss-images">
        <img src={Mechanic} alt="Mechanic" className="mainss-img" />
        <img src={Garage} alt="Garage" className="overlayss-img" />
      </div>
    </div>
  );
};

export default AboutusContent3;
