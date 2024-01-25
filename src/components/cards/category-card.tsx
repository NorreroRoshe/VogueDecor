import Image from '@components/ui/image';
import Link, { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { getDirection } from '@utils/get-direction';
import cn from 'classnames';
import { categoryPlaceholder } from '@assets/placeholders';

interface Props {
  item: any;
  href: LinkProps['href'];
  className?: string;
}

const CategoryCard: React.FC<Props> = ({ item, href, className }) => {
  const { t } = useTranslation('common');
  const { name, image } = item ?? {};
  const { locale } = useRouter();
  const dir = getDirection(locale);
  
    let widthClass = 'w-[235px]';
    let heightClass = 'h-[235px]';
  
    if (window.innerWidth < 1200) {
      widthClass = 'w-[175px]';
      heightClass = 'h-[175px]';
    }

    if (window.innerWidth < 650) {
      widthClass = 'w-[150px]';
      heightClass = 'h-[150px]';
    }

    if (window.innerWidth < 580) {
      widthClass = 'w-[100px]';
      heightClass = 'h-[100px]';
    }

    if (window.innerWidth < 440) {
      widthClass = 'w-[125px]';
      heightClass = 'h-[125px]';
    }

  return (
    <Link
      href={href}
      className={cn('group block w-full text-center', className)}
    >
      <div className={`flex ${widthClass} ${heightClass} mb-3.5 xl:mb-4 mx-auto overflow-hidden bg-skin-thumbnail`}
      style={{ borderRadius: '15                                                                                    px' }}>
        <div
          className={`flex flex-shrink-0 transition-all duration-700 w-full h-full transform scale-50 group-hover:scale-100 ${
            dir === 'rtl'
              ? 'translate-x-full group-hover:translate-x-0'
              : '-translate-x-full group-hover:translate-x-0'
          }`}
        >
          <Image
            src={image?.original ?? categoryPlaceholder}
            alt={name || t('text-card-thumbnail')}
            width={235}
            height={235}
            quality={100}
            className="object-cover"
            style={{ borderRadius: '15                                                                                    px' }}
          />
        </div>
        <div
          className={`flex flex-shrink-0 transition-all duration-700 w-full h-full transform scale-100 group-hover:scale-50 ${
            dir === 'rtl'
              ? 'translate-x-full group-hover:translate-x-0'
              : '-translate-x-full group-hover:translate-x-0'
          }`}
        >
          <Image
            src={image?.original ?? categoryPlaceholder}
            alt={name || t('text-card-thumbnail')}
            width={235}
            height={235}
            quality={100}
            className="object-cover"
            style={{ borderRadius: '15                                                                                    px' }}
          />
        </div>
      </div>
      <h3 className="capitalize text-skin-base text-sm sm:text-15px lg:text-base truncate">
        {name}
      </h3>
    </Link>
  );
};

export default CategoryCard;
