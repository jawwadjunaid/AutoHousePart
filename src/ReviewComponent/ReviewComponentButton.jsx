import React, { useState } from "react";
import "./ReviewComponentButton.css";

const GOOGLE_REVIEW_LINK = "https://g.page/r/YOUR-BUSINESS-ID/review"; // Replace with your actual Google review link

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
    <div className="ReviewComponent-section">
      <h1>Reviews</h1>
      <p>We value your feedback! Please leave a review on Google or here.</p>

      {/* Google Review Button */}
      <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
        <button className="google-review-button">Leave a Review on Google</button>
      </a>

      {/* Review Input Form */}
      <form onSubmit={handleReviewSubmit} className="review-form">
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Your Name"
          className="review-input"
          required
        />
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          className="review-input"
          required
        ></textarea>

        {/* Star Rating Selection */}
        <div className="star-rating">
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {`${star} Star${star > 1 ? "s" : ""}`}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-review-button">Submit Review</button>
      </form>

      {/* Display Submitted Reviews */}
      <div className="reviews-list">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <img src={review.image} alt={review.name} className="review-avatar" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="stars">
                  {"⭐".repeat(review.rating)}
                </div>
                <p>{review.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to write one!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewComponentButton;
