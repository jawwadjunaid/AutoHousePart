import { Link } from "react-router-dom";
import './AboutUsHeader.css';
const AboutUs = () => {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <div className="breadcrumb">
        <Link className="breadCrumb-link-home" to="/">Home</Link> &raquo; <Link className="breadCrumb-link-about" to="/aboutus">About Us</Link>
      </div>
    </div>
  );
};

export default AboutUs;
