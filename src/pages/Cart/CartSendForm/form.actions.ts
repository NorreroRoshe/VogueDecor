import { ICartToPay, ITotalCart } from '../../../Store/cart/cart.selectors';
import { TG } from '../../../shared/env';

export const sendWithTgCart = async (
  formData: {
    name: string;
    email: string;
    phone: string;
  },
  cart: ICartToPay,
  total: ITotalCart,
) => {


  const userMessage = `Name: ${formData.name}
  %0AEmail: ${formData.email}
  %0APhone: ${formData.phone}`;

  const cartMes = cart
    .map(
      (item, index) => `%0A${index + 1} позиция
    %0Aid: ${item.id};
    %0Aname: ${item.name};
    %0Aarticle: ${item.article};
    %0Acount: ${item.count};
    %0Aprice: ${item.price};
  `,
    )
    .join(`%0A%0A`);

  const totalMes = `totalPrice: ${total.totalPrice}%0AtotalCount: ${total.totalCount}
  %0AtotaDiscountPrice: ${total.totaDiscountPrice}`;

  const message = `${userMessage}%0A%0A%0A${cartMes}%0A%0A%0A${totalMes}`;

  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: 'POST' },
  );
};

export default sendWithTgCart;