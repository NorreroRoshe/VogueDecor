import React, {useRef, useEffect, useState } from "react";
import { Modal } from "../../../components/HoverWindow/HoverWindow";
import cls from "../Header.module.scss";
import { MenuCategoryChand } from "./MenuCategoryChand/MenuCategoryChand";
import Link from "next/link";
import { useGetWindowCollectionMutation } from "../../../Store/collection/collection.api";
import { useRouter } from "next/router";
import { useOutsideAlerter } from "@/hooks/useClickOutside";

export const MouseOverModal: React.FC = () => {
      const [isModal, setModal] = React.useState<boolean>(false);
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const onClose = () => setModal(false);

      const [getCollections, {}] = useGetWindowCollectionMutation();

      const handleGetSearchProducts = () => {
            getCollections({});
            setModal(true);
      };

      const collectRef = useRef<HTMLDivElement>(null);
      useOutsideAlerter(collectRef, () => setModal(false));
    
      const onKeydown = ({ key }: KeyboardEvent) => {
        switch (key) {
          case 'Escape':
            setModal(false);
            break;
        }
      };

      useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
      }, []);

      useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);

      return (
            <div
            ref={collectRef}
                  className={cls.header_low_item}
                  onClick={() => {
                    if (windowWidth <= 1250) {
                      setModal(!isModal);
                    }
                  }}
                  onMouseEnter={() => {
                    if (windowWidth > 1250) {
                      handleGetSearchProducts();
                    }
                  }}
                  onMouseLeave={() => {
                    if (windowWidth > 1250) {
                      setModal(false);
                    }
                  }}
                  >
                  <button className={cls.low_item_btn}>
                        <span className={cls.low_item_heading}>КОЛЛЕКЦИИ</span>
                        <span className={cls.low_item_icon}></span>
                  </button>
                  <Modal
                        visible={isModal}
                        title="ghbdtn"
                        content={<MenuCategoryChand setModal={setModal} />}
                        onClose={onClose}
                  />
            </div>
      );
};
