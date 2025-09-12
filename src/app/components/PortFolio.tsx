"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import Image from "next/image";
import projects, { Project } from "../data/projects";

/** ---------------------------------------
 *  Tiny pill that says "Swipe →" (mobile only)
 *  --------------------------------------- */
function SwipeHint({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <div
      aria-hidden="true"
      className="md:hidden absolute -top-2 right-4 z-10"
    >
      <span className="text-[11px] px-2 py-1 rounded-full bg-black/70 text-white select-none">
        Swipe →
      </span>
    </div>
  );
}

export default function PortFolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(true);

  const scrollRowRef = useRef<HTMLDivElement | null>(null);

  const currentImages = useMemo(() => {
    return projects.find((proj) => proj.name === selectedProject)?.images || [];
  }, [selectedProject]);

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + currentImages.length) % currentImages.length
    );
  }, [lightboxIndex, currentImages]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % currentImages.length);
  }, [lightboxIndex, currentImages]);

  // Keyboard controls for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "Escape") closeLightbox();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, prevImage, nextImage]);

  // Mobile gentle nudge: auto-scroll ~28px ONCE per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) {
      // Desktop: never show hint, never nudge
      setShowHint(false);
      return;
    }

    const nudged = sessionStorage.getItem("portfolio_row_nudged");
    const row = scrollRowRef.current;

    // Hide hint after ~2.5s regardless of scroll
    const timer = setTimeout(() => setShowHint(false), 2500);

    if (!nudged && row) {
      // Small nudge to indicate scrollability
      row.scrollBy({ left: 28, behavior: "smooth" });
      sessionStorage.setItem("portfolio_row_nudged", "1");
    }

    // Hide hint on first user scroll
    const onScroll = () => setShowHint(false);
    row?.addEventListener("scroll", onScroll, { once: true, passive: true });

    return () => {
      clearTimeout(timer);
      row?.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="w-full p-4">
      {/* Scrollable Projects Row */}
      <div className="relative">
        {/* Mobile-only 'Swipe →' hint */}
        <SwipeHint show={showHint} />

        <div
          ref={scrollRowRef}
          className="
            flex overflow-x-auto gap-4 pb-4
            /* keep desktop behavior exactly the same width */
            /* mobile: peeking helps but we keep 'as-is' feel by not changing desktop */
            [&>*]:w-[80vw] md:[&>*]:w-[300px]
            pl-4 pr-4
          "
          aria-label="Scrollable list of projects"
        >
          {projects.map((project: Project) => (
            <div
              key={project.name}
              className="relative cursor-pointer flex-shrink-0"
              onClick={() => {
                setSelectedProject(project.name);
                setLightboxIndex(null);
              }}
              role="button"
              aria-label={`Open ${project.name}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedProject(project.name);
                  setLightboxIndex(null);
                }
              }}
            >
              <div className="w-full h-[200px] md:w-[300px] md:h-[200px] relative rounded overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.name}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 80vw, 300px"
                  priority={false}
                />
                <div className="absolute bottom-0 w-full bg-yellow-600/80 text-white text-sm font-bold text-center py-1">
                  {project.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display Images of Selected Project */}
      {selectedProject && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {currentImages.map((img: string, idx: number) => (
            <div
              key={img}
              className="relative rounded overflow-hidden cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
              role="button"
              aria-label={`Open image ${idx + 1} of ${selectedProject}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setLightboxIndex(idx);
              }}
            >
              <div className="relative w-full h-[200px] rounded overflow-hidden">
                <Image
                  src={img}
                  alt={`${selectedProject} image ${idx + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 w-full bg-yellow-600/80 text-white text-xs text-center py-1">
                  {selectedProject}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close Button in Top-Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 text-white text-5xl font-bold hover:text-yellow-400 z-50"
            aria-label="Close"
          >
            ×
          </button>

          <div className="relative max-w-5xl w-full px-4 flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-4 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Main Image */}
            <Image
              src={currentImages[lightboxIndex]}
              alt="Expanded"
              width={1200}
              height={800}
              className="max-h-[80vh] object-contain rounded border-4 border-gray-200 shadow-lg"
              onClick={(e) => e.stopPropagation()}
              priority
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-4 text-white text-4xl p-2 bg-black/50 rounded-full hover:bg-black/80"
              aria-label="Next Image"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
