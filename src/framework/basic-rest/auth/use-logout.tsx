import { signOut } from '@/Store/auth/auth.slice';
import { useAppDispatch } from '@/Store/store';
import { useUI } from '@/contexts/ui.context';
import Router from 'next/router';
import { useMutation } from 'react-query';

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}

async function logout() {
  return {
    ok: true,
    message: 'Logout Successful!',
  };
}

export const useLogoutMutation = () => {
  const dispatch = useAppDispatch();

  return useMutation(() => logout(), {
    onSuccess: (_data) => {
      dispatch(signOut());
      // Устанавливаем таймаут на 1 секунду перед переходом
      setTimeout(() => {
        Router.push('/');
      }, 1000); // 1000 миллисекунд = 1 секунда
    },
    onError: (data) => {
      // Обработка ошибок
    },
  });
};
