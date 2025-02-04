import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">KnowledgePrep</h1>

        {/* Mobile Hamburger Menu */}
        <button onClick={toggleMenu} className="block lg:hidden text-blue-600">
          <FaBars size={24} />
        </button>

        {/* Navigation Bar */}
        <nav className={`lg:flex ${isMenuOpen ? "block" : "hidden"} lg:block`}>
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Shop Worksheets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Custom Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition hidden lg:block">
          Get Started
        </button>
      </div>

      {/* Mobile CTA Button */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} px-6 py-4`}>
        <button className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      {/* Close Menu Button */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 right-0 m-4">
          <button onClick={toggleMenu} className="text-blue-600">
            <FaTimes size={24} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
