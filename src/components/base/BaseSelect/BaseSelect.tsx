import React, { ReactNode, useState, useRef } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { SelectContext, useSelectContext } from './selectContext';
import styles from './BaseSelect.module.scss';
import Option from './option';

interface Props {
  defaultValue?: string;
  placeholder?: string;
  style?: object;
  type?: string;
  className?: string;
  styles?: string;
  optionsValue: any;
}

interface ISelectItem {
  value: string;
  title: string;
}

const BaseSelect: React.FC<Props> = ({
  defaultValue,
  placeholder,
  style,
  className,
  type = 'default',
  optionsValue,
}) => {
  // console.log('optionsValue: ', optionsValue);
  const [selectedOption, setSelectedOption] = useState(defaultValue || '');
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || 'Choose an option';
  const selectContainerRef = useRef(null);
  const { changeSelectedOption } = useSelectContext();

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option: string) => {
    console.log('option: ', option);
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div
        ref={selectContainerRef}
        style={{ ...style }}
        className={`${styles.SelectContainer} ${
          styles['Select_' + type]
        } ${className}`}
      >
        <div
          className={
            showDropdown
              ? `${styles.SelectedText} ${styles.Active}`
              : `${styles.SelectedText}`
          }
          onClick={showDropdownHandler}
        >
          {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
        </div>
        <ul
          className={`${styles.Ul} ${styles.SelectOptions} ${
            showDropdown
              ? styles.ShowDropdownOptions
              : styles.HideDropdownOptions
          } `}
        >
          {optionsValue.map((item: ISelectItem, index: number) => {
            return (
              <Option value={item.value} key={item.value + index}>
                {item.title}
              </Option>
            );
          })}
        </ul>
      </div>
    </SelectContext.Provider>
  );
};

export default BaseSelect;
