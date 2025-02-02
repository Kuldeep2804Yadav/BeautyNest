import { apiSlice } from "./api";
export const FIREBASE_API_KEY = "AIzaSyDMJPS7DPQidNZTmq0jkelJIw43keAFUJ8";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, password }) => ({
        url: `/accounts:signUp?key=${FIREBASE_API_KEY}`,
        method: "POST",
        body: { email, password, returnSecureToken: true },
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
        method: "POST",
        body: { email, password, returnSecureToken: true },
      }),
    }),
  }),
});

export const { useLoginMutation , useSignUpMutation } = authApi;
