import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Logo from '../ui/logo';
import Input from '../ui/form/input';
import Button from '../ui/button';
import CloseButton from '../ui/close-button';
import { useModalAction } from '../common/modal/modal.context';
import { usePasswordForgotMutation } from '@/Store/auth/auth.api';
import { IPasswodForgotReq } from '@/Store/auth/auth.dtos';
import { useState } from 'react';

type FormValues = {
  email: string;
};

const defaultValues = {
  email: '',
};

const ForgetPasswordForm:React.FC = () => {
  const { t } = useTranslation();
  const { closeModal, openModal } = useModalAction();
  const [passwordForgot, { }] = usePasswordForgotMutation();
  const [emailError, setEmailError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswodForgotReq>();

  function handleSignIn() {
    return openModal('LOGIN_VIEW');
  }

  const onSubmit = ({ Email }: IPasswodForgotReq) => {
    passwordForgot({
      Email
    })
    .unwrap()
    .then(() => {
      openModal('PASSWORD_RESET')
    })
    .catch((error) => {
        if (error.data?.Message === "Пользователь не найден") {
          setEmailError('Пользователь не найден');
        }
        else {
          setEmailError('Ошибка при входе');
      }
    });
  };



  return (
    <div className="py-6 px-5 sm:p-8 bg-skin-fill mx-auto rounded-lg w-full sm:w-96 md:w-450px">
      <CloseButton onClick={closeModal} />
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t(`Мы вышлем вам ссылку для восстановления пароля`)}
        </p>
      </div>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="flex flex-col justify-center"
        noValidate
      >
        <Input
          label={t('Введите Email')}
          type="email"
          variant="solid"
          className="mb-4"
          {...register('Email', {
            required: `${t('Email обязателен')}`,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: t('Некорректный Email'),
            },
          })}
          error={emailError || errors.Email?.message}
        />

        <Button
          type="submit"
          variant="formButton"
          className="h-11 md:h-12 w-full mt-0"
        >
          {t(`Восстановить пароль`)}
        </Button>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-skin-fill">
          {t('либо')}
        </span>
      </div>
      <div className="text-sm sm:text-15px text-skin-muted text-center">
        {t('Вернуться к ')}{' '}
        <button
          type="button"
          className="text-skin-base underline font-medium hover:no-underline focus:outline-none"
          onClick={handleSignIn}
        >
          {t('авторизации')}
        </button>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
