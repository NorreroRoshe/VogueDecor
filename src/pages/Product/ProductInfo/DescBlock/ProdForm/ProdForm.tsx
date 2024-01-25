import { useState, ChangeEvent, FormEvent } from 'react';
import cls from './ProdForm.module.scss';
import { sendWithTg } from './form.actions';

const phoneRegex = /^(?:\+7|8)?9\d{9}$/;

const fields = {
  name: 'Имя',
  phone: 'Телефон',
};

type CounterProps = {
  id: string;
  art: string;
  price: number;
  notSalePrice: number;
};


export const ProdForm:React.FC<CounterProps> = ({id, art ,price, notSalePrice}) => {
  const [isSent, setSent] = useState(false);
  const [isLoad, setLoad] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const onFormChange = (e: ChangeEvent<HTMLFormElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoad(true);

    // const isEmpty = Object.entries(formData).some(([, value]) => value === '');

    const isEmpty = Object.entries(formData).some((item) => {
      //Если поле пустое - то появится ошибка
      let check = item[1] === '';
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
      await sendWithTg(formData, id, art, price, notSalePrice);
      setSent(true);
    } catch (error) {
      alert('Что-то пошло не так, попробуйте отправить позже');
    } finally {
      setLoad(false);
    }
  };
  
  return (
    <div className={cls.collab_subscribe}>
      <div className={cls.collab_container}>
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
            <button disabled={isLoad} type="submit" className={cls.collab_subscribe__btn}>
              {isLoad ? 'Отправляется...' : isSent ? 'Заказано !' : 'Обратный звонок'}
            </button>
          </div>
          <div className={cls.collab_subscribe__error}></div>
        </form>
      </div>
      <p className={`${cls.after_send} ${isSent ? cls.after_send_true : ''}`}>
        Наш менеджер свяжется с вами в ближайшее время! <br />
      </p>
    </div>
  );
};

export default ProdForm;
