import axios from "axios";

import { API_URL, DEV } from "@utils/helpers";
import { axiosWithCredentials } from "@utils/api";

type LoginData = {
  email: string;
  password: string;
};

export const loginUser = (loginData: LoginData) => {
  return axiosWithCredentials
    .post(`${API_URL}/api/auth/login`, loginData)
    .then((res) => {
      if (res.status === 201) {
        console.log(res, "login ok");

        if (DEV) {
          document.cookie = `access=${res?.data?.access_token}`;

          return "";
        }

        return "";
      }
    })
    .catch((err) => {
      if (!err?.response) {
        return "Network error";
      }
      console.log(err, "error loginUser api");
      const { data } = err?.response;
      return data?.errorMessage || data?.message;
    });
};

export const checkToken = (cookies: any) => {
  console.log(cookies, "cookie checkToken api");
  return axios
    .get(`${API_URL}/api/me`, {
      headers: {
        cookie: `${cookies}`,
      },
    })
    .then((res) => {
      if (res.status > 304) {
        return false;
      }
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "error checkToken");
      return false;
    });
};

export const logout = () => {
  if (DEV) {
    document.cookie = `access=`;
    return true;
  }

  console.log(document?.cookie, "doc.cookie");
  return axios
    .get(`${API_URL}/api/auth/logout`)
    .then((res) => {
      if (res.status > 201) {
        return false;
      }
      return true;
    })
    .catch((err) => {
      console.log(err, "error logout");
      return false;
    });
};

type ResetPassword = {
  email: string;
};

export const resetPassword = ({ email }: ResetPassword) => {
  return axios
    .get(`${API_URL}/api/reset-password/${email}`)
    .then((res) => {
      if (res.status === 200) {
        console.log(res?.data?.message, "res?.data?.message");
        return { status: "OK", message: res?.data?.messages };
      }
    })
    .catch((err) => {
      console.log(err, "error resetPassword");
      return {
        status: err?.response?.data?.status,
        message: err?.response?.data?.message,
      };
    });
};

type NewPassword = {
  uid: string;
  password: string;
  confirmPassword: string;
};

export const newPassword = ({
  uid,
  password,
  confirmPassword,
}: NewPassword) => {
  return axios
    .post(`${API_URL}/api/set-new-password`, {
      uid,
      password,
      confirmPassword,
    })
    .then((res) => {
      if (res.status === 201) {
        console.log(res?.data?.message, "res?.data?.message");
        return { status: "OK", message: res?.data?.messages };
      }
    })
    .catch((err) => {
      console.log(err, "error resetPassword");
      return {
        status: err?.response?.data?.status,
        message: err?.response?.data?.message,
      };
    });
};
