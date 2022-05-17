import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWidgetDox } from "./types";

const initialState = {
  tabName: "",
  copycert: {},
  signcert: {},
  corpdoc: {},
  corpdocOffline: {},
} as IWidgetDox;

export const widgetDoxSlice = createSlice({
  name: "widgetDox",
  initialState,
  reducers: {
    setCorpDoc: (state, { payload }: PayloadAction<any>) => {
      state.corpdoc = payload;
      state.tabName = "corpdoc";
    },
    setCopyCert: (state, { payload }: PayloadAction<any>) => {
      state.copycert = payload;
      state.tabName = "copycert";
    },
    setSignCert: (state, { payload }: PayloadAction<any>) => {
      state.signcert = payload;
      state.tabName = "signcert";
    },

    setCorpDocOffline: (state, { payload }: PayloadAction<any>) => {
      state.corpdocOffline = payload;
    },
  },
});

export const { reducer, actions } = widgetDoxSlice;
