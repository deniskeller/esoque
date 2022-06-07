import React from "react";

import { ReassingPrincipalUser } from "@view/index";
import { SagaStore, wrapper } from "@store/store";
import { parseCookie } from "@utils/helpers";
import { actions } from "@store/app/userDetails/reducer";
import { END } from "redux-saga";

const ReassignPrincipalUserPage: React.FC = (): JSX.Element => {
  return <ReassingPrincipalUser />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req.headers.cookie;

      const { isAuthenificated } = store.getState().user;

      const { firm } = etc.query;

      console.log(firm);

      // let userCookie = undefined;

      // if (cookie) {
      //   userCookie = parseCookie(cookie, "access");
      // }

      if (cookie && firm?.length === 36) {
        store.dispatch(actions.getFirmData({ cookie, firm }));
      } else {
        return {
          redirect: {
            permanent: false,
            destination: "/app/manage_users",
          },
        };
      }

      store.dispatch(END);
      await (store as SagaStore).sagaTask?.toPromise();

      return {
        props: {},
      };
    }
);

export default ReassignPrincipalUserPage;
