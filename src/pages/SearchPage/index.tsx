"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from '@components/ui/breadcrumb';
import cls from "./SearchPage.module.scss";
import { useAppSelector } from "../../Store/store";
import { searchPageProduct, selectProductsCount } from "../../Store/product/product.selectors";
import Skeleton from "../../components/GoodsCatalogue/GoodsBlock/Skeleton";
import { ProdBlock } from "../../components/GoodsCatalogue/GoodsBlock/ProdBlock";
import { useGetSearchProductsMutation } from "../../Store/product/product.api";
import { Pagination } from "../../components/Pagination";
import { COUNT_PER_PAGE } from "../../components/Pagination/pagination-lib";
import MainLayout from "@/layouts/MainLayout";

export const SearchPage = () => {
      const [searchProduct, { isLoading }] = useGetSearchProductsMutation();
      const product = useAppSelector(searchPageProduct);
      const productsCount = useAppSelector(selectProductsCount);
      // const searchedString = useAppSelector((state) => state.product.searchedString); //Закинуть в localStorage
      // const search = typeof window !== undefined ? localStorage.getItem("handleSearch") : "";
      const [searchedString, setSearchedString] = useState("");
      const [searchQuery, setSearchQuery] = useState("");
      const search = useAppSelector((state) => state.product.filters.SearchQuery);

      useEffect(() => {
            if (typeof window !== undefined) {
                  const searchedValue = localStorage.getItem("handleSearch");
                  const searchQuery = localStorage.getItem("SearchQuery");
                  if (searchedValue !== null) {
                        setSearchedString(searchedValue);
                  }
                  if (searchQuery !== null) {
                        setSearchQuery(searchQuery);
                  }
            }
      }, [search]);

      const [page, setPage] = useState(0);

      useEffect(() => {
            searchProduct({
                  From: page * COUNT_PER_PAGE,
                  Count: COUNT_PER_PAGE,
            });
      }, [page, searchQuery]);

      const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

      return (

            <div className={`${cls.container} ${cls.searchpage__container}`}>
        <Breadcrumb />
                  <div className={cls.searchpage__mt}>
                        <div className={cls.catalogue__product}>
                              <h3 className={cls.allproduct_heading}>
                                    По запросу {`<${searchedString}>`}
                              </h3>
                              <ul className={cls.allproduct_goods_list}>
                                    {isLoading && skeleton}
                                    {product?.map((product) => (
                                          <ProdBlock key={product.id} product={product} />
                                    ))}
                              </ul>
                        </div>
                  </div>
                  {(productsCount ?? 0) >= COUNT_PER_PAGE && (
                        <Pagination
                              count={productsCount}
                              changePage={(num: number) => setPage(num - 1)}
                              isLoading={isLoading}
                        />
                  )}
            </div>

      );
};

export default SearchPage;
