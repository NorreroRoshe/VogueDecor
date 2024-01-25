import { CNFlag } from '@/components/iconsCode/language/CNFlag';
import { DEFlag } from '@/components/iconsCode/language/DEFlag';
import { ILFlag } from '@/components/iconsCode/language/ILFlag';
import { SAFlag } from '@/components/iconsCode/language/SAFlag';
import { USFlag } from '@/components/iconsCode/language/USFlag';
import sd from '@/assets/img/bravormain.png';

export const siteSettings = {
  name: 'Vogue Decor',
  description: 'Офицальный представитель фабрики Vogue Decor в России',
  author: {
    name: 'Vogue Decor',
    websiteUrl: 'http://VogueDecor.ru/Home',
    address: '',
  },
  logo: {
    // url: '/assets/img/Buttlogo.png',
    alt: 'BtterflyLC',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  site_header: {
    menu: [
      {
        id: 1,
        path: '/Chapter/Light',
        label: 'Свет',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Light',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Light/Lyustri?Types=1',
            label: 'Люстры',
            
          },
          {
            id: 2,
            path: '/Chapter/Light/Bra?Types=2',
            label: 'Бра',
          },
          {
            id: 3,
            path: '/Chapter/Light/NastolnieLampi?Types=3',
            label: 'Настольные лампы',
          },
          {
            id: 4,
            path: '/Chapter/Light/Torsheri?Types=4',
            label: 'Торшеры',
          },
          {
            id: 5,
            path: '/Chapter/Light/PodvesnoiSvet?Types=5',
            label: 'Подвесные светильники',
          },
          {
            id: 6,
            path: '/Chapter/Light/PotolochniySvet?Types=6',
            label: 'Потолочные светильники',
          },
          {
            id: 7,
            path: '/Chapter/Light/UlichniySvet?Types=7',
            label: 'Уличный свет',
          },
          {
            id: 8,
            path: '/Chapter/Light/PodsvetkaDlyaKartin?Types=8',
            label: 'Подсветка для картин',
          },
          {
            id: 10,
            path: '/Chapter/Light/TrekiSpoti?Types=9',
            label: 'Треки и споты',
          },
          {
            id: 9,
            path: '/Chapter/Light?IsSale=true',
            label: 'Sale',
          },
        ],
        subMenu1: [
          {
            id: 0,
            path: '/Chapter/LightAccessories',
            label: 'Аксессуры к светильникам',
          },
          {
            id: 1,
            path: '/Chapter/LightAccessories/Abajuri',
            label: 'Абажуры',
          },
          {
            id: 2,
            path: '/Chapter/LightAccessories/KolpakiKrepleniya',
            label: 'Колпаки и крепления',
          },
          {
            id: 3,
            path: '/Chapter/LightAccessories/Lampochki',
            label: 'Лампочки',
          },
          {
            id: 6,
            path: '/Chapter/LightAccessories/SvetodiodnieLenti',
            label: 'Светодиодная лента / подсветка',
          },
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и установка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и монтаж',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярная позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Люстра',
            article: '9027/8 bronze',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
            // url: '../assets/img/Buttlogo.png',
          }
        ],
      },
      {
        id: 2,
        path: '/Chapter/Furniture',
        label: 'Мебель',
        subMenu: [
          {
            id: 1,
            path: '/Chapter/Furniture',
            label: 'Все категории',
          },
          {
            id: 2,
            path: '/Chapter/Furniture/Divani?Types=1',
            label: 'Диваны',
          },
          {
            id: 3,
            path: '/Chapter/Furniture/Kresla?Types=2',
            label: 'Кресла',
          },
          {
            id: 4,
            path: '/Chapter/Furniture/Stoli?Types=3',
            label: 'Столы',
          },
          {
            id: 5,
            path: '/Chapter/Furniture/Stulya?Types=4',
            label: 'Стулья',
          },
          {
            id: 6,
            path: '/Chapter/Furniture/KomodiKonsoli?Types=5',
            label: 'Комоды и консоли',
          },
          {
            id: 7,
            path: '/Chapter/Furniture/Krovati?Types=6',
            label: 'Кровати',
          },
          {
            id: 8,
            path: '/Chapter/Furniture/Matrasi?Types=7',
            label: 'Матрасы',
          },
          {
            id: 10,
            path: '/Chapter/Furniture/PufiBanketki?Types=8',
            label: 'Пуфы и банкетки',
          },
          {
            id: 9,
            path: '/Chapter/Furniture?IsSale=true',
            label: 'Sale',
          }
        ],
        // subMenu1: [
        //   {
        //     id: 0,
        //     path: '/Chapter/Furniture/Accessories',
        //     label: 'Аксессуры для мебели',
        //   },
        //   {
        //     id: 1,
        //     path: '/sub-menu-1',
        //     label: 'Средство по уходу за обивкой',
        //   },
        //   {
        //     id: 2,
        //     path: '/sub-menu-2',
        //     label: 'Декоративные подушки',
        //   },
        //   {
        //     id: 3,
        //     path: '/vintage',
        //     label: 'Пледы',
        //   },
        //   {
        //     id: 4,
        //     path: '/standard',
        //     label: 'Покрывала',
        //   }
        // ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и сборка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и сборка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярная позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Диван Polo Rofo',
            article: '12536',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
            // url: '../assets/img/Buttlogo.png',
          }
        ],
      },
      {
        id: 3,
        path: '/Chapter/Mirrors',
        label: 'Зеркала',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Mirrors',
            label: 'Все категории',
          },
          // {
          //   id: 1,
          //   path: '/Chapter/Mirrors/Spodsvetkoi',
          //   label: 'С подсветкой',
          // },
          {
            id: 2,
            path: '/Chapter/Mirrors/Artobj?Types=1',
            label: 'Зеркало - пано / Арт-объекты',
          },
          {
            id: 3,
            path: '/Chapter/Mirrors/Sprintami?Types=2',
            label: 'С принтами',
          },
          {
            id: 4,
            path: '/Chapter/Mirrors/Solnishko?Types=3',
            label: 'Зеркало - солнышко',
          },
          {
            id: 5,
            path: '/Chapter/Mirrors/DesignMetall?Types=4',
            label: 'Дизайнерские с металлом',
          },
          {
            id: 6,
            path: '/Chapter/Mirrors/Klassicheskie?Types=5',
            label: 'Классические',
          },
          {
            id: 7,
            path: '/Chapter/Mirrors/Nastolnie?Types=6',
            label: 'Настольные зеркала',
          },
          {
            id: 8,
            path: '/Chapter/Mirrors/Napolnie?Types=7',
            label: 'Напольные зеркала',
          },
          {
            id: 10,
            path: '/Chapter/Mirrors/Pryamougolnie?Types=8',
            label: 'Прмоугольные',
          },
          {
            id: 11,
            path: '/Chapter/Mirrors/Kruglie?Types=9',
            label: 'Круглые',
          },
          // {
          //   id: 12,
          //   path: '/Chapter/Mirrors/Kaplevidnie?Types=1',
          //   label: 'Каплевидные',
          // },
          {
            id: 13,
            path: '/Chapter/Mirrors/Sderevom?Types=10',
            label: 'С деревом',
          },
          {
            id: 9,
            path: '/Chapter/Mirrors?IsSale=true',
            label: 'Sale',
          },
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и установка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия монтажа',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и монтаж',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 4,
        path: '/Chapter/Carpets',
        label: 'Ковры',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Carpets',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Carpets/Pryamougolnie?Types=1',
            label: 'Прямоугольные',
          },
          {
            id: 2,
            path: '/Chapter/Carpets/Kvadratnie?Types=2',
            label: 'Квадратные',
          },
          {
            id: 3,
            path: '/Chapter/Carpets/Kruglie?Types=3',
            label: 'Круглые',
          },
          {
            id: 4,
            path: '/Chapter/Carpets/Ovalnie?Types=4',
            label: 'Овальные',
          },
          {
            id: 5,
            path: '/Chapter/Carpets/Dorojki?Types=5',
            label: 'Дорожки',
          },
          {
            id: 6,
            path: '/Chapter/Carpets/Nestandartnie?Types=6',
            label: 'Нестандартные',
          },
          {
            id: 9,
            path: '/Chapter/Carpets?IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 5,
        path: '/Chapter/GoodsForHome',
        label: 'Товары для дома',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/GoodsForHome',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/GoodsForHome/Tarelki?Types=1',
            label: 'Дизайнерские тарелки',
          },
          {
            id: 2,
            path: '/Chapter/GoodsForHome/Stremyanki?Types=2',
            label: 'Стремянки и скамьи',
          },
          {
            id: 3,
            path: '/Chapter/GoodsForHome/Sushilki?Types=3',
            label: 'Сушилки',
          },
          {
            id: 4,
            path: '/Chapter/GoodsForHome/Gladilki?Types=4',
            label: 'Гладильные доски',
          },
          {
            id: 5,
            path: '/Chapter/GoodsForHome/VeshalkiNapolnie?Types=5',
            label: 'Вешалки напольные',
          },
          {
            id: 6,
            path: '/Chapter/GoodsForHome/VeshalkiNastennie?Types=6',
            label: 'Вешалки настенные',
          },
          {
            id: 7,
            path: '/Chapter/GoodsForHome/BathAccess?Types=7',
            label: 'Аксессуары для ванной',
          },
          {
            id: 8,
            path: '/Chapter/GoodsForHome/LojkiObuvi?Types=8',
            label: 'Ложки для обуви',
          },
          {
            id: 10,
            path: '/Chapter/GoodsForHome/VaziPodsvechniki?Types=9',
            label: 'Вазы и подсвечники',
          },
          {
            id: 11,
            path: '/Chapter/GoodsForHome/Podushki?Types=10',
            label: 'Декоративные подушки',
          },
          {
            id: 12,
            path: '/Chapter/GoodsForHome/Pledi?Types=11',
            label: 'Пледы',
          },
          {
            id: 13,
            path: '/Chapter/GoodsForHome/Pokrivala?Types=12',
            label: 'Покрывала',
          },
          // {
          //   id: 14,
          //   path: '/Chapter/GoodsForHome/Podnosi',
          //   label: 'Сервисные столики / подносы',
          // },
          // {
          //   id: 15,
          //   path: '/Chapter/GoodsForHome/Obuvnici',
          //   label: 'Обувницы',
          // },
          {
            id: 9,
            path: '/Chapter/GoodsForHome?IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 6,
        path: '/Chapter/Accessories',
        label: 'Аксессуары',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Accessories',
            label: 'Все категории',
          },
          {
            id: 1,
            path: '/Chapter/Accessories/Statuetki?Types=1',
            label: 'Современные игрушки / статуэтки',
          },
          {
            id: 2,
            path: '/Chapter/Accessories/Watches?Types=2',
            label: 'Часы',
          },
          {
            id: 3,
            path: '/Chapter/Accessories/VaziPodsvechniki?Types=3',
            label: 'Вазы и подсвечники',
          },
          {
            id: 4,
            path: '/Chapter/Accessories/NastolnieIgri?Types=4',
            label: 'Настольные и настенные игры',
          },
          {
            id: 5,
            path: '/Chapter/Accessories/Zonti?Types=5',
            label: 'Зонты',
          },
          {
            id: 6,
            path: '/Chapter/Accessories/PodstavkaDlyaZontov?Types=6',
            label: 'Подставки для зонтов',
          },
          {
            id: 7,
            path: '/Chapter/Accessories/LojkiDlyaObuvi?Types=7',
            label: 'Ложки для обуви',
          },
          {
            id: 8,
            path: '/Chapter/Accessories/DerjateliKnig?Types=8',
            label: 'Держатели книг',
          },
          // {
          //   id: 10,
          //   path: '/Chapter/Accessories/DesignAccess',
          //   label: 'Дизайнерские аксессуары',
          // },
          {
            id: 9,
            path: '/Chapter/Accessories/?IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 7,
        path: '/Chapter/Paintings',
        label: 'Картины',
        subMenu: [
          {
            id: 0,
            path: '/Chapter/Paintings?Types=1',
            label: 'Все картины и панно',
          },
          {
            id: 1,
            path: '/Chapter/Paintings/Artobj?Types=2',
            label: 'Арт-объекты',
          },
          {
            id: 2,
            path: '/Chapter/Paintings/Avtorskie?Types=3',
            label: 'Картины авторские',
          },
          {
            id: 3,
            path: '/Chapter/Paintings/Posteri?Types=4',
            label: 'Постеры',
          },
          {
            id: 4,
            path: '/Chapter/Paintings/WithLego?Types=5',
            label: 'Панно с лего',
          },
          {
            id: 5,
            path: '/Chapter/Paintings/SportStyle?Types=6',
            label: 'Панно в спортивном стиле',
          },
          {
            id: 6,
            path: '/Chapter/Paintings/Reproduction?Types=7',
            label: 'Репродукция',
          },
          {
            id: 9,
            path: '/Chapter/Paintings?IsSale=true',
            label: 'Sale',
          }
        ],
        subMenu2: [
          {
            id: 0,
            path: '/sub-menu-1',
            label: 'Доставка и примерка',
          },
          {
            id: 1,
            path: '/sub-menu-1',
            label: 'Условия доставки',
          },
          {
            id: 2,
            path: '/sub-menu-2',
            label: 'Условия примерки',
          },
          {
            id: 9,
            path: '/vintage',
            label: 'Беспланая доставка и примерка',
          }
        ],
        subMenu3: [
          {
            id: 0,
            path: '/PUPUPU',
            label: 'Популярные позиция',
          },
          {
            id: 1,
            path: '/POPOPOPO',
            label: 'Ковер Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          },
          {
            id: 2,
            path: '/POPOPOPO',
            label: 'Зеркало Sun Polo',
            article: '8575',
            price: '98000₽',
            finalPrice: '88000₽',
            url: sd,
          }
        ],
      },
      {
        id: 8,
        // path: 'default',
        none: 'default',
        label: 'Обои и шторы - скоро!'
      },
     
    ],
    MainMenu: [
      {
        id: 1,
        path: '/AboutUs',
        label: 'О нас',
      },
      {
        id: 1,
        path: '/Outlet',
        label: 'Outlet',
      },
      {
        id: 1,
        path: '/Factory',
        label: 'Производство',
      },
      {
        id: 1,
        path: '/Collaboration',
        label: 'Сотрудниество',
      },
      {
        id: 1,
        path: '/Contacts',
        label: 'Контакты',
      },
      {
        id: 1,
        path: '/DostavkaOplata',
        label: 'Доставка',
      },
    ],
  },
};
