import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import ChildSafety from "../Components/ChildSafety";
import FeaturesSection from "../Components/FeaturesSection";
import ContactUs from "../Components/ContactUs";
import VisionAndMission from "../Components/VisionAndMission";

const page = () => {
  return (
    <div>
      <Header />

      <Hero
        title="Our Vision & Mission"
        slogan="Shaping Tomorrow’s Leaders, We are motivated to make the future of India bright"
        backgroundImageUrl="/images/vision.avif"
      />

      <VisionAndMission />

      <ChildSafety />

      <FeaturesSection />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default page;
