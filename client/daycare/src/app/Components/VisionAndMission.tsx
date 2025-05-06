"use client";

import React from "react";
import Image from "next/image";

const VisionAndMission = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/mission.jpeg"
              alt="Vision and Mission"
              fill
              className="rounded-xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Vision & Mission
          </h2>
          <h3 className="text-lg md:text-xl text-yellow-500 font-semibold mb-4">
            Guiding Every Child Toward a Brighter Tomorrow
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Daycare Schools, our vision is to empower every child with
            confidence, curiosity, and compassion. We strive to create an
            environment that nurtures growth and joy, where children learn
            through exploration and guided discovery.
            <br />
            <br />
            Our mission is to provide holistic early education that combines
            structured learning with creative freedom, ensuring each child
            develops a love for learning while building strong emotional and
            social foundations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
