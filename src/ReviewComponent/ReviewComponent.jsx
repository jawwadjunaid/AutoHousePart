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
       
      </div>
    </div>
    <div>
    <ReviewComponentButton/>
    </div>
   
   </>
  )
}

export default ReviewComponent