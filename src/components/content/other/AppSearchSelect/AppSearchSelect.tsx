import React from "react";

import { BaseSearchSelectApp } from "@base/index";

import styles from "./AppSearchSelect.module.scss";

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
  code: string;
  title: string;
}

const AppSearchSelect: React.FC<Props> = ({
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
  console.log(selectedValue, "selectedValue");
  return (
    <div className={`${styles.btn} ${className}`}>
      {label && (
        <div className={styles.label}>
          {isRequared && <span>*</span>}
          {label}
        </div>
      )}
      <BaseSearchSelectApp
        error={error}
        className={styles.select}
        placeholder={placeholder}
        type={inputSize || ""}
        onChange={onChange}
        options={options}
        inputSize={inputSize}
        selectedValue={selectedValue}
      />
    </div>
  );
};

export default AppSearchSelect;
