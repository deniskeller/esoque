import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { actions } from "./reducer";

import { CurrentFirm, IGetFirmData, IGetUserDetails, ISendUserDetails, IUpdateUserDetials, UserData } from "./types";
import {
  addNewUser,
  // changeStatusUser,
  checkUpdateUserDetails,
  checkValidNewUser,
  getUserDetails,
  updateUserDetails,
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

function* getFirmDataProcess({ payload }: PayloadAction<IGetFirmData>) {
  const { firm, cookie } = payload;
  const firms: CurrentFirm[] = yield call(getFirmsOptions, { cookie });
  const currentFirm = firms.find((el) => el.value === firm);
  if (currentFirm) yield put(actions.setCurrentFirm({ currentFirm }));
}

type ICheckValidNewUser = {
  error: boolean;
  fields?: [{ email?: string }, { phone?: string }];
};
function* sendUserDetailsProcess({ payload }: PayloadAction<ISendUserDetails>) {
  const details = payload;

  const response: ICheckValidNewUser = yield call(checkValidNewUser, details);

  if (!response.error) {
    yield call(addNewUser, details);
    yield put(actions.setSuccess({ success: true }));
  } else {
    if (response.fields) {
      const errors: any = {};
      response?.fields?.forEach((errObj) => {
        const entries = Object.entries(errObj);
        errors[entries[0][0]] = entries[0][1];
      });

      console.log(errors, "errors123");

      yield put(actions.setError({ errors: errors }));
    }
  }
}

function* updateUserDetailsProcess({ payload }: PayloadAction<IUpdateUserDetials>) {
  const { details, id } = payload;
  const response: ICheckValidNewUser = yield call(checkUpdateUserDetails, {
    details,
    id,
  });

  if (!response.error) {
    yield call(updateUserDetails, { details, id });
    // yield call(changeStatusUser, { id, status });
    yield put(actions.setSuccess({ success: true }));
  } else {
    if (response.fields) {
      const errors: any = {};
      response?.fields?.forEach((errObj) => {
        const entries = Object.entries(errObj);
        errors[entries[0][0]] = entries[0][1];
      });

      yield put(actions.setError({ errors: errors }));
    }
  }
}

export function* userDetailsSaga() {
  yield takeLatest(actions.getUserDetails.type, getUserDetailsProcess);
  yield takeLatest(actions.sendUserDetails.type, sendUserDetailsProcess);

  yield takeLatest(actions.updateUserDetails.type, updateUserDetailsProcess);
  yield takeLatest(actions.getFirmData.type, getFirmDataProcess);
}
