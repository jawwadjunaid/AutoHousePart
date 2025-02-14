import React from 'react'
import ServicesHeader from '../../PageComponents/Services/ServicesHeader.jsx'
import ServicesHeroSection from '../../PageComponents/Services/ServicesHeroSection.jsx'
import ServicesBoxWithHeading from '../../PageComponents/Services/ServicesBoxWithHeading.jsx'
import AutoHouseComponent from '../../PageComponents/Services/AutoHouseComponent.jsx'
import ServiceContent3 from '../../PageComponents/Services/ServiceContent3.jsx'

import Testimonials from '../../Components/Reviews/Testimonials.jsx'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox .jsx'


const Services = () => {
  return (
    <>
    <ServicesHeader/>
    <ServicesHeroSection/>
    <ServicesBoxWithHeading/>
    <AutoHouseComponent/>
    <ServiceContent3/>
    <Testimonials/>
    <AboutUsSubscriptionBox/>
    </>
  )
}

export default Services