"use client";

import { useState } from "react";
import Image from "next/image";

const products = [
  { id: 1, name: "CNC Processing Center CENTATEQ P-100", src: "/gallery/1.jpg" },
  { id: 2, name: "SAWTEQ-B-500 Beam Saw", src: "/gallery/2.jpg" },
  { id: 3, name: "EDGETEQ S-300 Edge Banding3", src: "/gallery/3.jpg" },
  { id: 4, name: "DRILLTEQ Drilling", src: "/gallery/4.jpg" },
  { id: 5, name: "CNC Laser Cutting Machine", src: "/gallery/5.jpg" },
  { id: 6, name: "Felder K700S Sliding Table Panel Saw Machine", src: "/gallery/6.jpg" },
  { id: 7, name: "Manual Edge Banding Machine", src: "/gallery/7.jpg" },
  { id: 8, name: "OptiDrill Three Head Boring", src: "/gallery/8.jpg" },
  { id: 9, name: "Post Forming machine-j5100", src: "/gallery/9.jpg" },
  { id: 10, name: "Four Sided Moulder", src: "/gallery/10.png" },
];

export default function GalleryTwo() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + products.length) % products.length);
    }
  };
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % products.length);
    }
  };

  return (
    <div className="px-6 py-12 bg-white">
      {/* Content Section */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl md:text-5xl text-gray-800 mb-6">
          <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">ABOUT</span>
          <span className="text-black">Our Organization</span>
        </h2>

        <p className="text-gray-700 leading-relaxed text-lg font-open-sans text-justify mb-4">
        Taskforce Interiors is a renowned company led by a team of seasoned professionals specializing in civil works, interior decorating, and overseeing turnkey projects. With a proven track record in the industry, we take pride in our ability to deliver exceptional results with unmatched precision and creativity.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg font-open-sans text-justify">
          Throughout the years, we have achieved remarkable milestones that stand as a testament to our expertise. Our portfolio boasts an array of successful projects, ranging from opulent interior decoration of high-end offices and showrooms to the design and outfitting of cutting-edge software centers, BPO facilities, and data centers. Our proficiency extends to architectural feats such as the fabrication of atriums and the application of ACP cladding and glass cladding for multi-storey buildings across Hyderabad and other metropolitan areas. Our esteemed clientele includes multinational corporations and prominent corporate entities, attesting to the trust they place in us for translating their visions into reality.


        </p>
        <p className="text-gray-700 leading-relaxed text-lg font-open-sans text-justify">
          One of our standout achievements lies in the healthcare sector, where we have played a pivotal role in transforming over thirty-eight hospitals&apos; interiors throughout India. Our understanding of the unique demands of healthcare spaces, combined with our commitment to creating functional yet aesthetically pleasing environments, has resulted in spaces that foster healing and comfort. Our dedicated approach to each project, regardless of its scale, reflects our unwavering commitment to delivering excellence.


        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <div
            key={product.id}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md"
            onClick={() => openImage(i)}
          >
            <Image
              src={product.src}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold px-2 text-center">
                {product.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImage}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full px-4 flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-2 md:left-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition select-none"
              aria-label="Previous Image"
            >
              ‹
            </button>

            {/* Image */}
            <Image
              src={products[selectedIndex].src}
              alt={products[selectedIndex].name}
              width={1200}
              height={900}
              className="max-h-[80vh] object-contain rounded shadow-xl select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-2 md:right-4 text-white text-4xl p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition select-none"
              aria-label="Next Image"
            >
              ›
            </button>

            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-white text-5xl font-bold leading-none p-2 hover:text-yellow-400 transition select-none"
              aria-label="Close Image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
