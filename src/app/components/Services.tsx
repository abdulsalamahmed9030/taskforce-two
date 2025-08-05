"use client";

import { FaPhoneAlt } from "react-icons/fa";
import clsx from "clsx";

export default function Services() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl text-black mb-6">
          Our Creative{" "}
          <span className="px-2 py-1 bg-[#e6f0ef] text-[#be892c]">SERVICES</span>
        </h2>

        {/* Layout wrapper: Left Content + Right Cards */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our specialization encompasses a comprehensive array of services,
              spanning false ceiling installation, flooring solutions, cladding,
              furnishing, carpentry, electrical work, painting, polishing, and
              partitioning utilizing diverse materials.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We excel in manufacturing MS furniture, casting, railings, and bespoke
              designer items tailored to our clients&apos; specifications. Furthermore,
              our capabilities extend to the construction of skylight atriums for
              exterior spaces and domes to enhance building connectivity.
            </p>

            {/* Phone Box */}
            <div className="flex w-full max-w-md rounded overflow-hidden shadow-sm">
              <div className="bg-[#be892c] text-white p-6 flex items-center justify-center">
                <FaPhoneAlt className="text-2xl" />
              </div>
              <div className="bg-[#e6f0ef] p-4 flex flex-col justify-center w-full">
                <span className="text-xl font-semibold text-black">040-23240629</span>
                <span className="text-sm text-gray-700 mt-1">
                  Call us direct for turnkey interior solutions
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Services Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <ServiceCard
              title="False Ceiling"
              description="Modern false ceiling designs using quality materials for commercial spaces."
              color="yellow"
            />
            <ServiceCard
              title="Flooring Systems"
              description="Complete flooring installation and maintenance for all sectors."
              color="sky"
            />
            <ServiceCard
              title="ACP Cladding"
              description="Expert ACP and glass cladding services for high-rise buildings."
              color="sky"
            />
            <ServiceCard
              title="Modular Furniture"
              description="Custom modular and MS furniture tailored to client needs."
              color="yellow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
  color: "yellow" | "sky";
};

const ServiceCard = ({ title, description, color }: CardProps) => {
  const isYellow = color === "yellow";

  return (
    <div
      className={clsx(
        "p-6 min-h-[140px] transition-colors duration-300",
        {
          "bg-[#be892c] text-white hover:bg-[#e6f0ef] hover:text-black": isYellow,
          "bg-[#e6f0ef] text-black hover:bg-[#be892c] hover:text-white": !isYellow,
        }
      )}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
};
