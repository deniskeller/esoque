import React, { useState } from "react";

import { throttle } from "lodash";
import { debounce } from "lodash";
import { ALL_ICONS } from "@constants/icons";
import { BaseIcon } from "..";
import Calendar from "react-calendar";
// import { convertFormatDate } from "@utils/helpers";

import styles from "./BaseDatePicker.module.scss";
import { dateMask } from "@utils/validateInputs";
import { convertFormatDate } from "@utils/helpers";
import useOnClickOutside from "@hooks/useOnClickOutside";

interface Props {
  label?: string;
  className?: string;
  value: string;
  placeholder?: string;
  error?: string | boolean;
  name: string;
  inputSize?: string;
  required?: boolean;
  autocomplete?: string;
  onChange(value: string): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseDatePicker: React.FC<Props> = ({
  label,
  value,
  error,
  onKeyDown,
  onChange,
  inputSize,
  autocomplete,
  required,
  name,
  placeholder,
  className,
}) => {
  const [isOpen, setOpen] = useState(false);

  const [tempValue, setTempValue] = React.useState("");

  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setOpen(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const debounceOnChange = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      if (
        new Date(convertFormatDate({ date: e.target.value })).toDateString() !== "Invalid Date" &&
        new Date(convertFormatDate({ date: e.target.value })).getTime() <= new Date().getTime() &&
        e.target.value.length === 10
      ) {
        onChange(dateMask(e.target.value));
      } else {
        setTempValue(convertFormatDate({ date: new Date().toLocaleDateString("en-US") }));
        onChange(convertFormatDate({ date: new Date().toLocaleDateString("en-US") }));
      }
    }, 2000),
    []
  );

  return (
    <div className={`${styles.BaseInput} ${className} ${styles["BaseInput_" + inputSize]}`} ref={selectContainerRef}>
      {label ? <label className={styles.Label}>{label}</label> : ""}
      <input
        value={tempValue || value}
        type={"text"}
        className={`${styles.Input} ${styles.Input} ${error ? styles.Error : ""}`}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTempValue(dateMask(e.target.value));
          debounceOnChange(e);
        }}
        onKeyDown={onKeyDown}
      />
      <div className={styles.dateIcon} onClick={() => setOpen((prev) => !prev)}>
        <BaseIcon icon={ALL_ICONS.CALENDAR} viewBox="0 0 45 44" />
      </div>
      {isOpen && (
        <div className={styles.calendar}>
          <Calendar
            maxDate={new Date()}
            defaultValue={new Date()}
            value={
              new Date(convertFormatDate({ date: value })).toDateString() !== "Invalid Date"
                ? new Date(convertFormatDate({ date: value }))
                : new Date(convertFormatDate({ date: new Date().toLocaleDateString("en-US"), noSwap: true }))
            }
            onChange={(value: Date) => {
              setTempValue(convertFormatDate({ date: value.toLocaleDateString("en-US") }));
              onChange(convertFormatDate({ date: value.toLocaleDateString("en-US") }));
            }}
          />
        </div>
      )}

      {error ? <div className={styles.ErrorText}>{error}</div> : ""}
    </div>
  );
};

export default BaseDatePicker;
