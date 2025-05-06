"use client";

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Parent",
    testimonial:
      "The daycare center has been a blessing for our family. Safe environment and caring staff!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Mehra",
    role: "Guardian",
    testimonial:
      "I love how attentive and professional everyone is. Highly recommend to all parents!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Rohan Patel",
    role: "Parent",
    testimonial:
      "Excellent infrastructure and loving teachers. My child is always excited to go to daycare!",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
  },
];

interface Testimonial {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex justify-center items-center px-2">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-3xl transition-all duration-300 hover:scale-[1.02]">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-yellow-400"
        />
        <h3 className="text-2xl font-semibold mb-1">{testimonial.name}</h3>
        <p className="text-yellow-300 mb-3">{testimonial.role}</p>
        <div className="flex mb-4">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <FaStar key={idx} className="text-yellow-400 mx-0.5" />
          ))}
        </div>
        <p className="text-yellow-300 text-lg italic">
          “{testimonial.testimonial}”
        </p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">What Parents Say</h2>
        <p className="text-gray-600 text-lg">
          Hear from some of our wonderful parents and guardians.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} testimonial={item} />
        ))}
      </Slider>
    </section>
  );
}
