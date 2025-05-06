import React from "react";
import NavSwitcher from "../Components/NavSwitcher";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import TeamForm from "../Components/TeamForm";

const page = () => {
  return (
    <>
      <Header />
      <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
        <NavSwitcher />

        <TeamForm mode="Add" />
      </main>
      <Footer />
    </>
  );
};

export default page;
