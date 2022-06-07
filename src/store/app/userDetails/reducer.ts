import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IGetFirmData,
  IGetUserDetails,
  ISendUserDetails,
  ISetCuurentFirm,
  ISetEmailError,
  ISetSuccess,
  ISetUserDetails,
  IUpdateUserDetials,
  IUserDetails,
} from "./types";

const initialState: IUserDetails = {
  success: false,
  fieldErrors: {
    email: "",
    phone: "",
  },

  details: {
    id: "",
    title: "",
    jobTitle: "",
    firstName: "",
    lastName: "",
    lastLogged: "",
    email: "",
    countryCode: "",
    telephoneNumber: "",

    permission: "",
    status: false,
    firm: "",
    firmName: "",
    canManageUsers: false,
  },

  currentFirm: {
    title: "",
    value: "",
  },
};

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    getUserDetails: (state, { payload }: PayloadAction<IGetUserDetails>) => {},

    setUserDetails: (state, { payload }: PayloadAction<ISetUserDetails>) => {
      const { details } = payload;
      state.details = details;
    },
    setCurrentFirm: (state, { payload }: PayloadAction<ISetCuurentFirm>) => {
      const { currentFirm } = payload;
      state.currentFirm = currentFirm;
    },
    // validateUserDetails: (state, { payload }: PayloadAction<I>) => {},

    sendUserDetails: (state, { payload }: PayloadAction<ISendUserDetails>) => {},
    updateUserDetails: (state, { payload }: PayloadAction<IUpdateUserDetials>) => {},
    getFirmData: (state, { payload }: PayloadAction<IGetFirmData>) => {},
    setSuccess: (state, { payload }: PayloadAction<ISetSuccess>) => {
      const { success } = payload;
      state.success = success;
    },
    setError: (state, { payload }: PayloadAction<ISetEmailError>) => {
      const { errors } = payload;
      state.fieldErrors.email = errors?.email || "";
      state.fieldErrors.phone = errors?.phone || "";
    },
  },
});

export const { reducer, actions } = userDetailsSlice;
