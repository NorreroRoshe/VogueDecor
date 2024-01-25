import cls from './ProductInfo.module.scss';
import { ImgBlock } from './ImgBlock/index';
import { DescBlock } from './DescBlock/index';
import { Product } from '../../../Store/product/product.types';
import RelatedProductFeed from '@/components/product/feeds/related-product-feed';
import { RelatedBreakpoints } from '@/components/product/product-popup';


import { useState } from 'react';
import Button from '@components/ui/button';
import Counter from '@/components/ui/counter';
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import useWindowSize from '@utils/use-window-size';
import { getVariations } from '@framework/utils/get-variations';
import usePrice from '@framework/product/use-price';
import { generateCartItem } from '@utils/generate-cart-item';
import ProductAttributes from '@components/product/product-attributes';
import isEmpty from 'lodash/isEmpty';
import { toast } from 'react-toastify';
import ThumbnailCarousel from '@/components/ui/carousel/thumbnail-carousel';
import { useTranslation } from 'next-i18next';
import Image from '@components/ui/image';
import CartIcon from '@components/iconsCode/cart-icon';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import TagLabel from '@components/ui/tag-label';
import LabelIcon from '@components/iconsCode/label-icon';
import { IoArrowRedoOutline } from 'react-icons/io5';
import ZvonokShareBox from '@/components/ui/zvonok-share-box';
import {ProductDetailsTab} from '@components/product/product-details/product-tab';
import VariationPrice from './variation-price';
import isEqual from 'lodash/isEqual';
import { useAppSelector } from '@/Store/store';
import { cartProductCountByIdSelector } from '@/Store/cart/cart.selectors';
import { useCart } from '@/hooks/useCart';
import { useFavorite } from '@/hooks/useFavorite';
import { selectFavoritesItemById } from '@/Store/favorites/favorites.selectors';
import { chandelierTypeArray } from '@/pages/Product/ProductInfo/DescBlock';

type ProductInfoProps = {
  detProduct: Product;
};

