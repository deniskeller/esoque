import React from "react";

import { ALL_ICONS } from "@constants/icons";
import { BaseIcon } from "@base/index";
import Link from "next/link";

import styles from "./AppHeader.module.scss";

const AppHeader: React.FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/app">
          <>
            {" "}
            <BaseIcon icon={ALL_ICONS.LOGO_BLACK} viewBox="0 0 238 47" />
          </>
        </Link>
      </div>
      <div className={styles.controls}>
        <div className={styles.controlsItem}>
          <div className={styles.controlsItemIcon}>
            <BaseIcon icon={ALL_ICONS.SEARCH} viewBox="0 0 37 37" />
          </div>
          <span>Search</span>
        </div>

        <div className={styles.controlsItem}>
          <div className={styles.controlsItemIcon}>
            <img src="/images/app/bell.png" />
          </div>
          <span>Alerts</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
