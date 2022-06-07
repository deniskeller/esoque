import React from "react";

import { ALL_ICONS } from "@constants/icons";
import { BaseIcon } from "@base/index";

import { IncorporationData } from "types/tables";
import { useRouter } from "next/router";

import styles from "./IncorporationTable.module.scss";

type Props = {
  data: IncorporationData[];
};

type User = {
  data: IncorporationData;
};

const TableRow: React.FC<User> = ({ data }) => {
  return (
    <tr>
      <td>{data?.created_at}</td>
      <td>{data?.cn}</td>
      <td>{data?.js}</td>
      <td>
        <div>{data?.status}</div>
        {/* <div className={styles.btnOpen} onClick={openUserDetails.bind(null, data.id)}>
          <span>{">"}</span>
        </div> */}
      </td>
    </tr>
  );
};

const IncorporationTable: React.FC<Props> = ({ data }): JSX.Element => {
  const router = useRouter();

  // const openUserDetails = async (id: string) => {
  //   router.push(`/app/company_management/company_details/${id}`);
  // };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Jurisdiction</th>
            <th>Application status</th>
          </tr>
        </thead>
        <tbody>{Boolean(data.length) && data.map((user) => <TableRow key={user?.session_id} data={user} />)}</tbody>
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
export default IncorporationTable;
