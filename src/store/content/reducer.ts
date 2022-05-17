import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContent {}

const initialState = {};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    startGetContent: (state, { payload }: PayloadAction<any>) => {},
    startSetContent: (state, { payload }: PayloadAction<any>) => {},
    setContent: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const { reducer, actions } = contentSlice;
