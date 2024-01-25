import { IStateSchema } from "../store";

export const selectCollection = (state: IStateSchema) =>
  state.collection.collection;
  export const windowCollection = (state: IStateSchema) =>
  state.collection.windwoCollection;
export const selectCurrentCollection = (state: IStateSchema, id: string) =>
  state.collection.collection.find((col) => col.id === id);
