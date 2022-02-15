import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseRadioButton.module.scss';

interface Props {
  id?: string;
  className?: string;
  error?: string | boolean;
  value: boolean;
  children?: ReactNode;
  onClick: (value: boolean) => void;
}

const BaseRadioButton: React.FC<Props> = ({
  children,
  id = '',
  className,
  error,
  value,
  onClick,
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(value);

  React.useEffect(() => {
    onClick(isActive);
  }, [isActive]);

  return (
    <div
      className={`${className} ${styles.BaseRadioButton}`}
      onClick={() => setIsActive(!isActive)}
    >
      <input
        id={id}
        checked={isActive}
        name='name'
        type='radio'
        className={styles.BaseRadioButton}
        readOnly
      />
      <div
        className={` ${styles.BaseRadioButtonCheck} ${
          isActive ? styles.isActive : ''
        } ${error && !isActive ? styles.isError : ''}`}
      >
        <div className={styles.BaseRadioButtonTick}></div>
      </div>
      {children ? (
        <div className={styles.BaseRadioButtonTitle}>{children}</div>
      ) : null}
    </div>
  );
};

export default BaseRadioButton;
