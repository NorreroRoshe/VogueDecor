import { useState, ChangeEvent, FormEvent } from 'react';
import cls from './CartSendForm.module.scss';
import { sendWithTgCart } from './form.actions';
import { useAppSelector } from '../../../Store/store';
import { cartToPaySelector, getTotalCartSelector } from '../../../Store/cart/cart.selectors';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(?:\+7|8)?9\d{9}$/;

const fields = {
  name: 'Имя',
  email: 'Email',
  phone: 'Телефон',
};

interface ICartSendFormProps {
  isSent: boolean;
  setSent: (value: boolean) => void;
}

export const CartSendForm: React.FC<ICartSendFormProps> = ({ isSent, setSent }) => {
  const [isLoad, setLoad] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const cart = useAppSelector(cartToPaySelector);
  const total = useAppSelector(getTotalCartSelector);

  const onFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);

    const isEmpty = Object.entries(formData).some((item) => {
      let check = item[1] === '';
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
      await sendWithTgCart(formData, cart, total);
      setSent(true);
    } catch (error) {
      alert('Что-то пошло не так, попробуйте отправить позже');
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className={cls.collab_subscribe}>
      <form className={cls.collab_subscribe__form} onSubmit={onFormSubmit} onChange={onFormChange}>
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
          <input
            className={cls.collab_subscribe__input}
            type="email"
            name="email"
            placeholder="e-mail *"
            required
          />
          <button disabled={isLoad} type="submit" className={cls.collab_subscribe__btn}>
            {isLoad ? 'Отправляется...' : isSent ? 'Отправлено !' : 'Отправить'}
          </button>
        </div>
        <div className={cls.collab_subscribe__error}></div>
      </form>
      <p className={`${cls.after_send} ${isSent ? cls.after_send_true : ''}`}>
        Благодарим за ваш заказ! <br />
        <br /> Пожалуйста ожидайте, менеджер свяжется с вами в ближайшее время для подтверждения
        заказа !) <br /> <br />
        Так же к вам на почту поступит сообщение с перечнем заказа
      </p>
    </div>
  );
};

export default CartSendForm;