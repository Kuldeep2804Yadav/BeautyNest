import React from "react";
import bannerImage from "../utils/output.jpg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex justify-center items-center h-full text-center text-white px-6">
        <div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Discover Luxury, Unleash Beauty
          </h1>
          <p className="text-lg mb-8">
            Curated beauty products for a glowing and luxurious experience.
          </p>
          <Link to={'/allproducts'} className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full shadow-md hover:scale-105 transition-all duration-300">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
