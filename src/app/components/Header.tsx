"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import MobileMenu from "./MobileMenu"; // adjust path if needed
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/" },
  { label: "Our Equipments", href: "/" },
  { label: "Contact", href: "/contact" },
];

const dropdownLinks = [
  { label: "Our Clients", href: "/" },
  { label: "FAQ", href: "/" },
  { label: "CSR", href: "/" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="bg-transparent border-b border-white font-open z-50 relative">
        <div className="container mx-auto flex items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link href="/">
        <Image
          src="/logo.png"
          alt="Taskforce Interiors Logo"
          width={150}
          height={80}
          className="object-contain cursor-pointer"
        />
      </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="ml-auto hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-lg font-medium ${
                  link.label === "Home"
                    ? "text-yellow-700 font-semibold"
                    : "text-gray-800 hover:text-yellow-700"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-lg text-gray-800 hover:text-yellow-700 font-medium">
                More <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0  w-48 bg-white shadow-md rounded-md hidden group-hover:block z-50">
                {dropdownLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-50 hover:text-yellow-700"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Render Mobile Menu */}
      {menuOpen && (
        <MobileMenu
          navLinks={navLinks}
          dropdownLinks={dropdownLinks}
          closeMenu={closeMenu}
        />
      )}
    </>
  );
}
