import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  // Function to handle slider scroll
  const handleScroll = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = 320; // Adjusted width for better spacing
    if (direction === "left") {
      slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-12">
          Trendy Products
        </h2>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleScroll("left")}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            <FaAngleLeft />
          </button>
          <div
            ref={sliderRef}
            className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory scroll-smooth w-full"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                className="min-w-[320px] rounded-xl shadow-xl"
              />
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
