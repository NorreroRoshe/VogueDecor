import React, {useState, useEffect} from 'react';
import { FaChevronDown } from 'react-icons/fa';
import ListMenu from '@components/ui/list-menu';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Link from 'next/link';
import cls from './header.module.scss';
import PupularItemMenu from '@/components/ui/popular-item-menu';

interface MenuProps {
  data: any;
  className?: string;
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
  const { t } = useTranslation('menu');

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={cn(
        'headerMenu flex w-full',
        cls.main_header_menu,
        className
      )}
    >
      {data?.map((item: any) => (
        <div
          className={`menuItem group py-3 ${
            item.subMenu ? '' : ''
          }`}
          key={item.id}
        >
          {item.path &&
          <Link
            href={item.path}
            className={`inline-flex items-center text-sm lg:text-15px text-skin-base py-2 font-normal relative 
            group-hover:text-skin-black group-hover:font-medium ${
              item.path === 'default' ? `group-hover:font-normal ${cls.main_sub_link_default}` : ''
            } ${cls.main_sub_link}`}
          >
            {t(item.label)}
            {(item?.columns || item.subMenu) && (
              <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-skin-base opacity-40 group-hover:text-skin-black">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </Link>}
          
          {!item.path &&
          <span
            className={`inline-flex items-center text-sm lg:text-15px text-skin-base py-2 font-normal relative 
            group-hover:text-skin-black group-hover:font-medium ${
              item.none === 'default' ? `group-hover:font-normal ${cls.main_sub_link_default}` : ''
            } ${cls.main_sub_link}`}
          >
            {t(item.label)}
            {(item?.columns || item.subMenu) && (
              <span className="text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-skin-base opacity-40 group-hover:text-skin-black">
                <FaChevronDown className="transition duration-300 ease-in-out transform group-hover:-rotate-180" />
              </span>
            )}
          </span>}




          {(item?.subMenu || item?.subMenu1) && (
            <div className={`subMenu shadow-dropDown bg-skin-fill z-30 absolute start-0 opacity-0 group-hover:opacity-100 ${cls.substyle}`}>
              


            <div className={cls.substyle_wrapp}>

              {item.subMenu && Array.isArray(item.subMenu) && (
                <ul className={`text-body text-sm py-5 ${cls.substyle_ul}`}>
                  {item.subMenu.map((menu: any, index: number) => {
                    const dept: number = 1;
                    const menuName: string = `sidebar-menu-${dept}-${index}`;
                    const isFirstElement = index === 0; // Проверка, является ли элемент первым

                    return (
                      <ListMenu
                        dept={dept}
                        data={menu}
                        hasSubMenu={menu.subMenu}
                        menuName={menuName}
                        key={menuName}
                        menuIndex={index}
                        isFirstElement={isFirstElement}
                      />
                    );
                  })}
                </ul>
              )}
              {item.subMenu1 && Array.isArray(item.subMenu1) && (
                <ul className={`text-body text-sm py-5 ${cls.substyle_ul}`}>
                  {item.subMenu1.map((menu: any, index: number) => {
                    const dept: number = 1;
                    const menuName: string = `sidebar-menu-${dept}-${index}`;
                    const isFirstElement = index === 0; // Проверка, является ли элемент первым

                    return (
                      <ListMenu
                        dept={dept}
                        data={menu}
                        hasSubMenu={menu.subMenu}
                        menuName={menuName}
                        key={menuName}
                        menuIndex={index}
                        isFirstElement={isFirstElement}
                      />
                    );
                  })}
                </ul>
              )}

              {item.subMenu2 && Array.isArray(item.subMenu2) && (
                <ul className={`text-body text-sm py-5 ${cls.substyle_ul}`}>
                  {item.subMenu2.map((menu: any, index: number) => {
                    const dept: number = 1;
                    const menuName: string = `sidebar-menu-${dept}-${index}`;
                    const isFirstElement = index === 0; // Проверка, является ли элемент первым

                    return (
                      <ListMenu
                        dept={dept}
                        data={menu}
                        hasSubMenu={menu.subMenu}
                        menuName={menuName}
                        key={menuName}
                        menuIndex={index}
                        isFirstElement={isFirstElement}
                      />
                    );
                  })}
                </ul>
              )}

            </div>
            <div className={cls.substyle_wrapp_three}>
            <li className={`relative py-5 ${cls.listmenu_item_three}`}>
                    <Link
                href={'data.path'}
                className={`flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 ${cls.listmenu_link}`}
              >
                Популярные позиции
              </Link>
              </li>
            {item.subMenu3 && Array.isArray(item.subMenu3) && (
              <ul className={`text-body text-sm py-5 ${cls.substyle_ul_popular_list_subtree}`}>
                {item.subMenu3.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;
                  const isFirstElement = index === 0; // Проверка, является ли элемент первым

                  return (
                    <PupularItemMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                      isFirstElement={isFirstElement}
                      screenWidth={screenWidth}
                    />
                  );
                })}
              </ul>
            )}
            </div>

            </div>
          )}
        </div>
      ))}
    </nav>










        
  );
};

export default HeaderMenu;







  {/* {item?.subMenu && Array.isArray(item.subMenu) && (
            <div className={`subMenu shadow-dropDown bg-skin-fill z-30 absolute start-0 opacity-0 group-hover:opacity-100 ${cls.substyle}`}>
              <ul className={`"text-body text-sm py-5 ${cls.substyle_ul}`}>
                {item.subMenu.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;
                  const isFirstElement = index === 0; // Проверка, является ли элемент первым

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                      isFirstElement={isFirstElement}
                    />
                  );
                })}
              </ul>

              <ul className={`"text-body text-sm py-5 ${cls.substyle_ul}`}>
                {item.subMenu.map((menu: any, index: number) => {
                  const dept: number = 1;
                  const menuName: string = `sidebar-menu-${dept}-${index}`;
                  const isFirstElement = index === 0; // Проверка, является ли элемент первым

                  return (
                    <ListMenu
                      dept={dept}
                      data={menu}
                      hasSubMenu={menu.subMenu}
                      menuName={menuName}
                      key={menuName}
                      menuIndex={index}
                      isFirstElement={isFirstElement}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      ))}
    </nav> */}