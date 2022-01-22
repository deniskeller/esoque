import React, { ReactNode } from 'react';
import styles from './BaseButton.module.scss';

interface Props {
  children: ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  type?: string;
  disabled?: boolean;
  className?: string;
  styles?: string;
}

const BaseButton: React.FC<Props> = ({
  children,
  onClick,
  style,
  type = 'default',
  disabled = false,
  className,
}) => {
  return (
    <div className={` ${className}`}>
      <button
        disabled={disabled}
        style={{ ...style }}
        className={`${styles.Button} ${styles['Button_' + type]}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default BaseButton;
