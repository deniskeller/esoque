import React from "react";

import { CoreModal } from "@content/index";
import { BaseButton, BaseTitle, BaseText } from "@base/index";

import styles from "./CompanyManagementModal.module.scss";

type IProps = {
  isShowing: boolean;
  onClick: () => void;
  hide: () => void;
};

const CompanyManagementModal: React.FC<IProps> = ({ isShowing, onClick, hide }) => {
  return (
    <CoreModal isShowing={isShowing} hide={hide}>
      <div className={`${styles.wrapper} ${isShowing ? styles.activeModal : ""}`}>
        <div className={styles.close} onClick={hide}>
          X
        </div>
        <div className={styles.textBlock}>
          <BaseTitle className={styles.title}>Good!</BaseTitle>
          <BaseText className={styles.description}>Save Company</BaseText>
        </div>

        <div className={styles.btnGroup}>
          <BaseButton className={styles.btnSave} onClick={onClick}>
            Great
          </BaseButton>
        </div>
      </div>
    </CoreModal>
  );
};
export default CompanyManagementModal;
