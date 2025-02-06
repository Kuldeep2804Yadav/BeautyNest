import React, { useEffect, useState } from "react";
import Card from "../component/Card";
import { useParams } from "react-router";
import { useGetProductsQuery } from "../store/api/productsSlice";
import Shimmer from "../component/Shimmer";

const ProductPage = () => {
  const { categoryName } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(
    categoryName || "all"
  );

  const { data, isFetching, isLoading } = useGetProductsQuery(selectedCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="min-h-screen bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-wide">
          Explore Our <span className="capitalize">{selectedCategory}</span>{" "}
          Collection
        </h3>

        {selectedCategory === "all" && (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <label
                  htmlFor="category"
                  className="text-lg font-semibold text-gray-700"
                >
                  Filter by Category:
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">All</option>
                  <option value="haircare">HairCare</option>
                  <option value="skincare">Skincare</option>
                  <option value="fragrances">Fragrance</option>
                  <option value="makeup">Makeup</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {isFetching || isLoading ? (
          <Shimmer count={8} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {data?.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
