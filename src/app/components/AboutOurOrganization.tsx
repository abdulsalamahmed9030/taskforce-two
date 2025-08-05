"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiX } from "react-icons/si"; // ✅ X (Twitter) icon

export default function AboutOurOrganization() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-6 flex-1">
          {/* Image 1 */}
          <div className="w-full md:w-1/2 h-[400px]">
            <Image
              src="/bathroom.jpg"
              alt="Bathroom Interior"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Image 2 with overlay */}
          <div className="w-full md:w-1/2 h-[400px] relative">
            <Image
              src="/meeting-room.jpg"
              alt="Meeting Room Interior"
              width={600}
              height={400}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-[#c28b2c] text-white text-sm md:text-base font-medium px-4 py-2">
              Turnkey Interior
              <br />
              Solutions Since 1990
            </div>
          </div>
        </div>

        {/* Text */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl text-gray-800">
            <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">ABOUT</span>
            <span className="text-black">Our Organization</span>
          </h2>
 
          <p className="text-gray-700 leading-relaxed text-xl font-open-sans">
            TASK FORCE INTERIOR (P) LTD. is an organization overseen by
            individuals with extensive experience in civil engineering, interior
            design, and the management of turnkey projects. We analyze the
            available space and develop efficient floor plans that maximize
            functionality, flow, and utilization of the area.
          </p>
          <p className="text-gray-700 leading-relaxed text-xl font-open-sans">
            Our company boasts a strong history of delivering successful
            projects, spanning upscale office and showroom interior decoration,
            software centers, BPOs, and data centers. We excel in crafting
            atriums and providing ACP and glass cladding for multi-storey
            buildings in Hyderabad and other major cities.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800 font-open-sans">
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#c28b2c]" />
              35+ Hospital Projects
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#c28b2c]" />
              Multinational Clients
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#c28b2c]" />
              Expert Engineers
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-[#c28b2c]" />
              Complete Solutions
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            {/* Square Read More button */}
            <button className="w-30 h-10 flex items-center justify-center bg-[#c28b2c] text-white text-lg font-grotesk hover:bg-[#a97c20] transition">
              <span className="leading-none">Read More</span>
            </button>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, SiX, FaInstagram, FaLinkedinIn].map(
                (Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 border border-[#c28b2c] text-[#c28b2c] flex items-center justify-center text-base hover:bg-[#c28b2c] hover:text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
