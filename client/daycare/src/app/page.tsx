import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import CookieConsent from "./Components/CookieConsent";
import Hero from "./Components/Hero";
import ChildSafety from "./Components/ChildSafety";
import TestimonialsSection from "./Components/Testimonials";
import GalleryComp from "./Components/GalleryComp";
import ContactUs from "./Components/ContactUs";
import FeaturesSection from "./Components/FeaturesSection";
import About from "./Components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="">
          <Hero
            title="Daycare Schools"
            slogan="Shaping Tomorrow’s Leaders, We are motivated to make the future of India bright"
            backgroundImageUrl="/images/bg-image-1.avif"
          />

          <About />

          <ChildSafety />

          <FeaturesSection />

          <GalleryComp />

          <TestimonialsSection />

          <ContactUs />
        </div>
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
