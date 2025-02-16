import React from "react";

const UserProfile = () => {
  const userDetails = localStorage.getItem("userDetails") || "Guest";

  const { name, email } = JSON.parse(userDetails);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 lg:px-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center bg-pink-500 text-white text-xl font-semibold rounded-full">
            {name.charAt(0)}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <h2 className="text-gray-500">{email}</h2>
          </div>
        </div>
       
      </div>

      <div className="w-full max-w-3xl mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Order History
        </h3>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-500">No orders found.</p>
        </div>
      </div>

      <div className="w-full max-w-3xl mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Wishlist</h3>
        <div className="bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-500">No items in wishlist.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
