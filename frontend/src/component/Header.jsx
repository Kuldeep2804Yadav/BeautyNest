import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r bg-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-300 transition duration-200">
            Beauty Bliss
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 mx-6 relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full py-2 px-4 rounded-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <NavLink to="/cart" className="hover:text-yellow-300 transition duration-200">
            <ShoppingCart className="w-6 h-6" />
          </NavLink>
          <NavLink to="/profile" className="hover:text-yellow-300 transition duration-200">
            <User className="w-6 h-6" />
          </NavLink>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar & Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-4 py-3 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 rounded-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          {/* <NavLink
            to="/cart"
            className="block hover:text-yellow-300 transition duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cart
          </NavLink>
          <NavLink
            to="/profile"
            className="block hover:text-yellow-300 transition duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </NavLink> */}
        </div>
      )}
    </header>
  );
};

export default Header;
