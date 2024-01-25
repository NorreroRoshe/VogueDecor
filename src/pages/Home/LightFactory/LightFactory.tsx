import cls from './LightFactory.module.scss';
import factor from '@/assets/img/img/02.jpg';
import Link from 'next/link';
import Image from 'next/image';

export const LightFactory: React.FC = () => {
  return (
    <section className={cls.section_lightfactory}>
      <div className={`${cls.container} ${cls.lightfactory_container}`}>
        <div className={cls.lightfactory_box}>
          <Image height={470} width={700} className={cls.box_img} src={factor} alt="" />
          <div className={cls.box_desc}>
            <h2 className={cls.box_desc_title}>Создаем световые симфонии</h2>
            <p className={cls.box_desc_text}>
              Наше производство создает и собирает высококачественные светильники, предлагая широкий
              выбор стилей и дизайнов.{' '}
              <span>
                Переходите в раздел 'Производство', чтобы узнать больше о нашей продукции и том, как
                мы создаем эстетику и функциональность в каждом изделии.
              </span>
            </p>
            <Link href="/Factory" className={cls.box_desc_btn}>
              Подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightFactory;