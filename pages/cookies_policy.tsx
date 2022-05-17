import CookiesPolicy from "@view/landing/docs/CookiesPolicy/CookiesPolicy";
import Docs from "@layouts/docs/Docs";
import React from "react";

const CookiesPage: React.FC = (): JSX.Element => {
  return (
    <Docs>
      <CookiesPolicy />
    </Docs>
  );
};
export default CookiesPage;
