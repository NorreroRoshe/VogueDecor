import { TG } from "@/shared/env";

export const sendWithTgCart = async (
  formData: {
    name: string;
    phone: string;    
    message?: string;
  
  },
  pageMess: string
) => {
  const userMessage = `Name: ${formData.name}
  %0APhone: ${formData.phone}
  %0AMessage: ${formData.message}`;
  

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
