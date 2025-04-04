import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import "./AutoMechanicForm.css";
import { FiClock } from "react-icons/fi"; // Import Clock Icon

const AutoMechanicForm = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ...(isContactPage ? {} : { service: "" }),
    message: "",
  });

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setMessage("Please verify the reCAPTCHA! ⚠️");
      return;
    }

    const response = await fetch("https://formspree.io/f/xyzkawzj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, "g-recaptcha-response": recaptchaToken }),
    });

    if (response.ok) {
      setMessage("Your request has been sent successfully! ✅");
      setFormData({
        name: "",
        email: "",
        phone: "",
        ...(isContactPage ? {} : { service: "" }),
        message: "",
      });
      setRecaptchaToken(null);
    } else {
      setMessage("Something went wrong. Please try again ❌");
    }
  };

  return (
    <section className="container autoMechanicForm">
      <div className="left-content">
        <p className="help-text">&nbsp; NEED HELP &nbsp; ───</p>
        <h2 className="contact-Heading">Have a Question? Get in Touch with Our Team!</h2>
        <p className="descriptionS">
          We're available to assist you and respond to your inquiries. Please complete the form, and we'll get back to you as soon as possible.
        </p>

       {/* Open Hours Section */}
<div className="open-hours">
  <h3>
    <FiClock className="clock-icon" /> Business Hours
  </h3>
  <div className="hours-list">
    
  
    <div className="day-time">
      <span>Monday</span>
      <span>7:30 AM – 6 PM</span>
    </div>
    <div className="day-time" >
      <span >Tuesday</span>
      <span >7:30 AM – 6 PM</span>
    </div>
    <div className="day-time">
      <span>Wednesday</span>
      <span>7:30 AM – 6 PM</span>
    </div>
    <div className="day-time">
      <span>Thursday</span>
      <span>7:30 AM – 6 PM</span>
    </div>
    <div className="day-time">
      <span>Friday</span>
      <span>7:30 AM – 6 PM</span>
    </div>
    <div className="day-time">
      <span>Saturday</span>
      <span>8:30 AM – 4 PM</span>
    </div>
    <div className="day-time">
      <span>Sunday</span>
      <span>Closed</span>
    </div>
    
  </div>
</div>

      </div>
      
      <div className="right-form">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
          <textarea name="message" placeholder="Message" rows="3" value={formData.message} onChange={handleChange} required></textarea>

          <div className="Recaptcha">
            {/* reCAPTCHA Widget */}
            <ReCAPTCHA sitekey="6LeI3fsqAAAAACAaajrxhx6qCq-7Wef8w8qDxhNo" onChange={setRecaptchaToken} />
          </div>
          
          <button type="submit">Contact Us</button>
        </form>
        {message && <p className="response-message">{message}</p>}
      </div>
    </section>
  );
};

export default AutoMechanicForm;