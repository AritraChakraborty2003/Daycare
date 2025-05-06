import React from "react";
import NavSwitcher from "../Components/NavSwitcher";
import Header from "../Components/Navbar";

import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
        <NavSwitcher />

        <ContactForm mode="Add" />
      </main>
      <Footer />
    </div>
  );
};

export default page;
