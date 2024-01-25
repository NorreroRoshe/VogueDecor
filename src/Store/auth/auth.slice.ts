import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./auth.types";
import { authApi } from "./auth.api";

const initialState: IAuthState = {
  userId: "",
  id: "",
  name: "",
  email: "",
  phoneNumber: ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.userId = "";
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.signIn.matchFulfilled,
      (state, { payload }) => {
        state.userId = payload.userId;
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
        localStorage.setItem("access_token_expires", payload.access_token_expires);
      }
    );
    builder.addMatcher(
      authApi.endpoints.refreshToken.matchFulfilled,
      (state, { payload }) => {
        state.userId = state.userId ? payload.userId : "";
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
        localStorage.setItem("access_token_expires", payload.access_token_expires);
      }
    );
    builder.addMatcher(
      authApi.endpoints.signUp.matchFulfilled,
      (state, { payload }) => {
        // state.userId = payload.userId;
      }
    );






    //Он Вообще нужен ??? Зачем он нам тут если бэкер просто статус 200 присылает при успешном ответе, а неуспешные я обрабатваю в компоненте
    // builder.addMatcher(
    //   authApi.endpoints.emailConfirm.matchFulfilled,
    //   (state) => {
    //     // Добавьте здесь дополнительные действия, связанные с успешным подтверждением почты.
    //   }
    // );
    builder.addMatcher(
      authApi.endpoints.emailResendConfirm.matchFulfilled,
      (state, { payload }) => {
        state.userId = payload.userId;
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
        localStorage.setItem("access_token_expires", payload.access_token_expires);
      }
    );
    builder.addMatcher(
      authApi.endpoints.passwordForgot.matchFulfilled,
      (state, { payload }) => {
        state.userId = payload.userId;
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
        localStorage.setItem("access_token_expires", payload.access_token_expires);
      }
    );
    builder.addMatcher(
      authApi.endpoints.passwordReset.matchFulfilled,
      (state, { payload }) => {
        state.userId = payload.userId;
        localStorage.setItem("access_token", payload.access_token);
        localStorage.setItem("refresh_token", payload.refresh_token);
        localStorage.setItem("access_token_expires", payload.access_token_expires);
      }
    );
    builder.addMatcher(
      authApi.endpoints.getUserDetails.matchFulfilled,
      (state, { payload }) => {
        state.id = payload.id;
        state.name = payload.name;
        state.email = payload.email;
        state.phoneNumber = payload.phoneNumber;
      }
    );
  },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer;
