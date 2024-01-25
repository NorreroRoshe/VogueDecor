import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cls from './LightCatalogue.module.scss';
import SectionHeader from '../common/section-header';
import Container from '@components/ui/container';
import { bundleDataTwo as bundle } from '@framework/static/bundle';
import BundleGrid from '@components/bundle/bundle-grid';
import svet from '../../assets/img/allCat/svet.png';
import carpets from '../../assets/img/allCat/carpets.png';
import mebel from '../../assets/img/allCat/mebel.png';
import zerkala from '../../assets/img/allCat/zerkala.png';
import acsess from '../../assets/img/allCat/acsess.png';

export const LightCatalogue: React.FC = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1150);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isWideScreen) {
    return (
      <section className={`${cls.section_categories} ${cls.container}`}>
        <Container>
          <div className={`${cls.mtfifth}`}>
            <SectionHeader
              sectionHeading="Категория товаров"
              sectionSubHeading=""
              headingPosition="left"
              />
          </div>
          <div className="ui-ZNS3M ui-x6M0M ui-i4LZM mi_qN">
            <div className="ui-TuGTS" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'transform 0.24s cubic-bezier(0.1, 0, 0.25, 1) 0s' }}>
              <div className="ui-j6Lq6 ygpOv">
                <div className="I_nj2 RtDRX">
                  <div className="FgYkG">
                    <Link className="ui-GPFV8 BE2NI" href="/Chapter/Light">
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={svet} alt='as' />
                      </div>
                      <div className="fANJ9">Свет</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">19 290<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                  <div className="FgYkG">
                    <Link className="ui-GPFV8 BE2NI" href="/Chapter/Mirrors">
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={zerkala} loading="lazy" decoding="async" className="c9h0M Az1S_" />
                      </div>
                      <div className="fANJ9">Зеркала</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">3490<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                  <div className="FgYkG">
                    <Link className="ui-GPFV8 BE2NI" href="/Chapter/Carpets">
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={carpets} loading="lazy" decoding="async" className="c9h0M Az1S_" />
                      </div>
                      <div className="fANJ9">Ковры</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">390<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                  <div className="FgYkG">
                    <Link className="ui-GPFV8 BE2NI" href="/Chapter/Furniture">
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={mebel} loading="lazy" decoding="async" className="c9h0M Az1S_" />
                      </div>
                      <div className="fANJ9">Мебель</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">14 690<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                  <div className="w9Dm_1">
                    <div className="mYX0Y">
                      <Link className="ui-GPFV8 E52PT" href="/DostavkaOplata">
                        <div className="XyfHc">
                          <div className="_xn4i">Доставим быстро!</div>
                          <div className="ARJEus">
                            <span className="ui-GPFV8 ui-d0wFj ui-IZb9T hRJEu">Подробнее</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="FgYkG FgYkG1">
                    <Link className="ui-GPFV8 BE2NI" href="/Chapter?Type=6,7">
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={acsess} loading="lazy" decoding="async" className="c9h0M Az1S_" />
                      </div>
                      <div className="fANJ9">Картины и аксессуары</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">390<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                  
                  <div className="w9Dm_">
                    <div className="mYX0Y">
                      <Link className="ui-GPFV8 E52PT" href="/Chapter/GoodsForHome">
                        <div className="XyfHc">
                          <div className="_xn4i">Товары для дома</div>
                          <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">390<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                          {/* <div className="PAJLy">Распродажа мебели и товаров для дома со склада</div>
                          <span className="ui-GPFV8 ui-d0wFj ui-IZb9T hRJEu">Выбрать</span> */}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  } else {
    return (
      <Container>
        <BundleGrid
          className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
          data={bundle} // You should replace this with your actual data for BundleGrid
        />
      </Container>
    );
  }
};