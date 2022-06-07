import React from "react";

import styles from "./LabelWrapper.module.scss";

interface Props {
  label?: string;
  className?: string;
  isRequared: boolean;
}

const LabelWrapper: React.FC<Props> = ({ label, className, isRequared, children }): JSX.Element => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <div className={styles.label}>
          {isRequared && <span>*</span>}
          {label}
        </div>
      )}
      <div className={styles.item}>{children}</div>
    </div>
  );
};
export default LabelWrapper;
