import React, { Dispatch, SetStateAction } from "react";

import { ALL_ICONS } from "@constants/icons";
import { BaseIcon, BaseRadioButton } from "@base/index";

import { UserData } from "types/tables";

import styles from "./ReassignPrincipalUserTable.module.scss";

type SelectedUser = {
  id: string;
  email: string;
};

type Props = {
  data: UserData[];
  selectedUser: SelectedUser;
  changeSelectedUser: Dispatch<SetStateAction<SelectedUser>>;
};

type User = {
  data: UserData;
  selectedUser: SelectedUser;
  changeSelectedUser: Dispatch<SetStateAction<SelectedUser>>;
};

const TableRow: React.FC<User> = ({ data, selectedUser, changeSelectedUser }) => {
  return (
    <tr>
      <td>
        <BaseRadioButton
          isActive={selectedUser?.id === data?.id}
          onClick={() => {
            changeSelectedUser({ id: data?.id, email: data?.email });
          }}
        />
      </td>
      <td>{data?.firstName || "-"}</td>
      <td>{data?.lastName || "-"}</td>
      <td>{data?.email || "-"}</td>
      <td>
        <div>{data?.status ? "Enable" : "Disabled"}</div>
      </td>
    </tr>
  );
};

const ReassignPrincipalUserTable: React.FC<Props> = ({
  data,
  selectedUser,
  changeSelectedUser,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>SELECT</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL ADDRESS</th>
            <th>FIRM STATUS</th>
          </tr>
        </thead>
        <tbody>
          {Boolean(data.length) &&
            data.map((user) => (
              <TableRow
                key={user?.id}
                data={user}
                selectedUser={selectedUser}
                changeSelectedUser={changeSelectedUser}
              />
            ))}
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
export default ReassignPrincipalUserTable;
