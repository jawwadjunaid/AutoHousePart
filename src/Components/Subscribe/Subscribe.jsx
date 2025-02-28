import React, { useState } from "react";
import "./Subscribe.css";
import subscribe from "../../assets/images/images/subscribeImage.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const mailchimpUrl = "http://eepurl.com/i-GS4c"; 

    const formData = new FormData();
    formData.append("EMAIL", email);

    fetch(mailchimpUrl, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setMessage("Successfully subscribed! ✅ Check your email.");
        setEmail("");
      })
      .catch(() => {
        setMessage("Subscription failed. ❌ Try again later.");
      });
  };

  return (
    <div className="subscribe-container">
      <div className="subscribe-content">
        <h3>Subscribe To Stay Connected</h3>
        <p>
          A car repair is a service provided to fix any issues or damages with
          vehicles. It involves diagnosing the problem, repairing, or replacing
          necessary parts.
        </p>
        <form onSubmit={handleSubmit} className="subscribe-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">SUBSCRIBE</button>
        </form>
        {message && <p className="response-message">{message}</p>}
      </div>
      <div className="subscribe-image">
        <img src={subscribe} alt="Mechanic" className="mechanic-image" />
      </div>
    </div>
  );
};

export default Subscribe;
