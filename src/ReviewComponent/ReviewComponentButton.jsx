import React, { useState } from "react";
import "./ReviewComponentButton.css";
import Testimonials from "../Components/Reviews/Testimonials";

const GOOGLE_REVIEW_LINK = "http://search.google.com/local/writereview?placeid=ChIJgxOLlW2_QIYROrf3YNiXzec"; // Replace with your actual Google review link

const ReviewComponentButton = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [clientName, setClientName] = useState("");
  const [rating, setRating] = useState(5); // Default 5-star rating

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== "" && clientName.trim() !== "") {
      const newClientReview = {
        id: Date.now(),
        name: clientName,
        image: `https://i.pravatar.cc/50?u=${Date.now()}`, // Random profile image
        rating,
        text: newReview,
      };
      setReviews([newClientReview, ...reviews]); // Add new review to state
      setNewReview("");
      setClientName("");
      setRating(5); // Reset rating to 5
    }
  };

  return (
    <>
    <div className="ReviewComponents-section">
      

      {/* Google Review Button */}
      <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
        <button className="google-review-button">Leave a Review on Google</button>
      </a>

      {/* Review Input Form */}
     
    </div>

    <Testimonials hideMoreReviews={true}/>
    </>
    
  );
};

export default ReviewComponentButton;
