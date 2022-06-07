import React from "react";

import { FilterSelectTable, Pagination, TitleLine, UserManagmentTable } from "@content/index";

import { BaseButton } from "@base/index";
import { getFirmsOptions, getFirmUsersList } from "@api/firmUsers";
import { UserManagmentData } from "types/tables";
import { useRouter } from "next/router";

import styles from "./ManageFirmUsers.module.scss";

type Options = {
  title: string;
  value: string;
}[];

type Firm = {
  title: string;
  value: string;
};

const statusOptions: Options = [
  { title: "All", value: "All" },
  { title: "Enabled", value: "Enabled" },
  { title: "Disabled", value: "Disabled" },
];

const showOptions: Options = [
  { title: "10", value: "10" },
  { title: "20", value: "20" },
  { title: "50", value: "50" },
];

const statusFormat: any = {
  Enabled: true,
  Disabled: false,
};

type IParamsFilter = {
  business: string;
  limit?: number;
  page?: number;
  status?: boolean;
};

const ManageFirmUsers: React.FC = (): JSX.Element => {
  const router = useRouter();

  const [page, setPage] = React.useState<number>(1);
  const [firmOptions, setFirmOptions] = React.useState<Options>([]);
  const [currentFirm, setCurrentFirm] = React.useState<Firm>({ title: "", value: "" });
  const [currentStatus, setCurrentStatus] = React.useState<string>(statusOptions[0].title);
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

  const onReassingUser = () => {
    router.push(`/app/manage_users/reassign_principal_user/${currentFirm.value}`);
  };

  const onChangeShow = async (show: string) => {
    await applyFilters(
      {
        business: currentFirm?.value,
        limit: +show,
        page: 1,
      },
      currentStatus
    );
    setPage(1);
    setShow(show);
  };

  const applyFilters = async (params: IParamsFilter, status: string) => {
    if (status && status !== "All") {
      params.status = statusFormat[currentStatus];
    }

    const dataTable = await getFirmUsersList(params);
    if (dataTable?.data) setTableData(dataTable);
  };

  const resetFilters = async () => {
    setCurrentFirm(firmOptions[0]);
    setCurrentStatus("All");
    setShow("10");

    await applyFilters(
      {
        business: firmOptions[0]?.value,
        limit: 10,
        page: 1,
      },
      "All"
    );
  };

  React.useEffect(() => {
    applyFilters(
      {
        business: currentFirm?.value,
        limit: +show,
        page,
      },
      currentStatus
    );
  }, [page]);

  React.useEffect(() => {
    onChangeShow(show);
  }, [show]);

  React.useEffect(() => {
    (async () => {
      const options = await getFirmsOptions({});
      const dataTable = await getFirmUsersList({ business: options[0].value });
      setCurrentFirm(options[0]);
      if (options) setFirmOptions(options);
      if (dataTable?.data?.length) setTableData(dataTable);
    })();
    return () => setFirmOptions([]);
  }, []);

  return (
    <div className={styles.wrapper}>
      <TitleLine type="dark" text="Manage Firm Users" className={styles.titlePage} />
      <FilterSelectTable
        page={page}
        skip={tableData?.skip || 0}
        className={styles.filter}
        // firm
        firmOptions={firmOptions}
        selectedFirm={currentFirm?.title}
        // status
        statusOptions={statusOptions}
        selectedStatus={currentStatus}
        // show
        showOptions={showOptions}
        show={show}
        countShow={tableData?.count || 1}
        onSelectShow={onChangeShow}
        onSelectFirm={onChangeSelectFirm}
        onSelectStatus={onChangeSelectStatus}
        applyFilters={() =>
          applyFilters(
            {
              business: currentFirm?.value,
              limit: 10,
              page: 1,
            },
            currentStatus
          )
        }
        resetFilters={resetFilters}
      />
      <div className={styles.userName}>
        PRINCIPAL USER: <span>John Andersen</span>
      </div>
      <div className={styles.btnGroup}>
        <BaseButton className={styles.btnGroupCreate} onClick={onCreateUser}>
          Create new user
        </BaseButton>
        <BaseButton className={styles.btnGroupReassign} onClick={onReassingUser}>
          Reassign Principal User
        </BaseButton>
      </div>

      <UserManagmentTable data={tableData?.data || []} />

      {Boolean(tableData?.data.length) && (
        <div className={styles.pagination}>
          <Pagination
            availablePages={tableData?.availablePages!}
            page={page}
            setPage={setPage}
            totalPage={tableData?.totalPage || 1}
          />
        </div>
      )}
    </div>
  );
};
export default ManageFirmUsers;
