import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white backdrop-blur-md shadow-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-indigo-700 hover:scale-105 "><a href="#hero">Meda Suneel</a></h1>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-lg font-medium text-gray-700">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-indigo-600 transition hover:scale-110">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-indigo-700 text-xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;