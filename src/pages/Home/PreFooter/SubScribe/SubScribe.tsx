import React from 'react';
import s from './SubScribe.module.scss';

export const SubScribe: React.FC = () => {
  return (
    <div className={s.pre_subscribe}>
      <div className={`${s.container} container`}>
        <p>Получайте эксклюзивные предложения и свежие новости от Vogue Decor, подписавшись на нашу рассылку.</p>
        <form className={s.pre_subscribe__form}>
          <div className={s.pre_subscribe__wrap}>
            <input
              className={s.pre_subscribe__input}
              type="email"
              name="email"
              placeholder="E-mail *"
            />
            <input className={s.pre_subscribe__input} type="text" name="name" placeholder="Имя" />
            <button className={s.pre_subscribe__btn} type="submit">
              Подписаться
            </button>
          </div>
          <div className={s.pre_subscribe__error}></div>
        </form>
      </div>
    </div>
  );
};
