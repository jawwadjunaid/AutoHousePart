import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";

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
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Best auto air conditioning repair near me! My AC works perfectly now. Great service and honest pricing.",
    rating: 4,
  },
  {
    name: "Emily Scott ",
    role: "Tire Shop",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Found my go-to tire shop! Quick installation and great deals. Will definitely return for future services.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <p className="description" style={{ color: "#C00104" }}>
        ---- Testimonial ----
      </p>
      <h2>What Clients Say About Us</h2>
      <div className="testimonials-grid" style={{ color: "black" }}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <h3 style={{ color: "black" }}>{item.name}</h3>
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
