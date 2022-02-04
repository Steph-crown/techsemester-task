import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ILoginData } from "../pages/login/login.interface";
import { ISignUpData } from "../pages/signup/signup.interface";
import { API_ROUTE } from "../utils/api-domain";

export const solaceRadApi = createApi({
    // slice name we'll use to identify the reducer
    reducerPath: "solaceRadApi",

    //base url
    baseQuery: fetchBaseQuery({
        baseUrl: API_ROUTE,
    }),

    // list of endpoints
    endpoints: (builder) => ({
        signup: builder.mutation<any, ISignUpData>({
            query: (data) => ({
                url: "user/register",
                method: "POST",
                body: data,
            }),
        }),
        // login: builder.mutation<any, ILoginData>({
        //     // query: (data) => ({
        //     //     url: `user/${data.userId}`,
        //     //     method: "PUT",
        //     //     body: data.formData,
        //     // }),
        // }),
    }),
});

// Exporting the endpoints
export const { useSignupMutation } = solaceRadApi;
