import React, { useState, useEffect } from 'react';
import cls from './GoodsCatalogue.module.scss';
import SectionHeader from '../common/section-header';
import { ISubcategory, ISiteCategory } from '@/settings/site-path-cathegory';
import Container from '@components/ui/container';
import BundleGridCategory from '@components/bundle/bundle-grid-category';
import { bundleDataTwo as bundle } from '@framework/static/bundle';
import Image from 'next/image';
import Link from 'next/link';

export interface ICatalogCategories {
  sitePathCategory: ISiteCategory[];
}

export const CatalogCategories: React.FC<ICatalogCategories> = ({sitePathCategory}) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1150);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (isWideScreen) {
    return (
    <>
      <SectionHeader
        sectionHeading={`Категория: ${sitePathCategory?.categoryName}`}
        sectionSubHeading=""
        headingPosition="left"
      />
      <div className={cls.catalogDepartmentCategories}>

        {sitePathCategory.subcategories?.map((subcategory: ISubcategory, index: number) => (
          <div key={index} className={cls.catalogCategoryCell}>
            <Link href={subcategory.href} className={cls.catalogCategoryCellLink}>
              <div className={cls.catalogCategory}>
                <div className={cls.catalogCategoryImageContainer}>
                  <Image
                    width={200}
                    height={200}
                    src={subcategory.mainPhoto}
                    alt={subcategory.subName}
                    draggable="false"
                    loading="lazy"
                    className={`${cls.lazyImg} ${cls.catalogCategoryImage}`}
                  />
                </div>
                <div className={cls.catalogCategoryTitleWrapper}>
                  <h3 className={cls.catalogCategoryTitle}>{subcategory.subName}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
} else {
  return (
    <Container>
      <BundleGridCategory
        className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
        data={sitePathCategory} // You should replace this with your actual data for BundleGrid
      />
    </Container>
  );
}
}