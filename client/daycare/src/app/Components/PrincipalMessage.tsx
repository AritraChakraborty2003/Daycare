"use client";

import React from "react";
import Image from "next/image";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Principal Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/images/principalmsg.jpeg"
              alt="Principal Message"
              fill
              className="rounded-xl object-cover shadow-md"
            />
            {/* Black Tint Overlay */}

            {/* Name Text */}
            <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded text-white text-sm md:text-base font-semibold">
              Mr. John Doe
            </div>
          </div>
        </div>

        {/* Right: Principal Message Text */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            A Message from Our Principal
          </h2>
          <h3 className="text-lg md:text-xl text-yellow-500 font-semibold mb-4">
            Inspiring Every Child’s Journey
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            Welcome to Daycare Schools — a place where children are cherished,
            encouraged, and guided to become the best versions of themselves. As
            the Principal, I am proud to lead a team of passionate educators
            dedicated to creating a nurturing, inclusive, and vibrant learning
            community.
            <br />
            <br />
            We believe that early education is the foundation of lifelong
            success. With our carefully designed curriculum, warm environment,
            and strong partnerships with families, we ensure that every child is
            empowered with the confidence and curiosity to explore the world
            around them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
