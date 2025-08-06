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
    description:
      "Comprehensive building management and automation systems for efficient facility operations.",
    icon: <FaBuilding />,
    color: "light",
  },
  {
    title: "CCTV Systems",
    description:
      "Advanced surveillance and security camera installations for complete monitoring coverage.",
    icon: <FaVideo />,
    color: "sky",
  },
  {
    title: "Kitchen Works",
    description:
      "Complete commercial and residential kitchen installations with modern equipment and designs.",
    icon: <FaUtensils />,
    color: "light",
  },
  {
    title: "Fabrication Works",
    description:
      "Custom metal fabrication, structural steelwork, and precision manufacturing services.",
    icon: <FaTools />,
    color: "sky",
  },
  {
    title: "Soft Furniture",
    description:
      "Comfortable seating solutions, upholstery, and custom soft furnishing installations.",
    icon: <FaCouch />,
    color: "sky",
  },
  {
    title: "Plumbing & Sanitary",
    description:
      "Complete plumbing systems, sanitary installations, and water management solutions.",
    icon: <FaTint />,
    color: "light",
  },
  {
    title: "Fire Detection",
    description:
      "Advanced fire detection systems, safety equipment, and emergency response installations.",
    icon: <FaFireExtinguisher />,
    color: "sky",
  },
  {
    title: "Joinery Works",
    description:
      "Custom partitions, woodwork, and precision joinery for commercial and residential spaces.",
    icon: <FaHammer />,
    color: "light",
  },
  {
    title: "HVAC Systems",
    description:
      "Heating, ventilation, and air conditioning systems for optimal climate control solutions.",
    icon: <FaSnowflake />,
    color: "light",
  },
  {
    title: "Painting Works",
    description:
      "Professional interior and exterior painting services with premium quality finishes.",
    icon: <FaPaintRoller />,
    color: "sky",
  },
  {
    title: "Seating Systems",
    description:
      "Ergonomic seating solutions, auditorium seating, and commercial furniture installations.",
    icon: <FaChair />,
    color: "light",
  },
  {
    title: "Civil Works",
    description:
      "Comprehensive civil construction, structural modifications, and building renovation services.",
    icon: <FaHardHat />,
    color: "sky",
  },
  {
    title: "Laboratory Setup",
    description:
      "Specialized laboratory installations, equipment setup, and scientific workspace design.",
    icon: <FaFlask />,
    color: "sky",
  },
  {
    title: "Access Control",
    description:
      "Electronic access control systems, biometric solutions, and security management.",
    icon: <FaKey />,
    color: "light",
  },
  {
    title: "Electrical Works",
    description:
      "Complete electrical installations, wiring, lighting systems, and power distribution solutions.",
    icon: <FaBolt />,
    color: "sky",
  },
];

const bgMap = {
  light: "bg-slate-100 text-primary",
  sky: "bg-yellow-600 text-white",
};

const hoverMap = {
  light: "hover:bg-yellow-600 hover:text-white",
  sky: "hover:bg-slate-100 hover:text-black",
};

export default function CompleteRangeOfServices() {
  return (
    <section className="px-4 md:px-16 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl mb-4">
          Complete Range of{" "}
          <span className="text-yellow-600">Professional Services</span>
        </h2>
        <p className="text-gray-600 text-lg">
          From concept to completion, we deliver excellence across all
          construction and interior domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full max-w-[340px] aspect-[1/1] mx-auto  px-4 py-6 text-center transition-all duration-300 cursor-pointer flex flex-col justify-center items-center ${
              bgMap[service.color as "light" | "sky"]
            } ${hoverMap[service.color as "light" | "sky"]}`}
          >
            <div className="text-3xl mb-2">{service.icon}</div>
            <h5 className="text-xl font-semibold mb-1">{service.title}</h5>
            <p className="text-base leading-relaxed ">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
