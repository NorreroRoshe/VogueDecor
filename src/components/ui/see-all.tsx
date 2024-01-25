import ArrowIcon from '@/components/iconsCode/arrow-icon';
import Link, { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/common/modal/modal.context';

interface Props {
  className?: string;
  href?: LinkProps['href'];
}

const SeeAll: React.FC<Props> = ({ className, href = '/' }) => {
  const { closeModal } = useModalAction();
  const { t } = useTranslation('common');
  return (
    <Link
      href={href}
      className={`${className} p-4 flex items-center justify-center flex-col hover:opacity-80`}
      onClick={()=>closeModal()}>
      <ArrowIcon color="#f1c40f" className="w-10" />
      <span className="font-semibold text-sm sm:text-base text-skin-primary block pt-1.5 sm:pt-3.5">
        {t('В коллекцию')}
      </span>
    </Link>
  );
};

export default SeeAll;
