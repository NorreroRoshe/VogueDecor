import React from 'react';
import cls from './ColorCheckbox.module.scss';
import clrs from './colors.module.scss';
import { IColorFilter, IColorFilter } from '@/settings/site-path-cathegory';

interface ColorOption {
  color: string;
  class: string;
}

const colors: ColorOption[] = [
  { color: 'Золотой', class: 'gold' },
  { color: 'Бронзовый', class: 'bronze' },
  { color: 'Сильвер', class: 'matsil' },
  { color: 'Никель', class: 'nickel' },
  { color: 'Хром', class: 'chrome' },
  { color: 'Белый', class: 'white' },
  { color: 'Черный', class: 'black' },
  { color: 'Прозрачный', class: 'clear' },
  { color: 'Бежевый', class: 'bej' },
];

type TypeColors = {
  array: number[];
  onChangeCategory: (id: number) => void;
  sitePathCategory: IColorFilter;
};

const Colorcheckbox: React.FC<TypeColors> = ({ array, onChangeCategory, sitePathCategory }) => {
  return (
    <div className={cls.new}>
      <div className={`${cls.header__dropdown_wrap} ${cls.header__dropdown_wrap_colorcheck}`}>
        <form>
          {sitePathCategory?.map((obj: IColorFilter, i: number) => (
            <div key={i} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === i + 1)}
                id={obj.class}
              />
              <label
                onClick={() => onChangeCategory(i)}
                // className={array.find((type) => type === i + 1) ? obj.class : ''}
                className={`${clrs[obj.class]} ${
                  array.find((type) => type === i + 1) ? obj.class : ''
                }`}
                htmlFor={obj.class}>
                <span>{obj.colorFilName}</span>
                {/* <span>(150)</span> */}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Colorcheckbox;
