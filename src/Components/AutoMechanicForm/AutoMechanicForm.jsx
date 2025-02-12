import React from "react";
import "./AutoMechanicForm.css"; // Import CSS for styling
import Frame from "../../assets/images/images/Frame.png"; // Replace with your actual logo path

const AutoMechanicForm = () => {
  return (
   
    <>
     <section className="container">
      <div className="left-content">
        <p className="help-text">NEED HELP</p>
        <h2>
          You need experienced <br /> <span>Auto mechanic.</span>
        </h2>
        <p className="description">
          We're available to assist you and respond to your inquiries. Please
          complete the form below, and we will reach out to you shortly.
        </p>
      </div>
      <div className="right-form">
        <h3>Make an Appointment</h3>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email Address" required />
          <div className="flex">
            <input type="tel" placeholder="Phone" required />
            <select>
              <option>Select</option>
              <option>Service 1</option>
              <option>Service 2</option>
            </select>
          </div>
          <textarea placeholder="Message" rows="3" required></textarea>
          <button type="submit">REQUEST A QUOTE</button>
        </form>
        
      </div>
      
    </section>
    
    <div className="logo-container">
          <img src={Frame} alt="Company Logo" className="logo" />
        </div>
    </>
  );
};

export default AutoMechanicForm;
