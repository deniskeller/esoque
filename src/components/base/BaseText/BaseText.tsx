import React, { ReactNode } from 'react';
import styles from './BaseText.module.scss';

interface Props {
  children: ReactNode;
  style?: object;
  className?: string;
}

const BaseText: React.FC<Props> = ({ children, style, className }) => {
  return (
    <p style={{ ...style }} className={`${styles.Text}  ${className}`}>
      {children}
    </p>
  );
};

export default BaseText;
