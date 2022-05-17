import React, { useMemo } from "react";
import { TinaCMS, TinaProvider } from "tinacms";

import { TinaPageWrapper } from "@tina/TinaPageWrapper";
import { MDMediaStore } from "@tina/media/tinaMedia";
import { Landing } from "@layouts/index";
import { wrapper } from "@store/store";
import { ESOQUE_BLOCKS } from "@tina/configSections";

import { parseCookie } from "@utils/helpers";
import { getContent } from "@api/content";

import { IPageData } from "@tina/defaultTemplate/types";

// Default template in case you need to restore the original look
// import { esoqueData } from "@tina/defaultTemplate";

interface Props {
  page: string;
  lang: string;
  pageData: IPageData;
  isAuth: boolean;
}

const EsoquePage: React.FC<Props> = ({ page, pageData, lang, isAuth }) => {
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
          blockSchema={ESOQUE_BLOCKS}
          data={pageData}
        />
      </Landing>
    </TinaProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const page = "EsoquePage";
      const cookie = req.headers.cookie;
      const lang = (await parseCookie(cookie, "i18next")) || "en";
      const pageData = (await getContent({ page, lang })) || {};
      const { isAuthenificated } = store.getState().user;
      console.log(isAuthenificated, "isAuth  - Esoque page");

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

export default EsoquePage;
