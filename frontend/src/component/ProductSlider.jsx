import React, { useRef } from "react";
import Card from "./Card";
import { FaAngleLeft, FaChevronRight } from "react-icons/fa";
import { useGetTrendyProductsQuery } from "../store/api/productsSlice";
import Shimmer from "./Shimmer";

const ProductSlider = () => {
  const sliderRef = useRef(null);

  const { data, isFetching } = useGetTrendyProductsQuery();
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
    <section className="py-6 bg-white">
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
            {data?.map((product) => (
              <>
                {isFetching ? (
                  <Shimmer  key={product.id}/>
                ) : (
                  <Card
                    key={product.id}
                    product={product}
                    className="min-w-[320px] rounded-xl shadow-xl"
                  />
                )}
              </>
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
