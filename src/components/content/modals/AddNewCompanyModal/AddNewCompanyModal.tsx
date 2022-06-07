import React, { useEffect } from "react";

import { CoreModal } from "@content/index";
import { BaseButton, BaseSelectApp, BaseText, BaseTitle } from "@base/index";

import { useRouter } from "next/router";

import styles from "./AddNewCompanyModal.module.scss";

type IProps = {
  isShowing: boolean;
  options: { title: string; value: string }[];
  hide: () => void;
};

const AddNewCompanyModal: React.FC<IProps> = ({ isShowing, options, hide }) => {
  const router = useRouter();

  const [redirectPath, setRedirectPath] = React.useState<string>("");

  const onChangeOptions = (val: string) => {
    val === "existing"
      ? setRedirectPath("/app/company_management/company_details/1")
      : setRedirectPath("/app/documents_and_verification");
  };

  const onNext = (pathname: string) => {
    router.push({ pathname }, undefined, { shallow: true });
  };

  return (
    <CoreModal isShowing={isShowing} hide={hide}>
      <div className={`${styles.wrapper} ${isShowing && styles.activeModal}`}>
        <div className={styles.close} onClick={hide}>
          X
        </div>
        <div className={styles.textBlock}>
          <BaseTitle className={styles.title}>Add New Company</BaseTitle>
          <BaseText className={styles.description}>The form will be saved as a draft</BaseText>
        </div>

        <BaseSelectApp
          className={styles.select}
          inputSize="Medium"
          options={options}
          placeholder={"Select value"}
          onChange={onChangeOptions}
        />

        <div className={styles.btnGroup}>
          <BaseButton type="success_black" className={styles.btnCancel} onClick={hide}>
            Cancel
          </BaseButton>
          <BaseButton
            type="pink"
            className={styles.btnReassign}
            disabled={Boolean(!redirectPath)}
            onClick={() => onNext(redirectPath)}
          >
            Next
          </BaseButton>
        </div>
      </div>
    </CoreModal>
  );
};

export default AddNewCompanyModal;
