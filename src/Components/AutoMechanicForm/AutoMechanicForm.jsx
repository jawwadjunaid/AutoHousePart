
import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import "./AutoMechanicForm.css"; 
//import Frame from "../../assets/images/images/Frame.png"; 

const AutoMechanicForm = () => {
  const location = useLocation(); // Get current path
  const isContactPage = location.pathname === "/contact"; // Check if it's Contact Page

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ...(isContactPage ? {} : { service: "" }), // Service field only when NOT on contact page
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xyzkawzj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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
    } else {
      setMessage("Something went wrong. Please try again ❌");
    }
  };

  return (
    <>
      <section className="container autoMechanicForm">
        <div className="left-content">
          <p className="help-text">&nbsp; NEED HELP &nbsp; ───</p>

          <h2>
          Request an Appointment with an Auto Mechanic?
          </h2>
          <p className="descriptionS">
            We're available to assist you and respond to your inquiries. Please
            complete the form below, and we will reach out to you shortly.
          </p>
        </div>
        <div className="right-form">
          <h3>Please fill in the form</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="flex">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              {/* <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select> */}

            </div>
            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Request an Appointment or Quote</button>
          </form>
          {message && <p className="response-message">{message}</p>}
        </div>
      </section>


      {/* <div className="logo-container">
        <img src={Frame} alt="Company Logo" className="logo home-logo" />
      </div> */}

    </>
  );
};

export default AutoMechanicForm;
