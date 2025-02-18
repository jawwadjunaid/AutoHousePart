import React from 'react'
import SteeringHeader from '../../ServicePagesComponent/SteeringAndSuspension/SteeringHeader';
import SteeringHeroSection from '../../ServicePagesComponent/SteeringAndSuspension/steeringHeroSection';
import CarLogos from '../../Components/CarLogos/CarLogos';
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox ';
import Testimonials from '../../Components/Reviews/Testimonials';
import SteeringBoxWithHeading from '../../ServicePagesComponent/SteeringAndSuspension/SteeringBoxWithHeading';
import SteeringHouse from '../../ServicePagesComponent/SteeringAndSuspension/SteeringHouse';
import SteeringContent from '../../ServicePagesComponent/SteeringAndSuspension/SteeringContent';

const SteeringAndSuspension = () => {
  return (
    <>
      <SteeringHeader/>
      <SteeringHeroSection/>
      <SteeringBoxWithHeading/>
      <SteeringHouse/>
      <SteeringContent/>
      <Testimonials/>
      <AboutUsSubscriptionBox/>
      <CarLogos/>
    </>
  
  )
}

export default SteeringAndSuspension