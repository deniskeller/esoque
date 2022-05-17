import React from "react";

import { Empty } from "@layouts/index";
import { CheckEmail, Reset } from "@view/index";

const ResetPage: React.FC = () => {
  const [success, setSuccess] = React.useState(false);
  return (
    <Empty>
      {success ? <CheckEmail /> : <Reset changeSuccess={setSuccess} />}
    </Empty>
  );
};

export default ResetPage;
