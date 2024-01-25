import BundleCardCategory from '@components/cards/bundle-card-category';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { SwiperSlide } from '@components/ui/carousel/slider';
import SectionHeader from '../common/section-header';
import Link from 'next/link';
import { ROUTES } from '@utils/routes';
const Carousel = dynamic(() => import('@components/ui/carousel/carousel'), {
  ssr: false,
});

interface Props {
  className?: string;
  data: any;
}

const breakpoints = {
  '1002': {
    slidesPerView: 4,
    spaceBetween: 16,
  },
  '840': {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  '0': {
    slidesPerView: 2,
    spaceBetween: 12,
  },
};

const BundleGridCategory: React.FC<Props> = ({ className = 'mb-12 pb-0.5', data }) => {
  const { width } = useWindowSize();
  return (
    <div className={cn('heightFull', className)}>
      {width! < 1536 ? (
        <>
          <SectionHeader
            sectionHeading={`Категория: ${data?.categoryName}`}
            sectionSubHeading=""
            headingPosition="left"
          />
          <Carousel breakpoints={breakpoints}>
            {data.subcategories?.map((item: any) => (
              <SwiperSlide key={`bundle-key-${item.id}`}>
                <BundleCardCategory
                  bundle={item}
                  href={`${ROUTES.BUNDLE}/${item.slug}`}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.subcategories?.map((item: any) => (
            <BundleCardCategory
              key={`bundle-key-${item.id}`}
              bundle={item}
              href={`${ROUTES.BUNDLE}/${item.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BundleGridCategory;
