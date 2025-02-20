import React from 'react'
import CarOilChangeHeader from '../../ServicePagesComponent/CarOilChange/CarOilChangeHeader.jsx'
import CarOilHeroSection from '../../ServicePagesComponent/CarOilChange/CarOilHeroSection.jsx'
import CarOilImportant from '../../ServicePagesComponent/CarOilChange/CarOilImportant.jsx'
import CarOilSummary from '../../ServicePagesComponent/CarOilChange/CarOilSummary.jsx'

import Testimonials from '../../Components/Reviews/Testimonials.jsx'

import CarOilChangeComponent from '../../ServicePagesComponent/CarOilChange/CarOilChangeComponent.jsx'
import CarOilContent3 from '../../ServicePagesComponent/CarOilChange/CarOilContent3.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox '
import CarLogos from '../../Components/CarLogos/CarLogos';
import AutoHouseComponent from '../../PageComponents/Services/AutoHouseComponent.jsx'

const CarOilChange = () => {
  return (
    <>
       <CarOilChangeHeader/>
       <CarOilHeroSection/>
       <CarOilImportant/>
       <CarOilSummary/>
       <AutoHouseComponent/>
       <CarOilChangeComponent/>
       <CarOilContent3/>
       <Testimonials/>
      <AboutUsSubscriptionBox/>
      <CarLogos/>
      </>
 
  )
}

export default CarOilChange