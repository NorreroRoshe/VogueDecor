import React from 'react';
import { useTranslation } from 'next-i18next';
import SearchIcon from '@components/iconsCode/search-icon';
import CloseIcon from '@components/iconsCode/close-icon';
import cn from 'classnames';
import cls from './Common.module.scss'
type SearchProps = {
  className?: string;
  searchId?: string;
  onSubmit: any;
  // onSubmit: (e: React.ChangeEvent) => void;
  onClear: (e: React.SyntheticEvent) => void;
  onKeyDown: any;
  // onKeyDown: (e: React.KeyboardEvent) => void;
  onFocus?: (e: React.SyntheticEvent) => void;
  // onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  inputFocus: any;
  name: string;
  value: string;
  variant?: 'border' | 'fill';
};

const SearchBox = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      searchId = 'search',
      variant = 'border',
      value,
      onSubmit,
      onClear,
      onFocus,
      onKeyDown,
      inputFocus,
      ...rest
    },
    ref
  ) => {
    const { t } = useTranslation('forms');
    return (
      <form
        className={`flex w-full relative  ${inputFocus ? cls.modal_round_form_op : ''} ${cls.modal_round_form} ${cls.modal_round_form_big}`}
        noValidate
        role="search"
        // onSubmit={onSubmit}
      >
        <label htmlFor={searchId} className="flex flex-1 items-center py-0.5">
        <span className="w-14 md:w-16 h-full absolute bottom-1 start-2 flex flex-shrink-0 justify-center items-center focus:outline-none">
            <SearchIcon className={`text-skin-base text-opacity-40 ${cls.seach_size}`} />
          </span>
          <input
            id={searchId}
            type="text"
            onChange={onSubmit}
            onKeyDown={onKeyDown}
            className={cn(
              'text-heading outline-none w-full h-[52px] ps-16 md:ps-16 pe-16 md:pe-16 bg-skin-full text-skin-base text-sm lg:text-15px transition-all duration-200 focus:border-skin-primary focus:ring-1 focus:ring-skin-form',
              cls.round_input,
              cls.modal_round_input,
              cls.modal_round_input_big,
              {
                'border border-skin-base': variant === 'border',
                'bg-skin-one': variant === 'fill',
              }
            )}
            placeholder={t('Я ищу...')}
            aria-label={searchId}
            autoComplete="off"
            value={value}
            onFocus={onFocus}
            ref={ref}
            {...rest}
          />
        </label>
        {value ? (
          <button
            type="button"
            onClick={onClear}
            title="Clear search"
            className="outline-none absolute top-0 end-0 w-14 md:w-16 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
          >
            <CloseIcon className="w-[17px] h-[17px] text-skin-base text-opacity-40" />
          </button>
        ) 
        : 
        ('')}
      </form>
    );
  }
);

export default SearchBox;

SearchBox.displayName = 'SearchBox';
