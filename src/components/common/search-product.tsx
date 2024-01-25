import React, { useEffect, useState } from "react";
// import Image from '@components/ui/image';
// import Image from 'next/image';
import { ROUTES } from '@utils/routes';
import { searchProductPlaceholder } from '@assets/placeholders';
import cls from './Common.module.scss';
import Link from 'next/link';
import { useGetSearchProductsMutation } from "@/Store/product/product.api";
import { useAppSelector } from "@/Store/store";
import { searchProduct } from "../../Store/product/product.selectors";
import SearchResultLoader from '@components/ui/loaders/search-result-loader';

type SearchProductProps = {};

const SearchProduct: React.FC<SearchProductProps> = () => {
  const [getSearchPageProducts, { isLoading, isError }] = useGetSearchProductsMutation();
  const product = useAppSelector(searchProduct);
  const search = useAppSelector((state) => state.product.filters.SearchQuery);

  const [SearchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(true);
console.log(product, 'product')
  useEffect(() => {
    if (typeof window !== "undefined") {
      setSearchQuery(localStorage.getItem("handleSearch") || "");
    }
  }, [search]);

  useEffect(() => {
    if (searchOpen && SearchQuery) {
      handleSearch();
    }
  }, [searchOpen, SearchQuery]);

  const handleSearch = () => {
    setSearchOpen(false);
    getSearchPageProducts({
      SearchQuery,
    }).then(() => {
      setSearchOpen(false);
    });
    localStorage.setItem("product", JSON.stringify(product));
    localStorage.setItem("SearchQuery", SearchQuery);
  };

  return (
  isLoading ? 
  (
    // <div className={`w-full ${cls.product_serch_present}`}>
    <div style={{ display: "flex", flexDirection: "row", width: '580px', height: '205px', marginBottom: '20px' }}>
    {Array.from({ length: 3 }).map((_, idx) => (
      <div
        key={`search-result-loader-key-${idx}`}
        className="py-2.5 ps-5 pe-10 scroll-snap-align-start"
      >
        <SearchResultLoader key={idx} uniqueKey={`top-search-${idx}`} />
      </div>
    ))}
    </div>
    // </div>
  ) : 
  isError ? (
    <div
      style={{
        textAlign: "center",
        padding: "10px",
        lineHeight: "32px",
        fontSize: "22px",
        color: "#5d5d5d",width: '580px', height: '110px'
      }}
    >
      Ошибка 404
      <br/>
      Нет соеденения с интернетом!
    </div>
  ) : SearchQuery && (
    <div>
      <div className={cls.searchproduct_wrapper_flex}>
        {product?.map((product) => (
          <Link
            href={`${ROUTES.PRODUCT}/${product.id}`}
            key={`ключ-результата-поиска-${product.id}`}
            className={`group w-full h-auto flex justify-start items-center ${cls.searchproduct_wrapp}`}
          >
            <div className={`relative flex w-12 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4 ${cls.searchproduct_img}`}>
              <img
                src={product.urls[0]}
                width={48}
                height={48}
                loading="eager"
                alt={product.name || 'Product Image'}
                className="bg-skin-thumbnail object-cover"
              />
            </div>
            <div className={cls.priduct_tile}>
              <div className={cls.priduct_tile_ho}>{product.name}</div>
              <div className={cls.priduct_tile_ho}>{product.article}</div>
              <span className={`${cls.priduct_tile_pr_tw} ${cls.priduct_tile_pr}`} data-testid="price">
                {product.price}
                <span className={cls.priduct_tile_pr_znak}>₽</span>
              </span>
            </div>
          </Link>
        ))}
        </div>
        <div className={cls.parent_wind_container}>
          <Link onClick={handleSearch} href="/SearchPage" className={cls.form_window_btn}>
            Все результаты поиска
          </Link>
        </div>
    </div>
  ) )
};

export default SearchProduct;















// import React, { useEffect, useState } from "react";
// import Image from '@components/ui/image';
// import { ROUTES } from '@utils/routes';
// import { searchProductPlaceholder } from '@assets/placeholders';
// import cls from './Common.module.scss';
// import Link from 'next/link';
// import { useGetSearchProductsMutation } from "@/Store/product/product.api";
// import { useAppSelector } from "@/Store/store";
// import { searchProduct } from "../../Store/product/product.selectors";

// type SearchProductProps = {};

// const SearchProduct: React.FC<SearchProductProps> = () => {
//   const [getSearchPageProducts, { isLoading, isError }] = useGetSearchProductsMutation();
//   const product = useAppSelector(searchProduct);
//   const search = useAppSelector((state) => state.product.filters.SearchQuery);

//   const [SearchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setSearchQuery(localStorage.getItem("handleSearch") || "");
//     }
//   }, [search]);

//   const handleSearch = () => {
//     getSearchPageProducts({
//       SearchQuery,
//     }).then(() => {
//       setSearchOpen(false);
//     });
//     localStorage.setItem("product", JSON.stringify(product));
//     localStorage.setItem("SearchQuery", SearchQuery);
//   };

//   return SearchQuery ? (
//     <div>
//       {product?.map((product) => (
//         <Link
//           href={`${ROUTES.PRODUCT}/${product.id}`}
//           key={`ключ-результата-поиска-${product.id}`}
//           className={`group w-full h-auto flex justify-start items-center ${cls.searchproduct_wrapp}`}
//         >
//           <div className={`relative flex w-12 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4 ${cls.searchproduct_img}`}>
//             <Image
//               src={product.urls[0]}
//               width={48}
//               height={48}
//               loading="eager"
//               alt={product.name || 'Product Image'}
//               className="bg-skin-thumbnail object-cover"
//             />
//           </div>

//           <div className={cls.priduct_tile}>
//             <div className={cls.priduct_tile_ho}>{product.name}</div>
//             <div className={cls.priduct_tile_ho}>{product.article}</div>
//             <span className={`${cls.priduct_tile_pr_tw} ${cls.priduct_tile_pr}`} data-testid="price">
//               {product.price}
//               <span className={cls.priduct_tile_pr_znak}>₽</span>
//             </span>
//           </div>
//         </Link>
//       ))}
//     </div>
//   ) : (
//     <div
//       style={{
//         textAlign: "center",
//         padding: "10px",
//         lineHeight: "32px",
//         fontSize: "22px",
//         color: "#5d5d5d",
//       }}
//     >
//       Ваш запрос пока пуст!
//       <br />
//       Введите запрос! :)
//     </div>
//   );
// };

// export default SearchProduct;