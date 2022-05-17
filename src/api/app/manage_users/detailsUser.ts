import { IUserDetailsData } from "@store/app/userDetails/types";
import { axiosWithCredentials } from "@utils/api";
import { API_URL } from "@utils/helpers";

type UserData = {
  id: string | string[];
  cookie: string;
};

export const getUserDetails = ({ id, cookie }: UserData) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/firm/users/${id}`, {
      headers: {
        cookie,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return {};
      }
      console.log(res.data, "res.data");
      return res.data;
    })
    .catch((e) => {
      console.log(e, "error getUserDetails");
      return {};
    });
};

export const addNewUser = (data: IUserDetailsData) => {
  return axiosWithCredentials
    .post(`${API_URL}/api/firm`, data)
    .then((res) => {
      console.log(res, "res123");
    })
    .catch((err) => {
      console.log(err, "err addNewUser");
    });
};

export const checkValidNewUser = (data: IUserDetailsData) => {
  return axiosWithCredentials
    .post(`${API_URL}/api/firm?save`, data)
    .then((res) => {
      console.log(res, "res123");
    })
    .catch((err) => {
      console.log(err, "err addNewUser");
    });
};
