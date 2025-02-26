import { createSlice } from "@reduxjs/toolkit";

const initialIdToken = localStorage.getItem("idToken") || "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: initialIdToken, 
    authData: {
      email: "",
      password: "",
      name: ""
    },
    userIsLogin: !!initialIdToken, 
  },
  reducers: {
    setIdToken: (state, { payload }) => {
      state.idToken = payload;
      state.userIsLogin = !!payload; 

      if (payload) {
        localStorage.setItem("idToken", payload);
      } else {
        localStorage.removeItem("idToken"); // Clear on logout
      }
    },
    setAuthData: (state, { payload }) => {
      state.authData = payload;
    },
  },
});

export const { setIdToken, setAuthData } = authSlice.actions;

export const selectIdToken = (state) => state.auth.idToken;
export const selectAuthData = (state) => state.auth.authData;
export const userIsLogin = (state) => state.auth.userIsLogin;

export default authSlice.reducer;
