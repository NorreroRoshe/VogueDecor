import PasswordInput from '@/components/ui/form/password-input';
import Button from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { usePasswordForgotMutation } from '@/Store/auth/auth.api';
import { IPasswodForgotReq } from '@/Store/auth/auth.dtos';
import {
  useChangePasswordMutation,
  ChangePasswordInputType,
} from '@/framework/basic-rest/customer/use-change-password';
import Input from '../ui/form/input';
import { useState } from 'react';
import { useModalAction } from '../common/modal/modal.context';

const ChangePassword: React.FC = () => {
  const { t } = useTranslation();
  const [passwordForgot, { }] = usePasswordForgotMutation();
  const [emailError, setEmailError] = useState<string | null>(null);
  const { closeModal, openModal } = useModalAction();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPasswodForgotReq>();
  
  const onSubmit = ({ Email }: IPasswodForgotReq) => {
    passwordForgot({
      Email
    })
    .unwrap()
    .then(() => {
      openModal('PASSWORD_RESET')
    })
    .catch((error) => {
        if (error.data.Message === "Пользователь не найден") {
          setEmailError('Пользователь не найден');
        }
        else {
          setEmailError('Ошибка при входе');
      }
    });
  };
  
  return (
    <>
      <Heading variant="titleLarge">
        {t('Смена пароля')}
      </Heading>
      <div className="w-full flex  h-full lg:w-10/12 2xl:w-9/12 flex-col mt-6 lg:mt-7">
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto flex flex-col justify-center "
        >
          <div className="flex flex-col space-y-5 lg:space-y-7">
            <PasswordInput
              label={t('Старый пароль')}
              error={errors.oldPassword?.message}
              {...register('oldPassword', {
                required: `${t('Пароль неверный')}`,
              })}
            />
            <PasswordInput
              label={t('Новый пароль')}
              error={errors.newPassword?.message}
              {...register('newPassword', {
                required: `${t('Пароль неверный')}`,
              })}
            />

            <div className="relative mt-3">
              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                variant="formButton"
                className="w-full sm:w-auto"
              >
                {t('Поменять пароль')}
              </Button>
            </div>
          </div>
        </form> */}
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t(`Введите Email, и мы вышлем вам код для смены пароля`)}
        </p>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className="flex flex-col justify-center"
        noValidate
      >
        <Input
          // label={t('Введите Email')}
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
      </div>
    </>
  );
};

export default ChangePassword;
