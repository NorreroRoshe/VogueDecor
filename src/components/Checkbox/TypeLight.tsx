import cls from './Checkbox.module.scss';
// import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// import "simplebar/dist/simplebar.css";
import { ITypeLight } from '../../const/constants';

import { useEffect, useMemo, useState } from 'react';
import { chandelierTypes, lightCategory } from "@/const/constants";
import { useAppDispatch, useAppSelector } from "@/Store/store";
import { useRouter } from 'next/router';

import {
  setTypes,
  setColors,
  setDiameter,
  setLampCount,
  setChandelierTypes,
  setIsSale,
  clearFilters,
} from "@/Store/product/product.slice";
import { ICategoryFilter } from '@/settings/site-path-cathegory';

type TypeLightProps = {
  array: number[];
  onChangeCategory: (id: number) => void;
  lightCategory: ICategoryFilter;
  headeDropdownClass: string;
};

const TypeLight: React.FC<TypeLightProps> = ({
  array,
  onChangeCategory,
  lightCategory,
  headeDropdownClass,
}) => {
  return (
    <div className={cls.new}>
      <form>
        <div className={`${cls.header__dropdown_wrap} ${cls[headeDropdownClass]}`}>
          {lightCategory?.map((obj: ICategoryFilter, i: number) => (
            <div key={obj.categoryFilName} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === i + 1)}
                id={obj.categoryFilName}
              />
              <label
                onClick={() => onChangeCategory(i)}
                className={array.find((type) => type === i + 1) ? cls.form_group : ''}
                htmlFor={obj.categoryFilName}>
                {obj.categoryFilName}
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default TypeLight;





















// import cls from './Checkbox.module.scss';
// // import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// // import "simplebar/dist/simplebar.css";
// import { ITypeLight } from '../../const/constants';

// type TypeLightProps = {
//   array: number[];
//   onChangeCategory: (id: number) => void;
//   lightCategory?: ITypeLight[];
//   headeDropdownClass: string;
// };

// const TypeLight: React.FC<TypeLightProps> = ({
//   array,
//   onChangeCategory,
//   lightCategory,
//   headeDropdownClass,
// }) => {
//   return (
//     <div className={cls.new}>
//       <form>
//         <div className={`${cls.header__dropdown_wrap} ${cls[headeDropdownClass]}`}>
//           {lightCategory?.map((obj, i) => (
//             <div key={obj.name} className={cls.form_group}>
//               <input
//                 type="checkbox"
//                 checked={!!array.find((type) => type === i + 1)}
//                 id={obj.name}
//               />
//               <label
//                 onClick={() => onChangeCategory(i)}
//                 className={array.find((type) => type === i + 1) ? cls.form_group : ''}
//                 htmlFor={obj.name}>
//                 {obj.name}
//               </label>
//             </div>
//           ))}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TypeLight;









































  // const onChangeCategory = (ind: number) => {
  //   const { categoryCh, ...restQuery } = query;

  //   // // Предположим, что выбор категории основывается на свойстве item.eng
  //   let currentFormState = selectedCategories.includes(ind)
  //     ? selectedCategories.filter((i) => i !== ind)
  //     : [...selectedCategories, ind];
  //     // : [...selectedCategories, lightCategory[ind].eng];

  //   router.push(
  //     {
  //       pathname,
  //       query: {
  //         ...restQuery,
  //         ...(!!currentFormState.length
  //           ? { categoryCh: currentFormState.join(',') }
  //           : {}),
  //       },
  //     },
  //     undefined,
  //     { scroll: false }
  //   );

  //   dispatch(setTypes(ind));
  // };
