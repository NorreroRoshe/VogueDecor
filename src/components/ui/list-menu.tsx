import { useTranslation } from 'next-i18next';
import { IoIosArrowForward } from 'react-icons/io';
import cls from '../../layouts/header/header.module.scss';
import Link from 'next/link';

const ListMenu = ({ dept, data, hasSubMenu, menuIndex, isFirstElement }: any) => {
  const { t } = useTranslation('menu');
  const isSale = data.id === 9; // Проверка, является ли элемент с id: 9

  return (
    <li className={`relative ${isFirstElement ? cls.listmenu_item : ''}${isSale ? cls.sale_item : ''}`}>
      <Link
        href={data.path}
        className={`flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 ${isFirstElement ? cls.listmenu_link_first : ''} ${cls.listmenu_link} ${isSale ? cls.sale_link : ''}`}
      >
        {t(data.label)}
        {data.subMenu && (
          <span className="text-sm mt-0.5 shrink-0">
            <IoIosArrowForward className="text-body transition duration-300 ease-in-out group-hover:text-skin-base" />
          </span>
        )}
      </Link>
      {hasSubMenu && (
        <SubMenu dept={dept} data={data.subMenu} menuIndex={menuIndex} />
      )}
    </li>
  );
};

const SubMenu: React.FC<any> = ({ dept, data, menuIndex }) => {
  dept = dept + 1;
  return (
    <ul className="subMenuChild shadow-subMenu bg-skin-fill absolute z-0 end-full 2xl:end-auto 2xl:start-full opacity-0 invisible top-4 w-56 py-3">
      {data?.map((menu: any, index: number) => {
        const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`;
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
  );
};

export default ListMenu;
