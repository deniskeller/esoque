import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { wrapper } from "@store/store";
import { Application } from "@layouts/index";
import { actions as userActions } from "@store/user/reducer";
import { END } from "redux-saga";

import { parseCookie } from "@utils/helpers";
import { checkToken } from "@api/login";

import type { AppInitialProps } from "next/app";
import { UserRoles } from "types/user";

import "../styles/globals.scss";
import "../i18next";

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    (store) =>
      async ({ Component, ctx }) => {
        const cookies = ctx.req ? ctx.req.headers.cookie : undefined;

        let userCookie = undefined;
        let isAuth;

        if (cookies) {
          userCookie = parseCookie(cookies, "access");
        }

        console.log(userCookie, "userCookie");

        if (userCookie) {
          const userData = await checkToken(cookies);

          console.log(userData, "userData");
          if (userData) {
            store.dispatch(userActions.setUserData({ userData }));
            store.dispatch(userActions.setUser({ isAuthenificated: true }));
            store.dispatch(userActions.setRole({ role: UserRoles.admin }));
          }

          isAuth = store.getState().user.isAuthenificated;
          // store.dispatch(END);
        }

        console.log(isAuth, "isAuth - _app.tsx");
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {}),
            appProp: ctx.pathname,
            isAuth,
          },
        };
      }
  );

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta name="keywords" content="Esoque" />
          <meta name="author" content="Esoque" />
          <meta name="description" content="Esoque" />
          <title>Esoque</title>
        </Head>

        <ApplicationWrapper>
          <Component {...pageProps} />
        </ApplicationWrapper>
      </>
    );
  }
}

type AppWrapProps = {
  children: JSX.Element;
};

const ApplicationWrapper: React.FC<AppWrapProps> = ({ children }) => {
  const router = useRouter();

  const [isApp, setIsApp] = React.useState<boolean>(false);

  useEffect(() => {
    router.asPath.includes("/app") ? setIsApp(true) : setIsApp(false);
  }, [router.asPath]);

  return isApp ? <Application>{children}</Application> : <>{children}</>;
};

export default wrapper.withRedux(WrappedApp);
