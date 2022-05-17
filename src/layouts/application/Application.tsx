import React from "react";

import styles from "./Application.module.scss";
import AppSidebar from "components/sidebars/AppSidebar/AppSidebar";
import { AppHeader } from "@content/index";

const Application: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <AppSidebar />
      </div>
      <div className={styles.content}>
        <AppHeader />
        {children}
      </div>
    </div>
  );
};

export default Application;
