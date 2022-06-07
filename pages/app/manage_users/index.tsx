import React from "react";

import { ManageFirmUsers } from "@view/index";
import { wrapper } from "@store/store";

const ManageUsersPage: React.FC = (): JSX.Element => {
  return <ManageFirmUsers />;
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res, ...etc }) => {
  const { isAuthenificated } = store.getState().user;

  if (!isAuthenificated) {
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
});

export default ManageUsersPage;
