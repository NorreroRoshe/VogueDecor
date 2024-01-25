import { StaticImageData } from "next/image";
import bra from "../assets/img/bravormain.png";

// 0 = NONE
//
// 1 = CHANDELIER
//
// 2 = SCONCE
//
// 3 = FLOOR_LAMP
//
// 4 = TABLE_LAMP
//
// 5 = PENDANT_LIGHT
//
// 6 = STREET_LIGHTING
//
// 7 = ACCESSORY

export interface ITypeLight {
      name?: string;
      ind?: string;
      eng?: string;
      img?: string | StaticImageData;
}

export const lightCategory: ITypeLight[] = [
      {
            name: "Люстры",
            ind: '1',
            eng: "Types=1",
            img: "https://Vogue Decor.store/image/cache/catalog/Products/105-600b+400s%20br%20off-350x281.jpg",
      },
      {
            name: "Бра",
            ind: '2',
            eng: "Types=2",
            img: 'https://Vogue Decor.store/image/cache/catalog/Products/1021-2%20si%20off-1200x900.jpg',
      },
      {
            name: "Торшеры",
            ind: '3',
            eng: "Types=3",
            img: "https://Vogue Decor.store/image/cache/catalog/Products/102-3f%20gold%20off-350x281.jpg",
      },
      {
            name: "Настольные лампы",
            ind: '4',
            eng: "Types=4",
            img: "https://Vogue Decor.store/image/cache/catalog/Products/9867-1t%20ni%20off-350x281.jpg",
      },
      {
            name: "Подвесные",
            ind: '5',
            eng: "Types=5",
            img: "https://Vogue Decor.store/image/cache/catalog/Products/8106-1L%20br%20off-350x281.jpg",
      },
];

export const chandelierTypes: ITypeLight[] = [
      {
            name: "Большие люстры",
            ind: '1',
            eng: "LARGE",
      },
      {
            name: "С хрусталями",
            ind: '2',
            eng: "CRYSTAL",
      },
      {
            name: "С абажурами",
            ind: '3',
            eng: "LAMPSHADE",
      },
      {
            name: "Подвесные",
            ind: '4',
            eng: "SUSPENDED",
      },
      {
            name: "Потолочные",
            ind: '5',
            eng: "CEILING",
      },
      {
            name: "Овальные",
            ind: '6',
            eng: "ELLIPTICAL",
      },
];

































//Пробный товар


export type Product = {
  id?: string;
  name?: string;
  description?: string;
  type?: number;
  article?: string;
  price?: number;
  colors?: number[];
  diameter?: number;
  height?: number;
  length?: number;
  width?: number;
  discount?: number;
  chandelierTypes?: number[];
  plinth?: string;
  lampCount?: number;
  rating?: number;
  availability?: number;
  collectionId?: string;
  urls?: string[];
  files?: IFileUrl[];
};


export interface IFileUrl {
  name: string;
  url: string;
}


export const ProbnieProducti: Product[] = [
  {
    id: '0',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '1',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '2',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '3',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '4',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '5',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '6',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
  {
    id: '7',
    name: 'Люстра',
    description: 'Супер крутая шиши',
    type: 1,
    article: '900/180/76 black bronze',
    price: 34890,
    colors: [1,3],
    diameter: 600,
    height: 800,
    length: 500,
    width: 600,
    discount: 50,
    chandelierTypes: [1, 5],
    plinth: 'E14',
    lampCount: 3,
    rating: 5,
    availability: 19,
    collectionId: '8101',
    urls: [
      'https://Vogue Decor.store/image/cache/catalog/Products/106-500%20br%20off-1200x900.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/bd5/490_490_0/bd53ae5fcf8e9f1eb52e646ca05a39b5.jpg',
      'https://www.de-light.ru/upload/resize_cache/iblock/da0/490_490_0/da055f1411a67fccc4d9c5df3de9a469.jpg'
    ]
  },
];