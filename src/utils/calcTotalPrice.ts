import { CartItem } from '../Store/cart/cart.types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, obj) => {
    const truePrice = obj.price - (obj.price * obj.discount) / 100;
    return truePrice * obj.count + sum;
  }, 0);
};

export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum: number, item: CartItem) => sum + item.count, 0);
};

export const calcTruePrice = (items: CartItem[]) => {
  return items.reduce((sum, item: CartItem) => sum + item.price * item.count, 0); //Общая сумма -> Здесь мы количество умножаем на цену и прибовляем что было уже и получается общая сумма
};
