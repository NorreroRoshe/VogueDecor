import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartSliceState, ICartLocalState } from "./cart.types";
import { cartApi } from "./cart.api";

const KEY = "cart";

const getCart = (): ICartLocalState => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(KEY) || JSON.stringify([]));
  }

  return [];
};

const initialState: CartSliceState = {
  items: [],
  totalCount: 0,
  totalDiscountPrice: 0,
  totalPrice: 0,
  cart: getCart(),
};

const updateArr = <T>(index: number, elem: T, array: T[]): T[] => [
  ...array.slice(0, index),
  elem,
  ...array.slice(index + 1, array.length),
];

const delFromArr = <T>(index: number, array: T[]) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length),
];

const getProduct = (cart: ICartLocalState, productId: string) => {
  const productInd = cart.findIndex((row) => row.id === productId);
  return {
    productInd,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addLocalItem(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const cart = state.cart;
      const { productInd } = getProduct(cart, productId);
      if (productInd !== -1) {
        const productCart = cart[productInd];
        const newCartRows: ICartLocalState = updateArr(
          productInd,
          { ...productCart, count: productCart.count + 1 },
          cart
        );
        localStorage.setItem(KEY, JSON.stringify(newCartRows));
        state.cart = newCartRows;
      } else {
        const newLocalCart: ICartLocalState = [
          ...cart,
          {
            count: 1,
            id: productId,
          },
        ];
        localStorage.setItem(KEY, JSON.stringify(newLocalCart));
        state.cart = newLocalCart;
      }
    },
    addItem(state, action: PayloadAction<CartItem>) {
      const product = action.payload;
      const cart = state.items;
      const productInd = cart.findIndex((row) => row?.id === product?.id);
      const localCartProductId = getProduct(state.cart, product?.id).productInd;
      if (productInd !== -1) {
        const productCart = cart[productInd];
        const newCartRows = updateArr(productInd, productCart, cart);
        state.items = newCartRows;
      } else {
        state.items = [...state.items, product];
      }
    },
    deleteProductFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const cart = state.cart;
      const { productInd } = getProduct(cart, productId);

      if (productInd !== -1) {
        const newCartRows = delFromArr(productInd, cart);
        localStorage.setItem(KEY, JSON.stringify(newCartRows));
        state.cart = newCartRows;
        const itemInd = state.items.findIndex((item) => item?.id === productId);
        if (itemInd !== -1) state.items = delFromArr(itemInd, state.items);
      }
    },
    minusItemFromCart(state, action: PayloadAction<string>) {
      const productId = action.payload;
      const cart = state.cart;
      const { productInd } = getProduct(cart, productId);

      if (productInd !== -1) {
        const productCart = cart[productInd];

        const newCartRows: ICartLocalState = updateArr(
          productInd,
          { ...productCart, count: productCart.count - 1 },
          cart
        );
        localStorage.setItem(KEY, JSON.stringify(newCartRows));
        state.cart = newCartRows;
        state.items.map((item) =>
          item.id === productId ? { ...item, count: item.count - 1 } : item
        );
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      const findItem = state.items.findIndex(
        (obj) => obj.id === action.payload
      ); // с помощю индекс находим индекс элемента
      state.items.splice(findItem, 1); //С помощю сплайс удалит элемент
    },
    clearCart(state) {
      localStorage.setItem(KEY, JSON.stringify([]));
      state.cart = [];
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      cartApi.endpoints.getUserCart.matchFulfilled,
      (state, { payload }) => {
        state.cart = payload.products.map((item) => ({
          count: item.count,
          id: item.id,
        }));
        state.items = payload.products.map((product) => ({
          ...product,
          count: 0,
        }));
      }
    );
    builder.addMatcher(
      cartApi.endpoints.addProductToCart.matchFulfilled,
      (state, action) => {
        const productId = action.meta.arg.originalArgs.productId;
        const ind = state.cart.findIndex((item) => productId === item.id);

        if (ind === -1) {
          state.cart = [
            ...state.cart,
            {
              id: productId,
              count: 1,
            },
          ];
          return;
        }
        const newItem = {
          id: productId,
          count: state.cart[ind].count + 1,
        };
        state.cart = updateArr(ind, newItem, state.cart);
      }
    );
    builder.addMatcher(
      cartApi.endpoints.minusProductCart.matchFulfilled,
      (state, action) => {
        const isAll = action.meta.arg.originalArgs.isRemovingAll;
        const productId = action.meta.arg.originalArgs.productId;
        const ind = state.cart.findIndex((item) => productId === item.id);
        if (isAll) {
          state.cart = delFromArr(ind, state.cart);
          return;
        }
        const newItem = {
          ...state.cart[ind],
          count: state.cart[ind].count - 1,
        };
        state.cart = updateArr(ind, newItem, state.cart);
      }
    );
    builder.addMatcher(
      cartApi.endpoints.clearUserCart.matchFulfilled,
      (state, action) => {
        state.cart = [];
        state.items = [];
        localStorage.setItem(KEY, JSON.stringify([]));
      }
    );
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  addLocalItem,
  deleteProductFromCart,
  minusItemFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
