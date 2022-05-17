import axios from "axios";
import { API_URL } from "@utils/helpers";

// Company

type CompanySearch = {
  name: string;
  jurisdiction_ident: string;
};

export const companySearch = ({ name, jurisdiction_ident }: CompanySearch) => {
  return axios
    .post(`${API_URL}/api/dox365/company/search`, null, {
      params: { name, jurisdiction_ident },
    })
    .then((res) => {
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch GetJCInfo");
      return "";
    });
};

// Jurisdiction

export const getJurisdictionList = () => {
  return axios
    .get(`${API_URL}/api/dox365/jurisdiction/list`)
    .then((res) => {
      if (res.status >= 300) {
        console.log("Ошибка запоса Copycert");
        return [{ title: "No data", value: "" }];
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch Copycert");
      return [{ title: "No data", value: "" }];
    });
};

// PriceList

// /pricelist/copycert

type PriceList = {
  listName: "copycert" | "signcert" | "corpdoc";
  jurisdiction_ident?: string;
};

export const getPriceList = ({ listName, jurisdiction_ident }: PriceList) => {
  let url = `${API_URL}/api/dox365/pricelist/${listName}`;
  if (jurisdiction_ident) {
    url += `/${jurisdiction_ident}`;
  }
  return axios
    .get(url)
    .then((res) => {
      if (res.status !== 200) {
        console.log("Ошибка запоса getPriceList");
        return [];
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch getPriceList");
      return [];
    });
};

//  CheckIn

type Corpdoc = {
  data: {
    Contact: {
      name: string;
      email: string;
      phone: string;
      comment: string;
    };
    Company: {
      name?: string;
      jurisdiction?: string;
    };
    OrderList?: {
      pricelist_id: string;
      type: string;
      ItemList: {
        id: string;
        quantity: string;
      }[];
    };
  };
};

export const checkInCorpdoc = ({ data }: Corpdoc) => {
  return axios
    .post(`${API_URL}/api/dox365/checkin/corpdoc`, data, {
      params: {},
    })
    .then((res) => {
      if (res.status >= 300) {
        console.log("Ошибка запоса Corpdoc");
        return "";
      }
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch Corpdoc");
      return "";
    });
};

type Copycert = {
  data: {
    Contact: {
      name: string;
      email: string;
      phone: string;
      delivery_address: string;
      comment: string;
    };
    OrderList: {
      pricelist_id: string;
      type: string;
      ItemList: {
        id: string;
        quantity: string;
      }[];
    };
  };
};

export const checkInCopycert = ({ data }: Copycert) => {
  return axios
    .post(`${API_URL}/api/dox365/checkin/copycert`, data, {
      params: {},
    })
    .then((res) => {
      if (res.status >= 300) {
        console.log("Ошибка запоса Copycert");
        return "";
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch Copycert");
      return "";
    });
};

type Signcert = {
  data: {
    Contact: {
      name: string;
      email: string;
      phone: string;
      delivery_address: string;
      comment: string;
    };
    OrderList: {
      pricelist_id: string;
      type: string;
      ItemList: {
        id: string;
        quantity: string;
      }[];
    };
  };
};

export const checkInSigncert = ({ data }: Signcert) => {
  return axios
    .post(`${API_URL}/api/dox365/checkin/signcert`, data, {
      params: {},
    })
    .then((res) => {
      if (res.status >= 300) {
        console.log("Ошибка запоса signcert");
        return "";
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch signcert");
      return "";
    });
};
