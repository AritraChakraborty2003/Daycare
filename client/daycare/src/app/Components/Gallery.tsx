"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryItem {
  imageUrl: string;
  title: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-black mb-10 text-center">
          Our Gallery
        </h2>

        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-4">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-[300px] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Black Tint with Text at Bottom */}
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
