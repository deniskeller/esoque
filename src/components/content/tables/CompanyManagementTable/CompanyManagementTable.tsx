import React from "react";

import { ALL_ICONS } from "@constants/icons";
import { BaseIcon } from "@base/index";

import { BussinessData, UserData } from "types/tables";
import { useRouter } from "next/router";

import styles from "./CompanyManagementTable.module.scss";

type Props = {
  data: BussinessData[];
};

type User = {
  data: BussinessData;
  openUserDetails: (id: string) => void;
};

const TableRow: React.FC<User> = ({ data, openUserDetails }) => {
  return (
    <tr>
      <td>{data?.name}</td>
      <td>{data?.type}</td>
      <td>{data?.registrationNumber}</td>
      <td>
        <div>{data?.principial?.email}</div>
        <div className={styles.btnOpen} onClick={openUserDetails.bind(null, data.id)}>
          <span>{">"}</span>
        </div>
      </td>
    </tr>
  );
};

const CompanyManagementTable: React.FC<Props> = ({ data }): JSX.Element => {
  const router = useRouter();

  const openUserDetails = (id: string) => {
    router.push(`/app/company_management/company_details/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Legal name</th>
            <th>Business Type</th>
            <th>Reg. number</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {Boolean(data.length) &&
            data.map((user) => <TableRow key={user?.id} data={user} openUserDetails={openUserDetails} />)}
        </tbody>
      </table>

      {!Boolean(data.length) && (
        <div className={styles.empty}>
          <div className={styles.epmtyIcon}>
            <BaseIcon icon={ALL_ICONS.EMPTY_SEARCH} viewBox="0 0 59 59" />
          </div>
          <span>Nothing was found</span>
        </div>
      )}
    </div>
  );
};
export default CompanyManagementTable;
