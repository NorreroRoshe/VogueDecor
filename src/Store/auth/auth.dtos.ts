export interface ISingInReq {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ISingInRes {
  userId: string;
  access_token: string;
  refresh_token: string;
  access_token_expires: string;
}

export interface IRefreshReq {
  refreshToken: string;
}

export interface ISingUpReq {
  email: string;
  password: string;
}

export interface ISingUpRes {
  userId: string;
}

export interface IConfirmReq {
  email: string;
  code?: string;
}

export interface IResendConfirmReq {
  Email: string;
}

export interface IResendConfirmRes {
  userId: string;
  access_token: string;
  refresh_token: string;
  access_token_expires: string;
}

export interface IPasswodForgotReq {
  Email: string;
}

export interface IPasswodForgotRes {
  userId: string;
  access_token: string;
  refresh_token: string;
  access_token_expires: string;
}

export interface IPasswordResetReq {
  code: string;
  email: string;
  password: string
}
export interface IPasswordResetRes {
  userId: string;
  access_token: string;
  refresh_token: string;
  access_token_expires: string;
}

export interface IGetUserDetailsRes {
  id: string;
  name: string;
  email: string;
  phoneNumber: string
}

export interface IGetUserDetailsReq {
  UserId: string;
}

export interface IputUserDetailsReq {
  userId: string;
  name: string;
  phoneNumber: string
}

// {
//   "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "access_token": "string",
//   "expires": 0,
//   "refresh_token": "string",
//   "refresh_token_expires": 0
// }
