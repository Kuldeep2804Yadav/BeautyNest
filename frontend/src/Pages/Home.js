import React, { useRef } from "react";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import bannerImage from "../utils/output.jpg"; // Assuming banner image for hero section
import HeroSection from "../component/HeroSection";
import ProductCategory from "../component/ProductCategory";
import ProductSlider from "../component/ProductSlider";

const Home = () => {
 

  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 320;
    if (direction === "left") {
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fff] text-gray-900">
      <HeroSection />

      <ProductCategory />
      <ProductSlider />
      
    </div>
  );
};

export default Home;
