import Docs from "@layouts/docs/Docs";
import React from "react";

import TermsConditions from "@view/landing/docs/TermsConditions/TermsConditions";

const TermsPage: React.FC = (): JSX.Element => {
  return (
    <Docs>
      <TermsConditions />
    </Docs>
  );
};
export default TermsPage;
