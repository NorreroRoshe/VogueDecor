import { Console } from "console";
import { IStateSchema, RootState } from "../store";
import { CartItem } from "./cart.types";

export const cartSelector = (state: IStateSchema): CartItem[] => {
  const itemsCounts = state.cart.cart;
  return state.cart.items.map((cartItem) => {
    const count =
      itemsCounts.find((countItem) => countItem.id === cartItem?.id)?.count || 0;
    return { ...cartItem, count: count };
  });
};

export const selectCart = (state: IStateSchema) => state.cart;
export const selectCartItemById = (id: string) => (state: IStateSchema) =>
  cartSelector(state).find((obj) => obj.id === id);

export const localCartCountsSelector = (state: IStateSchema) => state.cart.cart;
export const localCartCountSelector = (state: IStateSchema) =>
  state.cart.cart.reduce((sum, curr) => sum + curr.count, 0);

export const cartProductCountByIdSelector = (
  productId: string,
  state: IStateSchema
) => state.cart.cart.find((row) => row.id === productId)?.count || 0;

export const prodBlockCartItemByIdSelector = (
  productId: string,
  state: IStateSchema
) => state.cart.cart.find((row) => row.id === productId)?.count || 0;

export const localCartItemByIdSelector = (
  productId: string,
  state: IStateSchema
) => state.cart.items.find((row) => row.id === productId)?.count || 0;

export type ITotalCart = {
  totalPrice: number;
  totalCount: number;
  totaDiscountPrice: number;
};

export const getTotalCartSelector = (state: IStateSchema): ITotalCart => {
  const items = cartSelector(state);
  let totalPrice = items.reduce(
    (sum, curr) => sum + curr.count * curr.price,
    0
  );

  let totaDiscountPrice = items.reduce((sum, curr) => {
    const truePrice = curr.price - (curr.price * curr.discount) / 100;
    return truePrice * curr.count + sum;
  }, 0);

  let totalCount = items.reduce((sum, curr) => sum + curr.count, 0);

  return {
    totalPrice,
    totalCount,
    totaDiscountPrice,
  };
};

export type ICartToPay = {
  id: string;
  name: string;
  article: string | undefined;
  count: number;
  price: number;
}[];

export const cartToPaySelector = (state: IStateSchema): ICartToPay =>
  cartSelector(state).map((item) => ({
    id: item.id,
    name: item.name,
    article: item.article,
    count: item.count,
    price: item.price,
  }));
