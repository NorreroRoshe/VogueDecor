import Container from '@/components/ui/container';
import AccountNav from '@/components/my-account/account-nav';
import AccountNavMobile from './account-nav-mobile';
import { ROUTES } from '@/utils/routes';
import SettingsIcon from '@/components/iconsCode/account-settings';
import HelpIcon from '@/components/iconsCode/account-help';
import AccountChangePassIcon from '../iconsCode/account-change-password';

interface IAccountLayout{
  children? : any
}

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT_SETTING,
    name: 'Настройки аккаунта',
    icon: <SettingsIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.HELP_CENTER,
    name: 'Поддержка (Вопрос-Ответ)',
    icon: <HelpIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
  {
    slug: ROUTES.CHANGE_PASSWORD,
    name: 'Смена пароля',
    icon: <AccountChangePassIcon className="w-5 md:w-[22px] h-5 md:h-[22px]" />,
  },
];

const AccountLayout: React.FunctionComponent<IAccountLayout> = ({ children }) => {
  return (
    <div className="border-skin-base custom-mt-1000">
      <Container>
        <div className="pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1300px] mx-auto">
          <div className="flex flex-col lg:flex-row w-full">
            <div className="lg:hidden">
              <AccountNavMobile options={accountMenu} />
            </div>
            <div className="hidden lg:block flex-shrink-0 w-80 xl:w-[385px] me-7 xl:me-8">
              <AccountNav options={accountMenu} />
            </div>

            <div className="w-full mt-4 lg:mt-0 border border-skin-base p-4 sm:p-5 lg:py-8 2xl:py-10 lg:px-9 2xl:px-12 rounded-md">
              {children}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountLayout;
