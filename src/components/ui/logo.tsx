import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import cls from './Ui.module.scss';
import { siteSettings } from '@/settings/site-settings';
import logos from "../../assets/img/Buttlogo.png"
import logoC from "../../assets/img/logocrown.png"

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  href = siteSettings.logo.href,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn('inline-flex focus:outline-none', className)}
      {...props}
    >
      <h2 className={cls.logo_main}>Vogue
      <Image
      src={logoC}        
      alt={siteSettings.logo.alt}
      loading="eager"
      />
        <span>Decor</span></h2>
      
      {/* <Image
        src={logos}
        alt={siteSettings.logo.alt}
        // height={siteSettings.logo.height}
        // width={siteSettings.logo.width}
        height={79px}
        width={332px}
        // layout="fixed"
        loading="eager"
      /> */}
    </Link>
  );
};

export default Logo;
