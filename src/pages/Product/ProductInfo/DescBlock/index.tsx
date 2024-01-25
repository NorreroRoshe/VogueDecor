import React, { useEffect } from 'react';
import Link from 'next/link';
import cls from './DescBlock.module.scss';
import { ProBlock } from './ProBlock/ProBlock';
import { Product } from '../../../../Store/product/product.types';
import { selectCollection } from '../../../../Store/collection/collection.selectors';
import { useAppSelector } from '../../../../Store/store';
import {
  useGetCollectionMutation,
  useGetCollectionsQuery,
} from '../../../../Store/collection/collection.api';
import { useCart } from '../../../../hooks/useCart';
import { selectFavoritesItemById } from '../../../../Store/favorites/favorites.selectors';
import { useFavorite } from '../../../../hooks/useFavorite';

export type IDescBlockProps = {
  detProduct: Product;
};
//TODO подумать
export const chandelierTypeArray = [
  'NONE',
  'Большие люстры',
  'С хрусталями',
  'С абажурами',
  'Подвесные',
  'Потолочные',
  'Овальные',
];

const arrayColor = [
  'NONE',
  'Золотой',
  'Бронзовый',
  'Сильвер',
  'Никель',
  'Белый',
  'Черный',
  'Прозрачный',
  'Бежевый',
];

