import Image from 'next/image';
import cn from 'classnames';
import Link from 'next/link';
import { siteSettings } from '@/settings/site-settings';
import logose from "../../assets/img/social_icon/logoWrite.png"

const WriteLogo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
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
      <Image
        src={logose}
        alt={siteSettings.logo.alt}
        height={siteSettings.logo.height}
        width={siteSettings.logo.width}
        // layout="fixed"
        loading="eager"
      />
    </Link>
  );
};

export default WriteLogo;
