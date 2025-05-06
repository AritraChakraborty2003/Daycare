"use client";

import React from "react";
import Image from "next/image";

const ChildSafety = () => {
  return (
    <section className="flex flex-wrap items-center justify-between px-6 md:px-20 lg:pt-20 lg:pb-10 pt-3 bg-white">
      {/* Visual Section */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        {/* Static Center Image */}
        <div className="absolute z-10 w-[230px] h-[210px] lg:h-[230px] rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
          <Image
            src="/images/childplaying.jpeg"
            alt="Child Safety"
            width={230}
            height={230}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Rotating Text Ring */}
        <div
          className="relative w-[400px] h-[400px] flex items-center justify-center"
          style={{ animation: "spin 12s linear infinite" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
              />
            </defs>
            <text fill="black" fontSize="5" fontWeight="bold">
              <textPath href="#circlePath" startOffset="0">
                CHILD SAFETY • DAYCARE SCHOOLS • BEST SCHOOL • GREAT
                INFRASTRUCTURE •
              </textPath>
            </text>
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full mt-[-8vmin] lg:mt-0 md:w-1/2 text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
          Our Commitment to Child Safety
        </h2>
        <h3 className="text-lg md:text-xl text-yellow-500 font-semibold mb-2">
          Safe. Caring. Nurturing.
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          We provide a secure, joyful, and enriching environment where children
          thrive through guided learning and purposeful play. At Daycare
          Schools, child safety isn’t just a policy — it’s our core commitment.
          Our trained educators are not only certified in early childhood care
          but also in emergency response and safety protocols. Each classroom is
          equipped with age-appropriate furniture, rounded edges, secure doors,
          and constant surveillance to ensure peace of mind for parents.
        </p>
      </div>
    </section>
  );
};

export default ChildSafety;
