"use client";

import React from "react";

interface HeroProps {
  title: string;
  slogan: string;
  backgroundImageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, slogan, backgroundImageUrl }) => {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover bg-top flex items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Black Tint Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content aligned to left */}
      <div className="relative z-10 h-full flex flex-col justify-center pl-10 md:pl-20 text-white">
        <h1 className="text-7xl md:text-8xl font-bold mb-4  leading-[24vmin] lg:leading-[14vmin]">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8  w-[70%] lg:leading-[5.75vmin]">
          {slogan}
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition">
            Book a Tour
          </button>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition">
            View Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
