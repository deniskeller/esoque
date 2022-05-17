import { takeLatest, call } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { actions as contentActions } from "@store/content/reducer";

import { setContent } from "@api/content";

export function* startSetContent({ payload }: PayloadAction<any>) {
  const { content, lang, page } = payload;
  try {
    const result: string = yield call(setContent, { content, lang, page });
  } catch (error) {}
}

export function* contentSaga() {
  yield takeLatest(contentActions.startSetContent.type, startSetContent);
}
