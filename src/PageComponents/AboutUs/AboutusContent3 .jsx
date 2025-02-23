import { Link } from "react-router-dom";
import "./AboutusContent3 .css"; // CSS file
// import Mechanic from '../../assets/images/Pages/mechanic.png';
// import Garage from '../../assets/images/Pages/Garage.png';
import trustQuality from '../../assets/images/images/trust_quality.png';
const AboutusContent3 = () => {
  return (
    <div className="aboutss-container">
      <div className="aboutss-text">
        <p className="tagliness">  &nbsp; KNOW ABOUT US &nbsp; ───</p>
        <h1>Trust and Quality as Our Foundation</h1>
        <p>
        Auto House of Switzerland has earned a reputation built on trust and uncompromising quality. We have cultivated strong relationships with reputable dealers and sources worldwide, ensuring that our inventory comprises only the finest luxury and exotic cars. Each vehicle undergoes rigorous inspections and meticulous detailing to meet our stringent standards. When you choose Auto House of Switzerland, you can trust that you are acquiring an authentic, top-quality vehicle that reflects our commitment to excellence.
        </p>
        <Link to="/contact" className="btnss">Let's Get Started</Link>
      </div>

      <div className="aboutss-images">
        <img src={trustQuality} alt="trustQuality" className="mainss-img about-main-img" />
        {/* <img src={trustQuality} alt="trustQuality" className="overlayss-img" /> */}
      </div>
    </div>
  );
};

export default AboutusContent3;
