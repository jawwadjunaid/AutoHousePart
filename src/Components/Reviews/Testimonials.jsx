import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Maria Smantha",
    role: "Web Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
    rating: 5,
  },
  {
    name: "Lisa Cudrow",
    role: "Graphic Designer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    rating: 4,
  },
  {
    name: "John Smith",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
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
