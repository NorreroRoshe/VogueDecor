import { ICollection } from "./collection.types";

export interface IGetCollectionRes {
  collections: ICollection[];
}

export interface IGetCollectionReq {
  name?: string;
  From?: number;
  Count?: number;
}
