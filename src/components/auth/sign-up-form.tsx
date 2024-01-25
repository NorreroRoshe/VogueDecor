import { useState } from 'react';;
import { useForm } from 'react-hook-form';
// import { useSignUpMutation, SignUpInputType } from '@/framework/basic-rest/auth/use-signup';
import { useTranslation } from 'next-i18next';
import Image from '../ui/image';
import { useModalAction } from '@/components/common/modal/modal.context';
import Switch from '@/components/ui/switch';
import CloseButton from '@/components/ui/close-button';
import cn from 'classnames';
import { ROUTES } from '@/utils/routes';
import Input from '../ui/form/input';
import PasswordInput from '../ui/form/password-input';
import Button from '../ui/button';
import Logo from '../ui/logo';
import Link from 'next/link';
import signupphoto from '@/assets/img/ButtImg/SignUp.jpg';
import { ISingUpReq } from '@/Store/auth/auth.dtos';
import { useSignUpMutation } from '@/Store/auth/auth.api';

interface SignUpFormProps {
  isPopup?: boolean;
  className?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  isPopup = true,
  className,
}) => {
  const { t } = useTranslation();
  const { closeModal, openModal } = useModalAction();
  const [remember, setRemember] = useState(false);
  const [signUp, { data, isLoading, error }] = useSignUpMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingUpReq>();

  function handleSignIn() {
    return openModal('LOGIN_VIEW');
  }

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  function onSubmit({ email, password }: ISingUpReq) {
    signUp({
      email,
      password,
    })
    .unwrap()
    .then((data) => {
      openModal('EMAIL_CONFIRM');
    })
    .catch((error) => {
      if (error?.data?.errors?.Password) {
        const passwordErrorMessage = error.data.errors.Password[0];
        setPasswordError(passwordErrorMessage);
        setEmailError(null);
      } else if (error?.data?.Message === "Пользователь с такой почтой уже существует") {
        setEmailError('Пользователь с такой почтой уже существует, либо восстоновите пароль, либо подтвердите ваш почту');
        setPasswordError(null);}
        else if (error?.data?.Message === "Passwords must have at least one lowercase ('a'-'z').") {
          setPasswordError("Пароль должен содержать хотя бы одну строчную букву ('a'-'z').");
          setEmailError(null);
      }
      else if (error?.data?.Message === "Passwords must have at least one non alphanumeric character.") {
        setPasswordError("Пароль должен содержать хотя бы один символ не цыфро-буквенный");
        setEmailError(null);
    }
      else if (error?.data?.Message === "Passwords must have at least one uppercase ('A'-'Z').") {
        setEmailError(null);
        setPasswordError("Пароль должен содержать хотя бы одну заглавную букву ('A'-'Z').");
    } else {
        setEmailError("Ошибка при регистрации");
        setPasswordError('Ошибка при регистрации');
      }
    });
  }
  return (
    <div
      className={cn(
        'flex bg-skin-fill mx-auto rounded-lg w-full lg:w-[1000px] 2xl:w-[1200px]',
        className
      )}
    >
      {isPopup === true && <CloseButton onClick={closeModal} />}
      <div className="flex bg-skin-fill mx-auto rounded-lg overflow-hidden w-full">
        <div className="md:w-[55%] xl:w-[60%] registration hidden md:block">
          <Image
            src={signupphoto}
            alt="sign up"
            width={800}
            height={620}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-[45%] xl:w-[40%] py-6 sm:py-10 px-4 sm:px-8 lg:px-12  rounded-md shadow-dropDown flex flex-col justify-center">
          <div className="text-center mb-6 pt-2.5">
            <div onClick={closeModal}>
              <Logo />
            </div>
            <h4 className="text-skin-base font-semibold text-xl sm:text-2xl  sm:pt-3 ">
              {t('Регистрация')}
            </h4>
            <div className="text-sm sm:text-base text-body text-center mt-3 mb-1">
              {t('Уже зарегистрированны ? ')}
              <button
                type="button"
                className="ms-1 text-sm sm:text-base text-skin-primary font-semibold hover:no-underline focus:outline-none"
                onClick={handleSignIn}
              >
                {t(' Войти в аккаунт')}
              </button>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center"
            noValidate
          >
            <div className="flex flex-col space-y-4">
              <Input
                label={t('Введите ардес Email')}
                type="email"
                variant="solid"
                {...register('email', {
                  required: `${t('Email обязателен')}`,
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: t('Некорректный email'),
                  },
                })}
                error={emailError || errors.email?.message}
              />
              <PasswordInput
                label={t('Введите пароль')}
                error={passwordError || errors.password?.message}
                {...register('password', {
                  required: `${t('Некорректный пароль')}`,
                })}
              />
              <div className="flex items-center justify-center">
                {/* <div className="flex items-center flex-shrink-0">
                  <label className="switch relative inline-block w-10 cursor-pointer">
                    <Switch checked={remember} onChange={setRemember} />
                  </label>

                  <label
                    htmlFor="remember"
                    className="flex-shrink-0 text-sm text-heading ps-5 mt-1 cursor-pointer"
                  >
                    {t('Запомнить меня')}
                  </label>
                </div> */}
                <div className="flex ms-auto mt-[2px]" onClick={closeModal}>
                  <Link
                    href={ROUTES.PRIVACY}
                    className="text-end text-sm text-heading ps-3 hover:no-underline hover:text-skin-base focus:outline-none focus:text-skin-base  text-skin-muted"
                  >
                    {t('Политика конфенденциальности')}
                  </Link>
                </div>
              </div>
              <div className="relative"
              >
                <Button
                  type="submit"
                  loading={isLoading}
                  disabled={isLoading}
                  className="h-11 md:h-12 w-full mt-2 font-15px md:font-15px tracking-normal"
                  variant="formButton"
                >
                  {t('Зарегистрироваться')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
