import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Logo from '../ui/logo';
import Input from '../ui/form/input';
import Button from '../ui/button';
import CloseButton from '../ui/close-button';
import { useModalAction } from '../common/modal/modal.context';
import PasswordInput from '../ui/form/password-input';
import { IConfirmReq, IResendConfirmReq } from '@/Store/auth/auth.dtos';
import { useEmailConfirmMutation, useEmailResendConfirmMutation, useSignInMutation } from '@/Store/auth/auth.api';
import { useState } from 'react';



const EmailConfirmForm = () => {
  const { t } = useTranslation();
  const [openResetCode, setOpenResetCode] = useState(false)
  const [ifCode, setIfCode] = useState(false)
  const [newCode, setNewCode] = useState(false)
  const { closeModal, openModal } = useModalAction();
  const [emailConfirm, { data, isLoading, error }] = useEmailConfirmMutation();
  const [signIn, {}] = useSignInMutation();
  const [emailResetConfirm, {}] = useEmailResendConfirmMutation();

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [secEemailError, setSecEemailError] = useState<string | null>(null);


  const {
    register: registerFirstForm,
    handleSubmit: handleSubmitFirstForm,
    formState: { errors: errorsFirstForm },
  } = useForm<IConfirmReq>();

  const {
    register: registerSecondForm,
    handleSubmit: handleSubmitSecondForm,
    formState: { errors: errorsSecondForm },
  } = useForm<IResendConfirmReq>();

  const onSubmit = ({ code, email }: IConfirmReq) => {
    emailConfirm({ email, code })
    .unwrap()
      .then(() => {
        // signIn({
        //   email: 'norikas995@gmail.com',
        //   password: '134679zxZ!',
        //   rememberMe: true,
        // })
        openModal('AFTER_LOGIN_VIEW');
        // closeModal();
      })
      .catch((error) => {
          if (error.data.errors?.Code && error.data.errors.Code[0] === 'Длина кода должна быть равна 6 символам') {
            setPasswordError('Длина кода должна быть равна 6 символам');
            setEmailError(null);
          } else if (error.data.Message === "Неправильный код подтверждения") {
            setEmailError(null);
            setPasswordError('Неправильный код подтверждения');
          } 
          else if (error.data.Message === "Пользователь не найден") {
            setEmailError('Пользователь не найден');
            setPasswordError(null);
          }else {
            setEmailError('Ошибка при входе');
            setPasswordError('Ошибка при входе');
        }
      });
  };
  

  function onResetSubmit({ Email }: IResendConfirmReq) {
    emailResetConfirm({ Email })
    .unwrap()
    .then(() => {
      setOpenResetCode(false);
      setIfCode(true);
        setNewCode(true);
      })
      .catch((error) => {
        if (error.data?.Message === "Пользователь не найден") {
          setSecEemailError('Пользователь не найден');
        }
        else {
          setSecEemailError('Ошибка при входе');
      }
    });
  }

  return (
    <div className="py-6 px-5 sm:p-8 bg-skin-fill mx-auto rounded-lg w-full sm:w-96 md:w-450px">
      <CloseButton onClick={closeModal} />
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t('Мы выслали вам на почту код для подтверждения')}
        </p>
      </div>
      <form
        onSubmit={handleSubmitFirstForm((data) => onSubmit(data))}
        className="flex flex-col justify-center"
        noValidate
      >
        <Input
          label={t('Введите ардес Email на который пришёл код')}
          type="email"
          variant="solid"
          {...registerFirstForm('email', {
            required: `${t('Email обязателен')}`,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: t('Некорректный email'),
            },
          })}
          error={emailError || errorsFirstForm.email?.message}
        />
        <PasswordInput
          className="mt-5"
          label={t('Введите код')}
          error={passwordError || errorsFirstForm.code?.message}
          {...registerFirstForm('code', {
            required: `${t('Некорректный код')}`,
          })}
        />

        <Button
          type="submit"
          variant="formButton"
          className="h-11 md:h-12 w-full mt-5"
        >
          {t('Подтвердить почту')}
        </Button>
      </form>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        {!newCode && 
        <span className="absolute -top-2.5 px-2 bg-skin-fill">
      {t('Если вам не пришёл код, то')}
        </span>}
      </div>

{!ifCode && (
  <div className="text-sm sm:text-15px text-skin-muted text-center">
    <div onClick={() => {
  setOpenResetCode(true);
  setIfCode(true);
}}>
      <button
        type="button"
        // onClick={onResetSubmit}
        className="text-skin-base underline font-medium hover:no-underline focus:outline-none"
      >
        {t('Нажмите сюда чтобы повторно выслать код')}
      </button>
    </div>
  </div>
)}






{openResetCode && (
      <form
        onSubmit={handleSubmitSecondForm((data) => onResetSubmit(data))}
        className="flex flex-col justify-center"
        noValidate
      >
        <Input
          label={t('Введите ардес Email на который пришёл код')}
          type="email"
          variant="solid"
          {...registerSecondForm('Email', {
            required: `${t('Email обязателен')}`,
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: t('Некорректный email'),
            },
          })}
          error={secEemailError || errorsSecondForm.Email?.message}
        />
        <Button
          type="submit"
          variant="formButton"
          className="h-11 md:h-12 w-full mt-5"
        >
          {t('Получить повторно код подтверждения')}
        </Button>
      </form>
)}

{newCode && (
  <div className="text-sm sm:text-15px text-skin-muted text-center">
    <span
      // type="button"
      className="text-skin-base font-normal font-medium focus:outline-none"
      style={{opacity: '0.7'}}
    >
      <span className='text-22px font-normal hover:no-underline underline'
      style={{color: 'rgb(2, 178, 144)', opacity: '1'}}
      >Мы выслали вам повторно код на вашу почту!</span>
      <br />
      <br />
      Пожалуйста проверьте на вашей почте в папке 'Входящие' либо в папке 'Cпам'.
      <br />
       В случае если кода нет ни в одной из папок на указанной почте, то просим связаться с нами по почте 'info@Vogue Decor.ru', либо по номеру телефона +7-903-730-30-01.
    </span>
  </div>
)}



    </div>
  );
};

export default EmailConfirmForm;