import React from "react";

import { BaseInputApp } from "@base/index";

import styles from "./AppInput.module.scss";

interface Props {
  value: string;
  label?: string;
  className?: string;
  onChange: (value: string) => void;
  isRequared: boolean;
  placeholder?: string;
  type: string;
  name: string;
  error?: boolean;
  inputSize: "Small" | "VerySmall" | "Medium" | "Large";
}

const AppInput: React.FC<Props> = ({
  label,
  className,
  onChange,
  placeholder,
  isRequared,
  value,
  type,
  name,
  error,
  inputSize = "default",
}): JSX.Element => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      {label && (
        <div className={styles.label}>
          {isRequared && <span>*</span>}
          {label}
        </div>
      )}
      <BaseInputApp
        inputSize={inputSize}
        error={error}
        type={type}
        value={value}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default AppInput;
