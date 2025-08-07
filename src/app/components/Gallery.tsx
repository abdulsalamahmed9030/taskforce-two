"use client";

import Image from "next/image";

const projects = [
  {
    title: "Hospital Interior Design",
    category: "Healthcare",
    image: "/gallery/gallery1.png",
  },
  {
    title: "Premium Office Interiors",
    category: "Corporate",
    image: "/gallery/gallery2.png",
  },
  {
    title: "Data Center Solutions",
    category: "Technology",
    image: "/gallery/gallery3.png",
  },
  {
    title: "Atrium & Cladding Work",
    category: "Architecture",
    image: "/gallery/gallery4.png",
  },
  {
    title: "Showroom Design",
    category: "Retail",
    image: "/gallery/gallery5.png",
  },
  {
    title: "BPO & Software Centers",
    category: "Corporate",
    image: "/gallery/gallery6.png",
  },
  {
    title: "False Ceiling Works",
    category: "Specialization",
    image: "/gallery/gallery7.png",
  },
  {
    title: "Modular Furniture",
    category: "Furniture",
    image: "/gallery/gallery8.png",
  },
];

export default function Gallery() {
  return (
    <section className="bg-[#eef9f9] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl mb-10 text-center">
          Our Project <span className="text-yellow-600 ">GALLERY</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-md w-[270px] h-[400px]"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={270}
                height={320}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />

              {/* ✅ Gradient overlay same as other section */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  background:
                    "linear-gradient(rgba(255,255,255,0.1) 50%, #03201f)",
                }}
              />

              {/* ✅ Text content stays above the gradient */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                <span className="bg-yellow-600 text-base px-2 py-1 rounded-sm mb-2 inline-block font-medium ">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
