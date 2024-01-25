import { IStateSchema, RootState } from '../store';

export const selectFavorites = (state: IStateSchema) => state.favorites.items;
export const selectFavoritesIds = (state: IStateSchema) => state.favorites.ids;
export const selectFavoritesItemById = (state: IStateSchema, id: string) =>
  !!state.favorites.ids.find((obj) => obj === id);
