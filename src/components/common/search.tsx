import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { useSearchQuery } from '@framework/product/use-search';
import SearchBox from '@components/common/search-box';
import SearchBoxModal from '@components/common/search-box-modal';
import SearchProduct from '@components/common/search-product';
import SearchProductHits from '@components/common/search-product-hits';
import SearchResultLoader from '@components/ui/loaders/search-result-loader';
import useFreezeBodyScroll from '@utils/use-freeze-body-scroll';
import Scrollbar from '@components/ui/scrollbar';
import { useUI } from '@contexts/ui.context';
import cls from './Common.module.scss';
import closeBtn from '../../assets/img/closeSearch.png';
import Image from 'next/image';
import CloseIcon from '@components/iconsCode/close-icon';
import { useRouter } from 'next/router';
import { useGetSearchProductsMutation } from '../../Store/product/product.api';
import SearchWindow from '@/layouts/Header/SearchWindow';
import { useAppDispatch, useAppSelector } from '../../Store/store';
import { setSearchName } from '../../Store/product/product.slice';
import Link from 'next/link';

type Props = {
  className?: string;
  searchId?: string;
  variant?: 'border' | 'fill';
};

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const Search = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className = 'md:w-[730px] 2xl:w-[800px]',
      searchId = 'search',
      variant = 'border',
    },
    ref
  ) => {

///МОЙ КОДДДД
    const router = useRouter();

    
    const dispatch = useAppDispatch();

  const [searchOpen, setSearchOpen] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  
    const [getSearchProducts, { }] = useGetSearchProductsMutation();
  
    const debouncedString = useDebounce(inputValue || '', 1000);
  
    const handleGetSearchProducts = () => {
      //Какую фуннкцию он выполняет ?
      //Эта функция для того чтобы ее повесить на кнопку поиска , чтобы он начал искать
  
      getSearchProducts({
        // SearchQuery: debouncedString,
        SearchQuery: debouncedString,
        Count: 3,
      });
      // .then(() => {
      //   setSearchOpen(true);searchString
      // });
    };
  
    useEffect(() => {
      // if (debouncedString !== '')             Делаем так чтобы отправлялся запрос с пустой строкой на сервер
      handleGetSearchProducts();
    }, [debouncedString]);
  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchName(e.target.value));
      setInputValue(e.target.value);
      localStorage.setItem('handleSearch', e.target.value);
    };  



    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        localStorage.setItem('SearchQuery', inputValue);
        handleGetSearchProducts();
        closeSearch();
        router.push('/SearchPage');
      }
    };
  
    const onKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeSearch();
          break;
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
    }, []);
  
    useEffect(() => {
      // Обнулять searchString только при переходе на другие страницы, кроме /SearchPage
      if (router.pathname !== '/SearchPage') {
        setInputValue('');
      }
    }, [router.pathname]);

    
///МОЙ КОДДДД


    const {
      displayMobileSearch,
      closeMobileSearch,
      displaySearch,
      closeSearch,
    } = useUI();

    const [searchText, setSearchText] = useState('');
    const [inputFocus, setInputFocus] = useState<boolean>(false);
    const { data, isLoading } = useSearchQuery({
      text: searchText,
    });
    useFreezeBodyScroll(
      inputFocus === true || displaySearch || displayMobileSearch
    );
    // function handleSearch(e: React.SyntheticEvent) {
    //   e.preventDefault();
    // }
    function handleAutoSearch(e: React.FormEvent<HTMLInputElement>) {
      setSearchText(e.currentTarget.value);
    }

    function clear() {
      setInputValue('');
      setInputFocus(false);
      closeMobileSearch();
      closeSearch();
    }

    function clearText() {
      setInputValue('');
    }
    function handleCloseSearch() {
      setInputFocus(false);
      closeMobileSearch();
      closeSearch();
    }
    function enableInputFocus() {
      setInputFocus(true);
      setSearchOpen(true)
    }

    return (
      <div
        ref={ref}
        className={cn(
          'w-full transition-all duration-200 ease-in-out',
          className
        )}
      >
        <div
          className={cn('overlay cursor-pointer', {
            open: displayMobileSearch,
            'input-focus-overlay-open': inputFocus === true,
            'open-search-overlay': displaySearch,
          })}
          onClick={() => clear()}
        />
        {/* End of overlay */}

        <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
          <div className="flex flex-col mx-auto w-full" style={{zIndex: 31}}>
            <SearchBoxModal
              searchId={searchId}
              name="search"
              value={inputValue}
              onSubmit={handleSearch}
              // onChange={handleAutoSearch}
              onKeyDown={handleEnterKeyPress}
              onClear={clearText}
              onFocus={() => enableInputFocus()}
              variant={variant}
            />
          </div>
          {/* End of searchbox */}

          {inputFocus && (
            <div className={`w-full absolute top-[56px] start-0 py-2.5 bg-skin-fill rounded-md flex flex-col overflow-hidden shadow-dropDown z-30 ${cls.searchmodal_wrapp}`}>
              <div className={cls.searchmodal_butflex}>
              <button
                type="submit"
                className={cls.butflex_btn}
              >
                <span>Перейти</span>
              </button>
              <button
                type="submit"
                className={cls.butflex_close_btn}
                onClick={handleCloseSearch}
              >
              <svg className="ui-9F9ST" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00045 24L24 0.999999M23.9995 24L0.999999 1" stroke="currentColor" stroke-miterlimit="10"></path>
              </svg>
              </button>
              </div>
            {/* <SearchWindow setSearchOpen={setSearchOpen} searchOpen={searchOpen} /> */}

            {inputValue.length > 0 && (
              <div>
                {/* <div className={cls.searchproduct_title}>Результат поиска</div> */}
                {/* <div className={`w-full ${cls.product_serch_present}`}> */}
                        <div
                          className={`py-2.5 ps-5 pe-10 scroll-snap-align-start transition-colors duration-200 ${cls.serch_present_sec}`}
                          onClick={clear}
                        >
                          <SearchProduct />
                        </div>
                    </div>
              // </div>
            )} 
              {/* Хиты продаж */}
              {inputValue === '' && (
                <div>
                  <div className={cls.searchproduct_title}>Хиты продаж</div>
                    {/* {isLoading
                      ? Array.from({ length: 3 }).map((_, idx) => (
                        <div className={`w-full ${cls.product_serch_present}`}>
                      <div
                        key={`search-result-loader-key-${idx}`}
                        className="py-2.5 ps-5 pe-10 scroll-snap-align-start"
                      >
                        <SearchResultLoader
                          key={idx}
                          uniqueKey={`top-search-${idx}`}
                        />
                      </div>
                </div>
                    ))
                    :  */}
                      <div className={`w-full ${cls.product_serch_present}`}>
                    { data?.slice(0, 3).map((item, index) => (
                        <div
                          key={`search-result-key-${index}`}
                          className={`py-2.5 ps-5 pe-10 scroll-snap-align-start transition-colors duration-200 ${cls.serch_present_secs}`}
                          onClick={clear}
                        >
                          <SearchProductHits item={item} key={index} />
                      </div>
                    ))}
                    </div>
                </div>
                    )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Search;
