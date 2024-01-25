import Link from 'next/link';
import { LinkProps } from 'next/link';
import Image from 'next/image';
import SectionHeader from '../common/section-header';
import cls from '../GoodsCatalogue/GoodsCatalogue.module.scss';

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  className?: string;
  thumbnailClassName?: string;
  href: LinkProps['href'];
  bundle: {
    image: string;
    title: string;
    description?: string;
    bgColor?: string;
  };
}

const BundleCardCategory: React.FC<Props> = ({
  bundle,
}) => {
  const { image, title, description } = bundle;
  return (
    <>
      <div className={cls.catalogDepartmentCategories}>
        {/* {bundle.map((subcategory: ISubcategory, index: number) => ( */}
          <div lassName={cls.catalogCategoryCell}>
            <Link href={bundle.href} className={cls.catalogCategoryCellLink}>
              <div className={cls.catalogCategory}>
                <div className={cls.catalogCategoryImageContainer}>
                  <Image
                    width={200}
                    height={200}
                    src={bundle.mainPhoto}
                    alt={bundle.subName}
                    draggable="false"
                    loading="lazy"
                    className={`${cls.lazyImg} ${cls.catalogCategoryImage}`}
                  />
                </div>
                <div className={cls.catalogCategoryTitleWrapper}>
                  <h3 className={cls.catalogCategoryTitle}>{bundle.subName}</h3>
                </div>
              </div>
            </Link>
          </div>
        {/* ))} */}
      </div>
    </>
          
  );
};

export default BundleCardCategory;
