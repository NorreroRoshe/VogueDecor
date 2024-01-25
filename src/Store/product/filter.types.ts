export interface IFilter {
  Types?: number[];
  minPrice?: number;
  maxPrice?: number;
  Colors?: number[];
  MinPrice?: number;
  MaxPrice?: number;
  MinDiameter?: number;
  MaxDiameter?: number;
  MinLampCount?: number;
  MaxLampCount?: number;
  From?: number;
  Count?: number;
  ChandelierTypes?: number[];
  SearchQuery?: string;
  CollectionId?: string;
  IsSale?: boolean;
}
