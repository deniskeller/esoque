import { ALL_ICONS } from "@constants/icons";
import React, { ReactNode } from "react";
import { BaseIcon } from "..";
import styles from "./BaseSingleCheckboxApp.module.scss";

interface Props {
  id?: string;
  className?: string;
  error?: string | boolean;
  checkboxValue: boolean;
  children?: ReactNode;
  onClick: () => void;
}

const BaseSingleCheckboxApp: React.FC<Props> = ({
  children,
  id = "",
  className,
  error,
  checkboxValue,
  onClick,
}) => {
  // const [isActive, setIsActive] = React.useState<boolean>(checkboxValue);

  return (
    <div className={`${className} ${styles.BaseCheckbox}`} onClick={onClick}>
      <input
        id={id}
        checked={checkboxValue}
        name="name"
        type="checkbox"
        className={styles.BaseCheckboxInput}
        readOnly
      />
      <div
        className={` ${styles.BaseCheckboxCheck} ${
          checkboxValue ? styles.isActive : ""
        } ${error && !checkboxValue ? styles.isError : ""}`}
      >
        <BaseIcon
          icon={ALL_ICONS.CHECKBOX_CHECK}
          viewBox="0 0 17 19"
          className={styles.BaseCheckboxTick}
        />
      </div>
      {children ? <div className={styles.BaseCheckboxTitle}>{children}</div> : null}
    </div>
  );
};

export default BaseSingleCheckboxApp;
