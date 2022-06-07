import React, { ReactNode, useState, useRef } from "react";
import useOnClickOutside from "@hooks/useOnClickOutside";
import styles from "./BaseSelectApp.module.scss";
import { BaseIcon } from "@base/index";
import { ALL_ICONS } from "@constants/icons";

interface Props {
  placeholder?: string;
  style?: object;
  inputSize?: string;
  className?: string;
  error?: string | boolean;
  styles?: string;
  options: ISelectItem[];
  onChange: (value: string) => void;
  selectedValue?: string;
}

interface ISelectItem {
  value: string;
  title: string;
}

const BaseSelectApp: React.FC<Props> = ({
  placeholder,
  style,
  className,
  inputSize,
  options,
  error,
  onChange,
  selectedValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue || "");
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => {
    setIsOpen(false);
  };

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen((prev)=>!prev);

  const onOptionClicked =
    ({ title, value }: ISelectItem) =>
    () => {
      setSelectedOption(title);
      setIsOpen(false);
      onChange(value);
    };

  return (
    <div
      className={`${styles.SelectContainer} ${styles["Select_" + inputSize]} ${className} ${
        error ? styles.SelectError : ""
      } `}
      ref={selectContainerRef}
    >
      <div
        className={`${styles.SelectHeader}  ${isOpen ? styles.SelectHeaderFocus : ""} ${error ? styles.Error : ""}`}
        onClick={toggling}
      >
        <p className={`${selectedOption || selectedValue ? styles.NotEmpty : ""}`}>
          {selectedValue || selectedOption || placeholder}
        </p>
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 16 16"
          className={`${styles.IconArrow} ${styles.IconArrowTop}`}
        />
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 16 16"
          className={`${styles.IconArrow} ${styles.IconArrowBottom}`}
        />
      </div>
      {error ? <div className={styles.ErrorText}>{error}</div> : ""}
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map(({ title, value }: ISelectItem) => (
            <li className={styles.ListItem} onClick={onOptionClicked({ title, value })} key={Math.random()}>
              <span className={styles.ListItemTitle}>{title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelectApp;
