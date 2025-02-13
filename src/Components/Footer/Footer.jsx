import React from "react";
import "./Footer.css"; // Import the CSS

import { Link } from "react-router-dom"; // Import Link for navigation
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaBehance, 
  FaPhone, 
  FaEnvelope, 
  FaArrowUp, 
  FaArrowRight, 
  FaMapMarkerAlt 
} from "react-icons/fa"; // Import all required icons

import FooterLogo from "../../assets/images/images/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo-text-wrapper">
            <img className="logo" src={FooterLogo} alt="Logo" />
            <p className="FooterContentPara">
              We are dedicated to providing an unparalleled automotive experience to our valued customers.
              With our extensive collection of meticulously handcrafted luxury and exotic vehicles.
            </p>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaBehance />
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><FaArrowRight /> Car Oil Change</li>
              <li><FaArrowRight /> Service and Maintenance</li>
              <li><FaArrowRight /> Brakes</li>
              <li><FaArrowRight /> Steering & Suspension</li>
              <li><FaArrowRight /> Coolant System</li>
              <li><FaArrowRight /> Engine & Transmission</li>
              <li><FaArrowRight /> Computer Diagnostics</li>
              <li><FaArrowRight /> AC & Heater</li>
              <li><FaArrowRight /> Electrical Problems</li>
              <li><FaArrowRight /> Belt & Rollers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><FaArrowRight /> <Link to="/aboutus">About Us</Link></li>
              <li><FaArrowRight /> <Link to="/services">Services</Link></li>
              <li><FaArrowRight /> <Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-right">
          <div className="contact-wrapper">
            <h3>Contact Us</h3>
            <p><FaPhone /> (713) 323-3283</p>
            <p><FaEnvelope /> swissautohouse@gmail.com</p>
            <p><FaMapMarkerAlt /> 123 Main Street, Houston, TX</p>
          </div>
          <h3>Working Time</h3>
          <p>Mon - Fri: 09 AM - 05 PM</p>
        </div>
        {/* <div className="footer-column">
        <div className="logo-text-wrapper">
            <img className="logo" src={FooterLogo} alt="Logo" />
            <p className="FooterContentPara">
              We are dedicated to providing an unparalleled automotive experience to our valued customers.
              With our extensive collection of meticulously handcrafted luxury and exotic vehicles.
            </p>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaBehance />
          </div>
        </div>
        <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><FaArrowRight /> Car Oil Change</li>
              <li><FaArrowRight /> Service and Maintenance</li>
              <li><FaArrowRight /> Brakes</li>
              <li><FaArrowRight /> Steering & Suspension</li>
              <li><FaArrowRight /> Coolant System</li>
              <li><FaArrowRight /> Engine & Transmission</li>
              <li><FaArrowRight /> Computer Diagnostics</li>
              <li><FaArrowRight /> AC & Heater</li>
              <li><FaArrowRight /> Electrical Problems</li>
              <li><FaArrowRight /> Belt & Rollers</li>
            </ul>
          </div>
        <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><FaArrowRight /> <Link to="/aboutus">About Us</Link></li>
              <li><FaArrowRight /> <Link to="/services">Services</Link></li>
              <li><FaArrowRight /> <Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column">

          <div className="contact-wrapper">
            <h3>Contact Us</h3>
            <p><FaPhone /> (713) 323-3283</p>
            <p><FaEnvelope /> swissautohouse@gmail.com</p>
            <p><FaMapMarkerAlt /> 123 Main Street, Houston, TX</p>
          </div>
          <h3>Working Time</h3>
          <p>Mon - Fri: 09 AM - 05 PM</p>
        </div>  */}
          </div>
      {/* </div> */}

      {/* Scroll to Top Button */}
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved Autohouse</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;