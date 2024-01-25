// Здесь детальная страница по пути Product/:id
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import cls from './Product.module.scss';
import { ProductInfo } from './ProductInfo/index';
import { useGetDetProductMutation } from '../../Store/product/product.api';

import { useRouter } from 'next/router';
import ProdSkeleton from './ProductInfo/ProdSkeleton';
import ProductPopup from '@/components/product/product-popup';
import DownloadApps from '@components/common/download-apps';

const ProductDetail: React.FC = () => {
  // const [chand, setChand] = React.useState<Product | null>(null);
  const { query } = useRouter();
  // const navigate = useNavigate();

  // React.useEffect(() => {
  //   async function fetchProduct() {
  //     try {
  //       const { data } = await axios.get('http://194.58.120.23/api' + id);
  //       setChand(data);
  //     } catch (error) {
  //       alert('Ошибка при получении люстр!');
  //       navigate('/');
  //     }
  //   }
  //   fetchProduct();
  // }, []);
  const [getDetProduct, { isLoading, isError }] = useGetDetProductMutation();
  const [{ data: prodata }, setState] = useState<any>([]); //дата не всегда заполнялась , просто влязи стейт и засунули в него ответ с сервером

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = query.id;
        const response = await getDetProduct({
          ProductId: `${id}`,
        });
        setState(response as any);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query.id]);

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
      <div className={cls.container}>
        <div className={cls.product_info}>
          {/* {isLoading && <div>Идет загрузка ...</div>} */}
          {isError && <div>{[...new Array(1)].map((_, index) => (
            <ProdSkeleton key={index} />
          ))}</div>}
          {prodata && <ProductInfo detProduct={prodata} />}
          {/* {prodata && <ProductPopup popupProduct={prodata}/>} */}
        </div>
      </div>
      <DownloadApps />
    </>
  );
};

export default ProductDetail;
