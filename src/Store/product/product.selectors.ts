import { IStateSchema } from "../store";

export const selectProductSlice = (state: IStateSchema) => state.product;
export const selectProduct = (state: IStateSchema) => state.product.items;
export const selectProductsCount = (state: IStateSchema) =>
  state.product.totalCount;
export const searchProduct = (state: IStateSchema) =>
  state.product.searchProduct;
export const searchPageProduct = (state: IStateSchema) =>
  state.product.searchPageProduct;
