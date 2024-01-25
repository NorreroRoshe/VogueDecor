import React from "react";
import cls from "./Outlet.module.scss";
import { GoodsCatalogue } from "../../components/GoodsCatalogue/GoodsCatalogue";
import Breadcrumb from '@components/ui/breadcrumb';
const Outlet: React.FC = () => {
  return (
    <>
    <Breadcrumb />
    <div className={`${cls.container} ${cls.outlet__container}`}>
      <div className={cls.outlet__mt}>
        <h2 className={cls.outlet__title}>Распродажа</h2>
        <GoodsCatalogue />
      </div>
    </div>
    </>
  );
};

export default Outlet;
