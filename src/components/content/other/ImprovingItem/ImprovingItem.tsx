import Image from 'next/image';
import React from 'react';
import styles from './ImprovingItem.module.scss';

interface Props {
  itemList: string[];
  image: string;
}

const ImprovingItem: React.FC<Props> = ({ itemList, image }) => {
  return (
    <div className={styles.ImprovingItem}>
      <div className={styles.ImprovingItemText}>
        <div className={styles.ImprovingItemImage}>
          <Image
            src={`/images/landing/${image}.png`}
            layout={'fill'}
            alt={''}
          />
        </div>
        {itemList &&
          itemList.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      </div>
    </div>
  );
};

export default ImprovingItem;
