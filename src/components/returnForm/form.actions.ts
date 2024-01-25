import { ICartToPay, ITotalCart } from "../../Store/cart/cart.selectors";
import { TG } from "../../shared/env";

export const sendWithTg = async (formData: {
  name: string;
  email: string;
  phone: string;
}) => {
  const message = `Name: ${formData.name}
  %0AEmail: ${formData.email}
  %0APhone: ${formData.phone}`;
  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: "POST" }
  );
};

export const sendWithTgCart = async (
  formData: {
    name: string;
    email: string;
    phone: string;
  },
  pageMess: string
) => {
  const userMessage = `Name: ${formData.name}
  %0AEmail: ${formData.email}
  %0APhone: ${formData.phone}`;

  const totalMes = `%0APageFromSend: ${pageMess}`;

  const message = `${userMessage}%0A%0A%0A${totalMes}`;

  return fetch(
    `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
    { method: "POST" }
  );
};

// import { TG } from "@/shared/env";

// export const sendWithTg = async (formData) => {
//   const message = `Name: ${formData.name}
//   %0AEmail: ${formData.email}
//   %0AMessage: ${formData.message}`;
//   return fetch(
//     `https://api.telegram.org/bot${TG.BOT_TOKEN}/sendMessage?chat_id=${TG.CHAT_ID}&text=${message}`,
//     { method: "POST" }
//   );
// };
