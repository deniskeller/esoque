import React from "react";

import Docs from "@layouts/docs/Docs";

import PrivacyPolicy from "@view/landing/docs/PrivacyPolicy/PrivacyPolicy";

const PrivacyPolicyPage: React.FC = (): JSX.Element => {
  return (
    <Docs>
      <PrivacyPolicy />
    </Docs>
  );
};
export default PrivacyPolicyPage;
