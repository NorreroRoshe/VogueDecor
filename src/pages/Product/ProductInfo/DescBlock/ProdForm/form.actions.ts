import { TG } from '@/shared/env';

export const sendWithTg = async (
  formData: { 
    name: string; email?: string; phone: string 
  },
  id: string,
  art: string,
  price: number,
  notSalePrice: number
  ) => {
  const userMessage = `Name: ${formData.name}
  %0APhone: ${formData.phone}`;


  const productIdMes = 
 `%0Aid: ${id}
  %0AArticle: ${art}
  %0APrice: ${price}
  %0ANotSalePrice: ${notSalePrice}`;


  
  const message = `${userMessage}%0A%0A%0A${productIdMes}`;


  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: 'POST' },
  );
};
export default sendWithTg;
