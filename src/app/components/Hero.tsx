"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import Header from "./Header";

// Import Font Awesome icons
import { FaBuilding, FaHospital, FaToolbox, FaHandshake } from "react-icons/fa";

const heroImages = ["/office1.jpg", "/office2.jpg", "/office3.jpg"];

// Use Font Awesome icons here
const features = [
  {
    label: "Office Interiors",
    icon: FaBuilding,
  },
  {
    label: "Hospital Projects",
    icon: FaHospital,
  },
  {
    label: "Turnkey Solutions",
    icon: FaToolbox,
  },
  {
    label: "Corporate Trust",
    icon: FaHandshake,
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
  <div className="absolute top-0 left-0 w-full h-[1200px] sm:h-[1100px] md:h-[1000px] lg:h-[950px] -z-10">
    <Image
      src="/12.jpg"
      alt="Background pattern"
      fill
      sizes="100vw"
      className="object-cover object-center"
      priority
    />
  </div>
  {/* Header */}
  <div className="relative z-20">
    <Header />
  </div>
  {/* Hero Section */}
  <section className="relative z-10 bg-transparent">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-1 xs:px-2 sm:px-6 md:px-8 lg:px-14 pt-5 md:pt-10 gap-4 xs:gap-6 sm:gap-8 md:gap-10">
      {/* Left Column */}
      <div className="flex-[1] text-left">
        <h1 className="text-[30px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-[60px] font-light leading-tight text-gray-900 drop-shadow font-grotesk">
          We Make Your{" "}
          <span className="text-yellow-600">
            <br />
            Space
          </span>
          Better
        </h1>
        <button className="mt-4 xs:mt-6 border-[3px] border-white text-[16px] xs:text-[16px] sm:text-base md:text-lg lg:text-xl px-8 xs:px-10 sm:px-10 md:px-14 lg:px-16 py-3 xs:py-3 sm:py-3 md:py-4 shadow hover:bg-white hover:text-yellow-600 transition-all">
          Taskforce Interiors
        </button>
      </div>
      {/* Right Column */}
      <div className="flex-[2] relative flex justify-center items-center px-1 xs:px-2 sm:px-6 lg:px-14 min-h-[320px] xs:min-h-[420px] sm:min-h-[480px] md:min-h-[500px] overflow-hidden">
        {/* Beige background patch */}
        <div className="absolute top-[15%] bottom-[15%] xs:top-[12%] xs:bottom-[12%] sm:top-[-20px] sm:bottom-[-20px] left-[30%] xs:left-[35%] sm:left-1/2 right-0 bg-[#d8d3c4] z-0"></div>
        {/* Hero Image */}
        <div
          className="
            relative 
            w-[240px] h-[180px] 
            xs:w-[280px] xs:h-[220px] 
            sm:w-[500px] sm:h-[390px] 
            md:w-[520px] md:h-[420px] 
            lg:w-[600px] lg:h-[460px] 
            xl:w-[650px] xl:h-[500px] 
            2xl:w-[850px] 2xl:h-[550px] 
            rounded overflow-hidden shadow-lg z-10
          "
        >
          <Image
            src={heroImages[currentImage]}
            alt="Office interior"
            fill
            className="object-cover rounded-md"
          />
        </div>
        {/* Image Switch Indicators */}
        <div className="absolute top-1/2 -translate-y-1/2 right-2 xs:right-4 sm:right-8 md:right-12 lg:right-16 flex flex-col space-y-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={clsx(
                "w-2 h-2 border border-white transition-all duration-300 cursor-pointer hover:bg-white/70",
                "sm:w-2 sm:h-4",
                idx === currentImage
                  ? "bg-white h-6 sm:h-8 border-none"
                  : "hover:h-4 sm:hover:h-6"
              )}
            />
          ))}
        </div>
      </div>
    </div>
    {/* Features Section */}
    <div className="px-2 xs:px-4 sm:px-6 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 py-10 place-items-center sm:place-items-start">
        {features.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 xs:gap-4 sm:gap-3 p-3 xs:p-4 sm:p-3 hover:bg-white/60 rounded-md transition"
          >
            <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 min-w-[32px] xs:min-w-[40px] sm:min-w-[40px] border-white border-2 flex items-center justify-center rounded flex-shrink-0">
              <Icon className="text-yellow-700 w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5" />
            </div>
            <span className="text-[20px] xs:text-[20px] sm:text-xl text-gray-800 leading-tight">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
  );
}