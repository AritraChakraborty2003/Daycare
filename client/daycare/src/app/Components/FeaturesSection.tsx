"use client";

import React from "react";
import FeatureCard from "./FeatureCard";

// Import some react-icons
import {
  FaShieldAlt,
  FaSmileBeam,
  FaRocket,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const features = [
  {
    Icon: FaShieldAlt,
    title: "Top Standards",
    description:
      "We ensure best-in-class child safety protocols and secure environments.",
  },
  {
    Icon: FaSmileBeam,
    title: "Happy Environment",
    description:
      "We create an atmosphere of fun, learning, and happiness for kids.",
  },
  {
    Icon: FaRocket,
    title: "Innovative Learning",
    description:
      "Our programs foster creativity and critical thinking from an early age.",
  },
  {
    Icon: FaUsers,
    title: "Qualified Staff",
    description:
      "Certified and compassionate educators for holistic development.",
  },
  {
    Icon: FaStar,
    title: "Trusted by Parents",
    description:
      "Thousands of parents trust us to nurture and educate their children.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-white pb-10 pt-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-black text-center mb-12">
          Our <span className="text-yellow-500">Features</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-y-3 lg:gap-x-16 mt-[-6vmin] lg:mt-0">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
