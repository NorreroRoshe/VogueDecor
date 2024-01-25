import React, { useState, ChangeEvent, FormEvent } from "react";
import cls from "./ReturnForm.module.scss";
import { sendWithTg, sendWithTgCart } from "./form.actions";
import { useAppSelector } from "../../Store/store";
import {
  cartToPaySelector,
  getTotalCartSelector,
} from "../../Store/cart/cart.selectors";
import { useLocation } from "react-router-dom";

interface IReturnForm {
  pageMess: string;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:\+7|8)?9\d{9}$/;

const fields = {
  name: "Имя",
  email: "Email",
  phone: "Телефон",
};

export const ReturnForm:React.FC<IReturnForm> = ({pageMess}) => {
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });


  const onFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);

    const isEmpty = Object.entries(formData).some((item) => {
      //Если поле пустое - то появится ошибка
      let check = item[1] === "";
      if (check) {
        alert(`Заполни поле ${fields[item[0] as keyof typeof fields]}`);
      }
      return check;
    });

    const isValidEmail = !emailRegex.test(formData.email);
    if (isValidEmail) alert(`Неправильная почта`);

    const isValidName = !/^[^\d]*$/g.test(formData.name);
    if (isValidName) alert(`Некорректное имя`);

    const isValidPhone = !phoneRegex.test(formData.phone);
    if (isValidPhone) alert(`Неправильный телефон`);

    if (isEmpty || isValidEmail || isValidName || isValidPhone) {
      setLoad(false);
      return;
    }
    
    try {
      await sendWithTgCart(formData, pageMess);
      // await sendWithTg(formData);
    } catch (error) {
      alert("Что-то пошло не так, попробуйте отправить позже");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className={cls.collab_subscribe}>
      <div className={cls.collab_container}>
        <p>
          Заполните форму обратной связи и мы свяжемся с вами в ближайшее время
        </p>
        <form
          className={cls.collab_subscribe__form}
          onSubmit={onFormSubmit}
          onChange={onFormChange}
        >
          <div className={cls.collab_subscribe__wrap}>
            <input
              className={cls.collab_subscribe__input}
              type="text"
              name="name"
              placeholder="Имя *"
              required
            />
            <input
              className={cls.collab_subscribe__input}
              type="tel" // Changed to "tel" for the correct type
              name="phone"
              placeholder="Телефон *"
              required
            />
            <input
              className={cls.collab_subscribe__input}
              type="email"
              name="email"
              placeholder="e-mail *"
              required
            />
            <button
              disabled={isLoad}
              type="submit"
              className={cls.collab_subscribe__btn}
            >
              {isLoad ? "Загрузка..." : "Отправить"}
            </button>
          </div>
          <div className={cls.collab_subscribe__error}></div>
        </form>
      </div>
    </div>
  );
};