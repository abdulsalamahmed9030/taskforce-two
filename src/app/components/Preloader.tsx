"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PreloaderFlipPause() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = 500;

  useEffect(() => {
    const interval = 30;
    const increment = 100 / (loadingTime / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#bbdfdb] text-white z-50">
      {/* Flip Container */}
      <div className="w-[300px] h-[300px] relative animate-flip-pause">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <Image src="/logo.png" alt="Front" fill />
        </div>
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <Image src="/logo.png" alt="Back" fill />
        </div>
      </div>

      {/* Progress */}
      <p className="mt-4 text-lg font-semibold">{Math.round(progress)}%</p>
      <div className="w-80 h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
        <div
          className="h-full bg-yellow-500 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
