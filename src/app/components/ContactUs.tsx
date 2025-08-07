"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import Map from "./Map";

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <Map />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8">
        {/* Left - Form */}
        <div>
          <h2 className="text-3xl md:text-5xl text-center text-[#bf852b] mb-2">
            Send Us A Message
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Have a project in mind? We&apos;d love to hear from you. Send us a
            message and we&apos;ll respond as soon as possible.
          </p>

          <form className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 px-4 py-3 rounded focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded resize-none focus:outline-none"
            />

            <button
              type="submit"
              className="bg-[#bf852b] text-white px-6 py-3 rounded hover:bg-[#a97322] transition inline-flex items-center gap-2"
            >
              <FaPaperPlane className="text-white" />
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-10">
          <h3 className="text-3xl md:text-4xl text-[#bf852b] mb-8 text-center">
            Contact US
          </h3>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#bf852b] mt-1" />
              <div>
                <p className="font-medium text-[#bf852b]">Our Location</p>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-[#bf852b] mt-1" />
              <div>
                <p className="font-medium text-[#bf852b]">Call Us</p>
                <p>
                  <a href="tel:04023240629" className="hover:underline">
                    040-23240629
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-[#bf852b] mt-1" />
              <div>
                <p className="font-medium text-[#bf852b]">Email Us</p>
                <p>
                  <a
                    href="mailto:info@taskforceinteriors.com"
                    className="hover:underline"
                  >
                    info@taskforceinteriors.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaClock className="text-[#bf852b] mt-1" />
              <div>
                <p className="font-medium text-[#bf852b]">Working Hours</p>
                <p>Mon - Sat: 9AM - 6PM</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-center text-gray-500 mt-10">
            Get in touch for turnkey interior solutions
          </p>
        </div>
      </div>
    </section>
  );
}
