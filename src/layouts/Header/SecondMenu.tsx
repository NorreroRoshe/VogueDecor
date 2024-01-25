import Link from 'next/link';
import React from 'react';
import cls from './Header.module.scss';
import { MouseOverModal } from './MousrOverModal/MouseOverModal';
import { lightCategory } from '../../const/constants';

function SecondMenu() {
  return (
    <div className={cls.second_menu}>
      <div className={cls.container_wide}>
        <div className={cls.second_menu__items_db}>
          <div className={cls.second_menu__items}>
            {lightCategory.map((item) => (
              <React.Fragment key={item.eng}>
                {/* Здесь мы говорим, что ,будет в строке http после /chapter/${item.eng} */}
                <Link
                  href={`/Chapter/?${item.eng}`}
                  className={cls.second_menu__item}
                  // onClick={handleGetFilterProducts}
                >
                  {item.name}
                </Link>
                <span className={cls.second_menu__item_text}></span>
              </React.Fragment>
            ))}
            <button className={cls.second_menu__item}>
              <MouseOverModal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondMenu;
