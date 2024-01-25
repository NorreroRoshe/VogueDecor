import React, { useState, ChangeEvent, FormEvent } from "react";
import cls from "./ReturnForm.module.scss";
import { sendWithTgCart } from "./form.actions";
import { useModalAction } from '../../../common/modal/modal.context';

const phoneRegex = /^(?:\+7|8)?9\d{9}$/;

const fields = {
  name: "Имя",
  phone: "Телефон",
};

export const ReturnForm:React.FC = () => {
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const pageMess = 'Call Me Srochno';

  const { openModal } = useModalAction();

  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleThx() {
    return openModal('THX_MOD');
  }

// Обработчик после успешной отправки формы
const handleSuccess = () => {
  setFormSubmitted(true);
  // Здесь вы можете добавить любую другую логику, связанную с успешной отправкой формы
  handleThx();
};

  const onFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    return false;
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

    const isValidName = !/^[^\d]*$/g.test(formData.name);
    if (isValidName) alert(`Некорректное имя`);

    const isValidPhone = !phoneRegex.test(formData.phone);
    if (isValidPhone) alert(`Неправильный телефон`);

    if (isEmpty || isValidName || isValidPhone) {
      setLoad(false);
      return;
    }
    
    try {
      await sendWithTgCart(formData, pageMess);
      handleSuccess();
    } catch (error) {
      alert("Что-то пошло не так, попробуйте отправить позже");
    } finally {
      setLoad(false);
    }
  };

  const [message, setMessage] = useState('');

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const clearTextarea = () => {
    setMessage('');
  };

  return (
    <div className={cls.collab_subscribe}>
      <div className={cls.collab_container}>
        <form
          className={cls.collab_subscribe__form}
          onSubmit={onFormSubmit}
          onChange={onFormChange}
          // method="post"
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
              type="tel"
              name="phone"
              placeholder="Телефон *"
              required
            />
            <div className={cls.formo_btn}>
          <div>
            <div className={cls.formo_btn_wrapp}>
              <button className={cls.btn_wrapp_btn} 
              disabled={isLoad}
              type="submit">
                  {isLoad ? (
                      "Загрузка..."
                    ) : (
                      <span className={cls.wrapp_btn_text}>
                        {formSubmitted ? "Спасибо!" : "Перезвоните мне"}
                      </span>
                    )}
              </button>
            </div>
          </div>
        </div>
          </div>
          <div className={cls.collab_subscribe__error}></div>
        </form>
      </div>
    </div>
  );
};