import { IStateSchema } from "../store";

export const isAuthSelector = (state: IStateSchema) => !!state.auth.userId;
export const AuthNameSelector = (state: IStateSchema) => state.auth.userId;
