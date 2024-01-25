import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { rtkApiQuery } from "../Rtkapi";
import { FavoritesItem } from "./favorites.types";
import { Product } from "../product/product.types";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: rtkApiQuery,
  endpoints(build) {
    return {
      getUserFavorites: build.mutation<{ products: FavoritesItem[] }, void>({
        query: () => ({
          url: "/user/favourites",
          method: "GET",
        }),
      }),
      addFavorite: build.mutation<Product, { productId: string }>({
        query: (productId) => ({
          url: "/product/favourite",
          method: "POST",
          body: productId,
        }),
      }),
      minusFavorite: build.mutation<Product, { productId: string }>({
        query: (productId) => ({
          url: "/product/favourite",
          method: "DELETE",
          body: productId,
        }),
      }),
    };
  },
});

export const {
  useAddFavoriteMutation,
  useGetUserFavoritesMutation,
  useMinusFavoriteMutation,
} = favoritesApi;
