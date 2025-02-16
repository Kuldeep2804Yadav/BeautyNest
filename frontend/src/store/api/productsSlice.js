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
    fetchsearchProduct: builder.query({
      query : (search) => {
        return {
          url : `api/searchProducts?query=${search}`
        }
      }
    })
  }),
});

export const { useGetProductsQuery , useGetTrendyProductsQuery, useFetchsearchProductQuery} = productSlice;
