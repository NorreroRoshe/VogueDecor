import React from "react";
import cls from "./Collections.module.scss";
import { TypeOfGoods } from "../../components/TypeOfGoods/TypeOfGoods";
import MainLayout from "@/layouts/MainLayout";
import Breadcrumb from '@components/ui/breadcrumb';
export const Collections: React.FC = () => {
  return (
    <>
    <section className={cls.section_collections}>
                  <div className={`${cls.collections_container} ${cls.container}`}>
              <Breadcrumb />
                        <h2 className={cls.collections_header}>Butterrfly L.C. Collections</h2>
                        <TypeOfGoods />
                  </div>
            </section>
            </>
      );
      
};

export default Collections;
