import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection, ICollectionSliceState } from './collection.types';
import { collectionApi } from './collection.api';

const initialState: ICollectionSliceState = {
  collection: [],
  windwoCollection: [],
  collectionfilters: {},
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    setFrom(state, action: PayloadAction<number>) {
      state.collectionfilters.From = action.payload;
    },
    setCount(state, action: PayloadAction<number>) {
      state.collectionfilters.Count = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      collectionApi.endpoints.getCollections.matchFulfilled,
      (state, { payload }) => {
        state.collection = payload.collections;
      },
    );
    builder.addMatcher(
      collectionApi.endpoints.getCollection.matchFulfilled,
      (state, { payload }) => {
        const colId = state.collection.findIndex((col) => payload.id === col.id);
        if (colId === -1) {
          state.collection = state.collection.concat(payload);
        }
      },
    );
    builder.addMatcher(
      collectionApi.endpoints.getWindowCollection.matchFulfilled,
      (state, { payload }) => {
        state.windwoCollection = payload.collections;
      },
    );
  },
});

export default collectionSlice.reducer;
