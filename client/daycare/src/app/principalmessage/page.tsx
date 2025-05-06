import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import PrincipalMessage from "../Components/PrincipalMessage";
import FeaturesSection from "../Components/FeaturesSection";
import About from "../Components/About";
import GalleryComp from "../Components/GalleryComp";
import ContactUs from "../Components/ContactUs";

import Hero from "../Components/Hero";
const page = () => {
  return (
    <>
      <Header />
      <Hero
        title="Prinicipal's Message"
        slogan="Shaping Tomorrow’s Leaders, We are motivated to make the future of India bright"
        backgroundImageUrl="/images/principlemessage.jpg"
      />
      <PrincipalMessage />
      <FeaturesSection />
      <About />

      <GalleryComp />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
