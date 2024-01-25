import { useState } from 'react';
import { useRouter } from 'next/router';
import { ROUTES } from '@/utils/routes';
import Button from '@/components/ui/button';
import Counter from '@/components/ui/counter';
import ThumbnailCarousel from '@/components/ui/carousel/thumbnail-carousel';
import Image from '@/components/ui/image';
import CartIcon from '@/components/iconsCode/cart-icon';
import Heading from '@/components/ui/heading';
import Text from '@/components/ui/text';
import LabelIcon from '@/components/iconsCode/label-icon';
import { IoCallOutline } from 'react-icons/io5';
import RelatedProductFeed from '@/components/product/feeds/related-product-feed';
import ZvonokShareBox from '@/components/ui/zvonok-share-box';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { toast } from 'react-toastify';
import useWindowSize from '@/utils/use-window-size';
import { useModalAction } from '@/components/common/modal/modal.context';
import CloseButton from '@/components/ui/close-button';
import PP from '@/assets/placeholders/product-placeholder.png';
import { useAppSelector } from '@/Store/store';
import { Product } from '@/Store/product/product.types';
import { chandelierTypeArray } from '@/pages/Product/ProductInfo/DescBlock';
import { selectFavoritesItemById } from '@/Store/favorites/favorites.selectors';
import { useFavorite } from '@/hooks/useFavorite';
import { useCart } from '@/hooks/useCart';
import { cartProductCountByIdSelector } from '@/Store/cart/cart.selectors';
import { IoClose } from 'react-icons/io5';

export const RelatedBreakpoints = {
  '1536': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 3,
  },
  '360': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

export type ProductPopupProps = {
  popupProduct?: Product;
};

