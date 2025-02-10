import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import authReducer from './Slices/authSlice'
import cartReducer from './Slices/cartSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    auth: authReducer, 
    cart : cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 

});

export default store;
