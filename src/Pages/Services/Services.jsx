import React from 'react'
import ServicesHeader from '../../PageComponents/Services/ServicesHeader'
import ServicesHeroSection from '../../PageComponents/Services/ServicesHeroSection'
import ServicesBoxWithHeading from '../../PageComponents/Services/ServicesBoxWithHeading'
import AutoHouseComponent from '../../PageComponents/Services/AutoHouseComponent'
import ServiceContent3 from '../../PageComponents/Services/ServiceContent3'
import AboutUsSubscriptionBox from '../../PageComponents/AboutUs/AboutUsSubscriptionBox '
import Testimonials from '../../Components/Reviews/Testimonials '


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