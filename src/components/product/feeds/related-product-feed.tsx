import React, { useEffect, useState } from "react";
import { useGetCollectionProductsMutation } from '@/Store/product/product.api';
import ProductsCarousel from '@/components/product/products-carousel';
import { useRelatedProductsQuery } from '@/framework/basic-rest/product/get-related-product';
import { useRouter } from "next/router";
import { useAppSelector } from "@/Store/store";
import { selectCurrentCollection } from "@/Store/collection/collection.selectors";

interface RelatedProductsProps {
  carouselBreakpoint?: {} | any;
  className?: string;
  uniqueKey?: string;
  id?: string;
  sectionHeading: string;
}

const RelatedProductFeed: React.FC<RelatedProductsProps> = ({
  carouselBreakpoint,
  className,
  uniqueKey = 'related-product-popup',
  id,
  sectionHeading
}) => {

const collectionId = id;

  const [getCollectionProducts, { data, isLoading, isError }] =
  useGetCollectionProductsMutation();

  const collection = useAppSelector((state) =>
  selectCurrentCollection(state, collectionId || "")
);
  
  useEffect(() => {
    getCollectionProducts({
          CollectionId: collectionId,
          From: 0,
          Count: 8,
    });
}, [collection, collectionId]);


  return (
    <ProductsCarousel
      sectionHeading={sectionHeading}
      categorySlug={`/Collections/${collectionId}`}
      className={className}
      products={data?.products}
      loading={isLoading}
      // error={error?.message}
      // limit={LIMITS.RELATED_PRODUCTS_LIMITS}
      uniqueKey={uniqueKey}
      carouselBreakpoint={carouselBreakpoint}
    />
  );
};

export default RelatedProductFeed;