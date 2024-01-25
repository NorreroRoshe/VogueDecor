import React from 'react';
import cls from './MenuCategoryChand.module.scss';
import Link from 'next/link';
import { useGetWindowCollectionMutation } from '../../../../Store/collection/collection.api';
import { useAppSelector } from '../../../../Store/store';
import { windowCollection } from '../../../../Store/collection/collection.selectors';

interface MenuPropsInter {
  setModal: (state: boolean) => void;
}

export const MenuCategoryChand: React.FC<MenuPropsInter> = ({ setModal }) => {
  const onClickListItem = () => {
    setModal(false); //Выбери какой-нибудь пункт и далее скройся
  };

  const [, { isLoading, isError }] = useGetWindowCollectionMutation();
  const windowCollections = useAppSelector(windowCollection);

  const onClose = () => setModal(false);

  // const handleGetSearchProducts = () => {
  //   getCollections({
  //     Count: 3,
  //   });
  //   setModal(false); //Выбери какой-нибудь пункт и далее скройся
  // };


  return (
    <div className={cls.menu_category__box}>
      <ul className={cls.menu_category__list}>
        {isError && <div>Ошибка...</div>}
        {isLoading && <div>Идет загрузка...</div>}
        {windowCollections?.map((collection) => (
          <li key={collection.id} className={cls.menu_category__list_item}>
            <Link
              onClick={onClickListItem}
              rel=""
              className={cls.menu_category__list_link}
              href={`/Collections/${collection.id}`}
              >
              <span className={cls.menu_category__link_preview}>
                <img
                  alt={collection.name}
                  className={cls.menu_category__link_image}
                  height="40"
                  loading="lazy"
                  src={collection.preview ?? 'default_image_url'}
                  width="67"
                />
              </span>
              <span className={cls.menu_category__link_text}>{collection.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/Collections" onClick={onClose} className={cls.menu_category_more}>
        Посмотреть все коллекции
      </Link>
    </div>
  );
};

export default MenuCategoryChand;
