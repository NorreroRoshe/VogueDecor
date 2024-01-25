import cn from 'classnames';
import MinusIcon from '@/components/iconsCode/minus-icon';
import PlusIcon from '@/components/iconsCode/plus-icon';
import { useTranslation } from 'next-i18next';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/Store/product/product.types';
import { useAppSelector } from '@/Store/store';
import { cartProductCountByIdSelector } from '@/Store/cart/cart.selectors';

type CounterProps = {
  variant?: 'default' | 'cart' | 'single' | 'popupcollection';
  className?: string;
  disabled?: boolean;
  product?: Product;
};

const Counter: React.FC<CounterProps> = ({
  variant = 'default',
  className,
  disabled,
  product,
}) => {
  const { id } = product ?? {};
  const { addToCart, minusFromCart, isLoading } = useCart();

  const cartCount = useAppSelector((state) => {
    if (id) {
      return cartProductCountByIdSelector(id, state);
    }
    return 0;
  });
  

  const handleAddToCart = () => {
    if(id) {
    addToCart(id);}
  };

  const handleMinusToCart = () => {
    if (id) {
      minusFromCart(id);
    }
  };

  const size = variant === 'single' ? '22' : '14';
  const { t } = useTranslation('common');
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded overflow-hidden flex-shrink-0',
        {
          'h-8 md:h-10 bg-skin-fill shadow-counter rounded-3xl': variant === 'default',
          'h-11 md:h-14 bg-skin-button-secondary': variant === 'single',
          'inline-flex': variant === 'cart',
          'h-8 md:h-10 bg-skin-fill shadow-counter rounded-1xl': variant === 'popupcollection',
        },
        className,
      )}
      // style={{height: '30px',borderRadius: '10px', marginRight: '6px'}}
      >
      <button
        onClick={handleMinusToCart}
        className={cn(
          'flex items-center justify-center flex-shrink-0 h-full transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none',
          {
            'w-8 md:w-8 h-8 rounded-2xl text-heading hover:bg-skin-button-hover ms-1':
              variant === 'default',
            'w-10 h-10 rounded-full transform scale-80 lg:scale-100 text-skin-base hover:bg-skin-button-hover ms-auto':
              variant === 'single',
            'w-6 h-6 border border-skin-three hover:bg-skin-primary hover:border-skin-primary rounded-full hover:text-skin-inverted':
              variant === 'cart',
              'w-8 md:w-8 h-8 rounded-1xl text-heading hover:bg-skin-button-hover':
              variant === 'popupcollection',
          },
        )}>
        <span className="sr-only">{t('button-minus')}</span>
        <MinusIcon width={size} height={size} opacity="1" />
      </button>

      <span
        className={cn(
          'font-semibold text-skin-base flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0',
          {
            'text-sm md:text-base w-6 md:w-8': variant === 'default',
            'text-base md:text-[17px] w-12 md:w-20 xl:w-28': variant === 'single',
            'text-15px w-9': variant === 'cart',
          },
        )}>
        {cartCount}
      </span>

      <button
        onClick={handleAddToCart}
        disabled={disabled}
        className={cn(
          'group flex items-center justify-center h-full flex-shrink-0 transition-all ease-in-out duration-300 focus:outline-none focus-visible:outline-none',
          {
            'w-8 md:w-8 h-8 rounded-2xl text-heading hover:bg-skin-button-hover me-1':
              variant === 'default',
            'w-10 h-10 rounded-full scale-80 lg:scale-100 text-heading hover:bg-skin-button-hover me-auto':
              variant === 'single',
            'w-6 h-6 border border-skin-three hover:bg-skin-primary hover:border-skin-primary rounded-full hover:text-skin-inverted':
              variant === 'cart',
              'w-8 md:w-8 h-8 rounded-1xl text-heading hover:bg-skin-button-hover':
              variant === 'popupcollection',
          },
        )}
        title={disabled ? 'Out Of Stock' : ''}>
        <span className="sr-only">{t('button-plus')}</span>
        <PlusIcon width={size} height={size} opacity="1" />
      </button>
    </div>
  );
};

export default Counter;
