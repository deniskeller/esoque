import { IUpdateUserDetials, IUserDetailsData } from "@store/app/userDetails/types";

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

    .post(`${API_URL}/api/firm?save=false`, data)
    .then((res) => {
      return { error: false };
    })
    .catch((err) => {
      console.log(err?.response?.data, "err addNewUser");
      const { fields } = err?.response?.data;
      return { error: true, fields };
    });
};

// export const changeStatusUser = (data: { id: string; status: string }) => {
//   return axiosWithCredentials
//     .put(`${API_URL}/api/firm/change-status`, data)
//     .then((res) => {
//       console.log(res, "res changeStatusUser");
//       if (res.status === 200) {
//         return true;
//       }

//       return false;
//     })
//     .catch((err) => {
//       console.log(err, "err changeStatusUser");
//     });
// };

export const deleteUser = (id: string) => {
  return axiosWithCredentials
    .delete(`${API_URL}/api/firm/users/${id}`)
    .then((res) => {
      if (res.status === 204) {
        return true;
      } else {
        return false;
      }
    })
    .catch((err) => {
      console.log(err, "err deleteUser");
      return false;
    });
};

export const updateUserDetails = (data: IUpdateUserDetials) => {
  const { details, id } = data;

  return axiosWithCredentials
    .put(`${API_URL}/api/firm/${id}`, details)
    .then((res) => {
      console.log(res, "updateUserDetails");
    })
    .catch((err) => {
      console.log(err, "err updateUserDetails");
    });
};

export const checkUpdateUserDetails = (data: IUpdateUserDetials) => {
  const { details, id } = data;
  return axiosWithCredentials
    .put(`${API_URL}/api/firm/${id}?save=false`, details)
    .then((res) => {
      return { error: false };
    })
    .catch((err) => {
      console.log(err?.response?.data, "err checkUpdateUserDetails");
      const { fields } = err?.response?.data;
      return { error: true, fields };
    });
};

export const checkForUser = ({ id, cookie }: { id: string | string[]; cookie: string }) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/firm/users/${id}`, {
      headers: {
        cookie,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return false;
      }
      console.log(res.data);
      return true;
    })
    .catch((e) => {
      console.log(e, "error checkForUser");
      return false;
    });
};

export type IChangePrincipal = {
  principial: string;
  business: string;
};

export const changePrincipal = (data: IChangePrincipal) => {
  return axiosWithCredentials
    .put(`${API_URL}/api/business/change-principial`, data)
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log(err, "err changePrincipal");
      return false;
    });
};
