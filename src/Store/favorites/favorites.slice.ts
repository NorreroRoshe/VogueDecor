import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FavoritesItem, FavoritesSliceState } from "./favorites.types";
import { favoritesApi } from "./favorites.api";
const KEY = "favorites";

// const getLocalFavorite = (): string[] =>
//       JSON.parse(localStorage.getItem(KEY) || JSON.stringify([]));

const initialState: FavoritesSliceState = {
  items: [],
  // ids:
  //       typeof window !== undefined
  //             ? JSON.parse(localStorage.getItem(KEY) || JSON.stringify([]))
  //             : [],
  ids: [],
};

const delFromArr = <T>(index: number, array: T[]) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length),
];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      if (state.ids.includes(action.payload)) return;
      const ids = state.ids.concat(action.payload);
      state.ids = ids;
      localStorage.setItem(KEY, JSON.stringify(ids));
    },
    getFavorite(state, action: PayloadAction<FavoritesItem>) {
      state.items = state.items.concat(action.payload);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      const ind = state.items.findIndex((it) => it?.id === action.payload);
      state.items = delFromArr(ind, state.items);
      const idsInd = state.ids.findIndex((it) => it === action.payload);
      const ids = delFromArr(idsInd, state.ids);
      state.ids = ids;
      localStorage.setItem(KEY, JSON.stringify(ids));
    },
    clearItems(state) {
      state.items = [];
      state.ids = [];
      localStorage.setItem(KEY, `[]`);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      favoritesApi.endpoints.getUserFavorites.matchFulfilled,
      (state, { payload }) => {
        localStorage.removeItem("favorites");
        state.ids = payload.products.map((item) => item.id);
        state.items = payload.products;
      }
    );
    builder.addMatcher(
      favoritesApi.endpoints.addFavorite.matchFulfilled,
      (state, action) => {
        const productId = action.meta.arg.originalArgs.productId;
        const ids = state.ids.concat(productId);
        state.ids = ids;
      }
    );
    builder.addMatcher(
      favoritesApi.endpoints.minusFavorite.matchFulfilled,
      (state, action) => {
        const productId = action.meta.arg.originalArgs.productId;
        const ind = state.ids.findIndex((item) => productId === item);
        const ids = delFromArr(ind, state.ids);
        state.ids = ids;
        const indItems = state.items.findIndex((item) => productId === item.id);
        const items = delFromArr(indItems, state.items);
        state.items = items;
      }
    );
  },
});

export const { addFavorite, getFavorite, removeFavorite, clearItems } = favoritesSlice.actions;

export default favoritesSlice.reducer;
