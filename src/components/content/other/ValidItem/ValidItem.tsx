import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './ValidItem.module.scss';

interface Props {
  done: string;
  text: string;
}

const ValidItem: React.FC<Props> = ({ done = 'false', text }) => {
  return (
    <div className={styles.ValidItem}>
      {done == 'true' ? (
        <BaseIcon
          icon={ALL_ICONS.RIGHT}
          viewBox='0 0 32 32'
          className={styles.Icon}
        />
      ) : (
        <BaseIcon
          icon={ALL_ICONS.NOT_RIGHT}
          viewBox='0 0 32 32'
          className={styles.Icon}
        />
      )}

      <span className={styles.Text}>{text}</span>
    </div>
  );
};

export default ValidItem;
