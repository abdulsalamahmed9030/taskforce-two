"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function LuxuryPreloader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  // Animation sequence for logo pop
  const animateLogoPop = (isEntering: boolean) => {
    if (!logoRef.current) return;
    
    if (isEntering) {
      // Entrance pop - more exaggerated with larger size
      logoRef.current.style.transform = 'scale(1.3)';
      logoRef.current.style.opacity = '0.7';
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.transform = 'scale(0.97)';
          setTimeout(() => {
            if (logoRef.current) {
              logoRef.current.style.transform = 'scale(1)';
              logoRef.current.style.opacity = '1';
            }
          }, 150);
        }
      }, 100);
    } else {
      // Exit pop - matching exaggerated scale
      logoRef.current.style.transform = 'scale(1.2)';
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.transform = 'scale(0.7)';
          logoRef.current.style.opacity = '0.5';
        }
      }, 100);
    }
  };

  useEffect(() => {
    const increment = Math.random() * 3 + 1.5;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          // Trigger exit animations
          animateLogoPop(false);
          if (containerRef.current) {
            containerRef.current.style.opacity = '0';
            containerRef.current.style.transform = 'translateY(10px)';
          }
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return next;
      });
    }, 60);

    // Entrance animations
    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '1';
        containerRef.current.style.transform = 'translateY(0)';
      }
      animateLogoPop(true);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#EDFAFD] flex flex-col items-center justify-center"
      style={{
        opacity: 0,
        transform: 'translateY(-10px)',
        transition: 'opacity 400ms ease-out, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
      }}
    >
      {/* Larger logo for more prominent effect */}
      <div 
        ref={logoRef}
        className="relative w-64 h-64 mb-10" // Increased from w-52 h-52
        style={{
          transition: 'transform 300ms cubic-bezier(0.68, -0.6, 0.32, 1.8), opacity 200ms ease-out',
          transform: 'scale(1)',
          opacity: 1
        }}
      >
        <Image
          src="/images/taskforce-preloader2.png" 
          alt=""
          fill
          className="object-contain"
          style={{ 
            filter: "sepia(16%) brightness(90%) contrast(120%)",
          }}
        />
      </div>

      {/* Percentage */}
      <p className="text-[#583A04] text-5xl font-medium tabular-nums mb-6">
        {Math.min(100, Math.floor(progress))}%
      </p>

      {/* Progress bar */}
      <div className="w-64 h-px bg-[#583A04]/20 mb-1 overflow-hidden">
        <div
          className="h-full bg-[#583A04] transition-all duration-150 ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Micro-label */}
      <p 
        className="text-[#583A04]/50 text-xs tracking-[0.2em] mt-4 transition-opacity duration-300"
        style={{ opacity: progress < 100 ? 1 : 0 }}
      >
        INITIALIZING
      </p>
    </div>
  );
}