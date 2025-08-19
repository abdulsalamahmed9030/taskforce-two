"use client";

import { useEffect, useState, useRef } from "react";

export default function LuxuryPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Hide preloader after 8 seconds
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "0";
        containerRef.current.style.transform = "translateY(10px)";
      }
      setTimeout(() => setIsVisible(false), 500);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition:
          "opacity 500ms ease-out, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Video Preloader */}
      <video
        ref={videoRef}
        src="preloader.mp4" // put your video in /public/videos/
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}
