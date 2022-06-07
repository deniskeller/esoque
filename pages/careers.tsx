import React from 'react';

import { Landing } from '@layouts/index';
import { Careers } from '@view/index';
import {wrapper} from "@store/store";
import {parseCookie} from "@utils/helpers";
import {getVacanciesList} from "@api/app/careers/careersUser";
import {IVacancy} from "@type/careers";


interface Props{
  vacanciesList : IVacancy[],
  lang: string,
  isAuth: any
}

const CareersPage: React.FC<Props> = ({vacanciesList}) => {
  console.log("CareersPage props vacanciesList!", vacanciesList);
  return(<Landing>
    <Careers vacanciesList={vacanciesList}/>
  </Landing>)
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req.headers.cookie;
      const lang = (await parseCookie(cookie, "i18next")) || "en";
      const vacanciesList = (await getVacanciesList()) || {};
      const { isAuthenificated } = store.getState().user;
      console.log(isAuthenificated, "isAuth Careers Page");

      return {
        props: {
          vacanciesList,
          lang,
          isAuth: isAuthenificated,
        },
      };
    }
);

export default CareersPage;
