import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/Slices/cartSlice";
import { toast } from "react-toastify";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const truncateText = (text, limit) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log(product)
    toast.success(`${product.name} is added in the cart`)
  };

  return (
    <div className="flex-none h-96 w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      <div className="p-4 flex flex-col justify-between h-48">
        <h3 className="text-xl font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
          {truncateText(product.description, 100)}
        </p>

        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < product.rating ? "text-yellow-400" : "text-gray-300"
              } text-lg`}
            >
              ★
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-900">$ {product.price}</p>

          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
