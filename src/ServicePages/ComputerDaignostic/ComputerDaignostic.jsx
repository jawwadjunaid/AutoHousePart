import React from 'react'
import ComputerContent from '../../ServicePagesComponent/ComputerDiagnostic/ComputerContent'
import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';
import ComputerHeader from '../../ServicePagesComponent/ComputerDiagnostic/ComputerHeader.jsx';
import ComputerHeroSection from '../../ServicePagesComponent/ComputerDiagnostic/ComputerHeroSection.jsx';
import ComputerBoxWithHeading from '../../ServicePagesComponent/ComputerDiagnostic/ComputerBoxWithHeading.jsx';
import ComputerAutoHouse from '../../ServicePagesComponent/ComputerDiagnostic/ComputerAutoHouse.jsx';

const ComputerDaignostic = () => {
  return (
    <>
    <ComputerHeader/>
    <ComputerHeroSection/>
    <ComputerBoxWithHeading/>
    <ComputerAutoHouse/>
    <ComputerContent/> 
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>

    </>
  )
}

export default ComputerDaignostic