import React, {useEffect} from 'react';
import cls from './Cart.module.scss';
// import "./Cart.scss";
// import "slick-carousel/slick/slick.css"; // путь к slick.css
// import "slick-carousel/slick/slick-theme.css"; // путь к slick-theme.css
import { IFileUrl, Product } from '../../Store/product/product.types';
import { cartProductCountByIdSelector } from '../../Store/cart/cart.selectors';
import { useCart } from '../../hooks/useCart';
import { useAppSelector } from "@/Store/store";

type IRenderToElseCart = {
  prodAdd?: Product;
};

const RenderToElseCart: React.FC<IRenderToElseCart> = ({
  prodAdd
}) => {
  const cartCount = useAppSelector((state) => prodAdd ? cartProductCountByIdSelector(prodAdd.id, state) : 0);

  const { deleteFromCart, addToCart } = useCart();
  

  return (
    <>
                {cartCount > 0 ? (
                <div
                  className={`${cls.detalepoduct_product_add} ${cls.detalepoduct_product_added}`}
                  onClick={() => prodAdd && deleteFromCart(prodAdd.id)}>
                  <span 
                  className={cls.detalepoduct_product_icon_box}>Добавлено 
                  <span
                  className={cls.detalepoduct_product_icon}
                  ></span></span>
                  </div>
                  ) : (
                    <div
                  onClick={() => prodAdd && addToCart(prodAdd.id)}
                  className={cls.detalepoduct_product_add}>
                  <span style={{color: '#fff'}}>В корзину</span>
                </div>
                  )}
    </>
  );
};

export default RenderToElseCart;
