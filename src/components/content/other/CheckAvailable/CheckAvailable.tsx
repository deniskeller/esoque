import React from 'react';
import styles from './CheckAvailable.module.scss';

interface Props {
  title?: string;
}

const CheckAvailable: React.FC<Props> = ({ title = 'Not Available' }) => {
  return (
    <div
      className={`${styles.CheckAvailable} ${
        title == 'Not Available' ? styles.Pink : styles.Green
      }`}
    >
      <p>{title}</p>
    </div>
  );
};

export default CheckAvailable;
