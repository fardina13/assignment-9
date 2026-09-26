"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const cars = [
  {
    image: "/assets/car5.jpg",
    name: "Toyota Camry",
    price: "$80",
  },
  {
    image: "/assets/car13.jpg",
    name: "BMW X5",
    price: "$120",
  },
  {
    image: "/assets/car15.jpg",
    name: "Midnight BMW M-Series",
    price: "$150",
  },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[700px] w-full overflow-hidden">

      {/* Background Images */}
      {cars.map((car, index) => (
        <div
          key={car.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={car.image}
            alt={car.name}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-2xl text-white">

          {/* Small title */}
          <p className="animate-slide-up delay-1 mb-4 text-sm font-semibold uppercase tracking-[6px] text-[#C41E3A]">
            * Premium
          </p>

          {/* Main heading */}
          <h1 className="animate-slide-up delay-2 text-6xl font-bold leading-none md:text-7xl lg:text-8xl">
            Drive Beyond Ordinary
          </h1>

          {/* Sub heading */}
          <p className="animate-slide-up delay-3 text-white text-lg mt-4">Premium cars, effortless booking, and a journey made just for you.</p>
           
          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button className="animate-slide-up delay-4 rounded-full bg-[#C41E3A] px-8 py-4 font-medium text-white transition hover:bg-[#a91932]">
              Explore Cars ↗
            </button>

            <button className="animate-slide-up delay-5 rounded-full border border-white/70 px-8 py-4 font-medium text-white transition hover:bg-white hover:text-black">
              Rent Now ↗
            </button>

          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">

        {cars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`rounded-full border transition-all duration-300 ${
              current === index
                ? "h-4 w-4 border-[#C41E3A] bg-[#C41E3A]"
                : "h-4 w-4 border-white bg-transparent"
            }`}
          />
        ))}

      </div>
    </section>
  );
};

export default HeroBanner;