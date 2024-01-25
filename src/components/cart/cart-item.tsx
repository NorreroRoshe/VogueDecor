import { IoIosCloseCircle } from 'react-icons/io';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { IFileUrl } from '@/Store/product/product.types';
import CartCounter from '@/pages/Cart/CartCounter';
import {
  getTotalCartSelector,
} from "@/Store/cart/cart.selectors";
import { useAppSelector } from "../../Store/store";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  files: IFileUrl[];
  article: string;
  discount: number;
  count: number;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  discount,
  files,
  article,
  count,
}) => {
  const { deleteFromCart } = useCart();

  const { totaDiscountPrice , totalPrice } =
  useAppSelector(getTotalCartSelector);

  const truePrice = price - (price * discount) / 100;

  const onClickRemove = () => {
    if (window.confirm('Вы действительно хотите удалить данную позицию ?')) {
      deleteFromCart(id);
    }
  };

  // const truePrice = price - (price * discount) / 100;

  return (
    <div
      className={`group w-full h-auto flex justify-start items-center bg-skin-fill py-4 md:py-7 border-b border-skin-one border-opacity-70 relative last:border-b-0`}
      title={name}>
      <div className="relative flex rounded overflow-hidden flex-shrink-0 cursor-pointer w-[90px] md:w-[100px] h-[90px] md:h-[100px]">
        {files && files.length > 0 && (
          <img
            src={files[0].url}
            width={100}
            height={100}
            alt={files[0].name}
            className="object-cover bg-skin-thumbnail"
          />
        )}
        <div
          className="absolute top-0 start-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30"
          onClick={onClickRemove}
          role="button">
          <IoIosCloseCircle className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex w-full overflow-hidden items-start justify-between">
        <div className="ps-3 md:ps-4">
          <Link
            href={`/Product/${id}`}
            className="block text-skin-base text-13px sm:text-sm lg:text-15px transition-all leading-5 hover:text-skin-primary">
            {name}
          <div className="text-13px sm:text-sm text-skin-muted mt-1.5 block mb-2">{article}</div>
          </Link>
          {/* <div style={{ marginLeft: '11px' }}> */}
          {/* </div> */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="flex font-semibold text-sm md:text-base text-skin-base leading-5 flex-shrink-0 min-w-[65px] md:min-w-[80px] justify-start">
          {truePrice * count} ₽.
          </div>
          <CartCounter id={id} count={count} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
