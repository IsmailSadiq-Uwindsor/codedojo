import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data
            })
        }),
        getUserProfile: builder.query({
            query: () => ({
                url: `${USERS_URL}/profile`
            }),
            keepUnusedDataFor: 5
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
    })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useGetUserProfileQuery } = usersApiSlice;