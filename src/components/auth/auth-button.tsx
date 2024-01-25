import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ROUTES } from "@/utils/routes";
import cn from 'classnames';
import { useAppSelector } from '@/Store/store';
import { isAuthSelector, AuthNameSelector } from "@/Store/auth/auth.selector";
import { useGetUserDetailsMutation } from "@/Store/auth/auth.api";
import { useModalAction } from "@/components/common/modal/modal.context";
const AuthMenu = dynamic(() => import("@/layouts/Header/AuthMenu"), { ssr: false });

type AuthButtonProps = {
  className?: string;
  iconClassName?: string;
  hideLabel?: boolean;
  isShowing?: boolean;
};

const AuthButton: React.FC<AuthButtonProps> = ({className}) => {

  const isAuthorized = useAppSelector(isAuthSelector);
  const authName = useAppSelector(AuthNameSelector);
  const [userDet, { }] = useGetUserDetailsMutation();
  const [{ data: prodata }, setState] = useState<any>({});
  const { openModal } = useModalAction();
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
    <button
      className={cn(
        'flex items-center justify-center flex-shrink-0 h-auto focus:outline-none transform',
        className,
      )}
      style={{ display: 'flex', zIndex: 1, marginRight: '-7px'}}>
      <div
          className="hidden lg:flex items-center flex-shrink-0 custom-dn"
          style={{
            display: "flex",
          }}>
          <AuthMenu
            isAuthorized={isLocalAuth}
            href={ROUTES.ACCOUNT}
            btnProps={{
              children: "",
              onClick: handleLogin,
            }}>
            {/* {prodata?.email} */}
          </AuthMenu>
        </div>
    </button>
  );
};

export default AuthButton;
