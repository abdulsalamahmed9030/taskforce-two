"use client";

import { motion } from "framer-motion";

export default function AboutTwo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
         <h2 className="text-3xl md:text-5xl text-gray-800 text-center">
  <span className="bg-[#e6f0ef] text-[#c28b2c] px-2 mr-2">ABOUT</span>
  <span className="text-black">Task Force Interiors</span>
</h2>

          {/* Introduction */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
  Introduction
</h3>

            <p className="text-gray-700 leading-relaxed md:text-justify">
              <strong>Task Force Interior (P) Ltd.</strong> is led by seasoned
              professionals with extensive expertise in civil engineering and
              interior design, prioritizing the efficient management of turnkey
              projects. Our company boasts a strong history of delivering
              successful projects, including upscale offices, showrooms,
              software centers, BPOs, and data centers. We have crafted atriums,
              provided ACP and glass cladding for multi-storey buildings in
              Hyderabad and other major cities, and completed interiors for over{" "}
              <strong>38 hospitals across India</strong>, showcasing our
              versatility and commitment to excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed md:text-justify">
              To be the most trusted and innovative interior solutions provider
              in India, delivering spaces that inspire, function seamlessly, and
              stand the test of time. We aim to set benchmarks in design
              quality, project execution, and client satisfaction while
              expanding our footprint across diverse sectors nationwide.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed md:text-justify">
              Our mission is to provide complete turnkey interior solutions —
              from concept to execution — with an unwavering focus on quality,
              precision, and customer satisfaction. We specialize in false
              ceiling installation, flooring, cladding, furnishing, carpentry,
              electrical work, painting, polishing, and partitions. In addition,
              we manufacture MS furniture, designer elements, and architectural
              features like skylight atriums and domes, ensuring every project
              reflects our client’s vision and our dedication to craftsmanship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
