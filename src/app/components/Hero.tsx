"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import Header from "./Header";

const heroImages = ["/office1.jpg", "/office2.jpg", "/office3.jpg"];

const features = [
  {
    label: "Office Interiors",
    icon: "/icons/office.png",
  },
  {
    label: "Hospital Projects",
    icon: "/icons/office.png",
  },
  {
    label: "Turnkey Solutions",
    icon: "/icons/office.png",
  },
  {
    label: "Corporate Trust",
    icon: "/icons/office.png",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans relative">
      {/* Full Page Background Image */}
      <div className="absolute top-0 left-0 w-full h-[900px] lg:h-[800px] md:h-[900px]-z-10">
        <Image
          src="/hero-bg.png"
          alt="Background pattern"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 bg-transparent">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 pt-5 md:pt-31  gap-10">
          {/* Left Column */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl text-left lg:text-[80px] font-light leading-tight text-gray-900 drop-shadow font-grotesk">
              We Make Your{" "}
              <span className="text-yellow-600">
                <br />
                Space
              </span>
              Better
            </h1>

            <button className="mt-6 border-[3px] border-white text-black text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-16 py-2 sm:py-3 md:py-4 shadow hover:bg-white hover:text-yellow-600 transition-all">
              Taskforce Interior Solutions
            </button>
          </div>

          {/* Right Column */}
          <div className="flex-1 relative flex justify-center items-center px-4 sm:px-6 lg:px-8">
            {/* Beige background patch */}
            <div className="absolute top-[-20px] bottom-[-20px] left-[40%] sm:left-1/2 right-0 bg-[#d8d3c4] -z-10" />

            {/* Hero Image */}
            <div className="relative w-[240px] h-[180px] sm:w-[380px] sm:h-[340px] md:w-[450px] md:h-[380px] lg:w-[500px] lg:h-[400px] rounded overflow-hidden shadow-lg z-10">
              <Image
                src={heroImages[currentImage]}
                alt="Office interior"
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Image Switch Indicators */}
            <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-6 flex flex-col space-y-2 z-20">
              {heroImages.map((_, idx) => (
                <span
                  key={idx}
                  className={clsx(
                    "w-2 h-2 border border-white sm:w-2 sm:h-4 transition-all duration-300",
                    idx === currentImage && "bg-white h-6 sm:h-8 border-none"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
            {features.map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-3 p-3">
                <div className="w-10 h-10 min-w-[40px] border-white flex items-center justify-center border-3">
                  <Image
                    src={icon}
                    alt={label}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
