import Image from '@components/ui/image';
import { ROUTES } from '@utils/routes';
import { searchProductPlaceholder } from '@assets/placeholders';
import cls from './Common.module.scss';
import Link from 'next/link';

type SearchProductProps = {
  item: any;
};

const SearchProductHits: React.FC<SearchProductProps> = ({ item }) => {
  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.slug}`}
      className={`group w-full h-auto flex justify-start items-center ${cls.searchproduct_wrapp}`}
    >
      <div className={`relative flex w-12 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4 ${cls.searchproduct_img}`}>
        <Image
          src={item?.image?.thumbnail ?? searchProductPlaceholder}
          width={48}
          height={48}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="bg-skin-thumbnail object-cover"
        />
      </div>
      
      <div className={cls.priduct_tile}>
        <div className={cls.priduct_tile_ho}>{item.name}</div>
        <span className={`${cls.priduct_tile_pr_tw} ${cls.priduct_tile_pr}`} data-testid="price">
        {item.price}
          <span className={cls.priduct_tile_pr_znak}>₽</span>
        </span>
      </div>
    </Link>
  );
};

export default SearchProductHits;
