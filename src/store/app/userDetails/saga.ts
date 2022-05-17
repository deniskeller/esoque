import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { actions } from "./reducer";
import { CurrentFirm, IGetUserDetails, ISendUserDetails, UserData } from "./types";
import {
  addNewUser,
  checkValidNewUser,
  getUserDetails,
} from "@api/app/manage_users/detailsUser";
import { getFirmsOptions } from "@api/firmUsers";

function* getUserDetailsProcess({ payload }: PayloadAction<IGetUserDetails>) {
  const { cookie, id, firm } = payload;

  if (id.length > 1) {
    // Обновление данных уже у имеющегося юзера
    const details: UserData = yield call(getUserDetails, { cookie, id });
    yield put(actions.setUserDetails({ details }));
  } else {
    // Создание нового
    const firms: CurrentFirm[] = yield call(getFirmsOptions, { cookie });
    const currentFirm = firms.find((el) => el.value === firm);
    if (currentFirm) yield put(actions.setCurrentFirm({ currentFirm }));
  }
}

function* sendUserDetailsProcess({ payload }: PayloadAction<ISendUserDetails>) {
  const details = payload;

  // yield call(checkValidNewUser, details);
  yield call(addNewUser, details);
}

export function* userDetailsSaga() {
  yield takeLatest(actions.getUserDetails.type, getUserDetailsProcess);
  yield takeLatest(actions.sendUserDetails.type, sendUserDetailsProcess);
}
