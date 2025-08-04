"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = ["Home", "About", "Services", "Projects", "Pages", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="bg-transparent border-b border-white font-open
   "
      >
        <div className="container mx-auto flex items-center px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Taskforce Interiors Logo"
              width={150}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Spacer to push nav to right */}
          <div className="ml-auto hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className={`text-lg font-medium ${
                  link === "Home"
                    ? "text-yellow-700 font-semibold"
                    : "text-gray-800 hover:text-yellow-700"
                }`}
              >
                {link === "Pages" ? (
                  <span className="flex items-center space-x-1">
                    <span>{link}</span>
                    <ChevronDown size={16} />
                  </span>
                ) : (
                  link
                )}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-2 bg-white shadow">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="block py-2 text-gray-700 hover:text-yellow-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
