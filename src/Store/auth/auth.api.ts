import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { rtkApiQuery } from "../Rtkapi";
import { ISingInReq, ISingInRes, ISingUpRes, ISingUpReq, IConfirmReq, IResendConfirmRes, IResendConfirmReq, IPasswodForgotRes, IPasswodForgotReq, IPasswordResetRes, IPasswordResetReq, IGetUserDetailsRes, IGetUserDetailsReq, IputUserDetailsReq } from "./auth.dtos";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: rtkApiQuery,
  endpoints(build) {
    return {
      signIn: build.mutation<ISingInRes, ISingInReq>({
        query: (obj) => ({
          url: "/auth/sign-in",
          method: "POST",
          body: obj,
        }),
      }),
      refreshToken: build.mutation<ISingInRes, void>({
        query: () => ({
          url: `/auth/token-refresh?refreshToken=${localStorage.getItem("refresh_token")}`,
          method: "POST",
        }),
      }),
      signUp: build.mutation<ISingUpRes, ISingUpReq>({
        query: (obj) => ({
          url: "/auth/sign-up",
          method: "POST",
          body: obj,
        }),
      }),
      emailConfirm: build.mutation<void, IConfirmReq>({
        query: (obj) => ({
          url: "/auth/email-confirm",
          method: "POST",
          body: obj,
        }),
      }),
      emailResendConfirm: build.mutation<IResendConfirmRes, IResendConfirmReq>({
        query: (getCode) => ({
          url: "/auth/email-confirm-resend",
          method: "GET",
          params: {
            ...getCode
          },
        }),
      }),
      passwordForgot: build.mutation<IPasswodForgotRes, IPasswodForgotReq>({
        query: (forgotParams) => ({
          url: "auth/password-forgot",
          method: "GET",
          params: {
            ...forgotParams
          },
        }),
      }),
      passwordReset: build.mutation<IPasswordResetRes, IPasswordResetReq>({
        query: (obj) => ({
          url: "/auth/password-reset",
          method: "POST",
          body: obj,
        }),
      }),
      getUserDetails: build.mutation<IGetUserDetailsRes, IGetUserDetailsReq>({
        query: (UserDet) => ({
          url: `/user/details`,
          method: "GET",
          params: {
            ...UserDet
          },
        }),
      }),
      putUserDetails: build.mutation<void, IputUserDetailsReq>({
        query: (obj) => ({
          url: `/user/details`,
          method: "PUT",
          body: obj,
        }),
      }),
    };
  },
});

export const { useSignInMutation, useRefreshTokenMutation, useSignUpMutation, useEmailConfirmMutation, useEmailResendConfirmMutation, usePasswordForgotMutation, usePasswordResetMutation, useGetUserDetailsMutation, usePutUserDetailsMutation } = authApi;