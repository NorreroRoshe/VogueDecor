import React from 'react';
import s from './SectionButterfly.module.scss';
import Link from 'next/link';
import Image from 'next/image';
//img
import scala6 from '../../../assets/img/img/laScala6Orex.jpg';
import assai from '../../../assets/img/img/assaiWh.jpg';
import gulliver from '../../../assets/img/img/gulliverNat.jpg';
import indasatore from '../../../assets/img/img/indasatore.jpg';
import snake90 from '../../../assets/img/img/Snake90Kan.jpg';

export const SectionButterfly: React.FC = () => {
  return (
    <section className={s.section_butterfly}>
      <Link className={s.butterfly_back} href="/">
        <div className={s.butterfly_firstbox1}></div>
        <div className={s.butterfly_container}>
          <p className={s.butterfly_desc_text}>
            Vogue Decor - это итальянская фабрика светильников, которая производит
            высококачественные светильники с привлекательным дизайном. Вся продукция производится в
            Италии с использованием только лучших материалов и передовых технологий.
          </p>
        </div>
      </Link>
      <h2 className={s.product_heading}>Популярные товары</h2>
      <div className={`${s.butterfly_collection__items} container`}>
        <div className={s.butterfly_collection__item}>
          <Link
            className={s.butterfly_product__link}
            href="/"
            target="_blank">
            <div className={s.butterfly_product__box}>
              <Image
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src={scala6}
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 105/500 </span>
            </p>
            <h5 className={s.butterfly_product__title}> Tenerife </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} href="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <Image
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src={scala6}
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 8101/6 nick </span>
            </p>
            <h5 className={s.butterfly_product__title}> Gracia </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} href="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <Image
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
              src={scala6}
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 120/4 black bronze </span>
            </p>
            <h5 className={s.butterfly_product__title}> Medusa </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} href="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <Image
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src={scala6}
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 805/6 nickel </span>
            </p>
            <h5 className={s.butterfly_product__title}> Antract </h5>
          </Link>
        </div>
        <div className={s.butterfly_collection__item}>
          <Link className={s.butterfly_product__link} href="/" target="_blank">
            <div className={s.butterfly_product__box}>
              <Image
                className={s.butterfly_product__image}
                width="270"
                height="230"
                alt=""
                src={scala6}
              />
            </div>
            <p className={s.butterfly_product__vendor}>
              Артикул: <span className={s.butterfly_product__vendor_in}> 9867/T nickel </span>
            </p>
            <h5 className={s.butterfly_product__title}> Nunito </h5>
          </Link>
        </div>
      </div>
      <Link className={s.butterfly_icon_btn} href="/">
        <span className={s.butterfly_icon_desc}>
          Вся коллекция <span>&gt;</span>
        </span>
      </Link>
    </section>
  );
};
