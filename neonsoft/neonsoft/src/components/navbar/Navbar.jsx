import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex justify-center bg-gray-800 px-8 py-3 text-lg font-medium text-white shadow-lg shadow-gray-800/5 ring-1 ring-gray-900/10 backdrop-blur-sm border border-gray-700">
        <li>
          <Link to="/" className="relative px-6 py-2 text-teal-400 hover:text-white transition">
            About
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="relative px-6 py-2 text-teal-400 hover:text-white transition">
            Home
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="relative px-6 py-2 text-teal-400 hover:text-white transition">
            Contact
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="relative px-6 py-2 text-teal-400 hover:text-white transition">
            Services
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="relative px-6 py-2 text-teal-400 hover:text-white transition">
            Pricing
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
