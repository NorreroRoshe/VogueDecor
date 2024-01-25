import React from 'react';
import { useState, useEffect } from 'react';
import cls from './Header.module.scss';
// import { useRefreshTokenQuery, useSignInMutation } from "../../Store/auth/auth.api";
import Navbar from './Navbar';
import SecondMenu from './SecondMenu';
import SearchLikeCart from './SearchLikeCart';
import HeaderSignPhone from './HeaderSignPhone';
import HeaderLogo from './HeaderLogo';
import HeaderMobileNavigation from './HeaderMobileNavigation';
import { useCart } from '../../hooks/useCart';
import { useGetUserCartMutation } from '../../Store/cart/cart.api';
import { useGetUserFavoritesMutation } from '../../Store/favorites/favorites.api';

export const Header = () => {
  // const {} = useRefreshTokenQuery();
  // const [signIn] = useSignInMutation();
  // const [getCart] = useGetUserCartMutation();
  // const [getFavorites] = useGetUserFavoritesMutation();
  // const { clearCart } = useCart();
  const [isBurger, setBurger] = useState<boolean>(false);

  // const handleAuth = () => {
  //       signIn({
  //             email: "lightninhg-shop@outlook.com",
  //             password: "Cefd-21avt-pdc",
  //             rememberMe: true,
  //       }).then(() => {
  //             getFavorites();
  //             getCart();
  //       });
  // };

  useEffect(() => {
    localStorage.setItem('handleSearch', '');
    localStorage.setItem('SearchQuery', '');
  }, []);

  return (
    <header className={cls.pages_header}>
      {/* <button onClick={handleAuth}>hehe</button> */}
      <nav className={`${cls.glav_menus} ${isBurger ? cls.glav_menus__mob : ''}`}>
        <Navbar />
        <SecondMenu />
      </nav>
      <div className={cls.logo_an}>
        <div className={cls.header_icons_an}>
          <HeaderSignPhone />
          <SearchLikeCart isBurger={isBurger} setBurger={setBurger} />
        </div>
        <HeaderLogo />
        <HeaderMobileNavigation />
      </div>
    </header>
  );
};
