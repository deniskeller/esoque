export interface ISignup {
  errorProcess: boolean;
  step: number;
  email: {
    value: string;
    error: string;
  };
  emailCode: {
    value: string;
    error: string;
  };
  phone: {
    countryCode: string;
    phone: string;
    error: string;
  };
  phoneCode: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  pesonalData: {
    title: string;
    firstName: string;
    lastName: string;
    birthday: string;
  };
  personalAddress: {
    country: string;
    postcode: string;
    city: string;
    address: string;
    addressTwo: string;
  };
  bussiness: {
    country: string;
    legalName: string;
    registNumber: string;
    date: string;
    businessType: string;
    legalNameError: string;
    registNumberError: string;
  };
}

export type EmailVerify = {
  email: string;
};
export type SetEmail = {
  email: string;
  error: string;
};

export type CheckEmailCode = {
  code: string;
};
export type SetEmailCode = {
  code: string;
  error: string;
};

export type SetPassword = {
  password: string;
};

export type CheckVerifyPhoneCode = {
  value: string;
  phone: string;
};
export type SetPhoneCode = {
  value: string;
  error: string;
};
export type SetPersonalData = {
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
};

export type SetPesonalAddress = {
  country: string;
  postcode: string;
  city: string;
  address: string;
  addressTwo: string;
};

export type SetBusinessData = {
  country: string;
  legalName: string;
  registNumber: string;
  date: string;
  businessType: string;
  legalNameError: string;
  registNumberError: string;
};

export type CheckPhone = {
  countryCode: string;
  phone: string;
};
export type SetPhone = {
  countryCode: string;
  phone: string;
  error: string;
};

export type SetStep = {
  step: number;
};
export type ClearFields = {
  nameField: string;
  fieldValues: {
    [key: string]: string;
  };
};

export type ClearPhoneCode = {
  value: "";
  error: "";
};
export type ClearEmailCode = {
  value: "";
  error: "";
};
// phone: {
//     countryCode: "",
//     phone: "",
//     error: "",
//   },
//   phoneCode: {
//     value: "",
//     error: "",
//   },
