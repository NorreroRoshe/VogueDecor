export type Sort = {
  name: string;
    sortProperty: {
      direction: 'asc' | 'desc';
      name: 'raiting' | 'price' | 'name';
    }
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  sort: {
    name: string;
    sortProperty: {
      name: 'raiting' | 'price' | 'name';
      direction: 'asc' | 'desc';
    }
  }
}