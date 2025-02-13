import React from 'react'
import AboutUsHeader from '../../PageComponents/AboutUs/AboutUsHeader';
import SectionComponent from '../../Components/SectionComponent/SectionComponent';
import AboutUsHeroSection from '../../PageComponents/AboutUs/AboutUsHeroSection';
import AboutusContent3 from '../../PageComponents/AboutUs/AboutusContent3 ';
import TestimonialSlider from '../../Components/TestimonialSlider/TestimonialSlider';
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox ';
import CarLogos from '../../Components/CarLogos/CarLogos';


const AboutUs = () => {
  return (
    <>
    <AboutUsHeader/>
    <SectionComponent/>
    <AboutUsHeroSection/>
    <AboutusContent3/>
    <TestimonialSlider />
    <AboutUsSubscriptionBox/>
    <CarLogos/>
    </>
  )
}

export default AboutUs