import { BaseRadioButton } from '@base/index';
import React from 'react';
import styles from './CompanyItem.module.scss';

interface Props {
  companyName: string;
  companyCode?: number;
  id?: string;
  isActive: boolean;
  onClick: () => void;
}

const CompanyItem: React.FC<Props> = ({
  companyName,
  companyCode,
  id,
  isActive,
  onClick,
}) => {
  return (
    <div className={styles.CompanyItem}>
      <BaseRadioButton
        id={id}
        isActive={isActive}
        onClick={onClick}
        className={styles.CompanyChoice}
      />
      <div className={styles.CompanyName}>
        <p>{companyName}</p>
      </div>
      <div className={styles.CompanyCode}>
        <p>{companyCode}</p>
      </div>
    </div>
  );
};

export default CompanyItem;
