import React from "react";

import { BaseSelectApp } from "@base/index";

import styles from "./AppSelect.module.scss";

interface Props {
  inputSize: "VerySmall" | "Small" | "Medium" | "Large";
  label?: string;
  className?: string;
  options: ISelectItem[];
  onChange: (value: string) => void;
  isRequared: boolean;
  placeholder?: string;
  selectedValue?: string;
  error?: boolean;
}

interface ISelectItem {
  value: string;
  title: string;
}

const AppSelect: React.FC<Props> = ({
  inputSize,
  label,
  className,
  options,
  onChange,
  placeholder,
  isRequared,
  selectedValue,
  error,
}): JSX.Element => {
  return (
    <div className={`${styles.btn} ${className}`}>
      {label && (
        <div className={styles.label}>
          {isRequared && <span>*</span>}
          {label}
        </div>
      )}
      <BaseSelectApp
        selectedValue={selectedValue}
        className={styles.select}
        placeholder={placeholder}
        type={inputSize || ""}
        onChange={onChange}
        options={options}
        error={error}
      />
    </div>
  );
};

export default AppSelect;
