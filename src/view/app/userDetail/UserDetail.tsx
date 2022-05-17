import React from "react";

import { TitleLine, UserDetailsForm } from "@content/index";

import styles from "./UserDetail.module.scss";

type Props = {};

const UserDetail: React.FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text="Manage Firm Users" className={styles.rowTitle} />
      <UserDetailsForm />
    </div>
  );
};
export default UserDetail;
