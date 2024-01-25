import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { rtkApiQuery } from "../Rtkapi";
import { CartItem } from "./cart.types";

export const cartApi = createApi({
  reducerPath: "cardApi",
  baseQuery: rtkApiQuery,
  endpoints(build) {
    return {
      getUserCart: build.mutation<{ products: CartItem[] }, void>({
        query: () => ({
          url: "/user/cart",
          method: "GET",
        }),
      }),
      clearUserCart: build.mutation<void, void>({
        query: () => ({
          url: "/user/cart",
          method: "DELETE",
        }),
      }),
      addProductToCart: build.mutation<CartItem, { productId: string }>({
        query: (productId) => ({
          url: "/product/cart",
          method: "POST",
          body: productId,
        }),
      }),
      minusProductCart: build.mutation<
        CartItem,
        { productId: string; isRemovingAll?: boolean }
      >({
        query: (obj) => ({
          url: "/product/cart",
          method: "DELETE",
          body: obj,
        }),
      }),
    };
  },
});

export const {
  useAddProductToCartMutation,
  useMinusProductCartMutation,
  useGetUserCartMutation,
  useClearUserCartMutation,
} = cartApi;
