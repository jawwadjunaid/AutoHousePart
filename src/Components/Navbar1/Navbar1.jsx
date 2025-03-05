import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PopupModal } from "react-calendly";
import { FiPhone } from "react-icons/fi"; // Import phone icon
import "./Navbar1.css";
// import NavLogo from '../../assets/Logo/Finallogo3.png';
import NavLogo from '../../assets/images/images/FinalBannerRed.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown state
  const [calendlyOpen, setCalendlyOpen] = useState(false); // Calendly modal state
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check screen size

  // Check window resize to update mobile view state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
      setServicesOpen(false);
    }, 100);  // 100ms ka delay smooth transition ke liye
  };

  return (
    <nav className="navbar1">

      {/* Phone Icon for Mobile View */}
      {isMobile && (
        <div className="phone-icon" style={{color:"white"}} onClick={() => window.location.href = "tel:+7135232363"}>
          <FiPhone size={24} />
        </div>
      )}

      {/* Logo Centered */}
      <div className="navlogo-container center-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={NavLogo} alt="Logo" className="Navlogosa" />
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburgers" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      

      {/* Navigation Links */}
      <div className={`nav1-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/aboutus" onClick={closeMenu}>About Us</Link></li>

        {/* Services Dropdown */}
        <li 
          className="services-dropdown"
          onMouseEnter={() => !isMobile && setServicesOpen(true)}
          onMouseLeave={() => !isMobile && setServicesOpen(false)}
        >
          <Link onClick={(e) => isMobile && e.preventDefault() || setServicesOpen(!servicesOpen)}>Services</Link>
          {(servicesOpen || !isMobile) && (
            <ul className="dropdown-menu">
              <li><Link to="/car-oil-change" onClick={closeMenu}>CAR OIL CHANGE</Link></li>
              <li><Link to="/Services" onClick={closeMenu}>SERVICES AND MAINTENANCE</Link></li>
              <li><Link to="/brakes" onClick={closeMenu}>BRAKES</Link></li>
              <li><Link to="/steering-suspension" onClick={closeMenu}>STEERING AND SUSPENSION</Link></li>
              <li><Link to="/coolant-system" onClick={closeMenu}>COOLANT SYSTEM</Link></li>
              <li><Link to="/engine-transmission" onClick={closeMenu}>ENGINE AND TRANSMISSION</Link></li>
              <li><Link to="/computer-diagnostics" onClick={closeMenu}>COMPUTER AND DIAGNOSTICS</Link></li>
              <li><Link to="/ac-heater" onClick={closeMenu}>AC AND HEATER</Link></li>
              <li><Link to="/electrical-problems" onClick={closeMenu}>ELECTRICAL PROBLEMS</Link></li>
              <li><Link to="/belt-rollers" onClick={closeMenu}>BELT AND ROLLERS</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>

        {/* Book Appointment Button */}
        <li className="mobile-appointment sty2">
          <button className="appointment-btns" onClick={() => { setCalendlyOpen(true); closeMenu(); }}>
            Book Appointment
          </button>
        </li>
      </div>

      {/* Calendly Popup Modal */}
      <PopupModal 
        url="https://calendly.com/swissautohouse/freeestimate" 
        onModalClose={() => setCalendlyOpen(false)} 
        open={calendlyOpen} 
        rootElement={document.getElementById("root")} 
      />
    </nav>
  );
};

export default Navbar;
