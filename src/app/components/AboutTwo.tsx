"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award } from "lucide-react"; // 👈 Added Award icon for Certifications
import Image from "next/image";

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
              <strong>Task Force Interior (P) Ltd.</strong> is a leading name in
              the interior fit-out industry, delivering turnkey solutions with
              precision, speed, and reliability. With a strong foundation built
              on expertise and innovation, we specialize in executing
              large-scale Healthcare, corporate, retail and hospitality projects
              across India.
            </p>
          </div>

          {/* Strengths */}
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 text-center">
              Our Strengths at a Glance
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed md:text-justify space-y-2">
              <li>
                30+ years of industry experience in delivering end-to-end
                fit-out solutions
              </li>
              <li>
                500+ in-house skilled professionals across carpentry, MEP,
                civil, and finishing works
              </li>
              <li>
                Fully integrated factory with in-house manufacturing of modular
                furniture, plywood, and laminates
              </li>
              <li>
                Proven track record of on-time delivery with uncompromised
                quality and safety standards
              </li>
              <li>
                Long-standing partnerships with top architects, developers, and
                PMC
              </li>
            </ul>
          </div>

          {/* Values */}
          <div className="space-y-2">
            <p className="text-gray-700 leading-relaxed md:text-justify">
              With <strong> vertical integration </strong> at the core of our
              operations, we maintain complete control over quality, timelines,
              and costs. This unique model allows us to deliver projects
              efficiently, ensuring maximum value for our clients.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700 leading-relaxed md:text-justify">
              At <strong>Task Force Interiors</strong>, we stand for{" "}
              <strong>
                quality, transparency, and long-term relationships.
              </strong>{" "}
              Our focus remains on creating functional, sustainable, and
              aesthetically superior spaces that exceed expectations.
            </p>
            <h3 className="flex items-center justify-center gap-2 text-xl md:text-3xl font-semibold text-[#c28b2c]">
              &quot;Your Partner in End-to-End Interior Fit-Out.&quot;
            </h3>
          </div>

          {/* Vision */}
          <div className="space-y-2">
            <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-[#c28b2c]">
              <Eye className="w-6 h-6 text-[#c28b2c]" />
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
            <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-[#c28b2c]">
              <Target className="w-6 h-6 text-[#c28b2c]" />
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

          {/* Certifications */}
          <div className="space-y-4 pt-6">
            <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl font-semibold text-[#c28b2c]">
              <Award className="w-6 h-6 text-[#c28b2c]" />
              Our Certifications
            </h3>
            <div className="w-full h-[400px] relative">
              <Image
                src="/certificates.png" // 👈 Replace with your certificates image
                alt="Task Force Interiors Certifications"
                fill
                className="rounded-lg object-contain md:object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
