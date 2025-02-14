import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AutoMechanicForm from "./Components/AutoMechanicForm/AutoMechanicForm";
import CarLogos from "./Components/CarLogos/CarLogos";
import TipsCarousel from "./Components/CarouselSlider/TipsCarousel";
import Footer from "./Components/Footer/Footer";
import HeroComponent from "./Components/HeroComponent/HeroComponent";
import Navbar1 from "./Components/Navbar1/Navbar1";
import RedBanner from "./Components/RedBanner/RedBanner";
import SectionComponent from "./Components/SectionComponent/SectionComponent";
import ServicesSection from "./Components/ServiceSection/ServicesSection";
import Subscribe from "./Components/Subscribe/Subscribe";

import ThreeCardSection from "./Components/ThreeCardSection/ThreeCardSection";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Services from "./Pages/Services/Services";
import Contact from './Pages/ContactUs/ContactUs';

import CarOilChange from './ServicePages/CarOilChange/CarOilChange'
import Brakes from "./ServicePages/Brakes/Brakes";
import SteeringAndSuspension from "./ServicePages/SteeringAndSuspension/SteeringAndSuspension";
import CoolantSystem from "./ServicePages/CoolantSystem/CoolantSystem";
import EngineTransmission from "./ServicePages/EngineAndTransmission/EngineAndTransmission";
import ComputerDaignostic from "./ServicePages/ComputerDaignostic/ComputerDaignostic";
import AcAndHeater from "./ServicePages/AcAndHeater/AcAndheader";
import ElectricalProblems from "./ServicePages/ElectricalProblems/ElectricalProblems";
import BeltRollers from "./ServicePages/BeltAndRoller/BeltAndRoller";
import Testimonials from "./Components/Reviews/Testimonials ";


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
            <Testimonials/>
            <AutoMechanicForm />
            <CarLogos />
          </>
        } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/car-oil-change" element={<CarOilChange />} />
        <Route path="/brakes" element={<Brakes />} />
        <Route path="/steering-suspension" element={<SteeringAndSuspension />} />
        <Route path="/coolant-system" element={<CoolantSystem />} />
        <Route path="/engine-transmission" element={<EngineTransmission />} />
        <Route path="/computer-diagnostics" element={<ComputerDaignostic />} />
        <Route path="/ac-heater" element={<AcAndHeater />} />
        <Route path="/electrical-problems" element={<ElectricalProblems />} />
        <Route path="/belt-rollers" element={<BeltRollers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
