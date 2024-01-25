import {
  AnyAction,
  ThunkDispatch,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import cart from "./cart/cart.slice";
import favorites from "./favorites/favorites.slice";
import product from "./product/product.slice";
import collection from "./collection/collection.slice";
import auth from "./auth/auth.slice";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { productApi } from "./product/product.api";
import { CartSliceState } from "./cart/cart.types";
import { ICollectionSliceState } from "./collection/collection.types";
import { FilterSliceState } from "./filter/filter.types";
import { IProductSliceState } from "./product/product.types";
import { collectionApi } from "./collection/collection.api";
import { authApi } from "./auth/auth.api";
import { cartApi } from "./cart/cart.api";
import { favoritesApi } from "./favorites/favorites.api";
import { FavoritesSliceState } from "./favorites/favorites.types";
import { IAuthState } from "./auth/auth.types";

export interface IStateSchema {
  filter: FilterSliceState;
  cart: CartSliceState;
  favorites: FavoritesSliceState;
  product: IProductSliceState;
  collection: ICollectionSliceState;
  auth: IAuthState;
}

const rootReducer = combineReducers({
  cart,
  favorites,
  product,
  collection,
  auth,
  [cartApi.reducerPath]: cartApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer,
});

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const setupStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(
        productApi.middleware,
        collectionApi.middleware,
        cartApi.middleware,
        authApi.middleware,
        favoritesApi.middleware
      );
    },
  });
};

// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>(); //Создаем свой диспатч чтобы убрать ошибки с GoodsCatatlogue fetchProduct

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, AnyAction>
>;
export const useAppSelector: TypedUseSelectorHook<IStateSchema> = useSelector;
export const useAppStore = useStore<RootState>;
