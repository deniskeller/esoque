import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModals, SetPopup } from "./types";

const initialState = {
  popup: "",
  id: 0,
} as IModals;

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setPopup: (state, { payload }: PayloadAction<SetPopup>) => {
      const { popup, id } = payload;
      state.popup = popup;
      state.id = id;
    },
  },
});

export const { reducer, actions } = modalSlice;
