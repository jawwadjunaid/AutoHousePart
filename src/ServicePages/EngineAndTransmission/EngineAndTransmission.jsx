import React from 'react'
import EngineHeader from '../../ServicePagesComponent/EngineAndTransmission/EngineHeader'
import EngineHeroSection from '../../ServicePagesComponent/EngineAndTransmission/EngineHeroSection'
import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';
import EngineAutoHouseComponent from '../../ServicePagesComponent/EngineAndTransmission/EngineAutoHouseComponent.jsx'
import EngineServiceContent from '../../ServicePagesComponent/EngineAndTransmission/EngineServiceContent.jsx'

const EngineAndTransmission = () => {
  return (
    <>
    <EngineHeader/>
    <EngineHeroSection/>
    <EngineAutoHouseComponent/>
    <EngineServiceContent/>
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
    </>
  )
}

export default EngineAndTransmission