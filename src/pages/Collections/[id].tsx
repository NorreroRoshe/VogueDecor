import React, { useEffect, useState } from "react";
import cls from "./CollectionsPage.module.scss";
import { ICollection } from "@/Store/collection/collection.types";
import { ProdBlock } from "@/components/GoodsCatalogue/GoodsBlock/ProdBlock";
import { useAppSelector } from "@/Store/store";
import { useRouter } from "next/router";
import { selectCurrentCollection } from "@/Store/collection/collection.selectors";
import { useGetCollectionProductsMutation } from "@/Store/product/product.api";
import { useGetCollectionMutation } from "@/Store/collection/collection.api";
import { Pagination } from "@/components/Pagination";
import { COUNT_PER_PAGE } from "@/components/Pagination/pagination-lib";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from '@components/ui/breadcrumb';
const CollectionPage: React.FC = () => {
  const [getCollectionProducts, { data, isLoading, isError }] =
  useGetCollectionProductsMutation();
  // const [getCollection] = useGetCollectionMutation();
  const [page, setPage] = useState(0);
  const {
    query: { id },
  } = useRouter();
  const collectionId = id as string;
  
  const collection = useAppSelector((state) =>
  selectCurrentCollection(state, collectionId || "")
  );
  
  useEffect(() => {
    // if (collectionId && collection)
    getCollectionProducts({
      CollectionId: collectionId,
      From: page * COUNT_PER_PAGE,
      Count: COUNT_PER_PAGE,
    });
    // if (!collection && collectionId) getCollection({ name: collectionId });
  }, [collectionId, collection, page]);
  
  // if (isError) return <>Ошибка...</>;
  
  // if (!collection && collectionId) return <>Коллекции не существует...</>;
  
  return (
    <>
      <div className={`${cls.container} ${cls.brand__container}`}>
        <Breadcrumb />
        <div className={cls.brand__mt}>
          <h2 className={cls.brand__title}>Коллекция {collection?.name}</h2>
          {/* {isLoading && <p>Загрузка...</p>} */}
          {/* TODO фикс */}
          <ul style={{ display: "flex", flexWrap: "wrap", gap: '30px 0' }}>
            {data?.products.map((prod) => (
              <ProdBlock key={prod.id} product={prod} />
            ))}
          </ul>
          {(data?.totalCount ?? 0) >= COUNT_PER_PAGE && (
            <Pagination
              count={data?.totalCount || 0}
              changePage={(num: number) => setPage(num - 1)}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CollectionPage;
