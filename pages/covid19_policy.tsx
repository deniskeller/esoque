import CookiesPolicy from "@view/landing/docs/CookiesPolicy/CookiesPolicy";
import React from "react";

import Docs from "@layouts/docs/Docs";

import CovidPolicy from "@view/landing/docs/CovidPolicy/CovidPolicy";

const CovidPage: React.FC = (): JSX.Element => {
  return (
    <Docs>
      <CovidPolicy />
    </Docs>
  );
};
export default CovidPage;
