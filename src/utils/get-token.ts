// import { AuthNameSelector } from "@/Store/auth/auth.selector";
// import { useAppSelector } from "@/Store/store";

// export const getToken = () => {
//   if (typeof window === 'undefined') {
//     return null;
//   }
//   const authName = useAppSelector(AuthNameSelector);
//   const accessToken = localStorage.getItem('access_token');
//   const refreshToken = localStorage.getItem('refresh_token');
//   const accessTokenExpires = localStorage.getItem('access_token_expires');

//   // Вместо токенов можно использовать любые данные, которые вам необходимы

//   return Boolean(authName && accessToken && refreshToken && accessTokenExpires);
// };