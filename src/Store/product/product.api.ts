import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { rtkApiQuery } from "../Rtkapi";
import { Product } from "./product.types";
import { IGetProductDetReq, IGetProductsReq, IGetProductsRes } from "./product.dtos";
import { IFilter } from "./filter.types";
import { COUNT_PER_PAGE } from "../../components/Pagination/pagination-lib";

const arrayToString = (param: [string, unknown[]]): string => {
  return param[1].map((num) => `${param[0]}=${num}`).join("&");
};

const isEntryArray = (val: [string, any]): val is [string, unknown[]] => {
  return Array.isArray(val[1]);
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: rtkApiQuery,
  // tagTypes: ['Post'],
  endpoints(build) {
    return {
      getProducts: build.mutation<IGetProductsRes, IGetProductsReq>({
        query: ({ Count, ...allParams }) =>
          `/product?${Object.entries(allParams)
            .map((item) =>
              (item[0] === "Types" ||
                item[0] === "ChandelierTypes" ||
                item[0] === "Colors") &&
                isEntryArray(item)
                ? arrayToString(item)
                : `${item[0]}=${item[1]}`
            )
            .concat(`Count=${Count || COUNT_PER_PAGE}`)
            .join("&")}`,
        //   return {
        //     url: "/product",
        //     method: "GET",
        //     params: {
        //       ...params,
        //       Count: params.Count || COUNT_PER_PAGE,
        //     },
        //   };
        // },
      }),
      getSearchProducts: build.mutation<IGetProductsRes, IFilter>({
        query: (params) => ({
          url: "/product/search",
          method: "GET",
          params: {
            // SearchQuery: params.SearchQuery,
            SearchQuery: localStorage.getItem("handleSearch") || "",
            From: params.From,
            Count: params.Count,
          },
        }),
      }),
      getCollectionProducts: build.mutation<IGetProductsRes, IFilter>({
        query: (params) => ({
          url: "/product/collection",
          method: "GET",
          params: {
            From: params.From,
            Count: params.Count,
            CollectionId: params.CollectionId,
          },
        }),
      }),
      getDetProduct: build.mutation<Product, IGetProductDetReq>({
        query: (detProduct) => ({
          url: `/product/details`,
          method: "GET",
          params: { ...detProduct },
        }),
      }),
      createProduct: build.mutation<Product, Product>({
        query: (product) => ({
          url: "/product",
          method: "POST",
          body: product,
        }),
      }),
    };
  },
});

export const {
  useGetProductsMutation,
  useGetDetProductMutation,
  useGetSearchProductsMutation,
  useCreateProductMutation,
  useGetCollectionProductsMutation,
} = productApi;
