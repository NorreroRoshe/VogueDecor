import React, { useEffect } from 'react';
import cls from './Favourites.module.scss';
import { useAppSelector } from '../../Store/store';
import { useCart } from '../../hooks/useCart';
import { cartProductCountByIdSelector } from '@/Store/cart/cart.selectors';
import { Product } from '@/Store/product/product.types';

interface IFavAddCart {
  product: Product;
}

export const FavAddCart: React.FC <IFavAddCart> = ({ product }) => {
  const { addToCart, deleteFromCart } = useCart();
  const cartCount = useAppSelector((state) => cartProductCountByIdSelector(product.id, state));

  const handleAddToCart = () => {
    addToCart(product.id)
  }

  const handleDeleteFromCart = () => {
    deleteFromCart(product.id)
  }

  return (
    <>
      {cartCount > 0 ? (
        <div
          onClick={() => handleDeleteFromCart()}
          className={cls.item_unit_button}
          style={{backgroundColor: 'white', color: '#000', cursor: 'auto'}}>
          Удалить из корзины
        </div>
      ) : (
        <div
          onClick={() => handleAddToCart()}
          className={cls.item_unit_button}>
          Купить
        </div>
      )}
    </>
  );
};

export default FavAddCart;
