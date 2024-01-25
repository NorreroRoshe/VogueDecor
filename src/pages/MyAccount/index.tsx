import Breadcrumb from '@components/ui/breadcrumb';
import AccountLayout from '@/components/my-account/account-layout';
import AccountDetails from '@/components/my-account/account-details';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Seo from '@/components/seo/seo';

export default function AccountDetailsPage() {
  return (
    <>
      <Breadcrumb />
      <Seo
        title="Account Settings"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="my-account/account-settings"
      />
      <AccountLayout>
        <AccountDetails />
      </AccountLayout>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale!, [
//         'common',
//         'forms',
//         'menu',
//         'footer',
//       ])),
//     },
//   };
// };

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
