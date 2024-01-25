import React from "react";
import cls from "./Cart.module.scss";
import {
  getTotalCartSelector,
} from "../../Store/cart/cart.selectors";
import { useAppSelector } from "../../Store/store";
import { CartItem } from "../../Store/cart/cart.types";

const CartTotal: React.FC = ({}) => {
  const { totaDiscountPrice, totalCount, totalPrice } =
  useAppSelector(getTotalCartSelector);

  const truePrice = totalPrice - totaDiscountPrice;

  return (
    <div className={`${cls.root_main} ${cls.root_main_sh}`}>
      <div
        className={`${cls.root_main_right} ${cls.root_main_prices_total} ${cls.root_main_prices_total_st}`}
      >
        <div
          className={`${cls.root_main_prices} ${cls.prices_total_fb} ${cls.prices_total_st}`}
        >
          <h4 className={cls.cart_title_total}>Итого позиций: </h4>
          <div
            className={`${cls.root_main_price} ${cls.root_main_price_total}`}
          >
            <span
              className={`${cls.price_desc} ${cls.price_desc_total} ${cls.price_desc_totals}`}
            >
              {totalCount} шт.
            </span>
          </div>
        </div>
        <div
          className={`${cls.root_main_prices} ${cls.prices_total_fb} ${cls.prices_total_fbs}`}
        >
          <h4 className={cls.cart_title_total}>Итого сумма: </h4>
          <div
            className={`${cls.root_main_price} ${cls.root_main_price_total}`}
          >
            <span
              className={`${cls.price_discount} ${cls.price_discount_total}`}
            >
              {totalPrice} ₽.
            </span>
            <span className={`${cls.price_desc} ${cls.price_desc_total}`}>
              {totaDiscountPrice}
              <span>₽.</span>
            </span>
            <span className={cls.price_econom_total}>
              Экономия {truePrice} ₽.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
