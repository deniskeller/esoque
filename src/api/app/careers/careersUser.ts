import {axiosWithCredentials} from "@utils/api";
import {API_URL} from "@utils/helpers";
import axios from "axios";
import {IApplyVacancy} from "@type/careers";

export const getVacanciesList = () => {
  return axios
    .get(`${API_URL}/api/vacancies/list`)
    .then((res) => {
      if (res.status !== 200) {
        return [];
      }
      console.log("res getVacanciesList", res);
      return res?.data;
    })
    .catch((err) => {
      console.log(err, "err getVacanciesList");
      return [];
    });
};

export const sendResponseVacancy = (data: IApplyVacancy) => {
  let formData = new FormData();

  console.log("data formdata",data);

  Object.entries(data).forEach((el) => {
    if (el[0] !== "attachment") if (el[1]) formData.append(el[0], el[1].toString());
  });
  if (data?.attachment && data.attachment.length > 0) {
    console.log("data.attachment.length > 0");
    formData.append("attachment",  data.attachment[0]);
  }

  return axios
    .post(`${API_URL}/api/vacancies/responses`, formData, {
      headers: { "Content-Type": "form/multipart" },
    })
    .then((res) => {
      if (res.status === 201) {
        return true;
      }
    })
    .catch((e) => {
      console.log(e, "error from sendResponseVacancy");
      return false;
    });
};