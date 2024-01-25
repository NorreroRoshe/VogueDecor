import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';
import Logo from '../ui/logo';
import Input from '../ui/form/input';
import Button from '../ui/button';
import CloseButton from '../ui/close-button';
import { useModalAction } from '../common/modal/modal.context';
import PasswordInput from '../ui/form/password-input';
import { IConfirmReq, IResendConfirmRes} from '@/Store/auth/auth.dtos';
import { useEmailConfirmMutation, useEmailResendConfirmMutation } from '@/Store/auth/auth.api';

const SuccessChangePassword = () => {
  const { t } = useTranslation();
  const { closeModal, openModal } = useModalAction();

  function handleSignIn() {
    return openModal('LOGIN_VIEW')
  }

  return (
    <div className="py-6 px-5 sm:p-8 bg-skin-fill mx-auto rounded-lg w-full sm:w-96 md:w-450px">
      <CloseButton onClick={closeModal} />
      <div className="text-center mb-9 pt-2.5">
        <div onClick={closeModal}>
          <Logo />
        </div>
        <p className="text-sm text-skin-tree md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t('Вы успешно изменили пароль !')}
        </p>
        <p className="text-sm md:text-base text-body mt-3 sm:mt-4 mb-8 sm:mb-10">
          {t('Теперь вы можете авторизоваться с новым лоином и пароль и продолжить покупку через свой аккаунт !')}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-10 mb-6 sm:mb-7">
        <hr className="w-full border-gray-300" />
        <span className="absolute -top-2.5 px-2 bg-skin-fill"
      style={{opacity: 0.8}}
      >
          {t('Нажмите ниже чтобы авторизоваться')}
        </span>
      </div>
      <div className="text-sm sm:text-15px text-skin-muted text-center"      >
        <button
          type="button"
          onClick={handleSignIn}
          className="text-skin-base underline font-medium hover:no-underline focus:outline-none">
          {t('Авторизоваться')}
        </button>
      </div>
    </div>
  );
};

export default SuccessChangePassword;