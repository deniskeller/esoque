import React from "react";

import { ALL_ICONS } from "@constants/icons";
import { BaseIcon } from "@base/index";

import { UserData } from "types/tables";
import { useRouter } from "next/router";

import styles from "./UserManagmentTable.module.scss";

type Props = {
  data: UserData[];
};

type User = {
  data: UserData;
  openUserDetails: (id: string) => void;
};

const TableRow: React.FC<User> = ({ data, openUserDetails }) => {
  return (
    <tr>
      <td>{data?.firstName || "-"}</td>
      <td>{data?.lastName || "-"}</td>
      <td>{data?.email || "-"}</td>
      <td>{data?.lastLogged || "-"}</td>
      <td>
        <div>{data?.status ? "Enabled" : "Disabled"}</div>

        <div className={styles.btnOpen} onClick={openUserDetails.bind(null, data.id)}>
          <span>{">"}</span>
        </div>
      </td>
    </tr>
  );
};

const UserManagmentTable: React.FC<Props> = ({ data }): JSX.Element => {
  const router = useRouter();

  const openUserDetails = async (id: string) => {
    router.push(`/app/manage_users/users_detail/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL ADDRESS</th>
            <th>LAST LOGGED IN</th>
            <th>FIRM STATUS</th>
          </tr>
        </thead>
        <tbody>
          {Boolean(data.length) &&
            data.map((user) => <TableRow key={user?.id} data={user} openUserDetails={openUserDetails} />)}
        </tbody>
      </table>

      {!Boolean(data.length) && (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>
            <BaseIcon icon={ALL_ICONS.TABLE_EMPTY_USERS} viewBox="0 0 242 85" />
          </div>
        </div>
      )}
    </div>
  );
};
export default UserManagmentTable;
