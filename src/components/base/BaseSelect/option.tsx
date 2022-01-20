import React, { ReactNode } from 'react';
import { useSelectContext } from './selectContext';
import styles from './BaseSelect.module.scss';

const Option: React.FC<{
  children: ReactNode | ReactNode[];
  value: string;
}> = ({ children, value }) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <li className={styles.Li} onClick={() => changeSelectedOption(value)}>
      {children}
    </li>
  );
};

export default Option;
