import React from "react";
import NavSwitcher from "../Components/NavSwitcher";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import GalleryForm from "../Components/GalleryForm";

const page = () => {
  return (
    <div>
      <Header />
      <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
        <NavSwitcher />

        <GalleryForm mode="Add" />
      </main>
      <Footer />
    </div>
  );
};

export default page;
