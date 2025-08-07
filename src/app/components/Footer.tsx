"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import BackToTopButton from "./BackToTopButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e6f0ef] text-[#000000] text-md">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 ">
        {/* Logo and About */}
        <div>
          <div className="w-40 md:w-38 lg:w-36">
            <Image
              src="/logo.png"
              alt="Taskforce Logo"
              width={224}
              height={80}
              className="w-full h-auto object-contain"
            />
          </div>

          <p>
            Task Force Interior (P) Ltd. is an organization overseen by
            individuals with extensive experience in civil engineering, interior
            design, and the management of turnkey projects. We specialize in
            premium office interiors, hospital projects, and comprehensive
            architectural solutions.
          </p>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">
            Get In Touch
          </h4>
          <p className="mb-1">📍 #3-5-823, Ground Floor</p>
          <p className="mb-1">Hyderabad Business Center</p>
          <p className="mb-1">Hyderguda Hyderabad - 500029</p>
          <p className="mt-3">
            📞{" "}
            <a href="tel:04023240629" className="hover:underline">
              040-23240629
            </a>{" "}
            /{" "}
            <a href="tel:04066669067" className="hover:underline">
              040-66669067
            </a>
          </p>
          <p className="mt-1">
            ✉️{" "}
            <a
              href="mailto:info@taskforceinteriors.com"
              className="hover:underline"
            >
              info@taskforceinteriors.com
            </a>
          </p>

          <div className="flex gap-2 mt-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="border border-[#c9974b] text-[#c9974b] p-2 hover:bg-[#c9974b] hover:text-[#221001] transition"
                >
                  <Icon size={16} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Popular Link */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">
            Popular Links
          </h4>
          <ul className="space-y-2 text-black">
            <li>
              ❯ <Link href="/">Home</Link>
            </li>
            <li>
              ❯ <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              ❯ <Link href="/services">Services</Link>
            </li>
            <li>
              ❯ <Link href="/ComingSoon">Portfolio</Link>
            </li>
            <li>
              ❯ <Link href="/ComingSoon">Our Equipments</Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-black text-2xl font-semibold mb-4">More</h4>
          <ul className="space-y-2 text-gray-800">
            <li>
              ❯{" "}
              <Link href="/contact" className="hover:text-yellow-700">
                Contact
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/ComingSoon" className="hover:text-yellow-700">
                Our Clients
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/ComingSoon" className="hover:text-yellow-700">
                FAQ
              </Link>
            </li>
            <li>
              ❯{" "}
              <Link href="/ComingSoon" className="hover:text-yellow-700">
                CSR
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2d1b0a] py-4 px-6 text-center text-lx flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 max-w-7xl mx-auto">
        <p className="text-sm md:text-base">
          ©{" "}
          <a href="#" className="underline">
            Task Force Interiors
          </a>
          , All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm md:text-base">
          <a href="#">Home</a>
          <span className="hidden md:inline">|</span>
          <a href="#">Services</a>
          <span className="hidden md:inline">|</span>
          <a href="#">Portfolio</a>
          <span className="hidden md:inline">|</span>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Back to Top */}
      <BackToTopButton />
    </footer>
  );
}
