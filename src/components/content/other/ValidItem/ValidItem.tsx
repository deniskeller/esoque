import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './ValidItem.module.scss';

interface Props {
  done: boolean;
  text?: string;
  className?: string;
}

const ValidItem: React.FC<Props> = ({ done = 'false', text, className }) => {
  return (
    <div className={`${styles.ValidItem} ${className}`}>
      {done == true ? (
        <div className={styles.ValidItemIcon}>
          <BaseIcon
            icon={ALL_ICONS.RIGHT}
            viewBox='0 0 32 32'
            className={styles.Icon}
          />
        </div>
      ) : (
        <div className={styles.ValidItemIcon}>
          <BaseIcon
            icon={ALL_ICONS.NOT_RIGHT}
            viewBox='0 0 32 32'
            className={styles.Icon}
          />
        </div>
      )}

      {text && <p className={styles.Text}>{text}</p>}
    </div>
  );
};

export default ValidItem;
