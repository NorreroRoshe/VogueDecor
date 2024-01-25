import { useUI } from '@/contexts/ui.context';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';
import Heading from '@/components/ui/heading';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/Store/store';
import { useGetUserCartMutation } from '@/Store/cart/cart.api';
import { isAuthSelector } from '@/Store/auth/auth.selector';
import { cartSelector, localCartCountsSelector } from '@/Store/cart/cart.selectors';
import { useGetDetProductMutation } from '@/Store/product/product.api';
import { useCart } from '@/hooks/useCart';
import EmptyCart from './empty-cart';
import { getTotalCartSelector } from '@/Store/cart/cart.selectors';
import DeleteIcon from '@/components/iconsCode/delete-icon';
import Scrollbar from '@/components/ui/scrollbar';
import { ROUTES } from '@/utils/routes';
import Link from 'next/link';
import cn from 'classnames';
import CartItem from './cart-item';
import { addItem } from '../../Store/cart/cart.slice';

export default function Cart() {
  const { t } = useTranslation('common');
  const { closeDrawer } = useUI();

  const dispatch = useAppDispatch();
  const [getUserCart, { isSuccess }] = useGetUserCartMutation();
  const isAuth = useAppSelector(isAuthSelector);
  useEffect(() => {
    getUserCart();
  }, []);
  const cart = useAppSelector(cartSelector);
  const [getDetProduct, { }] = useGetDetProductMutation();
  const { clearCart, addToCart } = useCart();

  const onClickClear = () => {
    if (window.confirm('Очистить корзину ???')) {
      clearCart();
    }
  };
  const localCart = useAppSelector(localCartCountsSelector);

  const { totaDiscountPrice } = useAppSelector(getTotalCartSelector);

  useEffect(() => {
    localCart.length > 0 &&
      localCart.map(
        (row) =>
          !cart.map((item) => item.id).includes(row.id) &&
          getDetProduct({ ProductId: row.id }).then((pld) => {
            // TODO fix
            // @ts-ignore
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
    return <EmptyCart />;
  }
  return (
    <div className="flex flex-col w-full h-full justify-between">
      {/* <div className="flex flex-col w-full h-full"  style={{ maxHeight: '100vw' }}> */}
      <div className="w-full flex justify-between items-center relative ps-5 md:ps-7 border-b border-skin-base">
        <Heading variant="titleMedium">{t('Корзина')}</Heading>
        <div className="flex items-center">
          <button
            className="flex flex-shrink items-center text-15px transition duration-150 ease-in focus:outline-none text-skin-base opacity-50 hover:opacity-100 -me-1.5"
            aria-label={t('Очистить корзину')}
            onClick={onClickClear}>
            <DeleteIcon />
            <span className="ps-1">{t('Очистить корзину')}</span>
          </button>

          <button
            className="flex text-2xl items-center justify-center px-4 md:px-6 py-6 lg:py-7 focus:outline-none transition-opacity text-skin-base hover:opacity-60"
            onClick={closeDrawer}
            aria-label="close">
            <IoClose />
          </button>
        </div>
      </div>
      <Scrollbar className="cart-scrollbar w-full flex-grow">
        <div className="w-full px-5 md:px-7">
          {cart.map((item: any) =>
            item.count ? <CartItem key={item.id} {...item} /> : undefined,
          )}
        </div>
      </Scrollbar>
      {/* </div> */}
      <div className="border-t border-skin-base px-5 md:px-7 pt-5 md:pt-6 pb-5 md:pb-6">
        <div className="flex pb-5 md:pb-7 justify-between">
          <div className="pe-3">
            <Heading className="mb-2.5">{t('Итого')}:</Heading>
            {/* <Text className="leading-6">{truePrice}</Text> */}
          </div>
          <div className="flex-shrink-0 font-semibold text-base md:text-lg text-skin-base -mt-0.5 min-w-[80px] text-end">
            {totaDiscountPrice} ₽.
          </div>
        </div>
        <div className="flex flex-col" onClick={closeDrawer}>
          <Link
            href={localCart.length > 0 ? ROUTES.CART : '/'}
            className={cn(
              'w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-skin-inverted bg-skin-primary focus:outline-none transition duration-300 hover:bg-opacity-90',
              // {
              //   'cursor-not-allowed !text-skin-base !text-opacity-25 bg-skin-button-disable hover:bg-skin-button-disable':
              //   localCart.length > 0,
              // }
            )}>
            <span className="py-0.5">{t('Перейти к оформлению')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
