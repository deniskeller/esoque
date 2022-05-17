import React from "react";
import UserDetail from "@view/app/userDetail/UserDetail";
import { SagaStore, wrapper } from "@store/store";
import { actions } from "@store/app/userDetails/reducer";
import { END } from "redux-saga";
import { parseCookie } from "@utils/helpers";

type Props = {};

const UsersDetailPage: React.FC<Props> = () => {
  return <UserDetail />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req.headers.cookie;
      const { isAuthenificated } = store.getState().user;

      const { id, firm } = etc.query;

      console.log(id, firm, "id=firm!!!!!");

      let userCookie = undefined;

      if (cookie) {
        userCookie = parseCookie(cookie, "access");
      }

      console.log(id, "id");

      if (cookie) {
        if (id) store.dispatch(actions.getUserDetails({ cookie, id, firm }));
      }

      store.dispatch(END);
      await (store as SagaStore).sagaTask?.toPromise();

      return {
        props: {
          isAuth: isAuthenificated,
        },
      };
    }
);

export default UsersDetailPage;
