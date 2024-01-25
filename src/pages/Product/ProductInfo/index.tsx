import { useState } from 'react';
import cls from './ProductInfo.module.scss';
import RelatedProductFeed from '@/components/product/feeds/related-product-feed';
import { RelatedBreakpoints } from '@/components/product/product-popup';
import { ProductInd } from './ProductInd';
import Breadcrumb from '@components/ui/breadcrumb';


type ProductInfoProps = {
  detProduct: Product;
};

export const ProductInfo: React.FC<ProductInfoProps> = ({ detProduct }) => {
  return (
    <div className={`${cls.product_info_container} ${cls.container}`}>
      <Breadcrumb />
      <ProductInd detProduct={detProduct} />
      <div className={cls.product_info_feed}>
        <RelatedProductFeed
          sectionHeading='Товары из этой коллекции'
          id={detProduct.collectionId}
          carouselBreakpoint={RelatedBreakpoints}
          className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
        />
      </div>
      <RelatedProductFeed
        sectionHeading='Товары от этого бренда'
        id={detProduct.collectionId}
        carouselBreakpoint={RelatedBreakpoints}
        className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
      />
    </div>
  );
};

export default ProductInfo;