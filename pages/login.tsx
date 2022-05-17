import React, { useEffect } from "react";

import { Empty } from "@layouts/index";
import { Login } from "@view/index";
import { useDispatch, useSelector } from "react-redux";
import { EsoqueState, wrapper } from "@store/store";
import { actions as actionsLogin } from "@store/login/reducer";
import { useRouter } from "next/router";

interface Props {}

const LoginPage: React.FC<Props> = () => {
  const { error, isSuccess } = useSelector((state: EsoqueState) => state.login);
  const dispatch = useDispatch();
  const router = useRouter();

  const loginUser = (data: { email: string; password: string }) => {
    dispatch(actionsLogin.startLogin(data));
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [router, isSuccess]);

  return (
    <Empty>
      <Login error={error} loginUser={loginUser} />
    </Empty>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const { isAuthenificated } = store.getState().user;
      console.log(isAuthenificated, "isAuth");

      if (isAuthenificated) {
        return {
          redirect: {
            permanent: false,
            destination: "/",
          },
        };
      }

      return {
        props: {},
      };
    }
);

export default LoginPage;
