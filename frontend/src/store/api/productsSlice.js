import { apiSlice } from "./api";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (categoryName) => {
        return {
          url: `api/categoryProducts?category=${categoryName}`,
        };
      },
    }),
    getTrendyProducts: builder.query({
      query: () => {
        return {
          url: `api/trendyProducts`,
        };
      },
    }),
  }),
});

export const { useGetProductsQuery , useGetTrendyProductsQuery} = productSlice;
