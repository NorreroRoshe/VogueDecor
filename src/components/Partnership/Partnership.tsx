import React from "react";
import cls from "./Partnership.module.scss";
import Link from "next/link";

export const Partnership: React.FC = () => {
      return (
            <div className={cls.partner__data}>
                  <div className={cls.container}>
                        <div className={cls.partner__title}>Сотрудничество</div>
                        <div className={cls.partner__desc}>
                              Vogue Decor приглашает к сотрудничеству дизайнеров, арихтекторов а также
                              ритейлеров и диллеров на выгодных условиях
                        </div>
                        <div className={cls.partner__btns_wrap}>
                              <Link className={cls.partner__btn} href="/Designer">
                                    Дизйанерам
                              </Link>
                              <Link className={cls.partner__btn} href="/Collaboration">
                                Дилерам
                                {/* Ретейлерам и Интернет-дилерам */}
                              </Link>
                        </div>
                  </div>
            </div>
      );
};
