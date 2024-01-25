import Link from "next/link";
import cls from "./Header.module.scss";

function HeaderLogo() {
      return (
            <div className={cls.header_logo}>
                  <Link href="/" className={cls.buttglogo_wrapper}>
                        <span className={cls.header_logo_icon}></span>
                        <div className={cls.buttglogo}>
                              <span>B</span>utterfly <span>L</span>ighting <span>C</span>o.
                        </div>
                  </Link>
                  <Link href="/" className={cls.tgallery}>
                        Галерея<span>&nbsp;</span>света
                  </Link>
            </div>
      );
}

export default HeaderLogo;
