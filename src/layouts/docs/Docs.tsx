import React from "react";

import { Footer } from "components/footer";
import { LandingNavbar } from "@nav/index";

import styles from "./Docs.module.scss";
import Breadcrumbs from "@content/other/breadcrumbs/landingBreadcrumbs/Breadcrumbs";
import SidebarDocs from "components/sidebars/SidebarDocs/SidebarDocs";

const Docs: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapperPage}>
      <div className={styles.imgContainer}>
        <div className={styles.blur} />
        <LandingNavbar />

        <div className={styles.wrapperContent}>
          <div className={styles.sidebar}>
            <SidebarDocs />
          </div>

          <div className={styles.content}>
            <span className={styles.Breadcrumbs}>
              <Breadcrumbs roorHref="/" rootPathName="Home" />
            </span>

            {children}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Docs;
