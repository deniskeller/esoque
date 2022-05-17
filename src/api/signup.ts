import axios from "axios";

import { API_URL, UserFormatData } from "@utils/helpers";

type CheckEmail = {
  email: string;
};
export const checkEmail = ({ email }: CheckEmail) => {
  return axios
    .get(`${API_URL}/api/users/check?email=${email}`)
    .then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return true;
    })
    .catch((err) => {
      console.log(err, "error checkEmail api");
      return false;
    });
};

type EmailSendCode = {
  email: string;
};
export const emailSendCode = ({ email }: EmailSendCode) => {
  return axios
    .get(`${API_URL}/api/email-send-code/${email}`)
    .then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return true;
    })
    .catch((err) => {
      console.log(err, "error emailSendCode api");
      return false;
    });
};

type VerifyEmailCode = {
  email: string;
  code: string;
};
export const verifyEmailCode = ({ email, code }: VerifyEmailCode) => {
  return axios
    .get(`${API_URL}/api/email-verify-code/${email}?code=${code}`)
    .then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return true;
    })
    .catch((err) => {
      console.log(err, "error verifyEmailCode api");
      return false;
    });
};

type PhoneData = {
  countryCode: string;
  phone: string;
};

export const checkPhone = ({ countryCode, phone }: PhoneData) => {
  return axios
    .get(`${API_URL}/api/users/check`, {
      params: {
        countryCode,
        phone,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        throw new Error();
      }
      return "";
    })
    .catch((err) => {
      console.log(err, "error verifyPhone api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};

export const verifyPhone = ({ countryCode, phone }: PhoneData) => {
  return axios
    .get(`${API_URL}/api/phone-send-code/${countryCode}${phone}`)
    .then((res) => {
      if (res.status !== 200) {
        return "";
      }
    })
    .catch((err) => {
      console.log(err, "error verifyPhone api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};

type VerifyPhoneCode = {
  value: string;
  phone: string;
};
export const verifyPhoneCode = ({ value, phone }: VerifyPhoneCode) => {
  return axios
    .get(`${API_URL}/api/phone-verify-code/${phone}?code=${value}`)
    .then((res) => {
      if (res.status !== 200) {
        return "";
      }
    })
    .catch((err) => {
      console.log(err, "error verifyPhoneCode api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};

export const createUser = (data: UserFormatData) => {
  return (
    axios
      // /registration
      .post(`${API_URL}/api/registration`, data)
      .then((res) => {
        if (res.status === 201) {
          console.log(res, "register ok");
          return {
            status: "OK",
            res: {
              id: res.data.id,
            },
          };
        }
      })
      .catch((err) => {
        console.log(err, "error verifyPhoneCode api");
        const { data } = err?.response;
        return {
          status: "ERROR",
          res: {
            error: data?.errorMessage || data?.message,
          },
        };
      })
  );
};

type CheckBusiness = {
  name?: string;
  registrationNumber?: string;
};

export const checkBusiness = ({ name, registrationNumber }: CheckBusiness) => {
  return axios
    .get(`${API_URL}/api/business/check`, {
      params: { name, registrationNumber },
    })
    .then((res) => {
      if (res.status === 200) {
        return "";
      }
    })
    .catch((err) => {
      console.log(err, "error verifyPhoneCode api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};

export type BusinessData = {
  country: string;
  name: string;
  registrationNumber: string;
  importationDate: string;
  type: string;
  owner: string;
};

export const registerBusiness = (businessData: BusinessData) => {
  return axios
    .post(`${API_URL}/api/business`, businessData)
    .then((res) => {
      if (res.status < 300) {
        console.log(res, "register business ok");
        return "";
      }
    })
    .catch((err) => {
      console.log(err, "error verifyPhoneCode api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};
