"use client";

import { useEffect, useRef } from "react";
import Header from "./Header";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay helper (muted + playsInline already set)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => v.play().catch(() => {});
    tryPlay();

    const onVisible = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  const onVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    const err: MediaError | null = v.error;
    console.error("VIDEO ERROR", {
      networkState: v.networkState, // 3 => no source/path wrong
      readyState: v.readyState,     // 0..4
      currentSrc: v.currentSrc,
      errorCode: err?.code,         // 1..4
    });
    alert(
      `Video failed.\n` +
      `networkState=${v.networkState}\n` +
      `readyState=${v.readyState}\n` +
      `currentSrc=${v.currentSrc}\n` +
      `errorCode=${err?.code ?? "n/a"}`
    );
  };

  return (
    <div className="relative w-full font-sans">
      {/* Header */}
      <div className="relative z-20 bg-[#eef9f9]">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-4 md:px-14 py-10">
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="h-full w-full object-cover brightness-75"
            // IMPORTANT: use src on the <video> itself
            src="/videos/tfib.mp4"   // make sure this opens: http://localhost:3000/videos/tfib.mp4
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => videoRef.current?.play().catch(() => {})}
            onError={onVideoError}
          />
          {/* Readability gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </div>

        {/* Copy / CTA */}
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-light leading-tight drop-shadow font-grotesk">
            We Make Your <span className="text-yellow-500 block">Space</span>
            Better
          </h1>
          <Link href="/aboutus">
            <button className="mt-6 border-[3px] border-white text-white px-10 py-3 hover:bg-white hover:text-yellow-500 transition-all shadow-lg">
              Taskforce Interiors
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
