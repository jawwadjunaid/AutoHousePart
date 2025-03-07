import React from 'react'
import AboutUsHeader from '../../PageComponents/AboutUs/AboutUsHeader';
import SectionComponent from '../../Components/SectionComponent/SectionComponent';
import AboutUsHeroSection from '../../PageComponents/AboutUs/AboutUsHeroSection';

import Testimonials from '../../Components/Reviews/Testimonials';

import CarLogos from '../../Components/CarLogos/CarLogos';
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox ';
import AboutusContent3 from '../../PageComponents/AboutUs/AboutusContent3 ';


const AboutUs = () => {
  return (
    <>
    <AboutUsHeader/>
    <SectionComponent hideReadMore={true} />
    <AboutUsHeroSection/>
    <AboutusContent3/>   
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
    </>
  )
}

export default AboutUs