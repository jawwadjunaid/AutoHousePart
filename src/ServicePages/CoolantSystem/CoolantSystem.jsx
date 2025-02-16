import React from 'react'
import CoolantHeader from '../../ServicePagesComponent/CoolantSystem/CoolantHeader'
import CoolantHeroSection from '../../ServicePagesComponent/CoolantSystem/CoolantHeroSection'
import CoolantBoxWithHeading from '../../ServicePagesComponent/CoolantSystem/CoolantBoxWithHeading'
import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';
import CoolantContent from '../../ServicePagesComponent/CoolantSystem/CoolantContent.jsx'

const CoolantSystem = () => {
  return (
    <>
    <CoolantHeader/>
    <CoolantHeroSection/>
    <CoolantBoxWithHeading/>
    <CoolantContent/>
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
    </>
  )
}

export default CoolantSystem