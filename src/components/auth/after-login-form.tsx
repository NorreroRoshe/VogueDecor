import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import cn from 'classnames';
import { useModalAction } from '../common/modal/modal.context';
import { LoginInputType, useLoginMutation } from '@/framework/basic-rest/auth/use-login';
import CloseButton from '../ui/close-button';
import Image from '../ui/image';
import Logo from '../ui/logo';
import Input from '../ui/form/input';
import PasswordInput from '../ui/form/password-input';
import Switch from '../ui/switch';
import Button from '../ui/button';
import { useSignInMutation } from '@/Store/auth/auth.api';
import interl from '../../assets/img/interlight2023.jpg';
import { ISingInReq } from "@/Store/auth/auth.dtos";



export interface LoginFormProps {
  isPopup?: boolean;
  className?: string;
}

const AfterLoginForm: React.FC<LoginFormProps> = ({ isPopup = true, className }) => {
  const { t } = useTranslation();
  const { closeModal, openModal } = useModalAction();
  const [remember, setRemember] = useState(false);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [signIn, { data, isLoading, error }] = useSignInMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingInReq>();

  function onSubmit({ email, password }: ISingInReq) {
    signIn({
      email,
      password,
      rememberMe: true,
    })
      .unwrap()
      .then((data) => {
        closeModal();
      })
      .catch((error) => {
        if (error.data && error.data.Message) {
          if (error.data.Message === 'Неверный пароль') {
            setPasswordError('Неверный пароль');
            setEmailError(null);
          } else if (error.data.Message === 'Пользователь не найден') {
            setEmailError('Пользователь не найден');
            setPasswordError(null);
          }
          else if (error.data.Message === 'Почта не подтверждена') {
            setEmailError('Почта не подтверждена');
            setPasswordError(null);
          }
        } else {
          setEmailError('Ошибка при входе');
          setPasswordError('Ошибка при входе');
        }
      });
  }
  function handleSignUp() {
    return openModal('SIGN_UP_VIEW');
  }

  function handleForgetPassword() {
    return openModal('FORGET_PASSWORD');
  }
  
  return (
    <div className={cn('w-full lg:w-[920px] xl:w-[1000px] 2xl:w-[1200px] relative', className)}>
      {isPopup === true && <CloseButton onClick={closeModal} />}

      <div className="flex bg-skin-fill mx-auto rounded-lg overflow-hidden">
        <div className="md:w-[55%] xl:w-[60%] registration hidden md:block">
          <Image src={interl} alt="signin Image" width={800} height={621} className="w-full" />
        </div>
        <div className="w-full md:w-[45%] xl:w-[40%] py-6 sm:py-10 px-4 sm:px-8 xl:px-12 rounded-md shadow-dropDown flex flex-col justify-center">
          <div className="text-center mb-6 ">
            <div onClick={closeModal}>
              <Logo />
            </div>
            <div className="text-sm sm:text-15px text-body text-center mt-3 mb-1">
              {t('Вы успешно зарегистрировались, для того чтобы войти в аккаунт, пожалуйста')}
              <br />
              </div>

            <h4 className="text-skin-base font-semibold text-xl sm:text-2xl sm:pt-3 ">
              {t('Авторизуйтесь')}
            </h4>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
            noValidate>
            <div className="flex flex-col space-y-3.5">
              <Input
                label={t('Почта')}
                type="email"
                variant="solid"
                {...register('email', {
                  required: `${t('E-mail обязателен')}`,
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: t('Некорректный email'),
                  },
                })}
                error={emailError || errors.email?.message}
              />
              <PasswordInput
                label={t('Пароль')}
                error={passwordError || errors.password?.message}
                {...register('password', {
                  required: `${t('Пароль обязателен')}`,
                })}
              />
              <div className="flex items-center justify-center">
                <div className="flex ms-auto mt-[3px]">
                  <button
                    type="button"
                    onClick={handleForgetPassword}
                    className="text-skin-primary sm:text-15px text-sm ms-1 font-semibold hover:no-underline focus:outline-none">
                    {t('Забыли пароль ?')}
                  </button>
                </div>
              </div>
              <div className="relative">
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  className="h-11 md:h-12 w-full mt-2 font-15px md:font-15px tracking-normal"
                  variant="formButton">
                  {t('Войти')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AfterLoginForm;
