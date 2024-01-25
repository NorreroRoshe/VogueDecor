import React, { useEffect, useState } from 'react';
import Breadcrumb from '@components/ui/breadcrumb';
import cls from './Cart.module.scss';
import CartItemBlock from './CartItemBlock';
import CartTotal from './CartTotal';
import CartEmpty from './CartEmpty';
import { cartSelector, localCartCountsSelector } from '../../Store/cart/cart.selectors';
import { addItem, clearCart } from '../../Store/cart/cart.slice';
import { useGetUserCartMutation } from '../../Store/cart/cart.api';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { useGetDetProductMutation } from '../../Store/product/product.api';
import { useCart } from '../../hooks/useCart';
import { isAuthSelector } from '../../Store/auth/auth.selector';
import { CartSendForm } from './CartSendForm/CartSendForm';

const Cart: React.FC = () => {
  const [isSent, setSent] = useState(false);
  const dispatch = useAppDispatch();
  const [getUserCart, { isSuccess }] = useGetUserCartMutation();
  const isAuth = useAppSelector(isAuthSelector);
  useEffect(() => {
    getUserCart();
  }, []);
  const cart = useAppSelector(cartSelector);
  const [getDetProduct, {}] = useGetDetProductMutation();
  const { clearCart, isLoading, addToCart } = useCart();

  const onClickClear = () => {
    if (window.confirm('Очистить корзину ???')) {
      clearCart();
    }
  };
  const localCart = useAppSelector(localCartCountsSelector);

  useEffect(() => {
    localCart.length > 0 &&
      localCart.map(
        (row) =>
          !cart.map((item) => item.id).includes(row.id) &&
          getDetProduct({ ProductId: row.id }).then((pld) => {
            //TODO fix
            //@ts-ignore

            dispatch(addItem(pld.data));
          }),
      );
  }, [localCart]);

  useEffect(() => {
    if (isAuth && isSuccess) {
      localCart &&
        localCart.map((row) => !cart.map((item) => item.id).includes(row.id) && addToCart(row.id));
    }
  }, [isAuth, isSuccess]);

  if (localCart.length === 0) {
    //Если totalPrice = 0 или totalCount = 0, то пустая корзина
    return <CartEmpty />;
  }

  return (
    <>
    <div className={cls.section_cart}>
      <div className={`${cls.cart_container} ${cls.container}`}>
      <Breadcrumb />
        <div className={cls.cart_header}>
          <h3 className={cls.cart_title}>КОРЗИНА</h3>
          <div className={cls.cart_clear}>
            <button disabled={isLoading} onClick={onClickClear} className={cls.cart_clear_desc}>
              Очистить корзину
            </button>
          </div>
        </div>
        <div className={cls.cart_root}>
          <div className={cls.cart_root_border}>
            {cart.map((item: any) =>
              item.count ? <CartItemBlock key={item.id} {...item} /> : undefined,
            )}
          </div>
          <div className={`${cls.cart_root_border} ${cls.cart_root_itog}`}>
            <CartTotal />
          </div>
          <p className={cls.cart_root_offer}>Оформление заказа</p>
          <p className={`${cls.cart_root_desc} ${isSent ? cls.cart_root_desc_none : ''}`}>
            Заполните пожалуйста форму, для составления заказа!
          </p>
          <CartSendForm isSent={isSent} setSent={setSent} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