export const ProductInd: React.FC<ProductInfoProps> = ({ detProduct }) => {

  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const { width } = useWindowSize();
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);
  const [addToWishlistLoader, setAddToWishlistLoader] =
  useState<boolean>(false);
  let discountPercentage = (detProduct.discount * detProduct.price) / 100;
  const mainPrice = Math.round(detProduct.price - discountPercentage)
  const { addToFavorite, deleteFromFavorite } = useFavorite();

  const { t } = useTranslation('common');

  const cartCount = useAppSelector((state) => {
    if (detProduct && detProduct.id) {
      return cartProductCountByIdSelector(detProduct.id, state);
    }
    return 0; // Или какое-то другое значение по умолчанию
  });

  const { addToCart } = useCart();
  const isFavorite = useAppSelector((state) => {
    if ( detProduct &&  detProduct.id) {
      return selectFavoritesItemById(state,  detProduct.id);
    }
    // Вернуть какое-то значение по умолчанию, если  detProduct или id не существуют
    return /* значение по умолчанию */;
  });
  const handleAddToCart = () => {
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 1500);
    detProduct && addToCart(detProduct.id);
    toast('Добавлено в корзину', {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };


  function addToWishlist() {
    setAddToWishlistLoader(true);
    const toastStatus: string = !isFavorite ? 'Добавлено в избранные' : 'Убрано из избранных';
    setTimeout(() => {
      setAddToWishlistLoader(false);
    }, 1500);
    detProduct && isFavorite ? deleteFromFavorite(detProduct.id || '') : addToFavorite(detProduct?.id || '');
    toast(toastStatus, {
      progressClassName: 'fancy-progress-bar',
      position: width! > 768 ? 'bottom-right' : 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }


  const handleChange = () => {
    setShareButtonStatus(!shareButtonStatus);
  };
  return (
    <div className={`${cls.product_info_container} ${cls.product_info_container_s} ${cls.container}`}>
      <div className="pt-6 md:pt-7 pb-2">
        <div className="lg:grid grid-cols-10 gap-7 2xl:gap-8">
          <div className="col-span-5 xl:col-span-6 overflow-hidden mb-6 md:mb-8 lg:mb-0">
            {!!detProduct ? (
              <ThumbnailCarousel popupProduct={detProduct}
                thumbnailClassName="xl:w-[700px] 2xl:w-[900px]"
                galleryClassName="xl:w-[150px] 2xl:w-[170px]"
              />
            ) : (
              <div className="w-auto flex items-center justify-center">
                <Image src={PP}
                alt={'404!'}
                width={900}
                height={680}
                />
              </div>
            )}
          </div>

          <div className="flex-shrink-0 flex flex-col col-span-5 xl:col-span-4 xl:ps-2">
            <div className="pb-3 lg:pb-5">
              <div className="md:mb-2.5 block -mt-1.5">
                <h2 className="text-skin-base text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300">
                  {detProduct?.name}
                </h2>
                <h2
                style={{
                  color: '#9a9ca5',
                  fontWeight: 400,
                  lineHeight: '30px',
                  marginTop: '10px',
                  marginBottom: '50px',
                }}
                className="text-skin-base text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300">
                  Арт.: <strong style={{color: '#424551'}}>{detProduct.article}</strong>
                </h2>
              </div>

                <div className="flex items-center mt-5">
                  <div className="text-skin-base font-bold text-base md:text-xl xl:text-[22px]">
                    Цена: {mainPrice} <span>₽</span>
                  </div>
                  {!!discountPercentage && (
                    <>
                      <del className="text-sm md:text-15px ps-3 text-skin-base text-opacity-50">
                        {detProduct?.price} <span>₽</span>
                      </del>
                      <span className="inline-block rounded font-bold text-xs md:text-sm bg-skin-tree bg-opacity-20 text-skin-tree uppercase px-2 py-1 ms-2.5">
                        -{detProduct.discount}% {t('off')}
                      </span>
                    </>
                  )}
                </div>
            </div>

            <div className="pb-2">

              {!!detProduct.availability ? (

                <span className="text-sm font-medium text-skin-yellow-two">
                  {t('В наличие: ') +
                  detProduct.availability +
                    t(' шт.')}
                </span>
                ):(
                <div className="text-base text-red-500 whitespace-nowrap">
                  {t('Наличие: Предзаказ !')}
                </div>
                  )}
            </div>

            <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
              {cartCount > 0 ? (
                <Counter variant="single" product={detProduct} />
              ) : (
                <Button
                  onClick={handleAddToCart}
                  className="w-full px-1.5"
                  loading={addToCartLoader}>
                  <CartIcon color="#ffffff" className="me-3" />
                  Добавить в корзину
                </Button>
              )}
              <div className="grid grid-cols-2 gap-2.5">
              <Button
                variant="border"
                onClick={addToWishlist}
                loading={addToWishlistLoader}
                className={`group hover:text-skin-primary ${isFavorite && 'text-skin-primary'}`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                {isFavorite ? (
                  <>
                    <IoIosHeart className="text-2xl md:text-[26px] me-2 transition-all" />
                    <span>Удалить из избранных</span>
                  </>
                  ) : (
                  <>
                    <IoIosHeartEmpty className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                    <span>В избранные</span>
                  </>
                )}
              </Button>
                <div className="relative group">
                  <Button
                    variant="border"
                    className={`w-full hover:text-skin-primary ${shareButtonStatus === true && 'text-skin-primary'
                      }`}
                    onClick={handleChange}
                  >
                    <IoArrowRedoOutline className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                    {t('Заказать звонок')}
                  </Button>
                  <ZvonokShareBox
                    className={`absolute z-10 end-0 w-[300px] md:min-w-[400px] transition-all duration-300 ${shareButtonStatus === true
                      ? 'visible opacity-100 top-full'
                      : 'opacity-0 invisible top-[130%]'
                      }`}
                  />
                </div>
              </div>
            </div> 
            {detProduct.chandelierTypes ? (
              <ul className="pt-5 xl:pt-6">
                <li className="text-sm md:text-15px text-skin-base text-opacity-80 inline-flex items-center justify-center me-2 relative top-1">
                  <LabelIcon className="me-2" /> {t('Теги')}:
                </li>
                <li className="inline-block p-[3px] border border-sink-base hover:bg-skin-button-secondary rounded">
                  {detProduct.chandelierTypes
                    ?.map((chandelierType) => chandelierTypeArray[chandelierType])
                    .join(' / ')}
                </li> 
                {/* ))} */}
              </ul>
            ) : (<span></span>)}
          </div>
        </div>
        <ProductDetailsTab detProduct={detProduct}/>
      </div>
    </div>
  );
};

export default ProductInd;