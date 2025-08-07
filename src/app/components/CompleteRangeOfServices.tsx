"use client";

import {
  FaBuilding,
  FaVideo,
  FaUtensils,
  FaTools,
  FaCouch,
  FaTint,
  FaFireExtinguisher,
  FaHammer,
  FaSnowflake,
  FaPaintRoller,
  FaChair,
  FaHardHat,
  FaFlask,
  FaKey,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    title: "Building MGMT Systems",
    icon: <FaBuilding />,
    desc: "Comprehensive building management and automation systems.",
  },
  {
    title: "CCTV Systems",
    icon: <FaVideo />,
    desc: "Advanced surveillance and security camera installations.",
  },
  {
    title: "Kitchen Works",
    icon: <FaUtensils />,
    desc: "Complete kitchen installations with modern equipment.",
  },
  {
    title: "Fabrication Works",
    icon: <FaTools />,
    desc: "Custom metal fabrication and structural steelwork.",
  },
  {
    title: "Soft Furniture",
    icon: <FaCouch />,
    desc: "Seating solutions, upholstery, and soft furnishing installs.",
  },
  {
    title: "Plumbing & Sanitary",
    icon: <FaTint />,
    desc: "Plumbing systems, sanitary installations, and water solutions.",
  },
  {
    title: "Fire Detection",
    icon: <FaFireExtinguisher />,
    desc: "Fire detection systems and emergency safety equipment.",
  },
  {
    title: "Joinery Works",
    icon: <FaHammer />,
    desc: "Custom woodwork, partitions, and joinery services.",
  },
  {
    title: "HVAC Systems",
    icon: <FaSnowflake />,
    desc: "Heating, ventilation, and air conditioning systems.",
  },
  {
    title: "Painting Works",
    icon: <FaPaintRoller />,
    desc: "Interior and exterior painting with premium finishes.",
  },
  {
    title: "Seating Systems",
    icon: <FaChair />,
    desc: "Ergonomic and auditorium seating solutions.",
  },
  {
    title: "Civil Works",
    icon: <FaHardHat />,
    desc: "Civil construction, modifications, and renovations.",
  },
  {
    title: "Laboratory Setup",
    icon: <FaFlask />,
    desc: "Laboratory installations and scientific workspace setup.",
  },
  {
    title: "Access Control",
    icon: <FaKey />,
    desc: "Access systems, biometric security, and management.",
  },
  {
    title: "Electrical Works",
    icon: <FaBolt />,
    desc: "Electrical wiring, lighting, and power distribution.",
  },
];

const lgYellowIndices = [1, 3, 4, 6, 9, 11, 12, 14]; // 0-based indices for yellow (sky) on large screens

export default function CompleteRangeOfServices() {
  return (
    <section className="px-4 md:px-16 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl mb-4">
          Complete Range of{" "}
          <span className="text-yellow-600">Professional Services</span>
        </h2>
        <p className="ext-grayt-600 text-lg">
          From concept to completion, we deliver excellence across all
          construction and interior domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const isLgYellow = lgYellowIndices.includes(index);
          const isSmallAlt = index % 2 === 0;

          const smallBg = isSmallAlt
            ? "bg-yellow-600 text-white"
            : "bg-slate-100 text-gray-900";
          const smallHover = isSmallAlt
            ? "hover:bg-slate-100 hover:text-black"
            : "hover:bg-yellow-600 hover:text-white";

          const lgBg = isLgYellow
            ? "lg:bg-yellow-600 lg:text-white"
            : "lg:bg-slate-100 lg:text-gray-900";
          const lgHover = isLgYellow
            ? "lg:hover:bg-slate-100 lg:hover:text-black"
            : "lg:hover:bg-yellow-600 lg:hover:text-white";

          return (
            <div
              key={index}
              className={`w-full max-w-[340px] aspect-[1/1] mx-auto px-4 py-6 text-center transition-all duration-300 cursor-pointer flex flex-col justify-center items-center 
              ${smallBg} ${smallHover} ${lgBg} ${lgHover}`}
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <h5 className="text-xl font-semibold mb-1">{service.title}</h5>
              <p className="text-base leading-relaxed">{service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
