import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IFirms,
  IGetUserDetails,
  ISendUserDetails,
  ISetCuurentFirm,
  ISetUserDetails,
  IUserDetails,
} from "./types";

const initialState: IUserDetails = {
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
    dataEntry: false,
    submitter: false,
    readOnly: false,
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
    getUserDetails: (state, { payload }: PayloadAction<IGetUserDetails>) => {
      console.log("getUsersDetails1");
    },
    setUserDetails: (state, { payload }: PayloadAction<ISetUserDetails>) => {
      const { details } = payload;
      state.details = details;
    },
    setCurrentFirm: (state, { payload }: PayloadAction<ISetCuurentFirm>) => {
      console.log("setCurrentFirm111111111111111");
      const { currentFirm } = payload;
      state.currentFirm = currentFirm;
    },
    // validateUserDetails: (state, { payload }: PayloadAction<I>) => {},
    sendUserDetails: (state, { payload }: PayloadAction<ISendUserDetails>) => {
      console.log("sendUserDetails");
    },
  },
});

export const { reducer, actions } = userDetailsSlice;
