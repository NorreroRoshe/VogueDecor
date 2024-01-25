import React, { useEffect, useState } from "react";
import cls from "../GoodsCatalogue.module.scss";
import Colorcheckbox from "../../Checkbox/ColorCheckbox";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import TypeLight from "../../Checkbox/TypeLight";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../../Store/store";
import {
  setTypes,
  setColors,
  setPrice,
  setDiameter,
  setLampCount,
  setChandelierTypes,
  setIsSale,
  clearFilters,
} from "../../../Store/product/product.slice";
import RangeComponent, { IMinMax } from "../../sliders/RangeComponent";
import { useGetProductsMutation } from "../../../Store/product/product.api";
import { chandelierTypes, lightCategory } from "../../../const/constants";
import Switch from '@/components/ui/switch';
import { ISiteCategory } from '@/settings/site-path-cathegory';

export interface IRange {
  minValue: number;
  maxValue: number;
}

const DiametrRange: IRange = {
  minValue: 0,
  maxValue: 2000,
};

const PriceRange: IRange = {
  minValue: 0,
  maxValue: 200000,
};

const LampCountRange: IRange = {
  minValue: 0,
  maxValue: 20,
};

export type FilterProps = {
  isActive: boolean;
  handleClick: () => void;
  handleGetProducts: () => void;
  sitePathCategory: ISiteCategory;
};

