import { createSlice } from "@reduxjs/toolkit";

const idToken = localStorage.getItem('idToken');

const authSlice = createSlice({
  name: "auth",
  initialState: {
    idToken: idToken || "", 
    authData: {
      email: "",
      password: "",
      name : 'a'
    },
    userIsLogin: !!idToken, 
  },
  reducers: {
    setIdToken: (state, { payload }) => {
      state.idToken = payload;
      state.userIsLogin = !!payload; 
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
