import { IFilter } from "./filter.types";

export type Product = {
  id: string;
  name: string;
  description?: string;
  type: number;
  article?: string;
  price: number;
  colors?: number[];
  diameter?: number;
  height?: number;
  length?: number;
  width?: number;
  discount: number;
  chandelierTypes?: number[];
  plinth?: string;
  lampCount?: number;
  rating: number;
  availability: number;
  collectionId?: string;
  urls: string[];
  files: IFileUrl[];
};

export interface IFileUrl {
  name: string;
  url: string;
}

export interface IProductSliceState {
  items: Product[];
  cartCount: number;
  favouritesCount: number;
  totalCount: number;
  filters: IFilter;
  searchProduct: Product[];
  searchPageProduct: Product[];
  searchedString: string;
  sort: number;
}