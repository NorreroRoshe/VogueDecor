import SignupForm from '@/components/auth/sign-up-form';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/components/seo/seo';
import Divider from '@/components/ui/divider';
import { ModalProvider } from '@/components/common/modal/modal.context';
import Breadcrumb from '@components/ui/breadcrumb';

export default function SignInPage() {
  return (
    <>
      <Seo
        title="Sign Up"
        description="Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS."
        path="signup"
      />
      <Divider />
      <div className="flex justify-center items-center">
      <Breadcrumb />
        <div className="py-16 lg:py-20">
          <SignupForm isPopup={false} className="border border-skin-base rounded-lg" />
        </div>
      </div>
      <Divider />
    </>
  );
}

// SignInPage.Layout = Layout;

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
