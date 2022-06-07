import React from "react";

import { CoreModal } from "@content/index";
import { BaseButton, BaseText, BaseTitle } from "@base/index";

import styles from "./ReassignPrincipalModal.module.scss";

type IProps = {
  isShowing: boolean;
  email: string;
  onReassign: () => void;
  hide: () => void;
};

const ReassignPrincipalModal: React.FC<IProps> = ({
  isShowing,
  email,
  hide,
  onReassign,
}) => {
  return (
    <CoreModal isShowing={isShowing} hide={hide}>
      <div className={`${styles.wrapper} ${isShowing ? styles.activeModal : ""}`}>
        <div className={styles.close} onClick={hide}>
          X
        </div>
        <div className={styles.textBlock}>
          <BaseTitle className={styles.title}>Reassign Principal</BaseTitle>
          <BaseText className={styles.description}>
            Transfer your rights as a Principal to user {email}
          </BaseText>
        </div>

        <div className={styles.btnGroup}>
          <BaseButton type="success_black" className={styles.btnCancel} onClick={hide}>
            Cancel
          </BaseButton>
          <BaseButton type="pink" className={styles.btnReassign} onClick={onReassign}>
            Reassign
          </BaseButton>
        </div>
      </div>
    </CoreModal>
  );
};

export default ReassignPrincipalModal;
