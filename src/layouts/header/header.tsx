import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { useUI } from '@contexts/ui.context';
import { siteSettings } from '@settings/site-settings';
import { addActiveScroll } from '@utils/add-active-scroll';
import Container from '@components/ui/container';
import Logo from '@components/ui/logo';
import HeaderMenu from './header-menu';
import Search from '@components/common/search';
import SearchBig from '@components/common/searchBig';
import SearchIcon from '@components/iconsCode/search-icon';
import { useModalAction } from '@components/common/modal/modal.context';
import useOnClickOutside from '@utils/use-click-outside';
import cls from './header.module.scss';
import HeaderPhone from "../Header/HeaderPhone";
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});
const FavoritesButton = dynamic(() => import('@components/cart/favorites-button'), {
  ssr: false,
});
const AuthButton = dynamic(() => import('@/components/auth/auth-button'), {
  ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;

const Header: React.FC = () => {
  const {
    displaySearch,
    displayMobileSearch,
    openSearch,
    closeSearch
  } = useUI();
  const { openModal } = useModalAction();
  const siteHeaderRef = useRef() as DivElementRef;
  const siteSearchRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef, 40);
  useOnClickOutside(siteSearchRef, () => closeSearch());
  function handleLogin() {
    openModal('LOGIN_VIEW');
  }

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className={cn(
        'header-two sticky-header sticky top-0 z-20 lg:relative w-full h-16 lg:h-auto',
        displayMobileSearch && 'active-mobile-search'
      )}
    >
      <div className="innerSticky lg:w-full transition-all duration-200 ease-in-out body-font z-20">
        <Search
          searchId="mobile-search"
          className="top-bar-search hidden lg:max-w-[600px] absolute z-30 px-4 md:px-6 top-1"
        />
        {/* End of Mobile search */}
        <Container className={`top-bar h-16 lg:h-auto flex items-center justify-between py-3 ${cls.head_cont}`}>
          <Logo className="logo -mt-1.5 md:-mt-1" style={{marginRight: '-40px'}}/>
          {/* End of logo */}

          {/* <SearchLikeCart isBurger={isBurger} setBurger={setBurger} /> */}

         
          <Search
            searchId="top-bar-search"
            className={`lg:flex lg:max-w-[350px] lg:ms-8 lg:me-5 ${cls.header_search_main} ${cls.header_search_main_up}`}
          />
          {/* End of search */}

          <div className="flex flex-shrink-0 space-s-5 xl:space-s-7">
            <HeaderPhone />
            <div className={`flex flex-shrink-0 space-s-5 xl:space-s-7 ${cls.header_search_main_dev}`}>
            <AuthButton className="lg:flex" />
            <FavoritesButton className="lg:flex" />
            <CartButton className="lg:flex" />
          </div>
          </div>
          {/* End of auth & lang */}
        </Container>
        <div className={cls.header_search_main_black}>
            <SearchBig
              searchId="top-bar-search"
              className={`lg:flex lg:max-w-[650px] ${cls.header_search_main}  ${cls.header_search_main_down}`}
            />
            <div className={`flex flex-shrink-0 space-s-5 xl:space-s-7 ${cls.header_search_main_dek}`}>
            <AuthButton className="lg:flex" />
            <FavoritesButton className="lg:flex" />
            <CartButton className="lg:flex" />
          </div>
          </div>
        {/* End of top part */}

        <div className={`navbar bg-skin-fill hidden ${cls.header_search_main_wrapp}`}>
          <Container className={`h-16 flex justify-between items-center ${cls.head_cont}`}>
          <Logo className="logo -mt-1.5 md:-mt-1" />
          <Search
            searchId="top-bar-search"
            className={`lg:flex lg:max-w-[350px] lg:ms-8 lg:me-5 ${cls.header_search_main} ${cls.header_search_main_up}`}
          />
          <div className="flex flex-shrink-0 space-s-5 xl:space-s-7">
            <HeaderPhone />
            <div className={`flex flex-shrink-0 space-s-5 xl:space-s-7 ${cls.header_search_main_dev}`}>
            <AuthButton className="lg:flex" />
            <FavoritesButton className="lg:flex" />
            <CartButton className="lg:flex" />
          </div>
          </div>
          </Container>
          {/* <Container className={`"h-16 flex justify-between items-center`}> */}
          <div className={cls.header_search_main_black}>
            <SearchBig
              searchId="top-bar-search"
              className={`lg:flex lg:max-w-[650px] ${cls.header_search_main}  ${cls.header_search_main_down}`}
            />
            <div className={`flex flex-shrink-0 space-s-5 xl:space-s-7 ${cls.header_search_main_dek}`}>
            <AuthButton className="lg:flex" />
            <FavoritesButton className="lg:flex" />
            <CartButton className="lg:flex" />
          </div>
          {/* </Container> */}
        </div>
        </div>
        </div>
          <Container className={`"h-16 flex justify-between items-center ${cls.header_main_menuhead}`}>
            <HeaderMenu
              data={site_header.menu}
              className="flex transition-all duration-200 ease-in-out"
            />
          </Container>
    </header>
  );
};

export default Header;
