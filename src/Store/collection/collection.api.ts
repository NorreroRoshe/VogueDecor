import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { rtkApiQuery } from '../Rtkapi';
import { IGetCollectionReq, IGetCollectionRes } from './collection.dtos';
import { ICollection } from './collection.types';

export const collectionApi = createApi({
  reducerPath: 'collectionApi',
  baseQuery: rtkApiQuery,
  endpoints(build) {
    return {
      getCollections: build.query<IGetCollectionRes, IGetCollectionReq>({
        query: (obj) => ({
          url: '/collection',
          method: 'GET',
          params: obj,
        }),
      }),
      getCollection: build.mutation<ICollection, IGetCollectionReq>({
        query: (obj) => ({
          url: `/collection/details/${obj.name}`,
          method: 'GET',
        }),
      }),
      getWindowCollection: build.mutation<ICollection, IGetCollectionReq>({
        query: (params) => ({
          url: `/collection`,
          method: 'GET',
          params: {
            From: params.From,
            Count: 8,
          },
        }),
      }),
    };
  },
});

export const { useGetCollectionsQuery, useGetCollectionMutation, useGetWindowCollectionMutation } =
  collectionApi;
