import { useState } from 'react';
import { siteSettings } from '@/settings/site-settings';
import Scrollbar from '@/components/ui/scrollbar';
import { IoIosArrowDown } from 'react-icons/io';
import Logo from '@/components/ui/logo';
import { useUI } from '@/contexts/ui.context';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoYoutube,
  IoClose,
} from 'react-icons/io5';
import Link from 'next/link';
import WriteLogo from '@/components/ui/Writelogo';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import UserIcon from '@/components/iconsCode/user-icon';
import AuthMenu from './AuthMenu';
import { ROUTES } from '@/utils/routes';
import { useModalAction } from '@/components/common/modal/modal.context';

const social = [
  {
    id: 0,
    link: 'https://www.facebook.com/redqinc/',
    icon: <FaTelegramPlane />,
    className: 'telegram',
    title: 'text-telegran',
  },
  {
    id: 3,
    link: 'https://www.instagram.com/redqinc/',
    icon: <FaInstagram />,
    className: 'instagram',
    title: 'text-instagram',
  },
];

export default function MobileMenu() {
  const [activeMenus, setActiveMenus] = useState<any>([]);
  const { site_header } = siteSettings;
  const { closeSidebar, isAuthorized } = useUI();
  const { t } = useTranslation('menu');
  const handleArrowClick = (menuName: string) => {
    let newActiveMenus = [...activeMenus];
    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }
    setActiveMenus(newActiveMenus);
  };

  const { openModal } = useModalAction();

  function handleLogin() {
    openModal('LOGIN_VIEW');
    closeSidebar();
  }

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex, className = '' }: any) =>
    data.label && (
      <li className={`transition-colors duration-200 ${className}`}>
        <div className="flex items-center justify-between relative">
          <Link
            href={data.path}
            className="w-full menu-item relative py-4 ps-5 md:ps-7 pe-4 text-skin-base transition duration-300 ease-in-out">
            <span className="block w-full" style={{ fontSize: '18px' }} onClick={closeSidebar}>
              {t(`${data.label}`)}
            </span>
          </Link>
          {hasSubMenu && (
            <div
              className="cursor-pointer w-full h-8 text-[17px] px-5 flex-shrink-0 flex items-center justify-end text-skin-base text-opacity-80 absolute end-0 top-1/2 transform -translate-y-1/2"
              onClick={() => handleArrowClick(menuName)}>
              <IoIosArrowDown
                className={`transition duration-200 ease-in-out transform ${
                  activeMenus.includes(menuName) ? '-rotate-180' : 'rotate-0'
                }`}
              />
            </div>
          )}
        </div>
        {hasSubMenu && (
          <SubMenu
            dept={dept}
            data={data.subMenu}
            toggle={activeMenus.includes(menuName)}
            menuIndex={menuIndex}
          />
        )}
      </li>
    );

  const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <ul className={cn('mobile-sub-menu', dept > 2 && '-ms-4')}>
        {data?.map((menu: any, index: number) => {
          const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

          return (
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.subMenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
              className={cn(dept > 1 && 'ps-4', dept > 2 && 'ps-8')}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="flex flex-col">
          <div className="w-full border-b border-skin-base flex justify-between items-center relative ps-5 md:ps-7 flex-shrink-0 py-0.5">
            <div role="button" onClick={closeSidebar} className="inline-flex">
              <WriteLogo />
            </div>

            <button
              className="flex text-2xl items-center justify-center px-4 md:px-5 py-5 lg:py-8 focus:outline-none transition-opacity hover:opacity-60 custom-mbtn"
              onClick={closeSidebar}
              aria-label="close">
              <IoClose className="text-skin-base mt-0.5" />
            </button>
          </div>

          <Scrollbar className="menu-scrollbar flex-grow mb-auto">
            <div
              className="flex flex-col py-6 px-0 text-skin-base  mt-5"
              style={{
                paddingBottom: '0.875rem',
              }}>
              <ul className="mobile-menu">
                {site_header.menu.map((menu, index) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      // hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                    />
                  );
                })}
              </ul>
            </div>
          </Scrollbar>
          {/* <div
            className="hidden lg:flex items-center flex-shrink-0 "
            style={{
              display: 'flex',
              paddingLeft: '1.25rem',
              fontSize: '16px',
            }}>
            <AuthMenu
              isAuthorized={isAuthorized}
              href={ROUTES.ACCOUNT}
              btnProps={{
                children: t('Авторизоваться'),
                onClick: handleLogin,
              }}>
              {t('Norikas95@mail.ru')}
            </AuthMenu>
            <UserIcon className="text-skin-base text-opacity-40"/>
          </div> */}
        </div>
        <div className="flex items-center justify-center bg-skin-fill border-t border-skin-base px-7 flex-shrink-0 space-s-1 py-5">
          {social?.map((item, index) => (
            <Link
              href={item.link}
              className={`text-heading space-s-6 transition duration-300 ease-in text-skin-base text-opacity-60 hover:text-skin-primary ${item.className}`}
              key={index}>
              <span className="sr-only">{t(`${item.title}`)}</span>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
