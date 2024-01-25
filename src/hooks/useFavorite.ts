import { isAuthSelector } from "../Store/auth/auth.selector";
import {
  useAddFavoriteMutation,
  useMinusFavoriteMutation,
} from "../Store/favorites/favorites.api";
import {
  addFavorite,
  removeFavorite,
} from "../Store/favorites/favorites.slice";

import { useAppDispatch, useAppSelector } from "../Store/store";

export const useFavorite = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(isAuthSelector);
  const [addFavoriteM, { isLoading: isLoadingAdd }] = useAddFavoriteMutation();
  const [minusProduct, { isLoading: isLoadingDelete }] =
    useMinusFavoriteMutation();

  const handleAddToFavorite = (productId: string) => {
    if (isAuth) {
      addFavoriteM({ productId });
      return;
    }
    dispatch(addFavorite(productId));
  };

  const handleDeleteFromFavorite = (productId: string) => {
    if (isAuth) {
      minusProduct({ productId });
      return;
    }
    dispatch(removeFavorite(productId));
  };

  return {
    isLoading: isLoadingAdd || isLoadingDelete,
    addToFavorite: handleAddToFavorite,
    deleteFromFavorite: handleDeleteFromFavorite,
  };
};
