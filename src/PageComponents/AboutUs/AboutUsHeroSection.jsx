import { Link } from "react-router-dom";
import "./AboutUsHeroSection.css"; // CSS file import ki hai

const AboutUsHeroSection = () => {
  return (
    <div className="Aboutushero-section">
      <div className="overlay"></div>
      <div className="Aboutushero-content">
        <p className="tagline">Professional Auto Care</p>
        <h1>Get your car running like new again <br /> with our expert repairs</h1>
        <Link to="/contact" className="btn">Contact Us</Link>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
