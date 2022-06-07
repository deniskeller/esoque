import { IBusiness, ISendBusiness } from "@store/app/companyDetails/types";
import { axiosWithCredentials } from "@utils/api";
import { API_URL } from "@utils/helpers";

export const getExistingCompanyList = () => {
  return axiosWithCredentials
    .get(`${API_URL}/api/business/my`, {
      params: {
        withPrincipial: true,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return [];
      }
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "err getCurrentPrincipal");
      return [];
    });
};

export const getIncorporationCompanyList = () => {
  return axiosWithCredentials
    .get(`${API_URL}/api/business/my/incorporation`, {
      params: {
        withPrincipial: true,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return [];
      }
      console.log(res?.data, "0----");
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "err getIncorporationCompanyList");
      return [];
    });
};

type IGetBusiness = {
  id: string | string[];
  cookie: string;
};

export const getBusiness = ({ id, cookie }: IGetBusiness) => {
  return axiosWithCredentials
    .get(`${API_URL}/api/business/${id}`, {
      headers: {
        cookie,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        return {};
      }
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "err getBusiness");
      return {};
    });
};

type ICreateBusiness = {
  business: IBusiness;
  isSave?: boolean;
};

export const createBusiness = ({ business, isSave }: ICreateBusiness) => {
  // Create new business

  return axiosWithCredentials
    .post(`${API_URL}/api/business`, business, {
      params: {
        save: isSave,
      },
    })
    .then((res) => {
      return { error: false };
    })
    .catch((err) => {
      const { fields } = err?.response?.data;
      return { error: true, fields };
    });
};

type IUpdateBusiness = {
  business: IBusiness;
  id: string;
  isSave?: boolean;
};

export const updateBusiness = ({ business, id, isSave }: IUpdateBusiness) => {
  // Create new business
  return axiosWithCredentials
    .put(`${API_URL}/api/business/${id}`, business, {
      params: {
        save: isSave,
      },
    })
    .then((res) => {
      return { error: false };
    })
    .catch((err) => {
      const { fields } = err?.response?.data;
      return { error: true, fields };
    });
};
