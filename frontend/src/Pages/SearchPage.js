import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/Card";
import { useFetchsearchProductQuery } from "../store/api/productsSlice";
import Shimmer from "../component/Shimmer";

const SearchPage = () => {
  const { productName } = useParams();
  const { data, isFetching, isLoading } = useFetchsearchProductQuery(productName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productName]);

  return (
    <div className="min-h-screen bg-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Search Results for "{productName}"
        </h2>

        {isFetching || isLoading ? (
          <Shimmer count={8} />
        ) : data?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {data.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-16">
            <p className="text-gray-600 text-lg font-medium">No products found.</p>
            <p className="text-gray-500 text-md mt-2">Try searching with a different keyword.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;