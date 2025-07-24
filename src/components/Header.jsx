// src/components/Header.jsx
import React, { useState } from "react";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Events", path: "#events" },
    { title: "Gallery", path: "#gallery" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-green-700 text-white text-sm py-1">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+917620086320"
              className="flex items-center space-x-1 hover:text-green-200"
            >
              <FaPhone size={12} />
              <span>+91 7620086320</span>
            </a>
            <a
              href="mailto:info@suvidhafoundationedutech.org"
              className="hidden md:flex items-center space-x-1 hover:text-green-200"
            >
              <FaEnvelope size={12} />
              <span>info@suvidhafoundationedutech.org</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Suvidha Foundation</h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.path}
              className="text-gray-600 hover:text-green-600 transition duration-300 font-medium"
            >
              {link.title}
            </a>
          ))}
        </nav>

        <a
          href="#involved"
          className="hidden md:block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Donate
        </a>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-gray-800" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.path}
                className="text-gray-600 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a
              href="#involved"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
