import AutoMechanicForm from "./Components/AutoMechanicForm/AutoMechanicForm";
import CarLogos from "./Components/CarLogos/CarLogos";
import TipsCarousel from "./Components/CarouselSlider/TipsCarousel";
import HeroComponent from "./Components/heroComponent/HeroComponent";
import Navbar from "./Components/navbar/Navbar";
import RedBanner from "./Components/RedBanner/RedBanner";
import SectionComponent from "./Components/SectionComponent/SectionComponent";
import ServicesSection from "./Components/ServiceSection/ServicesSection";
import Subscribe from "./Components/Subscribe/Subscribe";
import TestimonialSlider from "./Components/TestimonialSlider/TestimonialSlider";
import ThreeCardSection from "./Components/ThreeCardSection/ThreeCardSection";

function App() {
 

  return (
   <>
   <Navbar/>
   <HeroComponent/>
   <SectionComponent/>
   <RedBanner/>
   <ServicesSection/>
   <ThreeCardSection/>
   <TipsCarousel/>
   <Subscribe/>
   <TestimonialSlider/>
   <AutoMechanicForm/>
   <CarLogos/>
   </>
  )
}

export default App
