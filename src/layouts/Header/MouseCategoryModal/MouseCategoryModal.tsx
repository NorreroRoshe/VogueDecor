import React, {useRef, useEffect} from "react";
import { Modal } from "../../../components/HoverWindow/HoverWindow";
import cls from "../Header.module.scss";
import ModalWindowCategory from "./ModalwindowCategory/ModalwindowCategory";
import { useOutsideAlerter } from "@/hooks/useClickOutside";


export const MouseCategoryModal: React.FC = () => {
      const [isModal, setModal] = React.useState<boolean>(false);
      const onClose = () => setModal(false);
      const lightRef = useRef<HTMLDivElement>(null);
      useOutsideAlerter(lightRef, () => setModal(false));
    
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
      return (
            <>
                  <div
                  ref={lightRef}
                        className={cls.header_low_item}
                        onClick={() => setModal(!isModal)}
                        // onMouseOver={() => setModal(true)}
                        // onMouseLeave={() => setModal(false)}
                        >
                        <button className={cls.low_item_btn}>
                              <span className={cls.low_item_heading}>КАТЕГОРИИ СВЕТА</span>
                              <span className={cls.low_item_icon}></span>
                        </button>
                        <Modal
                              visible={isModal}
                              title="Chandalier"
                              content={<ModalWindowCategory setModal={setModal} />}
                              onClose={onClose}
                        />
                  </div>
            </>
      );
};
