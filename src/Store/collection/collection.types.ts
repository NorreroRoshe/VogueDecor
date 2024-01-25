export type ICollection = {
  collections: any;
  id: string;
  name: string;
  preview: string;
};

export interface ICollectionSliceState {
  collection: ICollection[];
  windwoCollection: ICollection[];
  collectionfilters: IColFilter;
}

export interface IColFilter {
  From?: number;
  Count?: number;
}