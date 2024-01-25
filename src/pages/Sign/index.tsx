  import React, { useState } from 'react';
  import Breadcrumb from '@components/ui/breadcrumb';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import cls from './Sign.module.scss'; // Импортируем CSS-файл для стилизации

// Валидационная схема Yup
const validationSchema = Yup.object().shape({
  emailOrUsername: Yup.string().required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
  verificationCode: Yup.string().required('Обязательное поле'),
});

interface ILog {
  emailOrUsername: any;
  password: any;
}

function Sign() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (values: ILog) => {
    // Ваша логика аутентификации
    if (values.emailOrUsername && values.password) {
      // Проверка логина/пароля на сервере
      // Если успешно, устанавливаем isLoggedIn в true
      setIsLoggedIn(true);
      // Загрузите email пользователя из сервера и установите его
      setUserEmail('user@example.com');
    }
  };

  const handleRegister = async (values: ILog) => {
    // Ваша логика регистрации
    if (values.emailOrUsername && values.password) {
      // Отправить данные на сервер для создания аккаунта
      // Отобразить сообщение об успешной регистрации
      setIsRegistered(true);
    }
  };

  const handleVerifyCode = (values: { verificationCode: any; }) => {
    // Ваша логика проверки кода
    if (values.verificationCode) {
      // Проверьте код на сервере
      // Если успешно, установите isLoggedIn в true
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <Breadcrumb />
    <div className={cls.login_form_container}>
      <div className={cls.login_form}>
        {!isLoggedIn && !isRegistered && (
          <Formik
            initialValues={{
              emailOrUsername: '',
              password: '',
              verificationCode: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleLogin(values)}>
            <Form>
              <div className={cls.form_group}>
                <Field type="text" name="emailOrUsername" placeholder="Email или логин" className="input-field" />
                <ErrorMessage name="emailOrUsername" component="div" />
              </div>
              <div className={cls.form_group}>
                <Field type="password" name="password" placeholder="Пароль" className="input-field" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Войти</button>
              <button onClick={() => setIsRegistered(true)}>Зарегистрироваться</button>
            </Form>
          </Formik>
        )}
        {isRegistered && !isLoggedIn && (
          <div>
            <p>На вашу почту отправлено письмо с кодом подтверждения.</p>
            <Formik
              initialValues={{
                verificationCode: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleVerifyCode(values)}>
              <Form>
                <div className={cls.form_group}>
                  <Field type="text" name="verificationCode" placeholder="Код подтверждения" className="input-field" />
                  <ErrorMessage name="verificationCode" component="div" />
                </div>
                <button type="submit" className="btn" >Подтвердить</button>
              </Form>
            </Formik>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <p>Вы вошли как: {userEmail}</p>
            {/* Дополнительный контент после входа */}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Sign;
