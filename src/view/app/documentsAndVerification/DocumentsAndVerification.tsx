import React from "react";

import { TitleLine, WidgetDarksideApp } from "@content/index";

import styles from "./DocumentsAndVerification.module.scss";

const DocumentsAndVerification = () => {
  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text={"Corporate documents and verification"} className={styles.rowTitle} />
      <WidgetDarksideApp />
    </div>
  );
};

export default DocumentsAndVerification;
