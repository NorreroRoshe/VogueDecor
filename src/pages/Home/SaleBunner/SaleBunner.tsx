import { useEffect, useState } from 'react';
import cls from './SaleBunner.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // путь к slick.css
import 'slick-carousel/slick/slick-theme.css'; // путь к <slick-theme className="css">            - </slick-theme>
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '../../../Store/store';
import { clearFilters, setIsSale } from '../../../Store/product/product.slice';
import { SaleBunnerProduct } from './SaleBunnerProduct';
import { useGetProductsMutation } from '../../../Store/product/product.api';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export type SaleType = {
  saleImg: string;
  saleCount: number;
  saleNalichie: number;
  saleArticle: string;
  salePrice: number;
};

export const SaleBunner: React.FC = () => {
  const dispatch = useAppDispatch();
  const [getProducts] = useGetProductsMutation();
  const handleSetSale = () => {
    dispatch(clearFilters());
    dispatch(setIsSale(true));
  };

  const [products, setProducts] = useState([]);

  const { pathname } = useRouter();

  const { data, isLoading } = useQuery(['getProducts', pathname], () => {
    return getProducts({
      Types: [8],
    });
  });

  useEffect(() => {
    if (data) {
      // @ts-ignore
      setProducts(data.data ? data.data.products : []);
    }
  }, [isLoading]);

  return (
    <section className={cls.section_saleb}>
      <div className={`${cls.saleb__container}`}>
        <h2 className={cls.saleb_title}>Распродажа</h2>
        <Slider className={cls.main_slider} {...sliderSettings}>
          {!isLoading &&
            products.map((product) => <SaleBunnerProduct product={product} />)}
        </Slider>
        <Link onClick={handleSetSale} href="/Chapter" className={cls.slider_btn}>
          Смотреть всю распродажу
        </Link>
      </div>
    </section>
  );
};

const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={`${className} ${cls.custom_next}`} onClick={onClick} />;
};

const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return <div className={`${className} ${cls.custom_prev}`} onClick={onClick} />;
};

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1500, // Ширина экрана, при которой применяются эти настройки
      settings: {
        slidesToShow: 2, // Отображается 2 слайда при ширине экрана до 1000px
      },
    },
    {
      breakpoint: 550, // Ширина экрана, при которой применяются эти настройки
      settings: {
        slidesToShow: 1, // Отображается 2 слайда при ширине экрана до 1000px
      },
    },
  ],
  slidesToScroll: 1,
  // fade: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  // autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: false,
  // centerMode: true,
  // centerPadding: '400px',
};

export default SaleBunner;
