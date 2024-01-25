import React from 'react';
import cls from './Factory.module.scss';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import insta from '@/assets/img/50a623b9-1dc4-4e37-9e58-6c79a3c37956.jpeg';
import instsa from '@/assets/img/APhone-TamingLamp-YankoDesign.jpeg';
import { useRouter } from 'next/router'
import Breadcrumb from '@components/ui/breadcrumb';

const Factory = () => {
  const page = useRouter();
  return (
    <div className={cls.section_collaboration}>
    <div className={cls.content}>
      <div className={cls.container}>
    <Breadcrumb />
        <div>
          <div className={cls.content_title}>Производство</div>
          <div className={cls.content_im_wr}>
            <img
              // width="100%"
              height="500px"
              alt="Салон Vogue Decor на Новой Риге"
              src={insta.src}
              className={`${cls.content_factory_img} ${cls.content_factory_img_s}`}
              title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
            />
            <img
              // width="100%"
              height="500px"
              alt="Салон Vogue Decor на Новой Риге"
              src={instsa.src}
              className={cls.content_factory_img}
              title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
            />
          </div>
          <br />
            <br />
            <br />
            <div>
              <span className={cls.about_desc}>
                Компания Vogue Decor - это профессиональный производитель люстр и светильников по
                индивидуальному дизайну, который внесение изменений в базовые модели, чтобы
                создавать уникальные, удивительные и функциональные светильники для своих клиентов.
              </span>
              <br />
              <br />
              <br />
              <span className={cls.about_desc}>
                Наша компания имеет большой опыт в производстве современных, классических и
                эксклюзивных люстр, которые украсят любой интерьер. Мы не только производим
                светильники, но и предоставляем услуги по разработке индивидуальных дизайнов, с
                учетом потребностей и пожеланий каждого клиента.
              </span>
              <br />
              <br />
              <br />
              Команда профессионалов Vogue Decor использует только высококачественные материалы и
              современное оборудование для создания своих люстр и светильников. Вся продукция
              тщательно проверяется перед отправкой клиентам, чтобы гарантировать высокое качество и
              надежность продукции.
              <span className={cls.about_desc}>
                Наша компания готова воплотить любую идею в жизнь и создать тот светильник, который
                будет идеально соответствовать вашему интерьеру. Оставьте заявку на нашем сайте или
                свяжитесь с нами по телефону, и мы с удовольствием поможем вам с выбором и
                изготовлением светильников.
              </span>
            </div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <ReturnForm pageMess={page.pathname} />
    </div>
  );
};

export default Factory;
