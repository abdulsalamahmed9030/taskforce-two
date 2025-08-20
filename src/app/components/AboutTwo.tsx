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
              <strong>Task Force Interior (P) Ltd.</strong> Task Force Interior
              (P) Ltd. is a trusted name in the field of civil engineering and
              interior design, managed by a team of highly experienced
              professionals. We specialize in handling turnkey projects with
              complete efficiency and dedication.
              <br />
              Over the years, we have successfully executed a wide range of
              prestigious projects including modern offices, showrooms, software
              development centers, BPOs, and data centers. Our expertise also
              extends to creating atriums, ACP and glass cladding for
              multi-storey buildings in Hyderabad as well as other major cities
              across the country. <br />
              With more than 38 hospital interiors completed across India, we
              have consistently delivered projects that reflect our versatility,
              commitment to quality, and focus on client satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed md:text-justify">
              Our vision is to be recognized as one of India’s most dependable
              and innovative interior solutions companies. We aim to design and
              deliver spaces that are not only functional and long-lasting but
              also inspiring and aesthetically pleasing. By maintaining the
              highest standards of quality, timely execution, and customer
              satisfaction, we strive to set benchmarks in the interior industry
              while expanding our presence across multiple sectors nationwide.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-[#c28b2c] text-center">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed md:text-justify">
              Our mission is to provide complete turnkey interior solutions
              under one roof, right from concept to final execution. With a
              strong focus on precision, quality workmanship, and client needs,
              we deliver services in false ceiling installation, flooring,
              cladding, furnishing, carpentry, electrical works, painting,
              polishing, and partitions. <br /> We also design and manufacture
              MS furniture, unique designer elements, and architectural
              highlights such as skylight atriums and domes. Every project we
              undertake is a reflection of our client’s vision, executed with
              our expertise, dedication, and commitment to excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
