import Link from "next/link";
import React, { useEffect, useState } from "react";
import cls from "./Header.module.scss";
import HeaderPhone from "./HeaderPhone";
import dynamic from "next/dynamic";
import UserIcon from "@/components/iconsCode/user-icon";
import { ROUTES } from "@/utils/routes";
import { useTranslation } from "react-i18next";
import { useModalAction } from "@/components/common/modal/modal.context";
import { useAppSelector } from "@/Store/store";
import { isAuthSelector, AuthNameSelector } from "@/Store/auth/auth.selector";
import { useGetUserDetailsMutation } from "@/Store/auth/auth.api";
const AuthMenu = dynamic(() => import("./AuthMenu"), { ssr: false });

function HeaderSignPhone() {
  const isAuthorized = useAppSelector(isAuthSelector);
  const authName = useAppSelector(AuthNameSelector);
  const [userDet, { }] = useGetUserDetailsMutation();
  const [{ data: prodata }, setState] = useState<any>({});
  const { t } = useTranslation("common");
  const { openModal } = useModalAction();
  const [mobPhone, setMobPhone] = React.useState<boolean>(false);
  function handleLogin() {
    openModal("LOGIN_VIEW");
  }


  const isLocalAuth = !!localStorage.getItem("refresh_token");

  useEffect(() => {
    const fetchData = async () => {
      authName;
      try {
        const id = authName; // Получить `UserId`
        if (id) {
          const response = await userDet({
            UserId: id,
          });
          setState(response as any);
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [authName]);

  return (
    <>
      <div className={cls.header_sign_phone}>
        <div
          className="hidden lg:flex items-center flex-shrink-0 custom-dn"
          style={{
            display: "flex",
          }}>
          <AuthMenu
            isAuthorized={isLocalAuth}
            href={ROUTES.ACCOUNT}
            btnProps={{
              children: t("Войти"),
              onClick: handleLogin,
            }}>
            {prodata?.email}
          </AuthMenu>
          <UserIcon className="text-skin-base text-opacity-40" />
        </div>
      </div>
      <HeaderPhone />
    </>
  );
}

export default HeaderSignPhone;
