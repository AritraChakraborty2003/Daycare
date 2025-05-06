import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import GalleryComp from "../Components/GalleryComp";
import ChildSafety from "../Components/ChildSafety";
import FeaturesSection from "../Components/FeaturesSection";
import ContactUs from "../Components/ContactUs";

const page = () => {
  return (
    <div>
      <Header />

      <Hero
        title="Our Gallery"
        slogan="Shaping Tomorrow’s Leaders, We are motivated to make the future of India bright"
        backgroundImageUrl="/images/galmain.webp"
      />

      <GalleryComp />

      <ChildSafety />

      <FeaturesSection />
      <ContactUs />

      <Footer />
    </div>
  );
};

export default page;
