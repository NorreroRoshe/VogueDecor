// import Image from '@/components/ui/image';
// import { useTranslation } from 'next-i18next';
// import Text from '@/components/ui/text';
// import Heading from '@/components/ui/heading';
// import emptyCartImg from '@/assets/img/empty_cart.svg';

// const EmptyCart: React.FC = () => {
//   const { t } = useTranslation('common');
//   return (
//     <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
//       <div className="flex mx-auto w-[220px] md:w-auto">
//         <Image
//           src={emptyCartImg}
//           alt={t('Корзина пустая <span>😕</span>')}
//           width={270}
//           height={240}
//         />
//       </div>
//       <Heading variant="titleMedium" className="mb-1.5 pt-8">
//         {t('Корзина пустая <span>😕</span>')}
//       </Heading>
//       <Text>{t('Вероятней всего, вы ещё не заказали стильный светильник или еще что : )')}</Text>
//       <Text>{t(' Для того, чтобы совершить покупку, перейдите на страницу с интересующей вам категорией товара.')}</Text>
//     </div>
//   );
// };

// export default EmptyCart;

import React from 'react';
import emptyCartImg from '@/assets/img/empty_cart.svg';
import cls from '@/pages/Cart/Cart.module.scss';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { useUI } from '@/contexts/ui.context';

const CartEmpty: React.FC = () => {
  const { closeDrawer } = useUI();

  return (
    <>
      <button
        className="flex text-2xl items-center justify-center px-4 md:px-6 py-6 lg:py-7 focus:outline-none transition-opacity text-skin-base hover:opacity-60"
        onClick={closeDrawer}
        aria-label="close">
        <IoClose style={{ width: '35px', height: '35px' }} />
      </button>
      <div className={`${cls.container} ${cls.container__cart}`} style={{ marginTop: '225px' }}>
        <div className={`${cls.cart} ${cls.cart__empty}`}>
          <h2>
            Корзина пустая <span>😕</span>
          </h2>
          <p>
            Вероятней всего, вы ещё не заказали стильный светильник или еще что : )
            <br />
            Для того, чтобы совершить покупку, перейдите на главную страницу.
          </p>
          <Image src={emptyCartImg} alt="Empty cart" />
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
