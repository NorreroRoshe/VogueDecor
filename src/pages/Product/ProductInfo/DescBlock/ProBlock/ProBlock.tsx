import { useState } from 'react';
import cls from '../DescBlock.module.scss';
import { ProdForm } from '../ProdForm/ProdForm';
import Link from 'next/link';

type IProBlock = {id : string, art: string, price: number, notSalePrice: number
};


export const ProBlock: React.FC<IProBlock> = ({id , art, price, notSalePrice}) => {
  const [isSent, setSent] = useState(false);

  return (
    <div className={cls.info_feature_dopinfo}>
      <button
        onClick={() => setSent(!isSent)}
        className={`${cls.dopinfo_link} ${cls.dopinfo_imgone}`}>
        Заказать обратный звонок
      </button>
      <div style={{ display: isSent ? 'block' : 'none' }}>
        <ProdForm notSalePrice={notSalePrice} art={art} price={price} id={id}/>
      </div>
      {/* <Link href='/delivery' className={`${cls.dopinfo_link} ${cls.dopinfo_imgtwo}`}>
        Похожие товары
      </Link> */}
    </div>
  );
};

export default ProBlock;
