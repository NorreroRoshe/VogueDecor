import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import cls from './Header.module.scss';
import {
  localCartCountSelector,
  localCartCountsSelector,
  selectCart,
} from '../../Store/cart/cart.selectors';
import { useOutsideAlerter } from '../../hooks/useClickOutside';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { setSearchName } from '../../Store/product/product.slice';
import { useGetSearchProductsMutation } from '../../Store/product/product.api';
import SearchWindow from './SearchWindow';
import { selectFavoritesIds } from '../../Store/favorites/favorites.selectors';
import { searchProduct } from '@/Store/product/product.selectors';
import { useRouter } from 'next/router';
import CartButton from '@/components/cart/cart-button';
import Cart from '@/components/cart/cart';
import { useUI } from '@/contexts/ui.context';
import { Drawer } from '@/components/common/drawer/drawer';
import { getDirection } from '@/utils/get-direction';
import MobileMenu from './mobile-menu';

interface ISearchLikeCartProps {
  isBurger: boolean;
  setBurger: React.Dispatch<React.SetStateAction<boolean>>;
}

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function SearchLikeCart(props: ISearchLikeCartProps) {
  const router = useRouter();
  const { locale } = useRouter();

  const { isBurger, setBurger } = props;
  const { items } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const searchString = useAppSelector((state) => state.product.filters.SearchQuery);

  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const [mobileSearch, setMobileSearch] = React.useState<boolean>(false);

  const [inputValue, setInputValue] = useState('');

  const [getSearchProducts, { }] = useGetSearchProductsMutation();

  const isMounted = React.useRef(false);

  // const cart = useAppSelector((state) => state.cart.cart);

  const { closeSidebar, displaySidebar, openSidebar } = useUI();

  React.useEffect(() => {
    if (isMounted.current) {
      // const json = JSON.stringify(items);
      // localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  const debouncedString = useDebounce(inputValue || '', 1000);

  const handleGetSearchProducts = () => {
    //Какую фуннкцию он выполняет ?
    //Эта функция для того чтобы ее повесить на кнопку поиска , чтобы он начал искать

    getSearchProducts({
      // SearchQuery: debouncedString,
      SearchQuery: debouncedString,
      Count: 3,
    });
    // .then(() => {
    //   setSearchOpen(true);searchString
    // });
  };

  useEffect(() => {
    if (debouncedString !== '') handleGetSearchProducts();
  }, [debouncedString]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(e.target.value));
    setInputValue(e.target.value);
    localStorage.setItem('handleSearch', e.target.value);
  };
  
  const openSearch = () => {
    localStorage.setItem('SearchQuery', inputValue);
    setMobileSearch(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setMobileSearch(false);
  };

  const dir = getDirection(locale);

  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };

  function handleMobileMenu() {
    return openSidebar();
  }

  const sortRef = React.useRef<HTMLDivElement>(null);
  useOutsideAlerter(sortRef, closeSearch);

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      localStorage.setItem('SearchQuery', inputValue);
      handleGetSearchProducts();
      closeSearch();
      router.push('/SearchPage');
    }
  };

  const onKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        closeSearch();
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  useEffect(() => {
    // Обнулять searchString только при переходе на другие страницы, кроме /SearchPage
    if (router.pathname !== '/SearchPage') {
      setInputValue('');
    }
  }, [router.pathname]);

  const favCount = useAppSelector(selectFavoritesIds).length;

  return (
    <div className={cls.header_icons}>
      
      <div ref={sortRef} className={`${cls.header_icon_container} ${cls.header_icon_search}`}>
        <form
          onClick={() => setSearchOpen(true)}
          className={`${cls.header_search__form} ${mobileSearch ? cls.header_search__form_mobile : ''
            }`}>
          <input
            className={`${cls.header_search__form_query} ${mobileSearch ? cls.header_search__input_mobile : ''
              }`}
            type="text"
            name="query"
            value={inputValue}
            onChange={handleSearch}
            placeholder="ЧТО БУДЕМ ИСКАТЬ?"
            autoComplete="off"
            onKeyDown={handleEnterKeyPress}
          />
          <input
            defaultValue={'click'}
            className={cls.header_search__submit}
            id="header_search__submit"
          />
        </form>
        <span
          onClick={closeSearch}
          className={`${cls.header_search__close} ${mobileSearch ? cls.header_search__close_active : ''
            }`}></span>
        <SearchWindow setSearchOpen={setSearchOpen} searchOpen={searchOpen} />

        <Link
          href="/SearchPage"
          onClick={() => {
            openSearch();
            handleGetSearchProducts();
          }}>
          <label className={cls.header_search__in}>
            <svg className={cls.ui_icon} viewBox="0 0 612.01 612.01">
              <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407S377.82,467.8,257.493,467.8z"></path>
            </svg>
          </label>
        </Link>

        <div
          onClick={openSearch}
          className={`${cls.header_search__icon_open} ${mobileSearch ? cls.header_search__icon_close : ''
            }`}>
          <label className={cls.header_search__in}>
            <svg className={cls.ui_icon} viewBox="0 0 612.01 612.01">
              <path d="M606.209,578.714L448.198,423.228C489.576,378.272,515,318.817,515,253.393C514.98,113.439,399.704,0,257.493,0C115.282,0,0.006,113.439,0.006,253.393s115.276,253.393,257.487,253.393c61.445,0,117.801-21.253,162.068-56.586l158.624,156.099c7.729,7.614,20.277,7.614,28.006,0C613.938,598.686,613.938,586.328,606.209,578.714z M257.493,467.8c-120.326,0-217.869-95.993-217.869-214.407S137.167,38.986,257.493,38.986c120.327,0,217.869,95.993,217.869,214.407S377.82,467.8,257.493,467.8z"></path>
            </svg>
          </label>
        </div>
      </div>

      <div className={cls.header_icon_likecart}>
        <div className={cls.header_icon_container}>
          <Link href="/Favourites" className={cls.header_icons__icon}>
            <svg className={cls.ui_icon} viewBox="0 -28 512 512">
              <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"></path>
            </svg>
            <span className={cls.header_icons__total}>{favCount}</span>
          </Link>
        <div className={cls.header_icon_container}>
        </div>
          {/* <Link href="/Cart" className={cls.header_icons__icon}>
            <svg className={cls.ui_icon} viewBox="0 0 469.334 469.333">
              <path d="M458.667,106.667H341.333v-64C341.333,19.135,322.198,0,298.667,0h-128C147.135,0,128,19.135,128,42.667v64H10.667C4.771,106.667,0,111.437,0,117.333v309.333c0,23.531,19.135,42.667,42.667,42.667h384c23.531,0,42.667-19.135,42.667-42.667V117.333C469.333,111.437,464.562,106.667,458.667,106.667 M149.333,42.667c0-11.76,9.573-21.333,21.333-21.333h128c11.76,0,21.333,9.573,21.333,21.333v64H149.333V42.667z M448,426.667c0,11.76-9.573,21.333-21.333,21.333h-384c-11.76,0-21.333-9.573-21.333-21.333V384H448V426.667z M448,362.667H21.333V128H128v32c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667v-32H320v32c0,5.896,4.771,10.667,10.667,10.667c5.895,0,10.667-4.771,10.667-10.667v-32H448V362.667z"></path>
            </svg>
            <span className={cls.header_icons__total}>
              <span className={cls.header_icons__total_count}>{cartCount}</span>
            </span>
          </Link> */}
          <CartButton className="hidden lg:flex" />
        </div>
        <div
          onClick={handleMobileMenu}
          className={`${cls.header_burger} ${isBurger ? cls.header_burger_non : ''}`}></div>
        {/* <div
          onClick={openBurger}
          className={`${cls.header_close} ${isBurger ? cls.burger_close_db : ''}`}></div> */}
      </div>
      <Drawer
        placement={dir === 'rtl' ? 'right' : 'left'}
        open={displaySidebar}
        onClose={closeSidebar}
        contentWrapperStyle={contentWrapperCSS}>
        <MobileMenu />
      </Drawer>
    </div>
  );
}

export default SearchLikeCart;
