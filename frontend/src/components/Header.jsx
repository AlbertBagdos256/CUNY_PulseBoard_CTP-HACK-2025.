import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 shadow-sm border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="CUNY PulseBoard Logo"
              className="h-10 w-auto border-2 border-white rounded-lg p-1"
            />
            <span className="text-xl font-semibold text-white">
              CUNY PulseBoard
            </span>
          </div>

          <div className="hidden sm:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-300 font-medium">
              Home
            </Link>
            <Link to="/survey" className="text-white hover:text-gray-300 font-medium">
              Surveys
            </Link>
            <Link to="/dashboard" className="text-white hover:text-gray-300 font-medium">
              Dashboard
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300 font-medium">
              About
            </Link>
          </div>

          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden flex flex-col space-y-4 px-6 pb-4 bg-blue-900 transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 max-h-60"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          className="text-white hover:text-gray-300 font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/surveys"
          className="text-white hover:text-gray-300 font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Surveys
        </Link>
        <Link
          to="/dashboard"
          className="text-white hover:text-gray-300 font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          Dashboard
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-gray-300 font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Header;