import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICompanyDetails, IGetBusiness, ISendBusiness, ISetBusiness, ISetError, ISetSuccess } from "./types";

const initialState: ICompanyDetails = {
  success: false,
  business: {
    id: "",
    country: "",
    name: "",
    registrationNumber: "",
    importationDate: "",
    type: "",
    owner: "",
    principial: "",
    address: "",
  },
  errors: {
    name: "",
    registrationNumber: "",
    importationDate: "",
  },
};

export const companyDetailsSlice = createSlice({
  name: "companyDetails",
  initialState,
  reducers: {
    getBusiness: (state, { payload }: PayloadAction<IGetBusiness>) => {},
    setBusiness: (state, { payload }: PayloadAction<ISetBusiness>) => {
      const { business } = payload;
      state.business = business;
    },
    sendBusiness: (state, { payload }: PayloadAction<ISendBusiness>) => {},
    setSuccess: (state, { payload }: PayloadAction<ISetSuccess>) => {
      const { success } = payload;
      state.success = success;
    },
    setErrors: (state, { payload }: PayloadAction<ISetError>) => {
      const { errors } = payload;
      state.errors.name = errors?.name || "";
      state.errors.registrationNumber = errors?.registrationNumber || "";
      state.errors.importationDate = errors?.importationDate || "";
    },
  },
});

export const { reducer, actions } = companyDetailsSlice;
