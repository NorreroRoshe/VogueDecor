import ProductPopup from './product-popup';
import React, { useEffect, useState } from 'react';
import { useGetDetProductMutation } from '@/Store/product/product.api';
import { useRouter } from 'next/router';
import ProdSkeleton from '@/pages/Product/ProductInfo/ProdSkeleton';
import { useModalState } from '../common/modal/modal.context';

const PrePopup: React.FC = () => {
  const { query } = useRouter();
  const { data } = useModalState(); 
  const [getDetProduct, { isLoading, isError }] = useGetDetProductMutation();
  const [{ data: prodata }, setState] = useState<any>({}); //дата не всегда заполнялась , просто влязи стейт и засунули в него ответ с сервером

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = data?.productId; // Получить `productId` из контекста
        if (id) {
          const response = await getDetProduct({
            ProductId: id,
          });
          setState(response as any);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchData();
  }, [data]);
    
  if (isLoading) {
    // Если продукт пустой, тоесть еще загружается , то не показываем , когда прогрузится тогда уже и покажем
    return (
      <div>
        {[...new Array(1)].map((_, index) => (
          <ProdSkeleton key={index} />
        ))}
      </div>
    );
  }
  
  return (
    <>
        {isError && <div>Ошибка...</div>}
        {prodata && <ProductPopup popupProduct={prodata}/>}
    </>
  );
};

export default PrePopup;
