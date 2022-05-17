import React, { useMemo } from "react";
import { TinaCMS, TinaProvider } from "tinacms";

import { HOME_BLOCKS } from "@tina/configSections";
import { TinaPageWrapper } from "@tina/TinaPageWrapper";
import { MDMediaStore } from "@tina/media/tinaMedia";
import { wrapper } from "@store/store";
import { Landing } from "@layouts/index";

import { parseCookie } from "@utils/helpers";
import { getContent } from "@api/content";

import { IPageData } from "@tina/defaultTemplate/types";

import styles from "@view/landing/home/Home.module.scss";

// Default template in case you need to restore the original look
// import { homeData } from "@tina/defaultTemplate";

interface Props {
  page: string;
  lang: string;
  pageData: IPageData;
  isAuth: boolean;
}

const HomePage: React.FC<Props> = ({ page, pageData, lang, isAuth }) => {
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
        <div className={styles.HomePage}>
          <TinaPageWrapper
            page={page}
            lang={lang}
            blockSchema={HOME_BLOCKS}
            data={pageData}
          />
        </div>
      </Landing>
    </TinaProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const page = "HomePage";
      const cookie = req.headers.cookie;
      const lang = (await parseCookie(cookie, "i18next")) || "en";
      const pageData = (await getContent({ page, lang })) || {};
      const { isAuthenificated } = store.getState().user;
      console.log(isAuthenificated, "isAuth  - home page");

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

export default HomePage;
