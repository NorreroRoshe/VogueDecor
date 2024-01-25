import Modal from '@/components/common/modal/modal';
import dynamic from 'next/dynamic';
import {
  useModalAction,
  useModalState,
} from '@/components/common/modal/modal.context';
const LoginForm = dynamic(() => import('@/components/auth/login-form'));
const FeedbackPhone = dynamic(() => import('@/components/feedback/feedbackPhone/feedbackPhone'));
const FeedbackMessage = dynamic(() => import('@/components/feedback/feedbackMessage/feedbackMessage'));
const FeedbackVideo = dynamic(() => import('@/components/feedback/feedbackVideo/feedbackVideo'));
const ThxMod = dynamic(() => import('@/components/feedback/ThxMod/ThxMod'));
const AfterLoginForm = dynamic(() => import('@/components/auth/after-login-form'));
const SignUpForm = dynamic(() => import('@/components/auth/sign-up-form'));
const PasswordReset = dynamic(() => import('@/components/auth/password-reset'));
const ForgetPasswordForm = dynamic(
  () => import('@/components/auth/forget-password-form')
);
const EmailConfirmForm = dynamic(
  () => import('@/components/auth/email-confirm')
);
const SuccessChangePassword = dynamic(
  () => import('@/components/auth/success-change-password')
);
const PrePopup = dynamic(() => import('@/components/product/pre-popup'));

const ManagedModal: React.FC = () => {
  const { isOpen, view } = useModalState();
  const { closeModal } = useModalAction();

  // if (view === 'CATEGORY_VIEW') {
  //   return (
  //     <Modal open={isOpen} onClose={closeModal} variant="bottom">
  //       {view === 'CATEGORY_VIEW' && <CategoryPopup />}
  //     </Modal>
  //   );
  // }
  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === 'LOGIN_VIEW' && <LoginForm />}
      {view === 'FEEDBACK_PHONE' && <FeedbackPhone />}
      {view === 'FEEDBACK_MESSAGE' && <FeedbackMessage />}
      {view === 'FEEDBACK_VIDEO' && <FeedbackVideo />}
      {view === 'AFTER_LOGIN_VIEW' && <AfterLoginForm />}
      {view === 'SIGN_UP_VIEW' && <SignUpForm />}
      {view === 'FORGET_PASSWORD' && <ForgetPasswordForm />}
      {view === 'PASSWORD_RESET' && <PasswordReset />}
      {view === 'EMAIL_CONFIRM' && <EmailConfirmForm />}
      {view === 'SUCCESS_CHANGE_PASSWORD' && <SuccessChangePassword />}
      {view === 'PRODUCT_VIEW' && <PrePopup />}
      {view === 'THX_MOD' && <ThxMod />}
    </Modal>
  );
};

export default ManagedModal;
