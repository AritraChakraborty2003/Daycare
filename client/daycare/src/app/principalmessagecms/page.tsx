import React from "react";
import NavSwitcher from "../Components/NavSwitcher";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import PrincipalMessageForm from "../Components/PrincipalMessageForm";

const page = () => {
  return (
    <div>
      <Header />
      <main className="w-[100vw] h-[80vh] flex flex-col justify-center items-center">
        <NavSwitcher />

        <PrincipalMessageForm mode="Add" />
      </main>
      <Footer />
    </div>
  );
};

export default page;
