import Link from "next/link";
import React from "react";
import Auth from "../../assets/img/authperson2.png";
import Image from "next/image";
import cls from "./Header.module.scss";

interface Props {
	href: string;
	btnProps: React.ButtonHTMLAttributes<any>;
	isAuthorized: boolean;
	children: any;
}

//ошибка с кнопкой войти елси вдруг будет , сделать юзэффект который будет отлавливать , если вдруг кнопка будет пустая то в таком случае делаем логаут

const AuthMenu: React.FC<Props> = ({ isAuthorized, href, btnProps, children }) => {
	return isAuthorized ? (
		<Link
			href={href}
			className="text-sm lg:text-16px text-skin-base font-normal focus:outline-none me-2 z-10">
        <Image
    className={cls.notauth}
      src={Auth}
      alt='authPerson' 
      style={{ width: '26px', height: '26px' }}
    />
			{/* {children} */}
		</Link>
	) : (
    <div
    className={cls.notauth}
			{...btnProps}
    />
		// <button
		// 	className="text-sm lg:text-16px text-skin-base font-normal focus:outline-none me-2 z-10"
		// 	style={{
		// 		fontSize: "18px",
		// 		fontWeight: 500,
		// 	}}
		// 	aria-label="Authentication"
		// 	{...btnProps}
		// />
	);
};

export default AuthMenu;
