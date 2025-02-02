import { apiSlice } from "./api";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, password ,name}) => ({
        url: `auth/signup`,
        method: "POST",
        body: { email, password, name },
      }),
    }),

    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `auth/login`,
        method: "POST",
        body: { email, password,},
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authApi;
