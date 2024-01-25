import React, { useEffect } from "react";

import cls from "./Product.module.scss";
import { ProductInfo } from "./ProductInfo/index";
import { useParams, useNavigate } from "react-router-dom";
import Skeleton from "../../components/GoodsCatalogue/GoodsBlock/Skeleton";
import { useGetDetProductMutation } from "../../Store/product/product.api";

import { useRouter } from "next/router";
// export type ProductState = {
//   imageUrl: string;
//   price: number;
//   articl: string;
//   name: string;
// };

const Product: React.FC = () => {
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
      const [getDetProduct, { isLoading, data, isError }] = useGetDetProductMutation();

  useEffect(() => {
    getDetProduct({
      ProductId: (query.id as string) ?? '',
    });
  }, [query.id]);

      if (!query.id) {
            // Если продукт пустой, тоесть еще загружается , то не показываем , когда прогрузится тогда уже и покажем
            return (
                  <div>
                        {[...new Array(81)].map((_, index) => (
                              <Skeleton key={index} />
                        ))}
                  </div>
            );
      }

      return (
            <div className={cls.container}>
                  <div className={cls.product_info}>
                        {isLoading && <div>Идет загрузка ...</div>}
                        {isError && <div>Ошибка...</div>}
                        {data && <ProductInfo detProduct={data} />}
                  </div>
            </div>
      );
};

export default Product;
