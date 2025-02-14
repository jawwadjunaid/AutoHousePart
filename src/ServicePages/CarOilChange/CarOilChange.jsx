import React from 'react'
import CarOilChangeHeader from '../../ServicePagesComponent/CarOilChange/CarOilChangeHeader'
import CarOilHeroSection from '../../ServicePagesComponent/CarOilChange/CarOilHeroSection'
import CarOilImportant from '../../ServicePagesComponent/CarOilChange/CarOilImportant'
import CarOilSummary from '../../ServicePagesComponent/CarOilChange/CarOilSummary'

import Testimonials from '../../Components/Reviews/Testimonials '
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox '
import CarOilChangeComponent from '../../ServicePagesComponent/CarOilChange/CarOilChangeComponent'
import CarOilContent3 from '../../ServicePagesComponent/CarOilChange/CarOilContent3'

const CarOilChange = () => {
  return (
    <>
       <CarOilChangeHeader/>
       <CarOilHeroSection/>
       <CarOilImportant/>
       <CarOilSummary/>
       <CarOilChangeComponent/>
       <CarOilContent3/>
       <Testimonials/>
       <AboutUsSubscriptionBox/>
    </>
 
  )
}

export default CarOilChange