import Breadcrumb from '@components/ui/breadcrumb';
import React from 'react';
import cls from './Designer.module.scss';
import sotrud from '../../assets/img/cotrud-photo.jpg';
import Image from 'next/image';

export const Designer = () => {
  return (
    <section className={cls.section_collaboration}>
      <div className={`${cls.collaboration_container} ${cls.container}`}>
        <Breadcrumb />
        <h2 className={cls.collaboration_header}>
          Партнерство с представителями дизайна и интерьера
        </h2>
        <div className={cls.collaboration_photo}>
          <Image src={sotrud} alt="" className={cls.collaboration_img} />
        </div>
        <div className={cls.collaboration_desc}>
          <h2 className={cls.collaboration_header}>
            Спасибо за проявленный интерес к нашей компании!
          </h2>
          <p className={cls.desc_txt}>
            Компания <b>Vogue Decor</b> приглашает к взаимовыгодному сотрудничеству архитекторов, дизайнеров, декораторов, представителей студий дизайна и интерьера, а также сектора HoReCa (отели, бары, рестораны и кафе).
          </p>
          <p className={cls.desc_txt}>
            Мы предоставляем стильную дизайнерскую мебель, освещение и уникальные предметы интерьера по оптовым ценам для создания стильного и оригинального дизайна кафе, бара, ресторана, офиса, магазина или шоу-рума.
          </p>
          <p className={cls.desc_txt}>
            Наша компания ценит долгосрочные и взаимовыгодные отношения, поэтому предоставляет партнерам <b>специальные предложения, скидки и условия работы</b>. Для получения подробной информации отправьте запрос на <span>эл.почту <a href="mailto:info@VogueDecor.ru">info@VogueDecor.ru</a>, прикрепив ссылку на ваш сайт/соц.сети/диплом.</span>
          </p>
          <p className={cls.desc_txt}>
            Если ваш клиент хочет <b>самостоятельно оформить заказ</b>, вы можете закрепить его за собой, <b>предварительно уведомив</b> об этом менеджера или указав всю информацию на общую эл.почту.
          </p>
        </div>
        <h4 className={cls.collaboration_collab_header}>
          Свяжитесь с нами по вопросам сотрудничества:
        </h4>
        <table>
          <tbody>
            <tr><td>E-Mail</td><td><a className={cls.cooperation_content} href="mailto:info@VogueDecor.ru">info@VogueDecor.ru</a></td></tr>
            <tr><td>Телефон</td><td><a className={cls.cooperation_content} href="tel:+79999902020">+7(999)990-20-20</a></td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Designer;
