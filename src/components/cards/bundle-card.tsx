import Link from 'next/link';
import { LinkProps } from 'next/link';
import Image from 'next/image';
import cls from '../LightCatalogue/LightCatalogue.module.scss';

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

const BundleCard: React.FC<Props> = ({
  bundle,
}) => {
  const { image, title, description, slug } = bundle;
  return (
        <section className={`${cls.section_categories} ${cls.container} ${cls.nunetoshobi_container}`}>
          <div className="ui-ZNS3M ui-x6M0M ui-i4LZM mi_qN">
            <div className="ui-TuGTS" style={{ transform: 'translate3d(0px, 0px, 0px)', transition: 'transform 0.24s cubic-bezier(0.1, 0, 0.25, 1) 0s' }}>
              <div className="ui-j6Lq6 ygpOv">
                <div className="I_nj2 I_nj3 RtDRX">
                  <div className="FgYkG">
                    <Link className="ui-GPFV8 BE2NI" href={slug}>
                      <div className="Pk6w8 Zs10P">
                        <Image width={1920} height={1440} src={image ?? '/assets/placeholder/collection.svg'} alt='as' />
                      </div>
                      <div className="fANJ9 fANJ3">{title}</div>
                      <div className="Lwh0E">от <span className="ui-LD-ZU" data-testid="price">{description}<span className="ui-i5wwi ui-VDyJR ui-VWOa-">руб.</span></span></div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          
  );
};

export default BundleCard;
