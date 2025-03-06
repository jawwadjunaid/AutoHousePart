import React from "react";
import "./Footer.css"; // Import the CSS
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { Link } from "react-router-dom"; // Import Link for navigation
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaBehance, 
  FaPhone, 
  FaEnvelope, 
  FaArrowUp, 
  FaMapMarkerAlt 
} from "react-icons/fa"; // Import required icons
import { MdKeyboardDoubleArrowRight } from "react-icons/md"; // New arrow icon

import FooterLogo from "../../assets/Logo/Finallogo.jpg";

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
            At Autohouse of Switzerland, we provide expert auto repair shop services, from oil changes to brake repairs, ensuring top-quality care.
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.facebook.com/AutohouseofSwitzerland" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> */}
            
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/car-oil-change">Car Oil Change</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/services">Service and Maintenance</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/brakes">Brakes</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/steering-suspension">Steering & Suspension</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/coolant-system">Coolant System</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/engine-transmission">Engine & Transmission</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/computer-diagnostics">Computer Diagnostics</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/ac-heater">AC & Heater</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/electrical-problems">Electrical Problems</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/belt-rollers">Belt & Rollers</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/aboutus">About Us</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/services">Services</Link></li>
              <li><MdKeyboardDoubleArrowRight /> <Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="footer-column footer-col-contact">
            <h3>Contact Us</h3>
            <p><FaPhone /> (713) 523-2363</p>
            <p><FaEnvelope /> swissautohouse@gmail.com</p>
            <p><FaMapMarkerAlt /> 3402 San Jacinto St, Houston, Texas 77004</p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="scroll-top-container">
  <button className="scroll-top" onClick={scrollToTop}>
    <MdKeyboardDoubleArrowUp />
  </button>
</div>

      {/* Bottom Section */}
      <div className="footer-bottom">
      <p className="copyrightFotter">
  Copyright © 2025 Autohouse <br /> <br />
  Powered by &nbsp;&nbsp;&nbsp; 
  <a href="https://onewavemarketing.com/">Onewave Marketing</a>
</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
