import { BaseContainer } from '@base/index';
import React from 'react';
import styles from './Empty.module.scss';

const Empty: React.FC = ({ children }) => {
  return <div className={styles.Empty}>{children}</div>;
};

export default Empty;
