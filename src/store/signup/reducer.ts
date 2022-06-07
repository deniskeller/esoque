import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import {
  CheckEmailCode,
  CheckPhone,
  CheckVerifyPhoneCode,
  ClearEmailCode,
  ClearPhoneCode,
  EmailVerify,
  ISignup,
  SetBusinessData,
  SetEmail,
  SetEmailCode,
  SetPassword,
  SetPersonalData,
  SetPesonalAddress,
  SetPhone,
  SetPhoneCode,
  SetStep,
} from "./types";

const initialState = {
  errorProcess: false,
  step: 1,
  email: {
    value: "",
    error: "",
  },
  emailCode: {
    value: "",
    error: "",
  },
  phone: {
    countryCode: "",
    phone: "",
    error: "",
  },
  phoneCode: {
    value: "",
    error: "",
  },
  password: {
    value: "",
  },
  pesonalData: {
    title: "",
    firstName: "",
    lastName: "",
    birthday: "",
  },
  personalAddress: {
    country: "",
    postcode: "",
    city: "",
    address: "",
    addressTwo: "",
  },
  bussiness: {
    country: "",
    legalName: "",
    registNumber: "",
    date: "",
    businessType: "",
    legalNameError: "",
    registNumberError: "",
  },
} as ISignup;

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    startCheckEmail: (state, { payload }: PayloadAction<EmailVerify>) => {},
    setEmail: (state, { payload }: PayloadAction<SetEmail>) => {
      const { email, error } = payload;
      state.email.value = email;
      state.email.error = error;
    },
    checkEmailCode: (state, { payload }: PayloadAction<CheckEmailCode>) => {},
    setEmailCode: (state, { payload }: PayloadAction<SetEmailCode>) => {
      const { code, error } = payload;
      state.emailCode.value = code;
      state.emailCode.error = error;
    },
    startCheckPhone: (state, { payload }: PayloadAction<CheckPhone>) => {},
    setPhone: (state, { payload }: PayloadAction<SetPhone>) => {
      const { phone, countryCode, error } = payload;
      state.phone.phone = phone;
      state.phone.countryCode = countryCode;
      state.phone.error = error;
    },

    startVerifyPhoneCode: (state, { payload }: PayloadAction<CheckVerifyPhoneCode>) => {},

    setPhoneCode: (state, { payload }: PayloadAction<SetPhoneCode>) => {
      const { value, error } = payload;
      state.phoneCode.value = value;
      state.phoneCode.error = error;
    },
    setPassword: (state, { payload }: PayloadAction<SetPassword>) => {
      const step = current(state).step;
      const { password } = payload;
      state.password.value = password;
      state.step = step + 1;
    },
    setPesonalData: (state, { payload }: PayloadAction<SetPersonalData>) => {
      const step = current(state).step;
      state.pesonalData = payload;
      state.step = step + 1;
    },

    setPesonalAddress: (state, { payload }: PayloadAction<SetPesonalAddress>) => {
      const step = current(state).step;
      state.personalAddress = payload;
      state.step = step + 1;
    },

    startSetBusiness: (state, { payload }: PayloadAction<SetBusinessData>) => {},

    setBusiness: (state, { payload }: PayloadAction<SetBusinessData>) => {
      state.bussiness = payload;
    },
    registerUser: (state) => {},
    setStep: (state, { payload }: PayloadAction<SetStep>) => {
      const { step } = payload;

      state.step = step;
    },
    clearPhoneCode: (state, { payload }: PayloadAction<ClearPhoneCode>) => {
      state.phoneCode = payload;
    },
    clearEmailCode: (state, { payload }: PayloadAction<ClearEmailCode>) => {
      state.emailCode = payload;
    },
    clearState: (state) => {
      return { ...initialState };
    },
  },
});

export const { reducer, actions } = signupSlice;
