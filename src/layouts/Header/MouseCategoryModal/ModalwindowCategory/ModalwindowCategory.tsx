import React from 'react';
import cls from './ModalwindowCategory.module.scss';
import Link from 'next/link';
import { lightCategory } from '../../../../const/constants';

interface MenuPropsInter {
  setModal: (state: boolean) => void;
}

export const ModalWindowCategory: React.FC<MenuPropsInter> = ({ setModal }) => {
  const onClickListItem = () => {
    setModal(false);
  };

  return (
    <div className={cls.menu_category__box}>
      <ul className={cls.menu_category__list}>
        {lightCategory.map((item) => (
          <React.Fragment key={item.eng}>
            <li className={cls.menu_category__list_item}>
              <Link
                onClick={onClickListItem}
                rel=""
                className={cls.menu_category__list_link}      
                href={`/Chapter/?${item.eng}`}

                >
                <span className={cls.menu_category__link_preview}>
                  {typeof item.img === 'string' ? (
                    <img
                      alt={item.name}
                      className={cls.menu_category__link_image}
                      height="40"
                      loading="lazy"
                      src={item.img}
                      width="67"
                    />
                  ) : null}
                </span>
                <span className={cls.menu_category__link_text}>{item.name}</span>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default ModalWindowCategory;
