import cls from './SaleBunner.module.scss';
// import img
import { Product } from '../../../Store/product/product.types';
import Link from 'next/link';

export interface ISaleProps {
  product: Product;
}

export const SaleBunnerProduct: React.FC<ISaleProps> = ({ product }) => {
  // const image = product.files
  //   ? product.files[0]
  //   : {
  //       name: "",
  //       url: "",
  //     };

  return (
    <Link key={product.id} href={`/Product/${product.id}`} className={cls.saleb_slider}>
      <span className={cls.allproduct_product_label_ring}>
        <span className={cls.allproduct_product_label_ring_desc}>
          скидка <span>-{product.discount}%</span>
        </span>
        <span className={cls.allproduct_product_label_ring_icons}></span>
      </span>
      <img src={product.urls[0]} alt={product.urls[0]} className={cls.saleb_img} />
      <span className={cls.slider_nal}>В наличии: {product.availability} шт.</span>
      <h4 className={cls.slider_header}>{product.article}</h4>
      <p className={cls.slider_price}>{product.price}руб.</p>
    </Link>
  );
};

export default SaleBunnerProduct;