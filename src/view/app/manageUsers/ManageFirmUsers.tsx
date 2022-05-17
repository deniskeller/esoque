import React from "react";

import {
  FilterSelectTable,
  Pagination,
  TitleLine,
  UserManagmentTable,
} from "@content/index";

import styles from "./ManageFirmUsers.module.scss";
import { BaseButton } from "@base/index";
import { getFirmsOptions, getFirmUsersList } from "@api/firmUsers";
import { UserManagmentData } from "types/tables";
import { useRouter } from "next/router";

type Options = {
  title: string;
  value: string;
}[];

type Firm = {
  title: string;
  value: string;
};

const statusOptions: Options = [
  { title: "All", value: "" },
  { title: "Enable", value: "Enable" },
  { title: "Disable", value: "Disable" },
];

const showOptions: Options = [
  { title: "10", value: "10" },
  { title: "20", value: "20" },
  { title: "30", value: "30" },
];

const ManageFirmUsers: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [page, setPage] = React.useState<number>(1);
  const [firmOptions, setFirmOptions] = React.useState<Options>([]);

  const [currentFirm, setCurrentFirm] = React.useState<Firm>({
    title: "",
    value: "",
  });

  console.log(currentFirm, "currentFirm");
  console.log(firmOptions, "firmOptions");
  const [currentStatus, setCurrentStatus] = React.useState<string>("");

  const [show, setShow] = React.useState<string>("10");

  const [tableData, setTableData] = React.useState<UserManagmentData>();

  const onChangeSelectFirm = (value: string) => {
    const curFirm = firmOptions.filter((item) => item.value === value)[0];
    setCurrentFirm(curFirm);
  };
  const onChangeSelectStatus = (value: string) => {
    setCurrentStatus(value);
  };

  const onCreateUser = () => {
    router.push(`manage_users/users_detail/1?firm=${currentFirm.value}`);
  };

  const applyFilters = async () => {
    const dataTable = await getFirmUsersList({
      business: currentFirm.value,
      status: currentStatus,
      limit: +show,
      page,
    });
    if (dataTable?.data?.length) setTableData(dataTable);
  };

  React.useEffect(() => {
    applyFilters();
  }, [page]);

  React.useEffect(() => {
    (async () => {
      const options = await getFirmsOptions({});
      const dataTable = await getFirmUsersList({ business: options[0].value });
      setCurrentFirm(options[0]);
      console.log(dataTable, "dataTable");
      if (options) setFirmOptions(options);
      if (dataTable?.data?.length) setTableData(dataTable);
    })();
    return () => setFirmOptions([]);
  }, []);

  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text="Manage Firm Users" className={styles.titlePage} />
      <FilterSelectTable
        firmOptions={firmOptions}
        statusOptions={statusOptions}
        className={styles.filter}
        showOptions={showOptions}
        show={show}
        countShow={tableData?.count || 1}
        onSelectShow={setShow}
        onSelectFirm={onChangeSelectFirm}
        onSelectStatus={onChangeSelectStatus}
        applyFilters={applyFilters}
      />
      <div className={styles.userName}>
        PRINCIPAL USER: <span>John Andersen</span>
      </div>
      <div className={styles.btnGroup}>
        <BaseButton className={styles.btnGroupCreate} onClick={onCreateUser}>
          Create new user
        </BaseButton>
        <BaseButton className={styles.btnGroupReassign}>
          Reassign Principal User
        </BaseButton>
      </div>

      <UserManagmentTable data={tableData?.data || []} />

      {Boolean(tableData?.data.length) && (
        <div className={styles.pagination}>
          <Pagination
            page={page}
            setPage={setPage}
            limit={tableData?.limit || 1}
            skip={0}
            count={1}
            totalPage={tableData?.totalPage || 1}
          />
        </div>
      )}
    </div>
  );
};
export default ManageFirmUsers;
