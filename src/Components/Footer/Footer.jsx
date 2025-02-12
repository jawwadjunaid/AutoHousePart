import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBehance, FaPhone, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "./Footer.css";
import FooterLogo from '../../assets/images/images/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo">
            <img className="logo-text" src={FooterLogo} alt="Footer Logo" />
          </div>
          <p className="FooterContentPara">
            We are dedicated to providing an unparalleled automotive experience to our valued customers. 
            With our extensive collection of meticulously handcrafted luxury and exotic vehicles.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaBehance />
          </div>
        </div>

        {/* Middle Section - Services & Explore */}
        <div className="footer-middle">
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li>Car Oil Change</li>
              <li>Service and Maintenance</li>
              <li>Brakes</li>
              <li>Steering & Suspension</li>
              <li>Coolant System</li>
              <li>Engine & Transmission</li>
              <li>Computer Diagnostics</li>
              <li>AC & Heater</li>
              <li>Electrical Problems</li>
              <li>Belt & Rollers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact */}
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p><strong>Working Time:</strong> Mon - Fri: 09 AM - 05 PM</p>
          <p><FaPhone /> (713) 323-3283</p>
          <p><FaEnvelope /> swissautohouse@gmail.com</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved Autohouse</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
