import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductSliceState } from "./product.types";
import { productApi } from "./product.api";

const initialState: IProductSliceState = {
  items: [],
  cartCount: 0,
  favouritesCount: 0,
  totalCount: 0,
  searchedString: "",
  searchProduct: [],
  searchPageProduct: [],
  filters: {
    Types: [],
  },
  sort: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setTypes(state, action: PayloadAction<number>) {
      const value = action.payload + 1;
      const array = Array.isArray(state.filters.Types) ? state.filters.Types : [];
      const ind = array.findIndex((type) => type === value);
      state.filters.Types =
        ind === -1 //Здесь мы сравниваем , есть ли он или нет
          ? [...array, value] //Здесь мы добавляем
          : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
    },
    setArrayTypes(state, action: PayloadAction<number[]>) {
      state.filters.Types = action.payload;
    },
    // setMinPrice(state, action: PayloadAction<number>) {
    //   state.filters.minPrice = action.payload;
    // },
    // setMaxPrice(state, action: PayloadAction<number>) {
    //   state.filters.maxPrice = action.payload;
    // },
    setColors(state, action: PayloadAction<number>) {
      const value = action.payload + 1;
      const array = state.filters.Colors || [];
      const ind = array.findIndex((type) => type === value);
      state.filters.Colors =
        ind === -1
          ? [...array, value]
          : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)];
    },
    setArrayColors(state, action: PayloadAction<number[]>) {
      state.filters.Colors = action.payload;
    },
    setPrice(state, action: PayloadAction<{ min: number; max: number }>) {
      state.filters.MinPrice = action.payload.min;
      state.filters.MaxPrice = action.payload.max;
    },
    setDiameter(state, action: PayloadAction<{ min: number; max: number }>) {
      state.filters.MinDiameter = action.payload.min;
      state.filters.MaxDiameter = action.payload.max;
    },
    setLampCount(state, action: PayloadAction<{ min: number; max: number }>) {
      state.filters.MinLampCount = action.payload.min;
      state.filters.MaxLampCount = action.payload.max;
    },
    setChandelierTypes(state, action: PayloadAction<number>) {
      const value = action.payload + 1;
      const array = state.filters.ChandelierTypes || [];
      const ind = array.findIndex((type) => type === value); //Здесь мы есть ли в массиве данный элемент
      state.filters.ChandelierTypes =
        ind === -1 //Здесь мы сравниваем , есть ли он или нет
          ? [...array, value] //Здесь мы добавляем
          : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
    },
    setArrayChandelierTypes(state, action: PayloadAction<number[]>) {
      state.filters.ChandelierTypes = action.payload;
    },
    setFrom(state, action: PayloadAction<number>) {
      state.filters.From = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.filters.Count = action.payload;
    },
    setSearchName(state, action: PayloadAction<string>) {
      state.filters.SearchQuery = action.payload;
    },
    setIsSale(state, action: PayloadAction<boolean>) {
      state.filters.IsSale = action.payload;
    },
    setSort(state, action: PayloadAction<number>) {
      state.sort = action.payload;
    },
    clearFilters(state) {
      state.filters = {};
      state.filters.MaxPrice = 2000000;
      state.filters.MinPrice = 0;
      state.filters.MaxLampCount = 20;
      state.filters.MinLampCount = 0;
      state.filters.MinDiameter = 0;
      state.filters.MaxDiameter = 2000;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      productApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.cartCount = payload.cartCount;
        state.items = payload.products;
        state.favouritesCount = payload.favouritesCount;
        state.totalCount = payload.totalCount;
      }
    );
    builder.addMatcher(
      productApi.endpoints.getSearchProducts.matchFulfilled,
      (state, { payload, meta }) => {
        state.cartCount = payload.cartCount;
        state.favouritesCount = payload.favouritesCount;
        state.totalCount = payload.totalCount;

        if (meta.arg.originalArgs.Count === 3) {
          state.searchProduct = payload.products.slice(0, 3);
        } else {
          state.searchPageProduct = payload.products;
          state.searchedString = meta.arg.originalArgs.SearchQuery || "";
        }
      }
    );
    builder.addMatcher(
      productApi.endpoints.getCollectionProducts.matchFulfilled,
      (state, { payload }) => {
        state.cartCount = payload.cartCount;
        state.items = payload.products;
        state.favouritesCount = payload.favouritesCount;
        state.totalCount = payload.totalCount;
      }
    );
    builder.addMatcher(
      productApi.endpoints.createProduct.matchFulfilled,
      (state, { payload }) => {
        state.items = [...state.items, payload];
        state.totalCount = state.totalCount + 1;
      }
    );
  },
});

export const {
  setTypes,
  setArrayTypes,
  // setMinPrice,
  // setMaxPrice,
  setColors,
  setArrayColors,
  setPrice,
  setDiameter,
  setLampCount,
  setFrom,
  setCount,
  setSearchName,
  setChandelierTypes,
  setArrayChandelierTypes,
  clearFilters,
  setIsSale,
  setSort
} = productSlice.actions;

export default productSlice.reducer;
