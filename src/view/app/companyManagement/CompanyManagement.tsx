import React from "react";

import useModal from "@hooks/useModal";

import { BaseButton } from "@base/index";
import { AddNewCompanyModal, CompanyManagementTable, IncorporationTable, TitleLine } from "@content/index";
import { getExistingCompanyList, getIncorporationCompanyList } from "@api/app/company_managment/companyManagment";
import { BussinessData, IncorporationData } from "@type/tables";

import styles from "./CompanyManagement.module.scss";

export type IOptions = { title: string; value: string };

const options = [
  { title: "Existing Company", value: "existing" },
  { title: "Setup a New Company", value: "setup" },
];

const CompanyManagement: React.FC = () => {
  const { isShowing, toggle } = useModal();

  const [existingCompanyList, setExistingCompanyList] = React.useState<BussinessData[]>([]);
  const [incorporationRequestsList, setIncorporationRequests] = React.useState<IncorporationData[]>([]);

  React.useEffect(() => {
    (async () => {
      const existingCompanyData = await getExistingCompanyList();
      const incorporationCompanyData = await getIncorporationCompanyList();

      if (existingCompanyData?.data?.length) setExistingCompanyList(existingCompanyData.data);
      if (incorporationCompanyData?.length) setIncorporationRequests(incorporationCompanyData);
    })();

    return () => {
      setExistingCompanyList([]);
      setIncorporationRequests([]);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text="Company Management" className={styles.titlePage} />
      <TitleLine type="yellow" text="Existing Company" className={styles.titleTable} />
      <BaseButton type="default" className={styles.btn} onClick={toggle}>
        Add New Company
      </BaseButton>
      <CompanyManagementTable data={existingCompanyList} />
      <TitleLine type="yellow" text="Incorporation requests" className={styles.titleTable} />
      <BaseButton type="default" className={styles.btn} onClick={toggle}>
        Setup a New Company
      </BaseButton>
      <IncorporationTable data={incorporationRequestsList} />
      <AddNewCompanyModal isShowing={isShowing} hide={toggle} options={options} />
    </div>
  );
};

export default CompanyManagement;