export const DescBlock: React.FC<IDescBlockProps> = ({ detProduct }) => {
  let discountPercentage = (detProduct.discount * detProduct.price) / 100;
  const mainPrice = Math.round(detProduct.price - discountPercentage)
  const isFavorite = useAppSelector((state) => selectFavoritesItemById(state, detProduct.id));
  const { addToFavorite, deleteFromFavorite } = useFavorite();
  const [getCollection, {}] = useGetCollectionMutation(); //Это для подключение коллекции
  const collections = useAppSelector(selectCollection);
  const currCollections = React.useMemo(
    () => collections?.find((col) => col.id === detProduct.collectionId),
    [collections],
  );

  useEffect(() => {
    // TODO поиск по id коллекции
    // getCollection({ name: detProduct.collectionId });
    getCollection({ name: detProduct.article?.split('/')[0] });
  }, [detProduct.collectionId]);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(detProduct.id);
  };

  const handleChangeFav = () => {
    isFavorite ? deleteFromFavorite(detProduct.id) : addToFavorite(detProduct.id);
  };

  return (
    <div className={cls.product_info_feature}>
      <div className={cls.info_feature_headerlike}>
        <h1 className={cls.info_photo_header}>{detProduct.name}</h1>
        <div className={cls.info_feature_like}>
          <button
            onClick={handleChangeFav}
            // className={cls.feature_like_btn}
            className={`${cls.feature_like_btn} ${isFavorite ? cls.feature_like_btn_active : ''}`}>
            {/* <img className={cls.feature_like_img} src={like} alt="" /> */}
          </button>
        </div>
      </div>
      <div className={cls.product_info_nalich_wrapp}>
        <p className={cls.info_photo_partnumber}>
          Арт.: <strong>{detProduct.article}</strong>
        </p>
        {!!detProduct.availability ? (
        <div className={cls.info_feature_nalichie}>
          <p className={cls.feature_nalichie_desc}>В наличии: {detProduct.availability} шт.</p>
        </div>):(       
        <div className={cls.info_feature_nalichie_predzakaz}>
          <p className={cls.feature_nalichie_desc}>Предзаказ</p>
        </div>)}
      </div>
      <div className={cls.info_feature_about}>
        <div className={cls.info_feature_about_par}>
        <p className={cls.info_feature_about_titledesc}>Параметры:</p>
        {!!detProduct.availability ? (
        <div className={`${cls.info_feature_nalichie_par} ${cls.info_feature_nalichie}`}>
          <p className={`${cls.feature_nalichie_desc_par} ${cls.feature_nalichie_desc}`}>В наличии: {detProduct.availability} шт.</p>
        </div>):(       
         <div className={`${cls.info_feature_nalichie_par_predzakaz} ${cls.info_feature_nalichie_predzakaz}`}>
         <p className={`${cls.feature_nalichie_desc_par} ${cls.feature_nalichie_desc}`}>Предзаказ</p>
       </div>)}
        </div>
        <ul className={cls.feature_about_list}>
          <li className={cls.feature_about_item}>
            <span className={cls.about_item_category}>Коллекция:</span>
            {currCollections && (
              <Link
                href={`/Collections/${currCollections.id}`}
                className={`${cls.about_item_value} ${cls.about_item_value_gold}`}>
                {currCollections.name}
              </Link>
            )}
          </li>
          <li className={cls.feature_about_item}>
            <span className={cls.about_item_category}>Цвет:</span>
            <span className={cls.about_item_value}>
              {detProduct.colors?.map((colors) => arrayColor[colors]).join(' / ')}
            </span>
          </li>
          {!!detProduct.height && (
          <li className={cls.feature_about_item}>
            <span className={cls.about_item_category}>Высота:</span>
            <span className={cls.about_item_value}>{detProduct.height} см</span>
          </li>
          )}
          {!!detProduct.diameter && (
            <li className={cls.feature_about_item}>
              <span className={cls.about_item_category}>Диаметр:</span>
              <span className={cls.about_item_value}>{detProduct.diameter} см</span>
            </li>
          )}
          {!!detProduct.length && (
            <li className={cls.feature_about_item}>
              <span className={cls.about_item_category}>Длинна:</span>
              <span className={cls.about_item_value}>{detProduct.length} см</span>
            </li>
          )}
          {!!detProduct.width && (
            <li className={cls.feature_about_item}>
              <span className={cls.about_item_category}>Ширина:</span>
              <span className={cls.about_item_value}>{detProduct.width} см</span>
            </li>
          )}
          {!!detProduct.lampCount && (
          <li className={cls.feature_about_item}>
            <span className={cls.about_item_category}>Лампочки (Количество x Цоколь):</span>
            <span className={cls.about_item_value}>
              {detProduct.lampCount} x {detProduct.plinth}
            </span>
          </li>
          )}
          <li className={cls.feature_about_item}>
            <span className={cls.about_item_category}>Тип люстры:</span>
            <span className={cls.about_item_value}>
              {detProduct.chandelierTypes
                ?.map((chandelierType) => chandelierTypeArray[chandelierType])
                .join(' / ')}
            </span>
          </li>
        </ul>
      </div>
      <div className={cls.info_feature_desc_opis}>
        <p className={cls.info_feature_opis_desc}>Описание товара:</p>
        <p className={cls.info_feature_desc}>{detProduct.description}</p>
      </div>
      <div className={cls.info_feature_price_wrapp}>
        <p className={cls.info_feature_price_title}>Цена:</p>
        {!!discountPercentage ? (
          <div className={cls.info_feature_price}>
            <p className={cls.feature_price_desc}>
              {mainPrice}
              <span>₽</span>
            </p>
            <p className={cls.price_desc_discount}>
              {detProduct.price}
              <span>₽</span>
            </p>
            <div className={cls.prices_procent}>
              <div className={cls.procent_number}>-{detProduct.discount}%</div>
            </div>
          </div>
        ) : (
          <div className={cls.info_feature_price}>
            <p style={{ color: 'black' }} className={cls.feature_price_desc}>
              {detProduct.price}
              <span>₽</span>
            </p>
          </div>
        )}
      </div>
      <div className={cls.info_feature_action}>
        {/* <div className={cls.feature_actions_selection}> */}
        {/* <Sort title={''} list={Productlist} /> */}
        {/* </div> */}
        <button onClick={handleAddToCart} className={cls.actions_btns_add}>
          Приобрести
        </button>
      </div>
      <ProBlock
        art={detProduct.article || ''}
        price={mainPrice || 0}
        notSalePrice={detProduct.price || 0}
        id={detProduct.id || ''}
      />
    </div>
  );
};

export default DescBlock;