const ProductPopup: React.FC<ProductPopupProps> = ({ popupProduct }) => {
  // const { t } = useTranslation('common');
  // const { data } = useModalState();
  // const { id } = popupProduct ?? {};
  const { width } = useWindowSize();
  const { closeModal } = useModalAction();
  const router = useRouter();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  // const [favorite, setFavorite] = useState<boolean>(false);
  const [addToWishlistLoader, setAddToWishlistLoader] = useState<boolean>(false);
  const [shareButtonStatus, setShareButtonStatus] = useState<boolean>(false);

  let discountPercentage = 0; // Или какое-то другое значение по умолчанию

  if (popupProduct && popupProduct.discount) {
    discountPercentage = (popupProduct.discount * popupProduct.price) / 100;
  }

  let mainPrice = 0; // Или другое значение по умолчанию

  if (popupProduct && popupProduct.price) {
    mainPrice = Math.round(popupProduct.price - discountPercentage);
  }

  const handleChange = () => {
    setShareButtonStatus(!shareButtonStatus);
  };

  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${popupProduct?.id}`);
  }

  // const cartCount = useAppSelector((state) => cartProductCountByIdSelector(popupProduct.id, state));

  const cartCount = useAppSelector((state) => {
    if (popupProduct && popupProduct.id) {
      return cartProductCountByIdSelector(popupProduct.id, state);
    }
    return 0; // Или какое-то другое значение по умолчанию
  });


  // const isFavorite = useAppSelector((state) => selectFavoritesItemById(state, popupProduct.id));

  const isFavorite = useAppSelector((state) => {
    if (popupProduct && popupProduct.id) {
      return selectFavoritesItemById(state, popupProduct.id);
    }
    // Вернуть какое-то значение по умолчанию, если popupProduct или id не существуют
    return /* значение по умолчанию */;
  });


  const { addToFavorite, deleteFromFavorite } = useFavorite();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 1500);
    popupProduct && addToCart(popupProduct.id);
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
    popupProduct && isFavorite ? deleteFromFavorite(popupProduct.id || '') : addToFavorite(popupProduct?.id || '');
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

  // useEffect(() => [data.id]);

  return (
    <div className="md:w-[600px] lg:w-[940px] xl:w-[1180px] 2xl:w-[1360px] mx-auto p-1 lg:p-0 xl:p-3 bg-skin-fill rounded-md">
      <CloseButton onClick={closeModal} />
      <div className="overflow-hidden">
        <div className="px-4 md:px-6 lg:p-8 2xl:p-10 mb-9 lg:mb-2 pt-4 md:pt-7 2xl:pt-10">
          <div className="lg:flex items-start justify-between">
            <div className="xl:flex items-center justify-center overflow-hidden mb-6 md:mb-8 lg:mb-0">
              {!!popupProduct ? (
                <ThumbnailCarousel popupProduct={popupProduct} />
              ) : (
                <div className="w-auto flex items-center justify-center">
                  <Image src={PP} alt={'404!'} width={650} height={590} />
                </div>
              )}
            </div>
            {popupProduct && (
              <div className="flex-shrink-0 flex flex-col lg:ps-5 xl:ps-8 2xl:ps-10 lg:w-[430px] xl:w-[470px] 2xl:w-[480px]">
                <div className="pb-5">
                  <div
                    className="mb-2 md:mb-2.5 block -mt-1.5"
                    onClick={navigateToProductPage}
                    role="button">
                    <h2 className="text-skin-base text-lg md:text-xl xl:text-2xl font-medium transition-colors duration-300 hover:text-skin-primary">
                      {popupProduct.name} &nbsp;
                      <strong>{popupProduct.article}</strong>
                    </h2>
                  </div>
                  {!!popupProduct.availability ? (
                    <div
                      className="text-base whitespace-nowrap border-sink-base"
                      style={{
                        border: '1px solid',
                        width: 'fit-content',
                        padding: '0px 8px',
                        fontSize: '12px',
                        marginTop: '8px',
                        borderRadius: '5px',
                        color: 'rgb(228, 185, 13)'
                      }}>
                      В наличии: {popupProduct.availability} шт.
                    </div>) : (
                    <div
                      className="whitespace-nowrap"
                      style={{
                        border: '1px solid',
                        width: 'fit-content',
                        padding: '0px 8px',
                        fontSize: '12px',
                        marginTop: '8px',
                        borderRadius: '5px',
                        color: 'rgb(220, 38, 38)'
                      }}>Предзаказ</div>
                  )}
                  {popupProduct.discount > 0 ? (
                    <div className="flex items-center mt-5">
                      <div className="text-skin-base font-bold text-base md:text-xl xl:text-[22px]">
                        {/* {Math.round(popupProduct.price - discountPercentage)} */}
                        {mainPrice}
                        &nbsp;<span>₽</span>
                      </div>
                      <del className="text-sm md:text-15px ps-3 text-skin-base text-opacity-50">
                        {popupProduct.price}
                        <span>₽</span>
                      </del>
                      <span className="inline-block rounded font-bold text-xs md:text-sm bg-skin-tree bg-opacity-20 text-skin-tree uppercase px-2 py-1 ms-2.5">
                        -{popupProduct.discount}% sale
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center  mt-5">
                      <div className="text-skin-base font-bold text-base md:text-xl xl:text-[22px]">
                        {popupProduct.price}&nbsp;<span>₽</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pb-2">
                  {!!popupProduct.height && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#787a80', fontSize: '17px' }}>
                      Высота:&nbsp;
                      <span style={{ marginLeft: '10px', fontSize: '17px' }}>{popupProduct.height} см</span>
                      <br />
                    </span>)}
                  {!!popupProduct.diameter && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#787a80', fontSize: '17px' }}>
                      Диаметр:
                      <span style={{ marginLeft: '10px', fontSize: '17px' }}>
                        {popupProduct.diameter} см
                      </span>
                      <br />
                    </span>
                  )}
                  {!!popupProduct.length && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#787a80', fontSize: '17px' }}>
                      Длинна:
                      <span style={{ marginLeft: '10px', fontSize: '17px' }}>
                        {popupProduct.length} см
                      </span>
                      <br />
                    </span>
                  )}
                  {!!popupProduct.width && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: '#787a80', fontSize: '17px' }}>
                      Ширина:
                      <span style={{ marginLeft: '10px', fontSize: '17px' }}>{popupProduct.width} см</span>
                      <br />
                    </span>
                  )}
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#787a80', fontSize: '17px' }}>
                    Лампочки:
                    <span style={{ marginLeft: '10px', fontSize: '17px' }}>
                      {popupProduct.lampCount} x {popupProduct.plinth}
                    </span>
                  </span>
                </div>

                <div className="pt-1.5 lg:pt-3 xl:pt-4 space-y-2.5 md:space-y-3.5">
                  {cartCount > 0 ? (
                    <Counter variant="single" product={popupProduct} />
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
                        <IoIosHeart className="text-2xl md:text-[26px] me-2 transition-all" />
                      ) : (
                        <IoIosHeartEmpty className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                      )}
                      В избранные
                    </Button>
                    <div className="relative group">
                      <Button
                        variant="border"
                        className={`w-full hover:text-skin-primary ${shareButtonStatus === true && 'text-skin-primary'
                          }`}
                        onClick={handleChange}
                        style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                        {shareButtonStatus === true ? (
                          <IoClose className="text-xl lg:text-2xl" />
                        ) : (
                          <IoCallOutline className="text-2xl md:text-[26px] me-2 transition-all group-hover:text-skin-primary" />
                        )}
                        Заказать звонок
                      </Button>
                      <ZvonokShareBox
                        art={popupProduct.article || ''}
                        price={mainPrice}
                        notSalePrice={popupProduct.price || 0}
                        id={popupProduct.id || ''}
                        className={`absolute z-10 end-0 w-[300px] md:min-w-[400px] transition-all duration-300 border border-skin-four ${shareButtonStatus === true ? 'visible opacity-100 top-full' : 'opacity-0 invisible top-[130%]'
                          }`}
                      />

                    </div>
                  </div>
                  {/* <Button
                    onClick={navigateToProductPage}
                    className="w-full px-1.5"><>&nbsp;{`>`}&nbsp;</>
                    На страничку товара
                    <>&nbsp;{`<`}</>
                  </Button> */}
                </div>
                <ul className="pt-5 xl:pt-6">
                  <li className="text-sm md:text-15px text-skin-base text-opacity-80 inline-flex items-center justify-center me-2 relative top-1">
                    <LabelIcon className="me-2" /> Теги:
                  </li>
                  <li className="inline-block p-[3px]">
                    <div
                      className="font-medium text-13px md:text-sm rounded hover:bg-skin-button-secondary block border border-sink-base px-2 py-1 transition"
                      style={{ cursor: 'text' }}
                      role="button">
                      {popupProduct.chandelierTypes
                        ?.map((chandelierType) => chandelierTypeArray[chandelierType])
                        .join(' / ')}
                    </div>
                  </li>
                </ul>
                <div className="pt-6 xl:pt-8">
                  <Heading className="mb-3 lg:mb-3.5">Описание:</Heading>
                  <Text variant="small">
                    {
                      popupProduct.description
                        ? popupProduct.description.split(' ').slice(0, 5).join(' ')
                        : 'Описание недоступно'
                    }
                    {'...'}
                    <span
                      onClick={navigateToProductPage}
                      role="button"
                      className="text-skin-primary ms-0.5">
                      Еще
                    </span>
                  </Text>

                </div>
              </div>
            )}
          </div>
        </div>
        <RelatedProductFeed
          id={popupProduct?.collectionId}
          sectionHeading='Товары из этой коллекции'
          carouselBreakpoint={RelatedBreakpoints}
          className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
        />
      </div>
    </div>
  );
};

export default ProductPopup;
