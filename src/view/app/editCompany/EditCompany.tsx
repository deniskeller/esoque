import React from "react";

import { EsoqueState } from "@store/store";
import { useSelector } from "react-redux";

import { CompanyDetailsForm, TitleLine } from "@content/index";

import styles from "./EditCompany.module.scss";

const EditCompany = () => {
  const { id } = useSelector((state: EsoqueState) => state.companyDetails.business);

  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text={id ? "Company Details" : "Add New Company"} className={styles.rowTitle} />
      <CompanyDetailsForm />
    </div>
  );
};

export default EditCompany;
