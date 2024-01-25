import React from 'react';
import cls from './AboutUs.module.scss';
import sotrud from '@/assets/img/header-met-desktop_8_3.png';
import cidada from '@/assets/img/cidada.png';
import aboutone from '@/assets/img/Commpany-1024x640.jpg';
import aboutTwo from '@/assets/img/drylight-3.jpg';
import insta from '@/assets/img/instagram-1-svgrepo-com.svg';
import asdcaS from '@/assets/img/ezgif-1-4d83fddfc3.gif';
import firiinst from '@/assets/img/269955442_218615537008976_6163157446662388936_n.jpg';
import firaiinst from '@/assets/img/328166263_215349024206148_5476292549065490008_n.jpg';
import fisraiinst from '@/assets/img/384817629_147836748405098_1115175917679327440_n.jpg';
import fsisraiinst from '@/assets/img/381044241_18208855558253139_3948147777886930675_n.jpg';

import VideoComponent from './VideoComponent';
import { ReturnForm } from '../../components/returnForm/ReturnForm';
import {useRouter} from 'next/router'
import Link from 'next/link';
import Breadcrumb from '@components/ui/breadcrumb';
const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
};


const AboutUs = () => {
  const page = useRouter();
  return (
    <>
    <div className={cls.section_collaboration}>
      <div className={cls.container} style={{marginLeft: '40px'}}>
      <Breadcrumb />
      </div>
      <div className={cls.content_title}>О компании</div>
        <div className={cls.content}>
          <div className={cls.content_img_ssa}>
            <div className={cls.content_img_s}>
              <div className={cls.content_img_p}></div>
            </div>
            {/* <img
              width="100%"
              className={cls.content_img}
              alt="Салон Vogue Decor на Новой Риге"
              src={sotrud.src}
              title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
            /> */}
            <div className={cls.container}>
              <div>
                <img
                  className={cls.content_img_cidada}
                  alt="Салон Vogue Decor на Новой Риге"
                  src={cidada.src}
                  title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
                />
                <span
                  className={cls.about_head}
                  style={{
                    textAlign: 'center',
                    display: 'block',
                  }}>
                  Наша цель — сделать ваш дом идеальным. Создавайте обстановку, в котором каждый день становится особенным. Ваш дом, ваш стиль — мы здесь для того, чтобы сделать их неповторимыми!
                  <br />
                </span>
                <div className={cls.about_desc_wrapper}>
                  <img
                    className={cls.desc_wrapper_image}
                    alt="Салон Vogue Decor на Новой Риге"
                    src={aboutone.src}
                    title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
                  />
                  <div className={cls.desc_wrapper_text}>
                    <h3 className={cls.desc_wrapper_text_title}>История</h3>
                    <span className={cls.about_desc}>
                      История нашей компании Vogue Decor начала свое развитие в 2018 году, когда нам стало ясно, что наше предназначение - создавать утонченные и роскошные интерьеры для наших клиентов. Мы стремились не только предоставлять высококлассную итальянскую мебель, элитное освещение и другие предметы интерьера, но также внедрять в наши проекты современные дизайнерские решения, соответствующие последним тенденциям в области интерьерного дизайна.
                      <br />
                      <br />
                      На данный момент в нашем каталоге более 10 000 эксклюзивных предметов интерьера, мебели и освещения, каждый из которых подчеркивает и поддерживает статус наших клиентов. Среди наших партнеров - ведущие дизайнеры России и Европы, обеспечивающие выдающийся уровень качества и эстетики в каждом проекте.
                      <br />
                      <br />
                      Сотрудничество с Vogue Decor отражает вашу изысканность и стремление к изысканному стилю в создании уникального пространства, отвечающего самым высоким стандартам элегантности и комфорта.
                    </span>
                  </div>
                </div>
                <div className={`${cls.about_desc_wrapper} ${cls.about_desc_wrapper_reverse}`}>
                  <img
                    className={cls.desc_wrapper_image}
                    alt="Салон Vogue Decor на Новой Риге"
                    src={aboutTwo.src}
                    title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
                  />
                  <div className={cls.desc_wrapper_text}>
                    <h3 className={cls.desc_wrapper_text_title}>Концепция работы</h3>
                    <span className={cls.about_desc}>
                      Vogue Decor – это не просто бренд, это воплощение стиля и роскоши в мире дизайна. Наша компания специализируется на производстве, сборке и продаже изысканных светильников, начиная от изысканных люстр и заканчивая элегантными уличными фонарями. Мы также предлагаем уникальные дизайнерские аксессуары, предметы для дома, произведения искусства, зеркала и многое другое.
                      <br />
                      <br />
                      Наши дизайнеры и менеджеры всегда в курсе последних тенденций современного дизайна, обеспечивая регулярное обновление нашей коллекции в каждой категории. Мы гарантируем высочайшее качество наших продуктов, применяя передовые технологии и материалы в производстве.
                      <br />
                      <br />
                      Индивидуальный подход – основа нашей концепции. Каждый клиент ценен для нас, и мы всегда готовы выйти за пределы ожиданий, помогая подобрать идеальные предметы интерьера. Наши дизайнеры, по запросу, выезжают к клиентам, делая рекомендации по подбору предметов, будь то светильник или произведение искусства.
                      <br />
                      <br />
                      Vogue Decor – воплощение роскоши, стиля и внимания к каждой детали вашего пространства.
                    </span>
                  </div>
                </div>
                <div className={`${cls.about_desc_wrapper_sdq} ${cls.about_desc_wrapper}`}>
                  {/* <VideoComponent /> */}
                  <img
                    className={`${cls.desc_wrapper_image} ${cls.desc_wrapper_image_gif}`}
                    alt="Салон Vogue Decor на Новой Риге"
                    src={asdcaS.src}
                    title="Салон Vogue Decor на Новой Риге Аутлет Виллидж"
                  />
                  <div className={cls.desc_wrapper_text}>
                    <h3 className={cls.desc_wrapper_text_title}>Производство и сборка</h3>
                    <span className={cls.about_desc}>
                      Коллектив экспертов Vogue Decor воплощает роскошь в каждой детали, используя лишь изысканные материалы и передовое оборудование. Весь наш свет, предварительно проходящий строгий отбор, обеспечивает безупречное качество и надежность. Мы готовы воплотить вашу утонченную концепцию в уникальный светильник, идеально сочетающийся с вашим интерьером. Оставьте запрос на сайте или свяжитесь с нами – с радостью поможем вам в создании идеального светового акцента.
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className={cls.GmmtC}>
                <div className={cls.XeyvI}>
                  <div className={cls.bzRM6}>
                    <div className={cls.rkoY1}>
                      <div className={cls.Yi_0x}>
                        <div className={cls.Yi_0x_wrapp}>
                          <Link href='https://www.instagram.com'>
                            <img src={insta.src} loading="lazy" decoding="async" className={cls.c9h0M_fir}/>
                          </Link>
                          <Link href='https://www.instagram.com' className={cls.vFBoK}>Мы в интерьерах ...</Link>
                        </div>
                        <div className={cls.uLtuo}>
                          <div className={cls.HJ6IA}>
                            Добро пожаловать в мир уюта и стиля — мы в интерьерах! Взгляните на нашу коллекцию уникальных предметов интерьера, которые уже нашли свое место в реальных домах наших клиентов. Наши работы оживают в разнообразных интерьерах, отражая индивидуальность и вкус каждого, кто выбирает наше украшение для своего дома. Переходите в наш <Link className={cls.HJ6IA_link} href='https://www.instagram.com'>Instagram</Link>, чтобы окунуться в мир вдохновляющих образов и увидеть, как наши предметы преображают обыденные пространства в неповторимые оазисы стиля и комфорта. Давайте вместе создадим уникальный интерьер, который будет отражать ваш характер и вдохновлять вас каждый день!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div className={cls.tn7E6}>
                    <div>
                      <img src={fsisraiinst.src} loading="lazy" decoding="async" className={`${cls.c9h0Ma}`} />
                    </div>
                    <div>
                      <img src={fisraiinst.src} loading="lazy" decoding="async" className={`${cls.c9h0Ma}`} />
                    </div>
                    <div>
                      <img src={firiinst.src} loading="lazy" decoding="async" className={`${cls.c9h0Ma}`} />
                    </div>
                    <div className={`${cls.c9h0sMa}`}>
                      <img src={firaiinst.src} loading="lazy" decoding="async" className={`${cls.c9h0Ma}`} />
                    </div>
                  </div>
                </div>
    </div>
            </div>
        </div>
      </div>
      <ReturnForm pageMess={page.pathname}/>
    </div>
    </>
  );
};

export default AboutUs;
