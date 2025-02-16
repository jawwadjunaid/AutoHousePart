import React from 'react'
import BeltContent from '../../ServicePagesComponent/BeltAndRollers/BeltContent'
import BeltHeader from '../../ServicePagesComponent/BeltAndRollers/BeltHeader'
import BeltHeroSection from '../../ServicePagesComponent/BeltAndRollers/BeltHeroSection'
import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'
import CarLogos from '../../Components/CarLogos/CarLogos';
import BeltWithBox from '../../ServicePagesComponent/BeltAndRollers/BeltWithBox.jsx'

const BeltAndRoller = () => {
  return (
   <>
   <BeltHeader/>
   <BeltHeroSection/>
   <BeltWithBox/>
   <BeltContent/>
   <Testimonials/>
    <AboutUsSubscriptionBox/>
    <CarLogos/>
   </>
  )
}

export default BeltAndRoller