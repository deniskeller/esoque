import { combineReducers, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { fork } from "redux-saga/effects";
import createSagaMiddleware, { Task } from "redux-saga";

import { HYDRATE, createWrapper, Context } from "next-redux-wrapper";

// Slice
import { contentSlice } from "@store/content/reducer";
import { signupSlice } from "@store/signup/reducer";
import { loginSlice } from "@store/login/reducer";
import { userSlice } from "@store/user/reducer";
import { modalSlice } from "@store/modals/reducer";
import { widgetDoxSlice } from "@store/widgetDox/reducer";
import { userDetailsSlice } from "@store/app/userDetails/reducer";

import { companyDetailsSlice } from "./app/companyDetails/reducer";

// Saga
import { contentSaga } from "@store/content/saga";
import { signupSaga } from "@store/signup/saga";
import { loginSaga } from "@store/login/saga";
import { userDetailsSaga } from "@store/app/userDetails/saga";
import { companyDetailsSaga } from "./app/companyDetails/saga";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export function* rootSaga() {
  yield fork(contentSaga);
  yield fork(signupSaga);
  yield fork(loginSaga);
  yield fork(userDetailsSaga);
  yield fork(companyDetailsSaga);
}

const combinedReducer = combineReducers({
  content: contentSlice.reducer,
  signup: signupSlice.reducer,
  login: loginSlice.reducer,
  user: userSlice.reducer,
  modals: modalSlice.reducer,
  widgetDox: widgetDoxSlice.reducer,
  userDetails: userDetailsSlice.reducer,
  companyDetails: companyDetailsSlice.reducer,
});

export type EsoqueState = ReturnType<typeof combinedReducer>;

const reducer: typeof combinedReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };

      if (state?.user?.isAuthenificated) {
        // nextState.user = state?.user;
      }

      return nextState;
    }

    default:
      return combinedReducer(state, action);
  }
};

// create a makeStore function
const makeStore = (context: Context) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({ reducer, middleware: [sagaMiddleware] });
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper<Store<EsoqueState>>(makeStore, {
  debug: false,
});
