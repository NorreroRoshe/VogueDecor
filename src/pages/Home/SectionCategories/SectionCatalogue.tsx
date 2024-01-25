import cls from './SectionCatalogue.module.scss';
import Link from 'next/link';

export const SectionCatalogue: React.FC = () => {
  return (
    <>
      <section className={cls.section_catalogue}>
        <div className={`${cls.container} ${cls.catalogue_container}`}>
          <div className={cls.catalogue_svet}>
            <div className={cls.svet_wrapper}>
              <Link href="/Chapter" className={cls.wrapper_link}></Link>
              <div className={cls.wrapper_product_desc}>
                <h4 className={cls.product_desc_header}>Светильники</h4>
                <h5 className={cls.product_desc_slogan}>Свет в гармонии с твоим пространством.</h5>
                <div className={cls.product_desc_linkbox}>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    В каталог
                  </Link>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    Привезем на примерку
                  </Link>
                </div>
              </div>
              <div className={cls.svet_wrapper_image}>
                <figure className={cls.image_svet} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${cls.container} ${cls.catalogue_container}`}>
          <div className={cls.catalogue_svet}>
            <div className={`${cls.svet_wrapper} ${cls.svet_wrapper_bl}`}>
              <Link href="/Chapter" className={cls.wrapper_link}></Link>
              <div className={`${cls.wrapper_product_desc} ${cls.wrapper_product_desc_bl}`}>
                <h4 className={cls.product_desc_header}>Мебель</h4>
                <h5 className={cls.product_desc_slogan}>Уютно. Стильно. Притягательно.</h5>
                <div className={cls.product_desc_linkbox}>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    В каталог
                  </Link>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    Возьмем замеры
                  </Link>
                </div>
              </div>
              <div className={cls.svet_wrapper_image}>
                <figure className={`${cls.image_svet} ${cls.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${cls.section_catalogue} ${cls.section_catalogue1}`}>
        <div className={`${cls.container} ${cls.catalogue_container}`}>
          <div className={cls.catalogue_svet}>
            <div className={`${cls.svet_wrapper} ${cls.svet_wrapper_bl}`}>
              <Link href="/Chapter" className={cls.wrapper_link}></Link>
              <div className={`${cls.wrapper_product_desc} ${cls.wrapper_product_desc_bl}`}>
                <h4 className={cls.product_desc_header}>Зеркала</h4>
                <h5 className={cls.product_desc_slogan}>Отражение стиля.</h5>
                <div className={cls.product_desc_linkbox}>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    В каталог
                  </Link>
                  <Link href="/Chapter" className={cls.product_desc_link}></Link>
                </div>
              </div>
              <div className={cls.svet_wrapper_image}>
                <figure className={`${cls.image_svet} ${cls.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>
        <div className={`${cls.container} ${cls.catalogue_container}`}>
          <div className={cls.catalogue_svet}>
            <div className={`${cls.svet_wrapper} ${cls.svet_wrapper_bl}`}>
              <Link href="/Chapter" className={cls.wrapper_link}></Link>
              <div className={`${cls.wrapper_product_desc} ${cls.wrapper_product_desc_bl}`}>
                <h4 className={cls.product_desc_header}>Картины</h4>
                <h5 className={cls.product_desc_slogan}>Цвета, которые говорят.</h5>
                <div className={cls.product_desc_linkbox}>
                  <Link href="/Chapter" className={cls.product_desc_link}>
                    В каталог
                  </Link>
                  <Link href="/Chapter" className={cls.product_desc_link}></Link>
                </div>
              </div>
              <div className={cls.svet_wrapper_image}>
                <figure className={`${cls.image_svet} ${cls.image_svet_bl}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCatalogue;
