import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, SetLogin, StartLogin } from "./types";

const initialState = {
  error: "",
  isSuccess: null,
} as ILogin;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    startLogin: (state, { payload }: PayloadAction<StartLogin>) => {},
    setLogin: (state, { payload }: PayloadAction<SetLogin>) => {
      const { error, isSuccess } = payload;
      state.error = error;
      state.isSuccess = isSuccess;
    },
  },
});

export const { reducer, actions } = loginSlice;
