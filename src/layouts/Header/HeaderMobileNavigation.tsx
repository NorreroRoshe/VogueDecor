import Link from "next/link";
import cls from "./Header.module.scss";
import { MouseOverModal } from "./MousrOverModal/MouseOverModal";
import { MouseCategoryModal } from "./MouseCategoryModal/MouseCategoryModal";

function HeaderMobileNavigation() {
      return (
            <div className={cls.second_menu__items_dn}>
                  <div className={cls.second_menu__items}>
                        <Link href="/AboutUs" className={cls.second_menu__item}>
                              О нас
                        </Link>
                        <span className={cls.second_menu__item_text}></span>
                        <button className={cls.second_menu__item}>
                              <MouseCategoryModal />
                        </button>
                        <span className={cls.second_menu__item_text}></span>
                        <button className={cls.second_menu__item}>
                              <MouseOverModal />
                        </button>
                  </div>
            </div>
      );
}

export default HeaderMobileNavigation;
