import React from "react";

import { EditCompany } from "@view/index";
import { wrapper } from "@store/store";
import { parseCookie } from "@utils/helpers";
import { getBusiness } from "@api/app/company_managment/companyManagment";
import { actions } from "@store/app/companyDetails/reducer";

const EditCompanyPage = () => {
  return <EditCompany />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...etc }) => {
  const cookie = req.headers.cookie;
  const { isAuthenificated } = store.getState().user;

  if (!isAuthenificated) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  const { id } = etc.query;

  let userCookie = undefined;

  if (cookie) {
    userCookie = parseCookie(cookie, "access");
  }

  if (cookie) {
    if (id?.length === 36) {
      const business = await getBusiness({ id, cookie });
      console.log(business, "business12");
      if (business?.id) store.dispatch(actions.setBusiness({ business }));
    }
  }

  return { props: {} };
});

export default EditCompanyPage;
