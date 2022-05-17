import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, Logout, SetRole, SetUser, SetUserData } from "./types";

const initialState = {
  isAuthenificated: null,
  role: null,
  userData: {
    id: "",
    email: "",
    countryCode: "",
    phone: "",
    lastLogged: "",
    nameTitle: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    mobilePhone: "",
    fax: "",
    country: "",
    postcode: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
  },
} as IUser;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<SetUser>) => {
      const { isAuthenificated } = payload;
      state.isAuthenificated = isAuthenificated;
    },
    setRole: (state, { payload }: PayloadAction<SetRole>) => {
      const { role } = payload;
      state.role = role;
    },
    logout: (state, {}: PayloadAction<Logout>) => {
      state.isAuthenificated = false;
      state.role = null;
    },
    setUserData: (state, { payload }: PayloadAction<SetUserData>) => {
      const { userData } = payload;
      state.userData = userData;
    },
  },
});

export const { reducer, actions } = userSlice;
