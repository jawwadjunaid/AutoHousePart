import React from "react";
import "./Testimonials.css";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const testimonials = [
  {
    name: "John Reynolds ",
    role: "Auto repair",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Fantastic auto repair shop! Quick oil change near me, friendly staff, and fair prices. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Brake repair",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Needed brake repair near me, and they did a great job. Fast, reliable, and affordable service!",
    rating: 5,
  },
  {
    name: "David Carter ",
    role: "Air conditioning repair ",
    image: "data:image/jpeg;base64,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",
    text: "Best auto air conditioning repair near me! My AC works perfectly now. Great service and honest pricing.",
    rating: 5,
  },
  {
    name: "Emily Scott ",
    role: "Services And Maintenance",
    image: "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/ytvdytldd0bincqyy0rp",
    text: "These guys certainly know what they're doing when it comes to car maintenance. Would highly recommend them!",
    rating: 5,
  },
];

const Testimonials = () => {
  const location = useLocation(); // Get current page path
  const isHomePage = location.pathname === "/"; // Check if it's the home page

  return (
    <div className={`testimonials-container ${isHomePage ? "home-bg" : "default-bg"}`}>
      <p className="description" style={{fontWeight:"800", fontSize:"0.875"}}>─── &nbsp; Testimonials &nbsp; ───</p>
      <h2>What Clients Say About Us</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <h3 className="named" style={{color:"black"}}>{item.name}</h3>
            <p className="role">{item.role}</p>
            <p className="testimonial-text">{item.text}</p>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < item.rating ? "filled" : ""}`}>
                  &#9733;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Add More Reviews Button */}
      <div className="reviews-button-container">
        <Link to="/Reviews" className="reviews-button">
          More Reviews
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
