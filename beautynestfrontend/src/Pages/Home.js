import React, { useRef } from "react";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import bannerImage from "../utils/output.jpg"; // Assuming banner image for hero section
import HeroSection from "../component/HeroSection";
import ProductCategory from "../component/ProductCategory";
import ProductSlider from "../component/ProductSlider";

const Home = () => {
  const categories = [
    {
      name: "Skincare",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoGl_hL9INi7mwNbilPPaC2jyQcHySK3nkA&s",
      path: "/skincare",
    },
    {
      name: "Makeup",
      image:
        "https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg",
      path: "/makeup",
    },
    {
      name: "Haircare",
      image:
        "https://img.freepik.com/premium-photo/beautiful-young-woman-washes-hair-beauty-salon_1301-8130.jpg?semt=ais_hybrid",
      path: "/haircare",
    },
    {
      name: "Fragrances",
      image:
        "https://t3.ftcdn.net/jpg/03/05/97/58/360_F_305975810_xtdX41mS4KV7FAEUd1ep5Jnj2XsAloSY.jpg",
      path: "/fragrances",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$25",
      image: "https://img.lovepik.com/photo/48006/8834.jpg_wh860.jpg",
      description:
        "A versatile beauty product designed to enhance your natural glow.",
      rating: 4,
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFWV4rt7PD84ZqgV9Xt7t_qUvWNZoxa3Gig&s",
      description:
        "Premium skincare solution for all-day hydration and nourishment.",
      rating: 5,
    },
    {
      id: 3,
      name: "Product 3",
      price: "$45",
      image: "https://img.lovepik.com/element/45007/1920.png_860.png",
      description: "A compact yet powerful beauty essential for daily use.",
      rating: 4,
    },
    {
      id: 4,
      name: "Product 4",
      price: "$50",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLz_8vx76n7oj4038gITlUpRnIXvjSgzSEg&s",
      description:
        "An advanced formula to rejuvenate your skin and restore its vitality.",
      rating: 5,
    },
    {
      id: 5,
      name: "Product 5",
      price: "$35",
      image:
        "https://png.pngtree.com/png-vector/20241116/ourmid/pngtree-cosmetics-beauty-products-mockup-png-image_14412897.png",
      description:
        "A must-have for anyone seeking flawless, radiant skin effortlessly.",
      rating: 3,
    },
    {
      id: 6,
      name: "Product 6",
      price: "$40",
      image:
        "https://png.pngtree.com/png-vector/20230430/ourmid/pngtree-three-dimensional-cartoon-cosmetics-png-image_6744818.png",
      description:
        "All-in-one solution for long-lasting coverage and smooth finish.",
      rating: 4,
    },
  ];

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
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />

      <ProductCategory />
      <ProductSlider />
      
    </div>
  );
};

export default Home;
