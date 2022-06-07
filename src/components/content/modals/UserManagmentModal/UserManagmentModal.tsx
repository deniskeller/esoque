import React from "react";

import { CoreModal } from "@content/index";
import { BaseButton, BaseTitle, BaseText } from "@base/index";

import styles from "./UserManagmentModal.module.scss";

type IProps = {
  isShowing: boolean;
  option: "save" | "delete";
  onSave: () => void;
  hide: () => void;
  onDeleteUser: () => void;
};

const UserManagmentModal: React.FC<IProps> = ({
  isShowing,
  option,
  hide,
  onSave,
  onDeleteUser,
}) => {
  return (
    <CoreModal isShowing={isShowing} hide={hide}>
      <div className={`${styles.wrapper} ${isShowing ? styles.activeModal : ""}`}>
        <div className={styles.close} onClick={hide}>
          X
        </div>
        <div className={styles.textBlock}>
          <BaseTitle className={styles.title}>
            {option === "save" ? "Good!" : "Are you sure?"}
          </BaseTitle>
          <BaseText className={styles.description}>
            {option === "save" ? " Firm Users" : "This action can not be undone"}
          </BaseText>
        </div>

        <div className={styles.btnGroup}>
          {option === "save" ? (
            <BaseButton className={styles.btnSave} onClick={onSave}>
              Great
            </BaseButton>
          ) : (
            <>
              <BaseButton
                type="success_black"
                className={styles.btnDelete}
                onClick={hide}
              >
                Cancel
              </BaseButton>
              <BaseButton type="pink" className={styles.btnDelete} onClick={onDeleteUser}>
                Delete
              </BaseButton>
            </>
          )}
        </div>
      </div>
    </CoreModal>
  );
};
export default UserManagmentModal;
