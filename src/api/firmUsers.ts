import axios from "axios";
import { axiosWithCredentials } from "@utils/api";
import { API_URL } from "@utils/helpers";

export const getFirmUsers = () => {
  return axios.get(`${API_URL}/api/firm/users`, {
    params: {},
  });
};

type GetFirmUserList = {
  business: string;
  status?: boolean;
  page?: number;
  limit?: number;
  field?: string;
  order?: string;
};
export const getFirmUsersList = (params: GetFirmUserList) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/firm/users-list`, {
      params,
    })
    .then((res) => {
      if (res.status !== 200) {
        return [];
      }

      return res.data;
    })
    .catch((e) => {
      console.log(e, "getFirmUsersList");
      return [];
    });
};

export const getFirmsOptions = ({ cookie }: { cookie?: any }) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/business/my`, {
      headers: { cookie: cookie },
    })
    .then((res) => {
      if (res.status !== 200) {
        return false;
      }
      return res.data.options;
    })
    .catch((e) => {
      console.log(e);
      return [{ title: "No data", value: "No data" }];
    });
};

export const getCurrentPrincipal = ({ id }: { id: string }) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/business/${id}`, {
      params: {
        withPrincipial: true,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return {};
      }
      console.log(res?.data?.principial, ":A:A::A:A:A:");
      return res?.data?.principial;
    })
    .catch((err) => {
      console.log(err, "err getCurrentPrincipal");
      return {};
    });
};
