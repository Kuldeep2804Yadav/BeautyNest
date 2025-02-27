import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/Slices/cartSlice";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;

  // Calculate total price
  const totalPrice = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mx-auto p-6 min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        🛒 Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg text-center mt-10">
          Your cart is empty. Start shopping now! 🛍️
        </p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-5 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg border"
              />

              {/* Product Details */}
              <div className="flex-1 ml-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Price: <span className="font-bold">${item.price}</span>
                </p>
              </div>

              {/* Quantity Control */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => dispatch(removeFromCart(item.id, false))} // Decrease quantity
                  className="p-3 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 transition"
                >
                  <FaMinus />
                </button>

                <span className="text-xl font-bold">{item.quantity}</span>

                <button
                  onClick={() => dispatch(addToCart(item))} // Increase quantity
                  className="p-3 rounded-full bg-gray-300 hover:bg-gray-400 text-gray-800 transition"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Item Total Price */}
              <p className="text-xl font-bold text-gray-900">
                ${item.price * item.quantity}
              </p>

              {/* Remove Item */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="p-3 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* PayPal Payment */}
          <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200 mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800">
              🛍️ Cart Summary
            </h3>
            <p className="text-lg text-gray-600 mt-2">
              Total Items: <span className="font-bold">{cartItems.length}</span>
            </p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              Total Price: $ {totalPrice}
            </p>

            <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
              <PayPalButtons
                style={{ layout: "vertical" }}
                createOrder={async () => {
                  const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/create-order`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ totalAmount: totalPrice }),
                    }
                  );
                  const data = await res.json();
                  return data.orderID;
                }}
                onApprove={async (data) => {
                  const res = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/capture-order`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ orderID: data.orderID }),
                    }
                  );
                  const captureData = await res.json();
                  toast.success(
                    `Payment successful! Transaction ID: ${captureData.capture.result.id}`
                  );
                  dispatch(addToCart([]));
                }}
              />
            </PayPalScriptProvider>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
