import AccountLayout from '@/components/my-account/account-layout';
import ChangePassword from '@/components/my-account/change-password';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Seo from '@/components/seo/seo';

export default function ChangePasswordPage() {
  return (
    <>
      <Seo
        title="Change Password"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="my-account/change-password"
      />
      <AccountLayout>
        <ChangePassword />
      </AccountLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    // Если locale не передан, установите значение по умолчанию
    locale = 'en'; // или другой язык по умолчанию
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'forms', 'menu', 'footer'])),
    },
  };
};
