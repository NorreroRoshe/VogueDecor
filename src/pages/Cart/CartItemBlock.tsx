import React from 'react';
import cls from './Cart.module.scss';
// import "./Cart.scss";
// import "slick-carousel/slick/slick.css"; // путь к slick.css
// import "slick-carousel/slick/slick-theme.css"; // путь к slick-theme.css
import { IFileUrl } from '../../Store/product/product.types';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { cartProductCountByIdSelector } from '../../Store/cart/cart.selectors';
import { useCart } from '../../hooks/useCart';
import Link from 'next/link';
import CartCounter from './CartCounter';
import Slider from 'react-slick';
import Scrollbar from '@/components/ui/scrollbar';
import CartElseProduct from './CartElseProduct'

type CIBProps = {
  id: string;
  name: string;
  price: number;
  files: IFileUrl[];
  article: string;
  discount: number;
  count: number;
  height: number;
  diameter: number;
  width: number;
  length: number;
  collectionId: string;
};

const CartItemBlock: React.FC<CIBProps> = ({
  id,
  name,
  price,
  count,
  discount,
  files,
  article,
  height,
  diameter,
  width,
  length,
  collectionId
}) => {
  const { deleteFromCart } = useCart();

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить данную позицию ?')) {
      deleteFromCart(id);
    }
  };

  const truePrice = price - (price * discount) / 100;

  return (
    <>
      <div className={cls.root_main}>
        <div className={cls.root_main_left}>
          <div className={cls.root_main_imgblock}>
            <Link href={`/Product/${id}`} className={cls.main_img}>
              {files && files.length > 0 && (
                <img src={files[0].url} alt={files[0].name} className={cls.root_main_imgblock} />
              )}
            </Link>
          </div>
          <div className={cls.desc_first_insaid}>
            <h2 className={cls.root_main_title}>
              <Link href={`/Product/${id}`} className={cls.root_main_link}>
                {name}
              </Link>
            </h2>
            <span className={cls.root_main_artikul}>
              Арт.:&nbsp; <strong> {article}</strong>
            </span>
            <div className={cls.root_main_params}>
              {!!height && (
                <p className={cls.root_main_params_desc}>
                  Высота: <span>{height} см.</span>
                </p>
              )}
              {!!diameter && (
                <p className={cls.root_main_params_desc}>
                  Диаметр: <span>{diameter} см.</span>
                </p>
              )}
              {!!width && (
                <p className={cls.root_main_params_desc}>
                  Диаметр: <span>{width} см.</span>
                </p>
              )}
              {!!length && (
                <p className={cls.root_main_params_desc}>
                  Диаметр: <span>{length} см.</span>
                </p>
              )}
            </div>
          </div>
        </div>
        <div className={cls.root_main_right}>
          <div className={cls.root_main_prices}>
            {/* {isLoading && 'load'} */}
            <CartCounter id={id} count={count}/>
            <div className={cls.root_main_price}>
              <span className={cls.price_discount}>{count * price} ₽.</span>
              <span className={cls.price_desc}>
                {truePrice * count}
                <span> ₽.</span>
              </span>
            </div>
          </div>
          <div onClick={onClickRemove} className={cls.root_main_end}>
            <span className={cls.main_end_remove}>Удалить позицию</span>
          </div>
        </div>
      </div>
      <CartElseProduct colId={collectionId} />
    </>
  );
};

export default CartItemBlock;
