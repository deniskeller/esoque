import { createBusiness, updateBusiness } from "@api/app/company_managment/companyManagment";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";

import { actions } from "./reducer";
import { ISendBusiness } from "./types";

type ICheckBusiness = {
  error: boolean;
  fields?: [{ email?: string }, { phone?: string }];
};

function* sendBusinessProcess({ payload }: PayloadAction<ISendBusiness>) {
  const { business, id } = payload;
  yield put(actions.setSuccess({ success: false }));

  let response: ICheckBusiness;

  // Отправляем и проверяем значения
  if (id) {
    response = yield call(updateBusiness, { business, id, isSave: false });
  } else {
    response = yield call(createBusiness, { business, isSave: false });
  }

  if (!response.error) {
    // Если всё ок, то обновляем\создаем business
    if (id) {
      yield call(updateBusiness, { business, id });
    } else {
      yield call(createBusiness, { business });
    }
    yield put(actions.setSuccess({ success: true }));
  } else {
    if (response.fields) {
      const errors: any = {};
      response?.fields?.forEach((errObj) => {
        const entries = Object.entries(errObj);
        errors[entries[0][0]] = entries[0][1];
      });
      console.log(errors, "er12312", "errors");
      yield put(actions.setErrors({ errors }));
    }
  }
}

export function* companyDetailsSaga() {
  yield takeLatest(actions.sendBusiness.type, sendBusinessProcess);
}
