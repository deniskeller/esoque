import React from "react";
import styles from "./Landing.module.scss";

import { LandingNavbar } from "@nav/index";
import { Footer } from "components/footer";

const Landing: React.FC = ({ children }) => {
  return (
    <div className={styles.content}>
      <LandingNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Landing;
