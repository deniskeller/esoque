import React, { ReactNode, useState, useRef } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSelect.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  defaultValue?: string;
  placeholder?: string;
  style?: object;
  type?: string;
  className?: string;
  styles?: string;
  options: any;
}

interface ISelectItem {
  value: string;
  title: string;
}

const options1 = ['Mangoes', 'Apples', 'Oranges'];

const BaseSelect: React.FC<Props> = ({
  defaultValue,
  placeholder,
  style,
  className,
  type = 'default',
  options,
}) => {
  console.log('options: ', options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div
      className={`${styles.SelectContainer} ${
        styles['Select_' + type]
      } ${className}`}
      ref={selectContainerRef}
    >
      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${selectedOption ? styles.NotEmpty : ''}`}
        onClick={toggling}
      >
        {selectedOption || placeholder}
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox='0 0 16 16'
          className={`${styles.IconArrow} ${styles.IconArrowTop}`}
        />
        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox='0 0 16 16'
          className={`${styles.IconArrow} ${styles.IconArrowBottom}`}
        />
      </div>
      {isOpen && (
        <ul className={styles.SelectList}>
          {options1.map((option) => (
            <li
              className={styles.ListItem}
              onClick={onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelect;
