import cls from './ImgBlock.module.scss';
import { useRef, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { IFileUrl, Product } from '../../../../Store/product/product.types';
import { selectFavoritesItemById } from '@/Store/favorites/favorites.selectors';
import { useAppSelector } from '@/Store/store';
import { useFavorite } from '@/hooks/useFavorite';

type imgBlockProps = {
  // files: IFileUrl[];
  detProduct: Product;
};

export const ImgBlock: React.FC<imgBlockProps> = ({ detProduct }) => {
  const sliderRef = useRef<Slider | null>(null);

  const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_next}`} onClick={onClick} />;
  };

  const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_prev}`} onClick={onClick} />;
  };

  const settings = {
    dots: true,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactPortal
        | null
        | undefined,
    ) => (
      <div>
        <ul className={cls.custom_dots}>{dots}</ul>
      </div>
    ),
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const ThumbnailSlider = () => (
    <div className={cls.thumbnai_slider}>
      {detProduct.files.map((file, index) => (
        <img
          className={cls.thumbnai_slider_photo}
          key={index}
          src={file.url}
          alt={`Product ${index + 1}`}
          onClick={() => {
            if (sliderRef.current) {
              sliderRef.current.slickGoTo(index);
            }
          }}
        />
      ))}
    </div>
  );

  const { addToFavorite, deleteFromFavorite } = useFavorite();

  const isFavorite = useAppSelector((state) => selectFavoritesItemById(state, detProduct.id));

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, []);

  const handleChangeFav = () => {
    isFavorite ? deleteFromFavorite(detProduct.id) : addToFavorite(detProduct.id);
  };

  const imageUrl = detProduct.files.length > 0 ? detProduct.files[0].url : '';
  return (
    <div>
      <div className={cls.product_feature_nalname}>
        <div className={cls.product_info_feature_headerlike}>
          <h1 className={cls.product_info_photo_header}>{detProduct.name}</h1>
          <p className={cls.product_info_photo_partnumber}>
            <strong>{detProduct.article}</strong>
          </p>
        </div>
        <div className={cls.product_info_nalich_wrapp}>
            {!!detProduct.availability ? (
        <div className={cls.product_info_feature_nalichie}>
          <p className={cls.product_feature_nalichie_desc}>В наличии: {detProduct.availability} шт.</p>
        </div>):(       
        <div className={cls.info_feature_nalichie_predzakaz}>
          <p className={cls.feature_nalichie_desc}>Предзаказ</p>
        </div>)}
          <div className={cls.product_info_feature_like}>
            <button
              onClick={handleChangeFav}
              className={`${cls.product_feature_like_btn} ${
                isFavorite ? cls.product_feature_like_btn_active : ''
              }`}></button>
          </div>
        </div>
      </div>
      <div className={cls.product_info}>
        <ThumbnailSlider />
        <Slider ref={sliderRef} {...settings} className={cls.product_info_photo}>
          {detProduct.files.map((file, index) => (
            <div key={index}>
              <img
                className={cls.info_photo_img}
                src={file.url}
                alt={`Product Image ${index + 1}`}
              />
            </div>
          ))}
          <div>
            <img src={imageUrl} alt="Product Image 2" className={cls.info_photo_img} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImgBlock;
