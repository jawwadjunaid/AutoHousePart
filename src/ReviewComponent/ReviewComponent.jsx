import React from 'react'
import './ReviewComponent.css';
import { Link } from "react-router-dom";
import ReviewComponentButton from './ReviewComponentButton';
const ReviewComponent = () => {
  return (
   <>
    <div className="ReviewComponent-section">
      <h1>Reviews</h1>
      <div className="breadcrumb">
        <Link to="/">Home</Link> &raquo; <Link to="/Reviews">Reviews</Link>
      </div>
    </div>
    <div>
    <ReviewComponentButton/>
    </div>
   
   </>
  )
}

export default ReviewComponent