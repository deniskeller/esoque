import { takeLatest, call, put, select } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { actions as loginActions } from "./reducer";
import { actions as userActions } from "@store/user/reducer";
import { StartLogin } from "./types";
import { loginUser } from "@api/login";

function* startLoginProcess({ payload }: PayloadAction<StartLogin>) {
  const { email, password } = payload;

  const error: string = yield call(loginUser, { email, password });
  if (!error) {
    yield put(
      userActions.setUser({
        isAuthenificated: true,
      })
    );
    yield put(loginActions.setLogin({ error, isSuccess: true }));
  } else {
    yield put(loginActions.setLogin({ error, isSuccess: false }));
  }
}

export function* loginSaga() {
  yield takeLatest(loginActions.startLogin.type, startLoginProcess);
}
