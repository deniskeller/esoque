import { takeLatest, call, put, select } from "redux-saga/effects";

import { PayloadAction } from "@reduxjs/toolkit";
import { actions as signupActions } from "./reducer";

import {
  CheckEmailCode,
  CheckPhone,
  CheckVerifyPhoneCode,
  EmailVerify,
  ISignup,
  SetBusinessData,
} from "./types";
import {
  BusinessData,
  checkBusiness,
  checkEmail,
  checkPhone,
  createUser,
  emailSendCode,
  registerBusiness,
  verifyEmailCode,
  verifyPhone,
  verifyPhoneCode,
} from "@api/signup";
import { EsoqueState } from "@store/store";
import {
  formatBusinessData,
  formatUserData,
  UserFormatData,
} from "@utils/helpers";

function* checkEmailProcess({ payload }: PayloadAction<EmailVerify>) {
  const { email } = payload;

  // Check validate email address
  const res: boolean = yield call(checkEmail, { email });
  if (res) {
    yield put(signupActions.setEmail({ email, error: "" }));
  } else {
    yield put(
      signupActions.setEmail({ email, error: "This mail is already taken" })
    );
    return;
  }

  // Send code email address
  const statusCode: boolean = yield call(emailSendCode, { email });

  if (statusCode) {
    yield put(signupActions.setStep({ step: 2 }));
  } else {
    console.log("error statusCode saga");
  }
}

function* verifyEmailCodeProcess({ payload }: PayloadAction<CheckEmailCode>) {
  const { code } = payload;

  const email: string = yield select(
    (state: EsoqueState) => state.signup.email.value
  );

  const res: boolean = yield call(verifyEmailCode, { email, code });

  if (res) {
    yield put(signupActions.setEmailCode({ code, error: "" }));
    yield put(signupActions.setStep({ step: 3 }));
  } else {
    yield put(signupActions.setEmailCode({ code, error: "Incorrect code" }));
  }
}

function* checkPhoneProcess({ payload }: PayloadAction<CheckPhone>) {
  const { phone, countryCode } = payload;

  const isAlreadyPhone: string = yield call(checkPhone, { phone, countryCode });

  if (isAlreadyPhone) {
    yield put(
      signupActions.setPhone({ phone, countryCode, error: isAlreadyPhone })
    );
    return;
  }

  const error: string = yield call(verifyPhone, { phone, countryCode });
  if (!error) {
    yield put(signupActions.setPhone({ phone, countryCode, error }));
    yield put(signupActions.setStep({ step: 4 }));
  } else {
    yield put(signupActions.setPhone({ phone, countryCode, error }));
  }
}

function* verifyPhoneCodeProcess({
  payload,
}: PayloadAction<CheckVerifyPhoneCode>) {
  const { value, phone } = payload;

  const error: string = yield call(verifyPhoneCode, {
    value,
    phone,
  });

  if (!error) {
    yield put(signupActions.setPhoneCode({ value, error }));
    yield put(signupActions.setStep({ step: 5 }));
  } else {
    yield put(signupActions.setPhoneCode({ value, error }));
  }
}

function* saveBusinessProcess({ payload }: PayloadAction<SetBusinessData>) {
  const { legalName, registNumber } = payload;

  const resultCheckName: string = yield call(checkBusiness, {
    name: legalName,
  });
  const resultCheckNumber: string = yield call(checkBusiness, {
    registrationNumber: registNumber,
  });

  if (resultCheckName || resultCheckNumber) {
    yield put(
      signupActions.setBusiness({
        ...payload,
        legalNameError: resultCheckName,
        registNumberError: resultCheckNumber,
      })
    );
    return;
  }

  yield put(
    signupActions.setBusiness({
      ...payload,
      legalNameError: resultCheckName,
      registNumberError: resultCheckNumber,
    })
  );

  yield put(signupActions.registerUser());
}

export type ResponseCall = {
  status: "OK" | "ERROR";
  res: {
    [key: string]: any;
  };
};

function* registerUserProcess() {
  const userData: ISignup = yield select((state: EsoqueState) => state.signup);
  const data: UserFormatData = yield formatUserData(userData);

  // step 1: register user
  const result: ResponseCall = yield call(createUser, data);
  if (result.status === "OK") {
    // step 2: register a business for this user (step1)
    const owner = result.res.id;
    const businessData: BusinessData = yield formatBusinessData(
      userData,
      owner
    );
    const resultBusiness: string = yield call(registerBusiness, businessData);
    console.log(resultBusiness, "business is register!");
    yield put(signupActions.setStep({ step: 10 }));
  } else {
    console.log(result.res.error, "no ok register user");
  }
}

export function* signupSaga() {
  yield takeLatest(signupActions.startCheckEmail.type, checkEmailProcess);
  yield takeLatest(signupActions.checkEmailCode.type, verifyEmailCodeProcess);
  yield takeLatest(signupActions.startCheckPhone.type, checkPhoneProcess);
  yield takeLatest(
    signupActions.startVerifyPhoneCode.type,
    verifyPhoneCodeProcess
  );
  yield takeLatest(signupActions.startSetBusiness.type, saveBusinessProcess);
  yield takeLatest(signupActions.registerUser.type, registerUserProcess);
}
