import axios from "axios";

import { API_URL } from "@utils/helpers";

type TFeedbackCompany = {
  name: string;
  companyName?: string | number;
  phone: string;
  email: string;
  description?: string;
  files?: File[];
};

export const feedbackCompany = (data: TFeedbackCompany) => {
  console.log(data, "data");

  let formData = new FormData();

  Object.entries(data).forEach((el) => {
    if (el[0] !== "files") if (el[1]) formData.append(el[0], el[1].toString());
  });

  if (data?.files?.length) {
    data.files.forEach((file: File) => {
      formData.append("files", file);
    });
  }

  return axios
    .post(`${API_URL}/api/feedback/company`, formData, {
      headers: { "Content-Type": "form/multipart" },
    })
    .then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    .catch((e) => {
      console.log(e, "error from feedbackCompany");
      return false;
    });
};

type TFeedbackFull = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comment?: string;
  files?: File[];
};

export const feedbackFull = (data: TFeedbackFull) => {
  let formData = new FormData();

  Object.entries(data).forEach((el) => {
    if (el[1]) formData.append(el[0], el[1].toString());
  });

  if (data?.files?.length) {
    formData.append("files", JSON.stringify(data?.files));
  }
  return axios
    .post(`${API_URL}/api/feedback/company`, formData, {
      headers: { "Content-Type": "form/multipart" },
    })
    .then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    .catch((e) => {
      console.log(e, "error from feedbackCompany");
      return false;
    });
};

export const feedbackSubscribe = (email: string) => {
  return axios
    .get(`${API_URL}/api/feedback/subscribe`, {
      params: {
        email,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        return true;
      }
    })
    .catch((e) => {
      console.log(e, "error feedbackSubscribe");
      return false;
    });
};
