import Image from 'next/image';
import React from 'react';
import styles from './JurisdictionCountryItem.module.scss';

interface Props {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const JurisdictionCountryItem: React.FC<Props> = ({
  id,
  title,
  subtitle,
  image,
}) => {
  return (
    <div className={styles.CountryItem}>
      <div className={styles.CountryItemImage}>
        <Image src={`/images/landing/${image}.png`} layout={'fill'} alt={''} />
        <div className={styles.CountryItemTitle}>
          <h1>{title}</h1>
        </div>
      </div>

      <div className={styles.CountryItemDescription}>
        <p>{subtitle}</p>
        <span>
          <p>+</p>
        </span>
      </div>
    </div>
  );
};

export default JurisdictionCountryItem;
