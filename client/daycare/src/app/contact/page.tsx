import React from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

import ContactUs from "../Components/ContactUs";

const page = () => {
  return (
    <div>
      <Header />

      <Hero
        title="Our Contact"
        slogan="Shaping Tomorrow’s Leaders, We are motivated to make the future of India bright"
        backgroundImageUrl="/images/contactimg.avif"
      ></Hero>

      <ContactUs />

      <Footer />
    </div>
  );
};

export default page;
