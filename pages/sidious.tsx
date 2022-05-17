import React, { useMemo } from "react";
import { TinaCMS, TinaProvider } from "tinacms";

import { TinaPageWrapper } from "@tina/TinaPageWrapper";
import { MDMediaStore } from "@tina/media/tinaMedia";
import { Landing } from "@layouts/index";
import { wrapper } from "@store/store";
import { SIDIOUS_BLOCKS } from "@tina/configSections";

import { actions as userActions } from "@store/user/reducer";

import { parseCookie } from "@utils/helpers";
import { getContent } from "@api/content";

import { IPageData } from "@tina/defaultTemplate/types";
import { checkToken } from "@api/login";
import { END } from "redux-saga";

// Default template in case you need to restore the original look
// import { sidiousData } from "@tina/defaultTemplate";

interface Props {
  page: string;
  lang: string;
  pageData: IPageData;
  isAuth: boolean;
}

const SidiousPage: React.FC<Props> = ({ page, pageData, lang, isAuth }) => {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: isAuth,
      sidebar: {
        position: "overlay",
      },
      media: new MDMediaStore({ page, lang }),
    });
  }, [page, lang, isAuth]);

  return (
    <TinaProvider cms={cms}>
      <Landing>
        <TinaPageWrapper
          page={page}
          lang={lang}
          blockSchema={SIDIOUS_BLOCKS}
          data={pageData}
        />
      </Landing>
    </TinaProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const cookie = req ? req.headers.cookie : undefined;

      const { isAuthenificated } = store.getState().user;

      const page = "SidiousPage";
      const lang = (await parseCookie(cookie, "i18next")) || "en";
      const pageData = (await getContent({ page, lang })) || {};

      const userData = await checkToken(cookie);

      if (userData) {
        store.dispatch(userActions.setUserData({ userData }));
      }

      store.dispatch(END);

      console.log(isAuthenificated, "isAuth  - Sidious page");

      return {
        props: {
          pageData,
          page,
          lang,
          isAuth: isAuthenificated,
        },
      };
    }
);

export default SidiousPage;
