import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1234567890,
    name: "Skincare",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoGl_hL9INi7mwNbilPPaC2jyQcHySK3nkA&s",
    path: "/skincare",
  },
  {
    id: 2345678901,
    name: "Makeup",
    image:
      "https://c4.wallpaperflare.com/wallpaper/414/818/456/mascara-shadows-cosmetics-blush-wallpaper-preview.jpg",
    path: "/makeup",
  },
  {
    id: 3456789012,
    name: "Haircare",
    image:
      "https://img.freepik.com/premium-photo/beautiful-young-woman-washes-hair-beauty-salon_1301-8130.jpg?semt=ais_hybrid",
    path: "/haircare",
  },
  {
    id: 4567890123,
    name: "Fragrances",
    image:
      "https://t3.ftcdn.net/jpg/03/05/97/58/360_F_305975810_xtdX41mS4KV7FAEUd1ep5Jnj2XsAloSY.jpg",
    path: "/fragrances",
  },
];

const ProductCategory = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              to={category.path}
              key={category.id}
              className="relative group overflow-hidden rounded-xl shadow-xl transform hover:scale-105 transition duration-500"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-60 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-2xl font-bold text-white group-hover:text-pink-400 transition-all duration-300">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
