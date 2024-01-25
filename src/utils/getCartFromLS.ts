import { CartItem } from "../Store/cart/cart.types";
import {
  calcTotalCount,
  calcTotalPrice,
  calcTruePrice,
} from "./calcTotalPrice";

// export const setLocalStorage = (id: string, obj: Object) => {
//   const data =localStorage.setItem()
// }

// export const getLocalStorage = (id: string) => {
//   const data = localStorage.getItem(id);
//   const
// };

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  // const totalDiscountPrice = calcTotalPrice(items);
  const totalDiscountPrice = 0;
  const totalCount = calcTotalCount(items);
  const totalPrice = calcTruePrice(items);

  return {
    items: items as CartItem[],
    totalDiscountPrice,
    totalCount,
    totalPrice,
  };
};
