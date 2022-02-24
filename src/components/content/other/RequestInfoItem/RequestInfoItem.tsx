import React from 'react';
import styles from './RequestInfoItem.module.scss';

interface Props {
  title?: string;
  success?: string;
  danger?: string;
  info?: string;
  descriptionList?: string[];
}

const RequestInfoItem: React.FC<Props> = ({
  title,
  descriptionList,
  success,
  danger,
  info,
}) => {
  return (
    <div className={styles.RequestInfoItem}>
      <p className={styles.InfoTitle}>?</p>
      <div className={styles.InfoContent}>
        <div className={styles.CountryItemHeader}>
          <div className={styles.CountryItemTitle}>{title}</div>
          <div className={styles.CountryItemBadges}>
            {success && (
              <div className={`${styles.Badge} ${styles.BadgeSuccess}`}>
                {success}
              </div>
            )}

            {danger && (
              <div className={`${styles.Badge} ${styles.BadgeDanger}`}>
                {danger}
              </div>
            )}

            {info && (
              <div className={`${styles.Badge} ${styles.BadgeInfo}`}>
                {info}
              </div>
            )}
          </div>
        </div>

        <ul>
          {descriptionList?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RequestInfoItem;
