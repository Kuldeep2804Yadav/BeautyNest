import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800 py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-pink-600">BeautyGlow</h2>
            <p className="mt-4 text-sm">
              Discover the best beauty products to enhance your natural glow. Skincare, makeup, fragrances & more!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-pink-600">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="hover:text-pink-500">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-500">About Us</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-pink-500">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-500">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-pink-600">Subscribe</h3>
            <p className="mt-4 text-sm">
              Get the latest updates on new arrivals, special discounts & beauty tips!
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-l-md focus:outline-none"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        {/* <div className="mt-10 flex justify-center space-x-6">
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-pink-500 text-2xl hover:text-pink-600">
            <FaYoutube />
          </a>
        </div> */}

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} BeautyGlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
