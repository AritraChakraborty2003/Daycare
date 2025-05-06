"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/about.jpg"
              alt="About Daycare"
              fill
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Our Daycare
          </h2>
          <h3 className="text-lg md:text-xl text-yellow-500 font-semibold mb-4">
            Nurturing Minds. Building Futures.
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Daycare Schools, we create a loving, safe, and inspiring space
            for every child to thrive. Our educators combine experience and
            compassion to provide developmentally appropriate learning
            experiences. From play-based discovery to structured group
            activities, we focus on fostering creativity, independence, and
            social skills that last a lifetime.
            <br></br> Join our vibrant community where learning is joyful and
            every child is seen, heard, and celebrated.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
