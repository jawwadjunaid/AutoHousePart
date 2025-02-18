                                                               import React from 'react'
import AcHeader from '../../ServicePagesComponent/AcAndHeaters/AcHeader'
import AcHeroSection from '../../ServicePagesComponent/AcAndHeaters/AcHeroSection'
import AcBoxWithHeading from '../../ServicePagesComponent/AcAndHeaters/AcBoxWithHeading'
import AcAutoHouse from '../../ServicePagesComponent/AcAndHeaters/AcAutoHouse'
import AcContent from '../../ServicePagesComponent/AcAndHeaters/AcContent'
import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';

const AcAndheader = () => {
  return (
   <>
   <AcHeader/>
   <AcHeroSection/>
   <AcBoxWithHeading/>
   <AcAutoHouse/>
   <AcContent/>
   <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
   </>
  )
}

export default AcAndheader