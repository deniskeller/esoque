import { BaseInput, BaseSearchSelect } from "@base/index";
import React from "react";
import { codes } from "@utils/codes";
import styles from "./PhoneInput.module.scss";
import SelectInputPhone from "../PhoneSelectInput/PhoneSelectInput";

type IPhoneInput = {
  className?: string;
  value: string;
  errorCode: boolean;
  errorPhone: boolean;
  onChangeCode: (value: string) => void;
  onChangePhone: (value: string) => void;
};

const PhoneInput: React.FC<IPhoneInput> = ({
  className,
  value,
  onChangeCode,
  onChangePhone,
  errorCode,
  errorPhone,
}): JSX.Element => {
  return (
    <div className={`${styles.Wrapper} ${className}`}>
      <div className={styles.SelectInput}>
        <SelectInputPhone
          placeholder="Code"
          error={errorCode}
          onChange={(value) => onChangeCode(value.toString())}
          options={codes}
        />
      </div>

      <BaseInput
        error={errorPhone}
        type="number"
        className={styles.Input}
        value={value}
        onChange={(value) => onChangePhone(value.toString())}
        name="Phone"
        placeholder="Phone Number"
      />
    </div>
  );
};

export default PhoneInput;
