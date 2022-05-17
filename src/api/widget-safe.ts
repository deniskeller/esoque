import { API_URL } from "@utils/helpers";
import axios from "axios";

// Запрос на получение информации по CompanyName
// https://store.esoque.com/vendor/sic/widget/sic-custom.php?jc=40&cn=Diamonddd&aff=0&callback=jQuery33101339959402234201_1644391573559&r=&_=1644391573561

const getUrl = "https://store.esoque.com/vendor/sic/widget/sic-custom.php";

type Data = {
  jc?: string;
  cn?: string;
  js?: string;
  ml?: number;
  _?: number;
  aff?: number;
  session_id: string;
};
export const getJCInfo = ({ jc, cn, js, ml, _, aff, session_id }: Data) => {
  return axios
    .get(`${getUrl}`, {
      params: {
        jc,
        cn,
        js,
        ml,
        aff,
        _,
        session_id,
      },
    })
    .then((res) => {
      if (res.status !== 200) {
        console.log("Ошибка запоса getJCInfo");
        return "";
      }
      const data = res.data.substring(1, res.data.length - 2);
      const parseData = JSON.parse(data);
      return parseData;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch GetJCInfo");
      return "";
    });
};

export const checkIncorporate = (data: Data) => {
  return axios
    .post(`${API_URL}/api/dox365/incorporate`, data)
    .then((res) => {
      if (res.status !== 201) {
        console.log("Ошибка запоса getJCInfo");
        return "";
      }
      return true;
    })
    .catch((err) => {
      console.log(err, "Ошибка catch GetJCInfo");
      return "";
    });
};