export const FilterBlock: React.FC<FilterProps> = React.memo(
  ({ handleClick, isActive, handleGetProducts, sitePathCategory }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [isOpenLight, setOpenLight] = useState<boolean>(
      router.pathname === "/Chapter/Carpets" || router.pathname === "/Chapter/LightAccessories"  ? true : false
    );
    const [isOpenDop, setOpenDop] = useState<boolean>(true);
    const [isOpenColor, setOpenColor] = useState<boolean>(true);
    const { filters, sort } = useAppSelector((state) => state.product);
    const [getProducts, {}] = useGetProductsMutation();
    const [trigger, setTrigger] = useState(false);
    const { query, pathname } = useRouter();
    const saleRout = useRouter();


    const handleSetPrice = (props: IMinMax) => {
      dispatch(setPrice(props));
    };

    const handleSetLampsCount = (props: IMinMax) => {
      dispatch(setLampCount(props));
    };

    const handleSetDiameter = (props: IMinMax) => {
      dispatch(setDiameter(props));
    };


    const handleSetTypeProduct = (ind: number) => {
      dispatch(setTypes(ind));
    };

    const handleSetTypeColors = (ind: number) => {
      dispatch(setColors(ind));
    };

    const handleSetChandelierTypes = (ind: number) => {
      dispatch(setChandelierTypes(ind));
    };

    // const handleSetClear = () => {
    //   dispatch(clearFilters());
    //   setTrigger((prev) => !prev);
    //   getProducts({});
    // };

    const handleSetClear = () => {
      dispatch(clearFilters());
      setTrigger((prev) => !prev);
      getProducts({});

      const { pathname } = router;
      router.push(
        {
          pathname
        },
        undefined,
        { scroll: false }
      );
    };

    const handleSetSale = () => {
      // TODO подумать почему
      dispatch(setIsSale(!filters.IsSale));
    };

    useEffect(() => {
      if (saleRout.pathname === '/Outlet') {
        getProducts({});
        const isSaletimeout = setTimeout(() => {
          dispatch(setIsSale(true));
          getProducts({ IsSale: true, SortType: 0 });
        }, 100);
    
        return () => {
          clearTimeout(isSaletimeout);
        };
      }
    }, [saleRout.pathname]);

    useEffect(() => {                      //раскоментить
      dispatch(clearFilters());
    }, [query.Category]);

    const [isSaleChecked, setIsSaleChecked] = useState(filters.IsSale || false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsSaleChecked(filters.IsSale || false);
      }, 1);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [filters.IsSale]);

    let expandIconLight;
    expandIconLight = isOpenLight ? (
      <IoIosArrowUp className="text-base text-skin-base text-opacity-40" />
    ) : (
      <IoIosArrowDown className="text-base text-skin-base text-opacity-40" />
    );

    let expandIconDop;
    expandIconDop = isOpenDop ? (
      <IoIosArrowUp className="text-base text-skin-base text-opacity-40" />
    ) : (
      <IoIosArrowDown className="text-base text-skin-base text-opacity-40" />
    );

    let expandIconColor;
    expandIconColor = isOpenColor ? (
      <IoIosArrowUp className="text-base text-skin-base text-opacity-40" />
    ) : (
      <IoIosArrowDown className="text-base text-skin-base text-opacity-40" />
    );

    
    const containsAdditionalPath = router.pathname.split("/").length > 3;
    const NotshouldDisplayFilterBlock = 
    router.pathname.includes("/Chapter/Light") ||
    router.pathname.includes("/Chapter/Furniture") ||
    router.pathname.includes("/Chapter/Mirrors") ||
    router.pathname.includes("/Chapter/GoodsForHome") ||
    router.pathname.includes("/Chapter/Accessories") ||
    router.pathname.includes("/Chapter/Carpets") ||
    router.pathname.includes("/Chapter/Paintings");

    const NotshouldDisplayFilterLight = router.pathname === "/Chapter/Light";


    const NotshouldDisplayFilterMirrorsVisShir = 
    router.pathname.includes("/Chapter/Mirrors/Kruglie") ||
    router.pathname.includes("/Chapter/Mirrors/Solnishko");

    
    const NotshouldDisplayFilterLightShir = 
    router.pathname.includes("/Chapter/Light") ||
    router.pathname.includes("/Chapter/Light/Bra") ||
    router.pathname.includes("/Chapter/Light/NastolnieLampi") ||
    router.pathname.includes("/Chapter/Light/Torsheri") ||
    router.pathname.includes("/Chapter/Light/PodvesnoiSvet") ||
    router.pathname.includes("/Chapter/Light/UlichniySvet") ||
    router.pathname.includes("/Chapter/Light/PotolochniySvet") ||
    router.pathname.includes("/Chapter/Light/AccessForLight");

    const NotshouldDisplayFilterMirrorsDiam = 
    router.pathname === "/Chapter/Mirrors" ||
    router.pathname.includes("/Chapter/Mirrors/Artobj") ||
    router.pathname.includes("/Chapter/Mirrors/Sprintami") ||
    router.pathname.includes("/Chapter/Mirrors/Klassicheskie") ||
    router.pathname.includes("/Chapter/Mirrors/Sderevom") ||
    router.pathname.includes("/Chapter/Mirrors/DesignMetall") ||
    router.pathname.includes("/Chapter/Mirrors/Nastolnie") ||
    router.pathname.includes("/Chapter/Mirrors/Napolnie") ||
    router.pathname.includes("/Chapter/Mirrors/Pryamougolnie");

    const NotshouldDisplayFilterCarpetDiam = 
    router.pathname === "/Chapter/Carpets" ||
    router.pathname.includes("/Chapter/Carpets/Pryamougolnie") ||
    router.pathname.includes("/Chapter/Carpets/Kvadratnie") ||
    router.pathname.includes("/Chapter/Carpets/Ovalnie") ||
    router.pathname.includes("/Chapter/Carpets/Dorojki") ||
    router.pathname.includes("/Chapter/Carpets/Nestandartnie") ;

    const NotshouldDisplayFilterCarpetDlinShir = 
    router.pathname.includes("/Chapter/Carpets/Kruglie") ;

    const NotshouldDisplayFilterLightOtstup =
    router.pathname.includes("/Chapter/Light/Bra") ||
    router.pathname.includes("/Chapter/Light/PodsvetkaDlyaKartin") ||
    router.pathname.includes("/Chapter/Light/TrekiSpoti");

    const NotshouldDisplayFilterMirrorsMaterial =
    router.pathname.includes("/Chapter/Mirrors/Sderevom") ||
    router.pathname.includes("/Chapter/Mirrors/DesignMetall") ;

    const NotshouldDisplayFilterLightDlinna =
    router.pathname.includes("/Chapter/Light/Lyustri") ||
    router.pathname.includes("/Chapter/Light/Bra") ||
    router.pathname.includes("/Chapter/Light/NastolnieLampi") ||
    router.pathname.includes("/Chapter/Light/Torsheri") ||
    router.pathname.includes("/Chapter/Light/PodvesnoiSvet") ||
    router.pathname.includes("/Chapter/Light/PotolochniySvet") ||
    router.pathname.includes("/Chapter/Light/UlichniySvet") ;

    
    const NotshouldDisplayFilterLightDiam =
    router.pathname.includes("/Chapter/Light/PodsvetkaDlyaKartin") ||
    router.pathname.includes("/Chapter/Light/TrekiSpoti");

    const NotshouldDisplayFilterLightAccess =
    router.pathname.includes("/Chapter/Light/UlichniySvet") ||
    router.pathname.includes("/Chapter/Light/PodsvetkaDlyaKartin") ||
    router.pathname.includes("/Chapter/Light/TrekiSpoti");
    router.pathname.includes("/Chapter/Light/AcsesuariDlyaSveta");
  
    return (
      <div className={cls.catalogue__filter}>
        <h3 className={cls.filter__title}>
          {sitePathCategory?.filters?.filterName}
        </h3>
        <div className={cls.catalogue__border}>
          <div
            className={`${cls.filter__fil} ${
              isActive ? cls.filter__fil_mobile : ""
            }`}
          >
            <button
              onClick={handleClick}
              className={`${cls.close_filter} ${
                isActive ? cls.close_filter_block : ""
              }`}
            >
              <span
                className={`${cls.close_filter__l} ${cls.close_filter__perv}`}
              ></span>
              <span
                className={`${cls.close_filter__l} ${cls.close_filter__vtor}`}
              ></span>
            </button>
            {!containsAdditionalPath && NotshouldDisplayFilterBlock &&  (
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenLight ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenLight(!isOpenLight)} style={{ marginBottom: isOpenLight ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.categoryFiltersArray.categoryFilterName}
                    </h4>
                    {expandIconLight && <span onClick={()=>setOpenLight(!isOpenLight)} className={cls.expandIconitto}>{expandIconLight}</span>}
                  </div>
                  {isOpenLight &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_typelught"}
                      array={filters.Types || []}
                      onChangeCategory={handleSetTypeProduct}
                      lightCategory={sitePathCategory?.filters?.categoryFiltersArray.categoryFilter}
                      />
                  }
                </div>
              </div>
            )}
            {sitePathCategory?.filters?.carpetStyleFiltersArray &&
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenDop ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenDop(!isOpenDop)} style={{ marginBottom: isOpenDop ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.carpetStyleFiltersArray?.carpetStyleFilterName}
                    </h4>
                      {expandIconDop && <span onClick={()=>setOpenDop(!isOpenDop)} className={cls.expandIconitto}>{expandIconDop}</span>}
                  </div>
                  {isOpenDop &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                      array={filters.ChandelierTypes || []}
                      onChangeCategory={handleSetChandelierTypes}
                      lightCategory={sitePathCategory?.filters?.carpetStyleFiltersArray?.carpetStyleFilter}
                    />
                  }
                </div>
              </div>
            }
            {sitePathCategory?.filters?.colorFiltersArray &&
              <div className={cls.filter__fil_color}>
                <div className={cls.product__fil_styler_ue}>
                  <h4 onClick={()=>setOpenColor(!isOpenColor)} className={cls.filter__fil_color_head}>
                  {sitePathCategory?.filters?.colorFiltersArray?.colorFilterName}
                  </h4>
                  {expandIconColor && <span onClick={()=>setOpenColor(!isOpenColor)} className={cls.expandIconittos}>{expandIconColor}</span>}
                </div>
                {isOpenColor &&
                  <Colorcheckbox
                    onChangeCategory={handleSetTypeColors}
                    array={filters.Colors || []}
                    sitePathCategory={sitePathCategory?.filters?.colorFiltersArray?.colorFilters}
                  />
                }
              </div>
            }
            {sitePathCategory?.filters?.styleFiltersArray &&
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenDop ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenDop(!isOpenDop)} style={{ marginBottom: isOpenDop ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.styleFiltersArray?.styleFilterName}
                    </h4>
                      {expandIconDop && <span onClick={()=>setOpenDop(!isOpenDop)} className={cls.expandIconitto}>{expandIconDop}</span>}
                  </div>
                  {isOpenDop &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                      array={filters.ChandelierTypes || []}
                      onChangeCategory={handleSetChandelierTypes}
                      lightCategory={sitePathCategory?.filters?.styleFiltersArray?.styleFilter}
                    />
                  }
                </div>
              </div>
            }
            {sitePathCategory?.filters?.priceFiltersArray &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.priceFiltersArray?.priceFilterName}
                  </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetPrice}
                    trigger={trigger}
                    minValue={filters.MinPrice || PriceRange.minValue}
                    maxValue={filters.MaxPrice || PriceRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.priceFiltersArray?.priceFilters}
                  />
                </div>
              </div>
            }
            {sitePathCategory?.filters?.diametrFiltersArray && !NotshouldDisplayFilterLight &&
            !NotshouldDisplayFilterLightDiam &&
            !NotshouldDisplayFilterMirrorsDiam &&
            !NotshouldDisplayFilterCarpetDiam &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.diametrFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetDiameter}
                    trigger={trigger}
                    minValue={filters.MinDiameter || DiametrRange.minValue}
                    maxValue={filters.MaxDiameter || DiametrRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.diametrFiltersArray?.polsunokFilters}
                    />
                </div>
              </div>
            }
            {sitePathCategory?.filters?.dlinnaFiltersArray &&
            !NotshouldDisplayFilterLight &&
            !NotshouldDisplayFilterMirrorsVisShir &&
            !NotshouldDisplayFilterLightDlinna &&
            !NotshouldDisplayFilterCarpetDlinShir &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.dlinnaFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetLampsCount}
                    trigger={trigger}
                    minValue={filters.MinLampCount || LampCountRange.minValue}
                    maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.dlinnaFiltersArray?.polsunokFilters}
                    />
                </div>
              </div>
            }
            
            {sitePathCategory?.filters?.shirinaFiltersArray &&
            !NotshouldDisplayFilterMirrorsVisShir &&
            !NotshouldDisplayFilterLightShir &&
            !NotshouldDisplayFilterCarpetDlinShir &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.shirinaFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetLampsCount}
                    trigger={trigger}
                    minValue={filters.MinLampCount || LampCountRange.minValue}
                    maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.shirinaFiltersArray?.polsunokFilters}
                    />
                </div>
              </div>
            }

            {sitePathCategory?.filters?.visotaFiltersArray && !NotshouldDisplayFilterLight &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.visotaFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetLampsCount}
                    trigger={trigger}
                    minValue={filters.MinLampCount || LampCountRange.minValue}
                    maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.visotaFiltersArray?.polsunokFilters}
                    />
                </div>
              </div>
            }
            {sitePathCategory?.filters?.otstupFiltersArray &&
            !NotshouldDisplayFilterLight &&
            NotshouldDisplayFilterLightOtstup &&
              (<div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.otstupFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetLampsCount}
                    trigger={trigger}
                    minValue={filters.MinLampCount || LampCountRange.minValue}
                    maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.otstupFiltersArray?.polsunokFilters}
                  />
                </div>
              </div>
            )}
            {sitePathCategory?.filters?.lampCountFiltersArray &&
              <div className={cls.filter__fil_price}>
                <h4 className={cls.filter__fil_price_head}>
                  {sitePathCategory?.filters?.lampCountFiltersArray?.polsunokFilterName}
                </h4>
                <div className={cls.polsunok}>
                  <RangeComponent
                    changeValues={handleSetLampsCount}
                    trigger={trigger}
                    minValue={filters.MinLampCount || LampCountRange.minValue}
                    maxValue={filters.MaxLampCount || LampCountRange.maxValue}
                    RangeValue={sitePathCategory?.filters?.lampCountFiltersArray?.polsunokFilters}
                    />
                </div>
              </div>
            }
           
            {sitePathCategory?.filters?.materialFiltersArray &&
            !NotshouldDisplayFilterMirrorsMaterial &&
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenDop ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenDop(!isOpenDop)} style={{ marginBottom: isOpenDop ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.materialFiltersArray?.materialFilterName}
                    </h4>
                      {expandIconDop && <span onClick={()=>setOpenDop(!isOpenDop)} className={cls.expandIconitto}>{expandIconDop}</span>}
                  </div>
                  {isOpenDop &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                      array={filters.ChandelierTypes || []}
                      onChangeCategory={handleSetChandelierTypes}
                      lightCategory={sitePathCategory?.filters?.materialFiltersArray?.materialFilter}
                    />
                  }
                </div>
              </div>
            }
            {sitePathCategory?.filters?.materialPaintFiltersArray &&
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenDop ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenDop(!isOpenDop)} style={{ marginBottom: isOpenDop ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.materialPaintFiltersArray?.materialPaintFilterName}
                    </h4>
                      {expandIconDop && <span onClick={()=>setOpenDop(!isOpenDop)} className={cls.expandIconitto}>{expandIconDop}</span>}
                  </div>
                  {isOpenDop &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                      array={filters.ChandelierTypes || []}
                      onChangeCategory={handleSetChandelierTypes}
                      lightCategory={sitePathCategory?.filters?.materialPaintFiltersArray?.materialPaintFilter}
                    />
                  }
                </div>
              </div>
            }
            {sitePathCategory?.filters?.dopFiltersArray &&
            !NotshouldDisplayFilterLightAccess &&
              <div className={cls.product__fil}>
                <div style={{ paddingBottom: isOpenDop ? '' : '0' }} className={cls.product__fil_style}>
                  <div className={cls.product__fil_styler_ue}>
                    <h4 onClick={()=>setOpenDop(!isOpenDop)} style={{ marginBottom: isOpenDop ? '' : '10px' }} className={cls.product__fil_style_head}>
                      {sitePathCategory?.filters?.dopFiltersArray?.dopFilterName}
                    </h4>
                      {expandIconDop && <span onClick={()=>setOpenDop(!isOpenDop)} className={cls.expandIconitto}>{expandIconDop}</span>}
                  </div>
                  {isOpenDop &&
                    <TypeLight
                      headeDropdownClass={"header__dropdown_wrap_lightCategory"}
                      array={filters.ChandelierTypes || []}
                      onChangeCategory={handleSetChandelierTypes}
                      lightCategory={sitePathCategory?.filters?.dopFiltersArray?.dopFilter}
                    />
                  }
                </div>
              </div>
            }
              <div className={cls.product__fil}>
                <div className={`${cls.product__fil_style} ${cls.product__fil_style_sale}`}>
                  <h4 className={cls.product__fil_style_head}>Скидка</h4>
                  {/* <input
                    type="checkbox"
                    checked={isSaleChecked}
                    onChange={handleSetSale}
                  /> */}
                  <div className="flex items-center flex-shrink-0">
                    <label className="switch relative inline-block w-10 cursor-pointer">
                      <Switch checked={isSaleChecked} onChange={handleSetSale} />
                    </label>
                  </div>
                </div>
              </div>
            
            <div className={cls.product__fil}>
              <div className={cls.product__fil_primenit}>
                <button
                  onClick={handleGetProducts}
                  className={cls.product__fil_primenit_search}
                >
                  <span
                    className={`${cls.product__fil_primenit_btn} ${cls.primenit_btn}`}
                  >
                    Применить фильтр
                  </span>
                </button>
                <button
                  onClick={handleSetClear}
                  className={cls.product__fil_primenit_clear}
                >
                  Сбросить фильтр
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);