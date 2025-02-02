import React from "react";

const Card = ({ product }) => {
  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  return (
    <div className="flex-none h-96 w-80 text-black rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Details */}
      <div className="p-4 ">
        <h3 className="text-lg font-bold">{product.name}</h3>

        {/* Product Description */}
        <p className="mt-2 text-sm opacity-80">
          {truncateText(product.description, 80)}
        </p>

        {/* Product Rating */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`text-yellow-400 ${
                index < product.rating ? "fill-current" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>

        {/* Product Price */}
        <div className="flex items-center justify-between">
        <p className="font-semibold mt-2">${product.price}</p>

        {/* Add to Cart Button */}
        <button className="mt-2 px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition duration-300">
          Add to Cart
        </button>

        </div>
        
      </div>
    </div>
  );
};

export default Card;
