import { BaseIcon } from "@base/index";
import { ALL_ICONS } from "@constants/icons";
import React from "react";
import styles from "./StepBack.module.scss";

interface Props {
  className?: string;
  onClick?: () => void;
}

const StepBack: React.FC<Props> = ({ className, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} ${styles.StepBack}`}>
      <BaseIcon
        icon={ALL_ICONS.BTN_BACK}
        viewBox="0 0 16 15"
        className={styles.StepBackIcon}
      />
      <div className={styles.StepBackTitle}>Back</div>
    </div>
  );
};

export default StepBack;
