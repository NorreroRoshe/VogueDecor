import { useTranslation } from 'next-i18next';
import { IoIosArrowForward } from 'react-icons/io';
import cls from '../../layouts/header/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const PupularItemMenu = ({ dept, data, hasSubMenu, menuIndex, isFirstElement, screenWidth }: any) => {
  const { t } = useTranslation('menu');
  const isSale = data.id === 9;

  const shouldHide = screenWidth < 1200 && data.id === 2;

  if (shouldHide) {
    return null;
  }

  return (




    <li className={`relative ${isFirstElement ? cls.listmenu_item_popular : ''}${isSale ? cls.sale_item_popular : ''}`}>
      <Link
        href={data.path}
        className={`flex items-center justify-between py-2 ps-5 xl:ps-7 pe-3 xl:pe-3.5 ${cls.listmenu_link} ${isSale ? cls.sale_link : ''}`}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}
      >
        {data.url && (
          <Image
          width={400}
          height={300}
          src={data.url}
          alt={''}
          className={cls.subthree_img}
          alt={data.label}
          />
          )}
          <div style={{display: 'flex', fontSize: '16px', marginTop: '15px'}}>
          {t(data.label)} &nbsp;
          {data.article && data.article}
          </div>
          <div style={{position: 'relative', display: 'flex', fontSize: '16px', marginTop: '15px', color: '#1C5F3C'}}>
          {data.price && data.price}                                              
          {data.finalPrice && <span className={cls.finalPrice_styles}>{data.finalPrice}</span>}
          </div>
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
          <PupularItemMenu
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

export default PupularItemMenu;
