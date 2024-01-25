import React from 'react';
import s from './OutletBanner.module.scss';
import Link from 'next/link';

export const OutletBanner: React.FC = () => {
  return (
    <section className={s.section_outletBanner}>
      <Link className={s.outletBunner_link} href="/">
        <div className={s.outlet_btn}>Скидки до 60%</div>
      </Link>
    </section>
  );
};
