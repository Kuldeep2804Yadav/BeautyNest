import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemCount = cartItems.length;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Get user first letter from local storage or Redux store
  const userDetails = localStorage.getItem("userDetails") || "Guest";

 const {name} = JSON.parse(userDetails)
  const userInitial = name.charAt(0).toUpperCase();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`);
    }
  };

  return (
    <header className="bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <NavLink to="/" className="hover:text-yellow-300 transition duration-200">
            Beauty Bliss
          </NavLink>
        </div>

        {/* Search Bar (Hidden on Mobile) */}
        {name  && <div className="hidden lg:flex flex-1 mx-6 relative">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full py-2 px-4 rounded-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
          />
          <button onClick={handleSearch}>
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
          </button>
        </div> }

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Badge */}
          <NavLink to="/cart" className="relative hover:text-yellow-300 transition duration-200">
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </NavLink>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-gray-900 font-bold"
            >
              {userInitial}
            </button>

            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-gray-700 shadow-lg rounded-lg py-2">
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100 transition rounded-t-lg"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  Account
                </NavLink>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition rounded-b-lg"
                  onClick={() => {
                    setProfileMenuOpen(false);
                    localStorage.removeItem("idToken");
                    navigate("/auth");
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden focus:outline-none">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar & Menu */}
      {(mobileMenuOpen && name
      ) && (
        <div className="lg:hidden bg-pink-500 text-white px-4 py-3 space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="w-full py-2 px-4 rounded-full text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
            />
            <button onClick={handleSearch}>
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
