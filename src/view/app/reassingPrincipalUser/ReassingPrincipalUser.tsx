import React from "react";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { EsoqueState } from "@store/store";
import useModal from "@hooks/useModal";

import { BaseButton, BaseText } from "@base/index";
import {
  Pagination,
  ReassignPrincipalUserTable,
  TitleLine,
  ReassignPrincipalModal,
} from "@content/index";

import { getCurrentPrincipal, getFirmUsersList } from "@api/firmUsers";
import { changePrincipal } from "@api/app/manage_users/detailsUser";

import { UserManagmentData } from "@type/tables";

import styles from "./ReassingPrincipalUser.module.scss";

type IChangePrincipal = {
  principial: string;
  business: string;
};

type Principal = {
  id: string;
  title: string;
  jobTitle: string;
  firstName: string;
  lastName: string;
  lastLogged: string;
  email: string;
  password: string;
  countryCode: string;
  telephoneNumber: string;
  dataEntry: boolean;
  submitter: boolean;
  readOnly: boolean;
  status: boolean;
  firm: string;
  canManageUsers: boolean;
};

type SelectedUser = {
  id: string;
  email: string;
};
const ReassingPrincipalUser: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { isShowing, toggle } = useModal();

  const { currentFirm } = useSelector((state: EsoqueState) => state.userDetails);

  const [currentPrincipal, setCurrentPrincipal] = React.useState<Principal>();
  const [tableData, setTableData] = React.useState<UserManagmentData | null>();
  const [page, setPage] = React.useState<number>(1);

  const getTableData = async (page: number) => {
    const dataTable = await getFirmUsersList({ business: currentFirm.value, page });
    if (dataTable?.data?.length) setTableData(dataTable);
  };

  const [selectedUser, setSelectedUser] = React.useState<SelectedUser>({
    id: "",
    email: "",
  });

  const onReassign = async ({ principial, business }: IChangePrincipal) => {
    const res = await changePrincipal({ principial, business });
    if (res) {
      router.back();
    } else {
      alert("Validation failed (uuid  is expected)");
    }
  };

  const onCancel = () => {
    router.back();
  };

  const openModal = () => {
    if (currentPrincipal?.id !== selectedUser?.id) {
      toggle();
    } else {
      router.back();
    }
  };
  React.useEffect(() => {
    if (currentPrincipal?.id) {
      setSelectedUser({ id: currentPrincipal?.id, email: currentPrincipal?.email });
    }
  }, [currentPrincipal]);

  React.useEffect(() => {
    getTableData(page);
  }, [page]);

  React.useEffect(() => {
    (async () => {
      const dataTable = await getFirmUsersList({ business: currentFirm.value });
      const dataPrincipal = await getCurrentPrincipal({ id: currentFirm.value });

      if (dataTable?.data?.length) setTableData(dataTable);
      if (dataPrincipal?.id) setCurrentPrincipal(dataPrincipal);
    })();
    return () => {
      setTableData(null);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <TitleLine
        type="dark"
        text="Reassign Principal User"
        className={styles.titlePage}
      />
      <BaseText className={styles.title}>Current Principal User</BaseText>
      <div className={styles.userInfo}>
        <div className={styles.userInfoRow}>
          <span>Firm</span>
          <span>{currentFirm?.title}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span>First Name</span>
          <span>{currentPrincipal?.firstName || "-"}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span>Last Name</span>
          <span>{currentPrincipal?.lastName || "-"}</span>
        </div>
        <div className={styles.userInfoRow}>
          <span>Email Address</span>
          <span>{currentPrincipal?.email || "-"}</span>
        </div>
      </div>

      <ReassignPrincipalUserTable
        data={tableData?.data || []}
        selectedUser={selectedUser}
        changeSelectedUser={setSelectedUser}
      />

      {Boolean(tableData?.data.length) && (
        <div className={styles.pagination}>
          <Pagination
            page={page}
            setPage={setPage}
            availablePages={tableData?.availablePages!}
            totalPage={tableData?.totalPage || 1}
          />
        </div>
      )}

      <div className={styles.btnGroup}>
        <BaseButton type="default" className={styles.btn} onClick={openModal}>
          Save
        </BaseButton>
        <BaseButton type="success_black" className={styles.btn} onClick={onCancel}>
          Cancel
        </BaseButton>
      </div>

      <ReassignPrincipalModal
        isShowing={isShowing}
        email={selectedUser.email}
        hide={toggle}
        onReassign={() =>
          onReassign({ business: currentFirm.value, principial: selectedUser.id })
        }
      />
    </div>
  );
};
export default ReassingPrincipalUser;
