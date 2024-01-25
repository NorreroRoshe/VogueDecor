
import { useUI } from '@/contexts/ui.context';
import cls from '@/layouts/Header/Header.module.scss';
import cn from 'classnames';
import { localCartCountSelector } from '@/Store/cart/cart.selectors';
import { useAppSelector } from '@/Store/store';

type CartButtonProps = {
  className?: string;
  iconClassName?: string;
  hideLabel?: boolean;
  isShowing?: boolean;
};

const CartButton: React.FC<CartButtonProps> = ({className}) => {
  const { openDrawer, setDrawerView } = useUI();
  function handleCartOpen() {
    setDrawerView('CART_SIDEBAR');
    // isShowing;
    return openDrawer(); 
  }
  const cartCount = useAppSelector(localCartCountSelector);

  return (
    <button
      className={cn(
        'flex items-center justify-center flex-shrink-0 h-auto focus:outline-none transform',
        className,
      )}
      style={{ display: 'flex', zIndex: 1 }}
      onClick={handleCartOpen}
      aria-label="cart-button">
      <div className="flex items-center relative">
        {/* <CartIcon className={cn(iconClassName)} /> */}
        <svg className={cls.ui_icon}
        viewBox="0 0 469.334 469.333">
              <path d="M458.667,106.667H341.333v-64C341.333,19.135,322.198,0,298.667,0h-128C147.135,0,128,19.135,128,42.667v64H10.667C4.771,106.667,0,111.437,0,117.333v309.333c0,23.531,19.135,42.667,42.667,42.667h384c23.531,0,42.667-19.135,42.667-42.667V117.333C469.333,111.437,464.562,106.667,458.667,106.667 M149.333,42.667c0-11.76,9.573-21.333,21.333-21.333h128c11.76,0,21.333,9.573,21.333,21.333v64H149.333V42.667z M448,426.667c0,11.76-9.573,21.333-21.333,21.333h-384c-11.76,0-21.333-9.573-21.333-21.333V384H448V426.667z M448,362.667H21.333V128H128v32c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667v-32H320v32c0,5.896,4.771,10.667,10.667,10.667c5.895,0,10.667-4.771,10.667-10.667v-32H448V362.667z"></path>
            </svg>
        <span className="cart-counter-badge flex items-center justify-center text-skin-black absolute -top-2.5 -right-6 start-2.5 rounded-full" style={{ fontSize: '14px' }}>
        {cartCount}
        </span>
      </div>
      {/* {!hideLabel && (                                                                                //Текст - Корзина
        <span className="text-sm lg:text-15px text-skin-base font-normal ms-2">
          {t('text-cart')}
        </span>
      )} */}
    </button>
  );
};

export default CartButton;
