import React from "react";

import { Empty } from "@layouts/index";
import { ConfirmReset } from "@view/index";
import { wrapper } from "@store/store";

interface Props {
  token: string;
}

const ResetPage: React.FC<Props> = ({ token }) => (
  <Empty>
    <ConfirmReset token={token} />
  </Empty>
);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, ...etc }) => {
      const { token } = etc.query;

      if (token) {
        if (token?.length >= 36) {
          return {
            props: {
              token,
            },
          };
        }
      }

      return {
        redirect: {
          permanent: false,
          destination: "/",
        },
      };
    }
);

export default ResetPage;
