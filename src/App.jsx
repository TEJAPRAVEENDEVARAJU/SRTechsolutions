
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import PaymentWarningMarquee from "./components/PaymentWarningMarquee";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
//import EnquiryPage from "./pages/EnquiryPage";
///import EnquiryPage from "./Pages/EnquiryPage";
import Expertise from "./components/Expertise";
import CollegePartnerships from "./components/CollegePartnerships";
import ProgramsPage from "./components/ProgramsPage";
import PlacementNetwork from "./components/PlacementNetwork";
import PartnershipsPage from "./components/PartnershipsPage";
import Gallery from "./components/Gallery";
import Welcome from "./components/Welcome";
import WhatWeOffer from "./components/WhatWeOffer";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import PlacementNetworkPreview from "./components/PlacementNetworkPreview";
import PaymentNotice from "./components/PaymentNotice";
function HomePage() {
  return (
    <main>
         
      <Hero />
   
      <Welcome />
      <WhatWeOffer />
      <WhyChooseUs />
      <PlacementNetworkPreview />
      <FAQ />
      <CollegePartnerships />
      <PaymentNotice />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
     


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Expertise" element={<Expertise />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/placement" element={<PlacementNetwork />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>

      <Footer />
       
    </BrowserRouter>
  );
}

export default App;
