import Link from 'next/link';
import MenuIcon from '@components/iconsCode/menu-icon';
import HomeIcon from '@components/iconsCode/home-icon';
import { useUI } from '@contexts/ui.context';
import { useRouter } from 'next/router';
import { ROUTES } from '@utils/routes';
import dynamic from 'next/dynamic';
import { Drawer } from '@components/common/drawer/drawer';
import { getDirection } from '@utils/get-direction';
import cls from '../Header/Header.module.scss';
import { useModalAction } from '@components/common/modal/modal.context';
import { useTranslation } from 'next-i18next';
const CartButton = dynamic(() => import('@components/cart/cart-button'), {
  ssr: false,
});
const AuthButton = dynamic(() => import('@/components/auth/auth-button'), {
  ssr: false,
});
const FavoritesButton = dynamic(() => import('@components/cart/favorites-button'), {
  ssr: false,
});
const MobileMenu = dynamic(
  () => import('../header/mobile-menu')
);

const BottomNavigation: React.FC = () => {
  const { t } = useTranslation('common');
  const {
    openSidebar,
    closeSidebar,
    displaySidebar,
  } = useUI();
  const { openModal } = useModalAction();
  const { locale } = useRouter();
  const dir = getDirection(locale);
  const contentWrapperCSS = dir === 'ltr' ? { left: 0 } : { right: 0 };
  
  function handleMobileMenu() {
    return openSidebar();
  }

  const openFeedback = () => {
    openModal('FEEDBACK_PHONE');
  }

  return (
    <>
      <div className="hidden-s fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-skin-fill w-full h-14 px-4 md:px-6 lg:px-8 text-skin-muted pb-0.5">
        <button
          aria-label="Menu"
          className="flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
          onClick={handleMobileMenu}
        >
          <MenuIcon />
          <span className={cls.mobile_icon_title}>Каталог</span>
        </button>
        <button
          aria-label="Menu"
          className={`flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none ${cls.nav_bef_fivth}`}>
          <AuthButton />
          <span className={cls.mobile_icon_title}>Профиль</span>
        </button>
        <Link href={ROUTES.HOME} className={`flex-shrink-0 ${cls.mobile_icon_link} ${cls.nav_aft_fivth}`}>
          <HomeIcon />
          <span className={cls.mobile_icon_title}>Главная</span>
        </Link>
        <button
          aria-label="Menu"
          className={`flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none ${cls.mobile_icon_link} ${cls.mobile_icon_link_sv}`}
          onClick={openFeedback}
          >
          <svg fill='none' width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path className={cls.svg_pth} d="M6.98788 23.3077C6.51633 22.6609 6.51308 21.7845 6.97984 21.1342L8.33316 19.2487C9.11894 18.154 10.6246 17.8668 11.7582 18.5955L12.7224 19.2153C15.5385 17.5413 17.4294 14.9069 18.3085 11.4328L17.5864 10.9686C16.3548 10.1769 16.0378 8.51492 16.8916 7.3255L18.1189 5.61566C18.564 4.99561 19.335 4.69942 20.0807 4.86201V4.86201C22.0842 5.29883 23.8062 6.89067 23.707 8.93882C23.5998 11.1524 22.7043 13.8061 19.7891 17.8674C16.6578 22.2298 14.2 24.0769 11.8621 25.0123C10.081 25.7249 8.11798 24.8578 6.98788 23.3077V23.3077Z" stroke-width="1.5"></path></svg>
          <span className={cls.mobile_icon_title}>Связь</span>
        </button>
        <button
          aria-label="Menu"
          className={`flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none ${cls.nav_bef_fivth}`}>
          <FavoritesButton />
          <span className={cls.mobile_icon_title}>Избранные</span>
        </button>
        <button
          aria-label="Menu"
          className={`flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none ${cls.nav_bef_fivth}`}>
          <CartButton />
          <span className={cls.mobile_icon_title}>Корзина</span>
        </button>
      </div>
      <Drawer
        placement={dir === 'rtl' ? 'right' : 'left'}
        open={displaySidebar}
        onClose={closeSidebar}
        handler={false}
        showMask={true}
        level={null}
        contentWrapperStyle={contentWrapperCSS}
      >
        <MobileMenu />
      </Drawer>
    </>
  );
};

export default BottomNavigation;
