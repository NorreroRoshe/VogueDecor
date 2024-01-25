import { IFileUrl, Product } from "../product/product.types";

export type FavoritesItem = Product;

export interface FavoritesSliceState {
  items: FavoritesItem[];
  ids: string[];
}
