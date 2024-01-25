import React from 'react';
import s from './SectionFoppa.module.scss';
import Link from 'next/link';
import Image from 'next/image';

//img
import scala6 from '../../../assets/img/img/laScala6Orex.jpg';
import assai from '../../../assets/img/img/assaiWh.jpg';
import gulliver from '../../../assets/img/img/gulliverNat.jpg';
import indasatore from '../../../assets/img/img/indasatore.jpg';
import snake90 from '../../../assets/img/img/Snake90Kan.jpg';

export const SectionFoppa: React.FC = () => {
  return (
    <section className={s.section_foppa}>
      <Link className={s.foppa_back} href="/">
        <div className={s.foppa_firstbox1}></div>
        <div className={s.foppa_container}>
          <p className={s.foppa_desc_text}>
            Foppapedretti - это итальянский бренд, который производит высококачественную и удобную
            мебель и аксессуары для дома. <span>Фабрика использует только лучшие материалы и технологии,
              чтобы создавать удобные и практичные товары, которые будут радовать вас каждый день.</span>
          </p>
        </div>
      </Link>
      <h2 className={s.product_heading}>Популярные товары</h2>
      <div className={`${s.foppa_collection__items} container`}>
        <div className={s.foppa_collection__item}>
          <Link
            className={s.foppa_product__link}
            href="/"
            title="FoppaPedretti Стемянка laScala6 орех"
            target="_blank">
            <div className={s.foppa_product__box}>
              <Image
                className={s.foppa_product__image}
                width="250"
                height="250"
                alt=""
                src={scala6}
              />
            </div>
            <div className={s.foppa_prod_vero}>
              <p className={s.foppa_product__vendor}>
                Артикул: <span className={s.foppa_product__vendor_in}> 44.184 </span>
              </p>
              <h5 className={s.foppa_product__title}> Стремянка LaScala6 Орех </h5>
            </div>
          </Link>
        </div>
        <div className={s.foppa_collection__item}>
          <Link
            className={s.foppa_product__link}
            href="/"
            title="FoppaPeddretti Гл. доска Assai белый"
            target="_blank">
            <div className={s.foppa_product__box}>
              <Image className={s.foppa_product__image} width="250" height="250" alt="" src={assai} />
            </div>
            <div className={s.foppa_prod_vero}>
              <p className={s.foppa_product__vendor}>
                Артикул: <span className={s.foppa_product__vendor_in}> 44.184 </span>
              </p>
              <h5 className={s.foppa_product__title}> Гл. доска Assai белый </h5>
            </div>
          </Link>
        </div>
        <div className={s.foppa_collection__item}>
          <Link
            className={s.foppa_product__link}
            href="/"
            title="FoppaPeddretti Сушилка Gulliver натуральный"
            target="_blank">
            <div className={s.foppa_product__box}>
              <Image
                className={s.foppa_product__image}
                width="250"
                height="250"
                alt=""
                src={gulliver}
              />
            </div>
            <div className={s.foppa_prod_vero}>
              <p className={s.foppa_product__vendor}>
                Артикул: <span className={s.foppa_product__vendor_in}> 44.184 </span>
              </p>
              <h5 className={s.foppa_product__title}> Сушилка Gulliver натуральный </h5>
            </div>
          </Link>
        </div>
        <div className={s.foppa_collection__item}>
          <Link
            className={s.foppa_product__link}
            href="/"
            title="FoppaPeddretti Вешалка indasatore венге"
            target="_blank">
            <div className={s.foppa_product__box}>
              <Image
                className={s.foppa_product__image}
                width="250"
                height="250"
                alt=""
                src={indasatore}
              />
            </div>
            <div className={s.foppa_prod_vero}>
              <p className={s.foppa_product__vendor}>
                Артикул: <span className={s.foppa_product__vendor_in}> 44.184 </span>
              </p>
              <h5 className={s.foppa_product__title}> Вешалка indasatore венге </h5>
            </div>
          </Link>
        </div>
        <div className={s.foppa_collection__item}>
          <Link
            className={s.foppa_product__link}
            href="/"
            title="FoppaPedretti Вешалка Snake90 каналетто"
            target="_blank">
            <div className={s.foppa_product__box}>
              <Image
                className={s.foppa_product__image}
                width="250"
                height="250"
                alt=""
                src={snake90}
              />
            </div>
            <div className={s.foppa_prod_vero}>
              <p className={s.foppa_product__vendor}>
                Артикул: <span className={s.foppa_product__vendor_in}> 44.184 </span>
              </p>
              <h5 className={s.foppa_product__title}> Вешалка Snake90 каналетто </h5>
            </div>
          </Link>
        </div>
      </div>
      <Link className={s.foppa_icon_btn} href="/">
        <span className={s.foppa_icon_desc}>
          Вся коллекция <span>&gt;</span>
        </span>
      </Link>
    </section>
  );
};
