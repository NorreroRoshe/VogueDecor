import Input from '@/components/ui/form/input';
import PasswordInput from '@/components/ui/form/password-input';
import Button from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { useTranslation } from 'next-i18next';
import Switch from '@/components/ui/switch';
import Text from '@/components/ui/text';
import {
  UpdateUserType,
  useUpdateUserMutation,
} from '@/framework/basic-rest/customer/use-update-customer';
import { Controller, useForm } from 'react-hook-form';
import { useAppSelector } from '@/Store/store';
import { useGetUserDetailsMutation, usePutUserDetailsMutation } from '@/Store/auth/auth.api';
import React, { useEffect, useState } from "react";
import { AuthNameSelector } from '@/Store/auth/auth.selector';
import { IputUserDetailsReq } from '@/Store/auth/auth.dtos';

const AccountDetails: React.FC = () => {
  const [updateAccount, {}] = usePutUserDetailsMutation();
  const authName = useAppSelector(AuthNameSelector);
  const [userDet, { isLoading }] = useGetUserDetailsMutation();
  const [{ data }, setState] = useState<any>([]); //дата не всегда заполнялась , просто влязи стейт и засунули в него ответ с сервером
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IputUserDetailsReq>();

  
  // const onSubmit = ({ name, phoneNumber }: IputUserDetailsReq) => {
  //   updateAccount({
  //     userId: authName,
  //     name,
  //     phoneNumber
  //   })
  // };


  const onSubmit = async ({ name, phoneNumber }: IputUserDetailsReq) => {
    try {
      await updateAccount({
        userId: authName,
        name,
        phoneNumber
      });
      // После успешной мутации, вызываем userDet снова
      const response = await userDet({
        UserId: authName
      });
      setState(response as any);
    } catch (error) {
      console.error('Ошибка при обновлении данных:', error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = authName; // Получить `UserId`
        if (id) {
          const response = await userDet({
            UserId: id,
          });
          setState(response as any);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [authName]);

  return (
    <div className="w-full flex flex-col">
      <Heading variant="titleLarge" className="mb-5 md-6 lg-7 lg-1">
        {data && data.name ? `${data.name}, ${t('Добро пожаловать в личный кабинет!')}` : t('Добро пожаловать в личный кабинет!')}
      </Heading>
      <Heading variant="titleLarge" className="mb-5 xl:mb-8 pt-6 md:pt-7 lg:pt-8">
        {t('Информация об аккаунте')}
      </Heading>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex flex-col justify-center"
        noValidate>
        <div className="border-skin-base border-b pb-7 md:pb-8 lg:pb-10">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              Имя : &nbsp;
              {data && data.name ? (
                <span style={{ color: 'green' }}>{data.name}</span>
              ) : (
                <span style={{ color: 'red' }}>Имя не указано, добавьте пожалуйста ваше имя</span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              Телефон :  &nbsp;
              {data && data.phoneNumber ? (
                <span style={{ color: 'green' }}>{data.phoneNumber}</span>
              ) : (
                <span style={{ color: 'red' }}>Телефон не указан, добавьте пожалуйста номер вашего телефона</span>
              )}
            </div>
            <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
              Почта :  &nbsp;
              {data && data.email && (
                <span style={{ color: 'green' }}>{data.email}</span>)}

            </div>
          </div>
        </div>
        <Heading variant="titleLarge" className="mb-5 xl:mb-8 pt-6 md:pt-7 lg:pt-8">
          {t('Изменить / Добавить личные данные')}
        </Heading>
        <div className="border-skin-base">
          <div className="flex flex-col space-y-4 sm:space-y-5">
            <div className="border-skin-base border-b pb-7 md:pb-8">
              <div className="flex flex-col space-y-4 sm:space-y-5">
                <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                  <Input
                    label={t('Имя')}
                    {...register('name', {
                      // required: 'Необходимо заполнить ваше имя',
                      pattern: {
                        value: /^[A-Za-zА-Яа-яЁё\s\-']+$/,
                        message: 'Некорректное имя'
                      },
                    })}
                    variant="solid"
                    className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                    error={errors.name?.message}
                  />
                </div>
                <div className="flex flex-col sm:flex-row -mx-1.5 md:-mx-2.5 space-y-4 sm:space-y-0">
                  <Input
                    type="tel"
                    label={t('Номер телефона')}
                    {...register('phoneNumber', {
                      // required: 'Телефон необходим',
                      pattern: {
                        value: /^\+?[0-9]*$/,
                        message: 'Некорректный номер телефона'
                      }                      
                    })}
                    variant="solid"
                    className="w-full sm:w-1/2 px-1.5 md:px-2.5"
                    error={errors.phoneNumber?.message}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex sm:ms-auto mt-5 pb-2 lg:pb-0">
          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="formButton"
            className="w-full sm:w-auto">
            {t('Сохранить изменения')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
