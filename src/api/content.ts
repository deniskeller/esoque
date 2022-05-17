import axios from "axios";

import { API_URL } from "@utils/helpers";

interface setContentProps {
  page: string;
  lang: string;
  content: {
    blocks: { [key: string]: string | { [key: string]: string }[] }[];
  };
}

export const setContent = ({ page, lang, content }: setContentProps) => {
  return axios
    .put(`${API_URL}/api/tina-cms/${page}_${lang}`, { ...content })
    .then((res) => {
      if (res?.status === 200) {
        return true;
      }
    })
    .catch((err) => {
      console.log(err, "setContent err");
    });
};

interface getContentProps {
  page: string;
  lang: string;
}

export const getContent = ({ page, lang }: getContentProps) => {
  return axios
    .get(`${API_URL}/api/tina-cms/${page}_${lang}`)
    .then((res) => {
      if (res.status !== 200) {
        console.log("Ошибка getContent");
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
