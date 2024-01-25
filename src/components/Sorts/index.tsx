import React, { Fragment, FC, useState, useRef, useEffect } from 'react';
import { useOutsideAlerter } from '@/hooks/useClickOutside';
import { Sort } from '@/Store/filter/filter.types';
import { useDispatch } from 'react-redux';
import { setSort } from '@/Store/product/product.slice';
import { useAppSelector } from '@/Store/store';
import { useRouter } from 'next/router';
import { Listbox, Transition } from '@headlessui/react';
import { IoChevronDown, IoCheckmarkSharp } from 'react-icons/io5';
import { useTranslation } from 'next-i18next';
import { useGetProductsMutation } from "../../Store/product/product.api";

import cls from './Sorts.module.scss';

type SortProps = {
  title: string;
};

type ISort = { name: string; id: number };

type Option = {
  name: string;
  url: string;
  value: string | number;
};

const options: Option[] = [
  {
    name: 'по рейтингу (возрастание)',
    url: 'first',
    value: '0',
  },
  {
    name: 'по рейтингу (убывание)',
    url: 'second',
    value: '1',
  },
  {
    name: 'по новинкам (возрастание)',
    url: 'third',
    value: '2',
  },
  {
    name: 'по новинкам (убывание)',
    url: 'fourth',
    value: '3',
  },
  {
    name: 'по популярности',
    url: 'fourth',
    value: '4',
  },
  {
    name: 'по цене (возрастание)',
    url: 'sixth',
    value: '5',
  },
  {
    name: 'по цене (убывание)',
    url: 'seventh',
    value: '6',
  },
];

const Sorts: FC<SortProps> = React.memo(({ title }) => {
  const dispatch = useDispatch();
  const { filters, sort } = useAppSelector((state) => state.product);
  const [getProducts, { isLoading }] = useGetProductsMutation();

  const handleGetProducts = () => {
    getProducts({ ...filters, SortType: sort });
  };

  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, query } = router;
  const currentSelectedItem = query?.sort_by
    ? options.find((o) => o.value === query.sort_by)!
    : options[0];

  const [selectedItem, setSelectedItem] = useState<Option>(currentSelectedItem);

  useEffect(() => {
    setSelectedItem(currentSelectedItem);
  }, [currentSelectedItem]);


  function handleItemClick(values: Option) {

    setSelectedItem(values);
    // dispatch(setSort(values.value));
    dispatch(setSort(Number(values.value)));

    const { sort_by, ...restQuery } = query;

    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(values.value !== options[0].value
            ? { sort_by: values.value }
            : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }


  const sort_by = query?.sort_by || '';

  useEffect(() => {
    const sortValue = sort_by !== '' ? sort_by : '0';
    const sortValueString = Array.isArray(sortValue) ? sortValue[0] : sortValue;
    const sortValueNumber = parseInt(sortValueString, 10); // или используйте Number(sortValueString)
    
    dispatch(setSort(sortValueNumber));
    
  }, [sort_by, sort]);



  return (
    <Listbox value={selectedItem} onChange={handleItemClick}>
      {({ open }) => (
        <div className="relative ms-2 lg:ms-0 min-w-[160px]">
          <div className="flex items-center">
            <div className="icon_pered flex-shrink-0 text-15px me-2 text-skin-base text-opacity-70">
              {title}
            </div>
            <div className="icon_posle">
            </div>
            <Listbox.Button className="pe-5 text-skin-base text-sm font-semibold relative w-full text-start bg-skin-fill rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer">
              <span className="icon_posle_doi block truncate">{t(selectedItem.name)}</span>
              <span className="absolute top-1 end-0 flex items-end ps-1 pointer-events-none">
                <IoChevronDown
                  className="w-3.5 h-3.5 text-skin-muted"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute z-20 text-sm w-full py-1 mt-1 overflow-auto bg-skin-fill rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {options?.map((option, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active
                      ? 'text-skin-base bg-skin-dropdown-hover'
                      : 'text-skin-base'
                    }
                    cursor-pointer transition-all select-none relative py-2.5 ps-10 pe-4`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                      >
                        {t(option.name)}
                      </span>
                      {selected ? (
                        <span
                          className={`${active ? 'text-amber-600' : ''}
                                check-icon absolute inset-y-0 start-0 flex items-center ps-3`}
                        >
                          <IoCheckmarkSharp
                            className="w-5 h-5"
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
});

export default Sorts;



























//ORIGINAL

// import React, { FC, useState, useRef, useEffect } from 'react';
// import { useOutsideAlerter } from '@/hooks/useClickOutside';
// import { Sort } from '@/Store/filter/filter.types';
// import { useDispatch } from 'react-redux';
// import { setSort } from '@/Store/product/product.slice';
// import { useAppSelector } from '@/Store/store';

// import cls from './Sorts.module.scss';

// type SortProps = {
//   title: string;
// };

// type ISort = { name: string; id: number };
// // 0 = BY_RATING_ASC;
// // 1 = BY_RATING_DESC;
// // 2 = BY_NOVELTY_ASC;
// // 3 = BY_NOVELTY_DESC;
// // 4 = BY_POPULARITY;
// // 5 = BY_PRICE_ASC;
// // 6 = BY_PRICE_DESC;
// const list: ISort[] = [
//   {
//     name: 'по рейтингу (возрастание)',
//     id: 0,
//   },
//   {
//     name: 'по рейтингу (убывание)',
//     id: 1,
//   },
//   {
//     name: 'по новинкам (возрастание)',
//     id: 2,
//   },
//   {
//     name: 'по новинкам (убывание)',
//     id: 3,
//   },
//   {
//     name: 'по популярности',
//     id: 4,
//   },
//   {
//     name: 'по цене (возрастание)',
//     id: 5,
//   },
//   {
//     name: 'по цене (убывание)',
//     id: 6,
//   },
// ];

// const Sorts: FC<SortProps> = React.memo(({ title }) => {
//   const dispatch = useDispatch();
//   const sort = useAppSelector((state) => state.product.sort);
//   const [open, setOpen] = useState<boolean>(false);
//   const sortRef = useRef<HTMLDivElement>(null);
//   useOutsideAlerter(sortRef, () => setOpen(false));

//   const onKeydown = ({ key }: KeyboardEvent) => {
//     switch (key) {
//       case 'Escape':
//         setOpen(false);
//         break;
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', onKeydown);
//     return () => document.removeEventListener('keydown', onKeydown);
//   }, []);

//   const selectedSort = list.find((obj) => obj.id === sort);

//   const onClickListItem = (obj: ISort) => {
//     dispatch(setSort(obj.id)); //Делаем так, когда хотим чтобы чтонибудь выбралось
//     setOpen(false); //Выбери какой-нибудь пункт и далее скройся
//   };

//   return (
//     <div ref={sortRef} className={cls.sort}>
//       <div className={cls.sort__label}>
//         <b>{title}</b>
//         <span className={cls.sort__label_icon}></span>
//         <button onClick={() => setOpen(!open)} className={cls.sort__label_button}>
//           <span>{selectedSort?.name || 'Выберите сортировку'}</span>
//           <svg
//             width="10"
//             height="6"
//             viewBox="0 0 10 6"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
//               fill="#2C2C2C"
//             />
//           </svg>
//         </button>
//       </div>
//       {open && (
//         <div className={cls.sort__popup}>
//           <ul>
//             {list.map((obj, i) => (
//               <li
//                 key={i}
//                 onClick={() => onClickListItem(obj)}
//                 className={sort === obj.id ? cls.active : ''}>
//                 {obj.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// });

// export default Sorts;
