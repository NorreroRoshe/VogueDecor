import React from 'react';
import cls from './Cart.module.scss';
import { useCart } from '../../hooks/useCart';

type CIBProps = {
  id: string;
  count: number;
};

const CartCounter: React.FC<CIBProps> = ({ id, count }) => {
  const { addToCart, minusFromCart, isLoading } = useCart();

  const onClickPlus = () => {
    addToCart(id);
  };

  const onClickMinus = () => {
    //Здесь мы говорим, если товар в корзине уменьшаем то он может максимум доходить до 0 меньше не может
    minusFromCart(id);
  };

  return (
    <div className={cls.root_main_count}>
      <button
        disabled={count === 1 || isLoading}
        onClick={onClickMinus}
        className={`${cls.count_desc_minus} ${cls.count_desc}`}></button>
      <span className={cls.count_desc}>{count}</span>
      <button
        disabled={isLoading}
        onClick={onClickPlus}
        className={`${cls.count_desc_plus} ${cls.count_desc}`}></button>
    </div>
  );
};

export default CartCounter;
