import { isAuthSelector } from "../Store/auth/auth.selector";
import {
  useAddProductToCartMutation,
  useClearUserCartMutation,
  useMinusProductCartMutation,
} from "../Store/cart/cart.api";
import { useAppDispatch, useAppSelector } from "../Store/store";
import {
  addLocalItem,
  clearCart,
  deleteProductFromCart,
  minusItemFromCart,
} from "../Store/cart/cart.slice";
import { useEffect } from "react";

export const useCart = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const [addProductToCart, { isLoading: isLoadingAdd }] =
    useAddProductToCartMutation();
  const [deleteProductToCart, { isLoading: isLoadingDelete }] =
    useMinusProductCartMutation();
  const [clearUserCart, { isLoading: isLoadingClear }] =
    useClearUserCartMutation();

    
    useEffect(() => {
    if (isAuth) {
      clearCart();
      localStorage.removeItem("cart");
    }
  }, [isAuth]);

  const handleAddToCart = (productId: string) => {
    if (isAuth) {
      addProductToCart({ productId });
      return;
    }
    dispatch(addLocalItem(productId));
  };

  const handleDeleteFromCart = (productId: string) => {
    if (isAuth) {
      deleteProductToCart({ productId, isRemovingAll: false });
      return;
    }
    dispatch(minusItemFromCart(productId));
  };

  const handleDeleteFullProductCart = (productId: string) => {
    if (isAuth) {
      deleteProductToCart({ productId, isRemovingAll: true });
      return;
    }
    dispatch(deleteProductFromCart(productId));
  };

  const handleClearCart = () => {
    if (isAuth) {
      clearUserCart();
      return;
    }
    dispatch(clearCart());
  };

  return {
    isLoading: isLoadingAdd || isLoadingDelete || isLoadingClear,
    addToCart: handleAddToCart,
    minusFromCart: handleDeleteFromCart,
    deleteFromCart: handleDeleteFullProductCart,
    clearCart: handleClearCart,
  };
};
