import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useForm } from 'react-hook-form';
import cn from 'classnames';
import TgForm from './form/TgForm/TgForm';

interface ZvonokProps {
  className?: string;
  shareUrl?: string;
  id : string; art: string; price: number; notSalePrice: number
}
interface NewsLetterFormValues {
  shareLink: string;
}
const defaultValues = {
  shareLink: '',
};

const ZvonokShareBox: React.FC<ZvonokProps> = ({ className = '', shareUrl = '', id, art, price, notSalePrice }) => {
  const { t } = useTranslation('common');
  const [copyText, setCopyText] = useState({
    value: shareUrl,
    copied: false,
  });
  const { register } = useForm<NewsLetterFormValues>({
    defaultValues,
  });
  const ZvokonProduct = {
    width: '100%',
    marginRight: 0,
  };

  const SendProduct = {
    marginTop: '10px',
    maxWidth: '100%'
  };

  const subscribePad = {
    paddingBottom: '0'
  };

  return (
    <div className={cn('shadow-card bg-skin-fill rounded-md p-4 md:p-6 lg:p-7', className)}>
      <TgForm notSalePrice={notSalePrice} art={art} price={price} id={id} subStyles={subscribePad} styles={ZvokonProduct} sendStyle={SendProduct}/>
    </div>
  );
};

export default ZvonokShareBox;
