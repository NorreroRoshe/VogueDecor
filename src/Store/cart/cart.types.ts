import { IFileUrl } from "../product/product.types";

export type CartItem = {
  products: any;
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
  files: IFileUrl[];
  count: number;
};

export interface CartSliceState {
  totalCount: number;
  totalPrice: number;
  totalDiscountPrice: number;
  items: CartItem[];
  cart: ICartLocalState;
}

export type ICartLocalState = ICartLocalItem[];

export interface ICartLocalItem {
  count: number;
  id: string;
}
