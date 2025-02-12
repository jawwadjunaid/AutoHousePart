import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AutoMechanicForm from "./Components/AutoMechanicForm/AutoMechanicForm";
import CarLogos from "./Components/CarLogos/CarLogos";
import TipsCarousel from "./Components/CarouselSlider/TipsCarousel";
import Footer from "./Components/Footer/Footer";
import HeroComponent from "./Components/heroComponent/HeroComponent";
import Navbar1 from "./Components/Navbar1/Navbar1";
import RedBanner from "./Components/RedBanner/RedBanner";
import SectionComponent from "./Components/SectionComponent/SectionComponent";
import ServicesSection from "./Components/ServiceSection/ServicesSection";
import Subscribe from "./Components/Subscribe/Subscribe";
import TestimonialSlider from "./Components/TestimonialSlider/TestimonialSlider";
import ThreeCardSection from "./Components/ThreeCardSection/ThreeCardSection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import Contact from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Navbar1 />
      <Routes>
        <Route path="/" element={
          <>
            <HeroComponent />
            <SectionComponent />
            <RedBanner />
            <ServicesSection />
            <ThreeCardSection />
            <TipsCarousel />
            <Subscribe />
            <TestimonialSlider />
            <AutoMechanicForm />
            <CarLogos />
          </>
        } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
